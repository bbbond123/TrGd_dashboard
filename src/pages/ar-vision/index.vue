<script setup lang="ts">
import type { VisionHistoryResult } from "@@/apis/vision-history/type"
import { visionAnalyzeApi } from "@@/apis/files"
import {
  Camera,
  Picture,
  Upload,
  View,
  Location,
  Star,
  Document
} from "@element-plus/icons-vue"
import { ElMessage, type UploadFile } from "element-plus"
import { ref } from "vue"

defineOptions({
  name: "ARVision"
})

const loading = ref<boolean>(false)
const uploadedImage = ref<string>("")
const analysisResult = ref<VisionHistoryResult | null>(null)
const uploadInputKey = ref(0)

// 图片上传处理
async function handleImageUpload(file: UploadFile) {
  if (!file.raw) return false

  // 检查文件类型
  const isImage = file.raw.type.startsWith('image/')
  if (!isImage) {
    ElMessage.error('只能上传图片文件！')
    return false
  }

  // 检查文件大小 (10MB)
  const isLt10M = file.raw.size / 1024 / 1024 < 10
  if (!isLt10M) {
    ElMessage.error('图片大小不能超过 10MB！')
    return false
  }

  // 显示上传的图片
  const reader = new FileReader()
  reader.onload = (e) => {
    uploadedImage.value = e.target?.result as string
  }
  reader.readAsDataURL(file.raw)

  // 开始分析
  await analyzeImage(file.raw)

  return false // 阻止自动上传
}

// 分析图片
async function analyzeImage(file: File) {
  loading.value = true
  analysisResult.value = null

  try {
    const res = await visionAnalyzeApi(file)

    if (res.success) {
      analysisResult.value = res.data
      ElMessage.success('图片分析完成！')
    } else {
      ElMessage.error(res.errMessage || '图片分析失败')
    }
  } catch (error) {
    console.error('图片分析失败:', error)
    ElMessage.error('图片分析失败，请重试')
  } finally {
    loading.value = false
  }
}

// 重新上传
function handleReupload() {
  uploadedImage.value = ""
  analysisResult.value = null
  uploadInputKey.value += 1
}

// 格式化日期时间
function formatDateTime(dateTime: string) {
  return new Date(dateTime).toLocaleString("zh-CN")
}

// 获取置信度颜色
function getConfidenceColor(score: number) {
  if (score >= 0.7) return 'success'
  if (score >= 0.5) return 'warning'
  return 'danger'
}

// 获取置信度文本
function getConfidenceText(score: number) {
  if (score >= 0.7) return '高'
  if (score >= 0.5) return '中'
  return '低'
}
</script>

<template>
  <div class="app-container">
    <el-row :gutter="24">
      <!-- 左侧上传区域 -->
      <el-col :span="12">
        <el-card shadow="never" class="upload-card">
          <template #header>
            <div class="card-header">
              <el-icon><Camera /></el-icon>
              <span>AR图片识别</span>
            </div>
          </template>

          <!-- 图片上传 -->
          <div v-if="!uploadedImage" class="upload-area">
            <el-upload
              :key="uploadInputKey"
              drag
              :auto-upload="false"
              :on-change="handleImageUpload"
              :show-file-list="false"
              accept="image/*"
              class="upload-dragger"
            >
              <el-icon class="el-icon--upload" style="font-size: 67px; color: #409eff;">
                <Upload />
              </el-icon>
              <div class="el-upload__text">
                将图片拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip">
                支持 JPG、PNG、GIF 格式，文件大小不超过 10MB
              </div>
            </el-upload>
          </div>

          <!-- 已上传的图片 -->
          <div v-else class="uploaded-image">
            <el-image
              :src="uploadedImage"
              fit="contain"
              style="width: 100%; max-height: 400px;"
              :preview-src-list="[uploadedImage]"
            />
            <div class="image-actions">
              <el-button
                type="primary"
                :icon="Picture"
                @click="handleReupload"
                :loading="loading"
              >
                重新上传
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <!-- 右侧分析结果 -->
      <el-col :span="12">
        <el-card shadow="never" class="result-card" v-loading="loading">
          <template #header>
            <div class="card-header">
              <el-icon><View /></el-icon>
              <span>识别结果</span>
            </div>
          </template>

          <div v-if="!analysisResult && !loading" class="no-result">
            <el-empty description="请先上传图片进行识别" />
          </div>

          <div v-if="analysisResult" class="result-content">
            <!-- 基本信息 -->
            <el-descriptions :column="2" border class="mb-4">
              <el-descriptions-item label="API来源">
                <el-tag>{{ analysisResult.api_source }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="处理时间">
                {{ formatDateTime(analysisResult.processed_at) }}
              </el-descriptions-item>
              <el-descriptions-item label="是否在日本">
                <el-tag :type="analysisResult.is_in_japan ? 'success' : 'info'">
                  {{ analysisResult.is_in_japan ? '是' : '否' }}
                </el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="国家/地区">
                {{ analysisResult.country || '未识别' }}
              </el-descriptions-item>
              <el-descriptions-item label="已保存到数据库">
                <el-tag :type="analysisResult.saved_to_database ? 'success' : 'warning'">
                  {{ analysisResult.saved_to_database ? '是' : '否' }}
                </el-tag>
              </el-descriptions-item>
            </el-descriptions>

            <!-- 地标识别 -->
            <div v-if="analysisResult.has_landmark && analysisResult.landmarks.length" class="landmarks-section">
              <h3><el-icon><Location /></el-icon> 识别的地标</h3>
              <el-row :gutter="12">
                <el-col
                  v-for="landmark in analysisResult.landmarks"
                  :key="landmark.name"
                  :span="24"
                  class="mb-3"
                >
                  <el-card shadow="hover" class="landmark-card">
                    <div class="landmark-content">
                      <div class="landmark-header">
                        <h4>{{ landmark.name }}</h4>
                        <el-tag
                          :type="getConfidenceColor(landmark.score)"
                          class="confidence-tag"
                        >
                          置信度: {{ (landmark.score * 100).toFixed(1) }}% ({{ getConfidenceText(landmark.score) }})
                        </el-tag>
                      </div>

                      <div v-if="landmark.description" class="landmark-description">
                        {{ landmark.description }}
                      </div>

                      <div v-if="landmark.latitude && landmark.longitude" class="landmark-location">
                        <el-icon><Location /></el-icon>
                        坐标: {{ landmark.latitude.toFixed(6) }}, {{ landmark.longitude.toFixed(6) }}
                      </div>

                      <div v-if="landmark.localFacilityId" class="landmark-facility">
                        <el-tag size="small" type="info">设施ID: {{ landmark.localFacilityId }}</el-tag>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <!-- 识别标签 -->
            <div v-if="analysisResult.labels.length" class="labels-section">
              <h3><el-icon><Document /></el-icon> 识别标签</h3>
              <div class="labels-container">
                <el-tag
                  v-for="label in analysisResult.labels"
                  :key="label"
                  class="label-tag"
                  type="info"
                >
                  {{ label }}
                </el-tag>
              </div>
            </div>

            <!-- 文本内容 -->
            <div v-if="analysisResult.text_content" class="text-section">
              <h3><el-icon><Document /></el-icon> 识别的文本</h3>
              <el-card shadow="never" class="text-card">
                <p>{{ analysisResult.text_content }}</p>
              </el-card>
            </div>

            <!-- 推荐列表 -->
            <div v-if="analysisResult.nearby_recommendations.length" class="recommendations-section">
              <h3><el-icon><Star /></el-icon> 附近推荐</h3>
              <el-row :gutter="12">
                <el-col
                  v-for="recommendation in analysisResult.nearby_recommendations"
                  :key="recommendation.name"
                  :span="12"
                  class="mb-3"
                >
                  <el-card shadow="hover" class="recommendation-card">
                    <div class="recommendation-content">
                      <div class="recommendation-header">
                        <h4>{{ recommendation.name }}</h4>
                        <el-tag size="small" type="success">{{ recommendation.type }}</el-tag>
                      </div>

                      <div class="recommendation-details">
                        <div class="distance">
                          <el-icon><Location /></el-icon>
                          距离: {{ recommendation.distance.toFixed(2) }} km
                        </div>

                        <div v-if="recommendation.category" class="category">
                          <el-tag size="small" type="info">{{ recommendation.category }}</el-tag>
                        </div>
                      </div>

                      <div v-if="recommendation.description" class="recommendation-description">
                        {{ recommendation.description }}
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <!-- 错误信息 -->
            <div v-if="analysisResult.error_message" class="error-section">
              <el-alert
                :title="analysisResult.error_message"
                type="error"
                show-icon
                :closable="false"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  padding: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.upload-card {
  height: fit-content;

  .upload-area {
    .upload-dragger {
      width: 100%;

      :deep(.el-upload-dragger) {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;

        &:hover {
          border-color: #409eff;
        }
      }

      .el-upload__text {
        margin-top: 16px;
        font-size: 16px;

        em {
          color: #409eff;
          font-style: normal;
        }
      }

      .el-upload__tip {
        margin-top: 8px;
        color: #999;
        font-size: 12px;
      }
    }
  }

  .uploaded-image {
    text-align: center;

    .image-actions {
      margin-top: 16px;
    }
  }
}

.result-card {
  min-height: 500px;

  .no-result {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }

  .result-content {
    .mb-4 {
      margin-bottom: 24px;
    }

    .mb-3 {
      margin-bottom: 16px;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 20px 0 12px 0;
      font-size: 16px;
      font-weight: 500;
      color: #303133;
    }

    .landmarks-section {
      .landmark-card {
        :deep(.el-card__body) {
          padding: 16px;
        }

        .landmark-content {
          .landmark-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;

            h4 {
              margin: 0;
              font-size: 14px;
              font-weight: 500;
            }

            .confidence-tag {
              font-size: 12px;
            }
          }

          .landmark-description {
            color: #606266;
            font-size: 13px;
            margin-bottom: 8px;
            line-height: 1.4;
          }

          .landmark-location {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #909399;
            font-size: 12px;
            margin-bottom: 8px;
          }

          .landmark-facility {
            margin-top: 8px;
          }
        }
      }
    }

    .labels-section {
      .labels-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .label-tag {
          font-size: 12px;
        }
      }
    }

    .text-section {
      .text-card {
        :deep(.el-card__body) {
          padding: 16px;

          p {
            margin: 0;
            line-height: 1.6;
            color: #606266;
          }
        }
      }
    }

    .recommendations-section {
      .recommendation-card {
        :deep(.el-card__body) {
          padding: 16px;
        }

        .recommendation-content {
          .recommendation-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;

            h4 {
              margin: 0;
              font-size: 14px;
              font-weight: 500;
            }
          }

          .recommendation-details {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 8px;

            .distance {
              display: flex;
              align-items: center;
              gap: 4px;
              color: #909399;
              font-size: 12px;
            }

            .category {
              display: flex;
              gap: 4px;
            }
          }

          .recommendation-description {
            color: #606266;
            font-size: 13px;
            line-height: 1.4;
          }
        }
      }
    }

    .error-section {
      margin-top: 16px;
    }
  }
}
</style>
