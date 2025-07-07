<script setup lang="ts">
import type { EnhancedVisionResult } from "@@/apis/files/type";
import { visionAnalyzeApi } from "@@/apis/files";
import {
  Camera,
  Picture,
  Upload,
  View,
  Location,
  Star,
  Document,
  Link,
  Warning,
  InfoFilled,
} from "@element-plus/icons-vue";
import { ElMessage, type UploadFile } from "element-plus";
import { ref } from "vue";

defineOptions({
  name: "ARVision",
});

const loading = ref<boolean>(false);
const uploadedImage = ref<string>("");
const analysisResult = ref<EnhancedVisionResult | null>(null);
const uploadInputKey = ref(0);

// 图片上传处理
async function handleImageUpload(file: UploadFile) {
  if (!file.raw) return false;

  // 检查文件类型
  const isImage = file.raw.type.startsWith("image/");
  if (!isImage) {
    ElMessage.error("只能上传图片文件！");
    return false;
  }

  // 检查文件大小 (10MB)
  const isLt10M = file.raw.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    ElMessage.error("图片大小不能超过 10MB！");
    return false;
  }

  // 显示上传的图片
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage.value = e.target?.result as string;
  };
  reader.readAsDataURL(file.raw);

  // 开始分析
  await analyzeImage(file.raw);

  return false; // 阻止自动上传
}

// 分析图片
async function analyzeImage(file: File) {
  loading.value = true;
  analysisResult.value = null;

  try {
    const res = await visionAnalyzeApi(file, {
      enablePlaces: true,
      enableWikipedia: true,
      enableCache: true,
    });

    if (res.code === 200) {
      analysisResult.value = res.data;
      ElMessage.success("图片分析完成！");
    } else {
      ElMessage.error(res.errMessage || "图片分析失败");
    }
  } catch (error) {
    console.error("图片分析失败:", error);
    ElMessage.error("图片分析失败，请重试");
  } finally {
    loading.value = false;
  }
}

// 重新上传
function handleReupload() {
  uploadedImage.value = "";
  analysisResult.value = null;
  uploadInputKey.value += 1;
}

// 格式化日期时间
function formatDateTime(dateTime: string) {
  return new Date(dateTime).toLocaleString("zh-CN");
}

// 获取置信度颜色
function getConfidenceColor(score: number) {
  if (score >= 0.7) return "success";
  if (score >= 0.5) return "warning";
  return "danger";
}

// 获取置信度文本
function getConfidenceText(score: number) {
  if (score >= 0.7) return "高";
  if (score >= 0.5) return "中";
  return "低";
}

function openWikipediaPage(pageUrl: string) {
  window.open(pageUrl, "_blank");
}

function openWebsite(website: string) {
   window.open(website, '_blank')
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
              <el-icon
                class="el-icon--upload"
                style="font-size: 67px; color: #409eff"
              >
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
              style="width: 100%; max-height: 400px"
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
            <!-- 处理状态 -->
            <div v-if="!analysisResult.processingStatus.success" class="mb-4">
              <el-alert
                :title="
                  analysisResult.processingStatus.errorMessage || '处理失败'
                "
                type="error"
                show-icon
                :closable="false"
              />
            </div>

            <!-- 警告信息 -->
            <div
              v-if="analysisResult.processingStatus.warnings?.length"
              class="mb-4"
            >
              <el-alert
                v-for="warning in analysisResult.processingStatus.warnings"
                :key="warning"
                :title="warning"
                type="warning"
                show-icon
                :closable="false"
                class="mb-2"
              />
            </div>

            <!-- 基本信息 -->
            <el-descriptions :column="2" border class="mb-4">
              <el-descriptions-item label="API版本">
                <el-tag>{{
                  analysisResult.metadata.apiVersion || "v1"
                }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="处理时间">
                {{ formatDateTime(analysisResult.metadata.processedAt) }}
              </el-descriptions-item>
              <el-descriptions-item label="识别地标数">
                {{ analysisResult.metadata.totalLandmarks || 0 }}
              </el-descriptions-item>
              <el-descriptions-item label="增强地标数">
                {{ analysisResult.metadata.enhancedCount || 0 }}
              </el-descriptions-item>
              <el-descriptions-item label="使用缓存">
                <el-tag
                  :type="analysisResult.metadata.cacheUsed ? 'success' : 'info'"
                >
                  {{ analysisResult.metadata.cacheUsed ? "是" : "否" }}
                </el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="已保存到数据库">
                <el-tag
                  :type="
                    analysisResult.metadata.savedToDatabase
                      ? 'success'
                      : 'warning'
                  "
                >
                  {{ analysisResult.metadata.savedToDatabase ? "是" : "否" }}
                </el-tag>
              </el-descriptions-item>
            </el-descriptions>

            <!-- 增强地标识别 -->
            <div
              v-if="analysisResult.enhancedLandmarks?.length"
              class="landmarks-section"
            >
              <h3>
                <el-icon><Location /></el-icon> 增强地标识别结果
              </h3>
              <el-row :gutter="12">
                <el-col
                  v-for="landmark in analysisResult.enhancedLandmarks"
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
                          置信度: {{ (landmark.score * 100).toFixed(1) }}% ({{
                            getConfidenceText(landmark.score)
                          }})
                        </el-tag>
                      </div>

                      <!-- 地理信息 -->
                      <div
                        v-if="landmark.geographicInfo"
                        class="geographic-info"
                      >
                        <div
                          v-if="landmark.geographicInfo.country"
                          class="info-item"
                        >
                          <el-icon><InfoFilled /></el-icon>
                          <span
                            >国家: {{ landmark.geographicInfo.country }}</span
                          >
                          <el-tag
                            v-if="landmark.geographicInfo.isInJapan"
                            type="success"
                            size="small"
                            >日本</el-tag
                          >
                        </div>
                        <div
                          v-if="landmark.geographicInfo.city"
                          class="info-item"
                        >
                          <el-icon><Location /></el-icon>
                          <span>城市: {{ landmark.geographicInfo.city }}</span>
                        </div>
                      </div>

                      <!-- 坐标信息 -->
                      <div
                        v-if="landmark.latitude && landmark.longitude"
                        class="landmark-location"
                      >
                        <el-icon><Location /></el-icon>
                        坐标: {{ landmark.latitude.toFixed(6) }},
                        {{ landmark.longitude.toFixed(6) }}
                      </div>

                      <!-- Wikipedia 信息 -->
                      <div
                        v-if="landmark.wikipediaInfo?.extract"
                        class="wikipedia-info"
                      >
                        <h5>
                          <el-icon><Document /></el-icon> Wikipedia 信息
                        </h5>
                        <p class="wiki-extract">
                          {{ landmark.wikipediaInfo.extract }}
                        </p>
                        <div
                          v-if="landmark.wikipediaInfo.pageUrl"
                          class="wiki-link"
                        >
                          <el-button
                            type="primary"
                            size="small"
                            :icon="Link"
                            @click="
                              openWikipediaPage(landmark.wikipediaInfo.pageUrl)
                            "
                          >
                            查看Wikipedia页面
                          </el-button>
                        </div>
                      </div>

                      <!-- Google Places 信息 -->
                      <div v-if="landmark.placesInfo" class="places-info">
                        <h5>
                          <el-icon><Star /></el-icon> Google Places 信息
                        </h5>
                        <div
                          v-if="landmark.placesInfo.address"
                          class="info-item"
                        >
                          <span>地址: {{ landmark.placesInfo.address }}</span>
                        </div>
                        <div
                          v-if="landmark.placesInfo.rating"
                          class="info-item"
                        >
                          <span>评分: {{ landmark.placesInfo.rating }}/5</span>
                          <span v-if="landmark.placesInfo.userRatingsTotal"
                            >({{
                              landmark.placesInfo.userRatingsTotal
                            }}
                            条评价)</span
                          >
                        </div>
                        <div
                          v-if="landmark.placesInfo.phoneNumber"
                          class="info-item"
                        >
                          <span
                            >电话: {{ landmark.placesInfo.phoneNumber }}</span
                          >
                        </div>
                        <div
                          v-if="landmark.placesInfo.website"
                          class="info-item"
                        >
                          <el-button
                            type="primary"
                            size="small"
                            :icon="Link"
                            @click="openWebsite(landmark.placesInfo.website)"
                          >
                            访问网站
                          </el-button>
                        </div>
                      </div>

                      <!-- 本地设施信息 -->
                      <div
                        v-if="landmark.localInfo?.facilityId"
                        class="local-info"
                      >
                        <el-tag size="small" type="info"
                          >本地设施ID:
                          {{ landmark.localInfo.facilityId }}</el-tag
                        >
                        <span
                          v-if="landmark.localInfo.description"
                          class="local-desc"
                        >
                          {{ landmark.localInfo.description }}
                        </span>
                      </div>

                      <!-- 相关图片 -->
                      <div
                        v-if="landmark.relatedImages?.length"
                        class="related-images"
                      >
                        <h5>相关图片</h5>
                        <div class="image-gallery">
                          <el-image
                            v-for="(
                              image, index
                            ) in landmark.relatedImages.slice(0, 3)"
                            :key="index"
                            :src="image.url"
                            :preview-src-list="
                              landmark.relatedImages.map((img) => img.url)
                            "
                            class="gallery-image"
                            fit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <!-- 基础识别标签 -->
            <div
              v-if="analysisResult.basicVisionResult?.labels?.length"
              class="labels-section"
            >
              <h3>
                <el-icon><Document /></el-icon> 基础识别标签
              </h3>
              <div class="labels-container">
                <el-tag
                  v-for="label in analysisResult.basicVisionResult.labels"
                  :key="label"
                  class="label-tag"
                  type="info"
                >
                  {{ label }}
                </el-tag>
              </div>
            </div>

            <!-- 文本内容 -->
            <div
              v-if="analysisResult.basicVisionResult?.textContent"
              class="text-section"
            >
              <h3>
                <el-icon><Document /></el-icon> 识别的文本
              </h3>
              <el-card shadow="never" class="text-card">
                <p>{{ analysisResult.basicVisionResult.textContent }}</p>
              </el-card>
            </div>

            <!-- 增强推荐列表 -->
            <div
              v-if="analysisResult.nearbyRecommendations?.length"
              class="recommendations-section"
            >
              <h3>
                <el-icon><Star /></el-icon> 附近推荐
              </h3>
              <el-row :gutter="12">
                <el-col
                  v-for="recommendation in analysisResult.nearbyRecommendations"
                  :key="recommendation.name"
                  :span="12"
                  class="mb-3"
                >
                  <el-card shadow="hover" class="recommendation-card">
                    <div class="recommendation-content">
                      <div class="recommendation-header">
                        <h4>{{ recommendation.name }}</h4>
                        <el-tag
                          v-if="recommendation.category"
                          size="small"
                          type="success"
                        >
                          {{ recommendation.category }}
                        </el-tag>
                      </div>

                      <div class="recommendation-details">
                        <div v-if="recommendation.distance" class="distance">
                          <el-icon><Location /></el-icon>
                          距离:
                          {{ (recommendation.distance / 1000).toFixed(2) }} km
                        </div>

                        <div v-if="recommendation.placesRating" class="rating">
                          <el-icon><Star /></el-icon>
                          评分: {{ recommendation.placesRating }}/5
                        </div>
                      </div>

                      <div
                        v-if="recommendation.description"
                        class="recommendation-description"
                      >
                        {{ recommendation.description }}
                      </div>

                      <!-- 推荐项目的图片 -->
                      <div
                        v-if="recommendation.images?.length"
                        class="recommendation-images"
                      >
                        <div class="image-gallery">
                          <el-image
                            v-for="(
                              image, index
                            ) in recommendation.images.slice(0, 2)"
                            :key="index"
                            :src="image.url"
                            :preview-src-list="
                              recommendation.images.map((img) => img.url)
                            "
                            class="gallery-image small"
                            fit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
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
            margin-bottom: 12px;

            h4 {
              margin: 0;
              font-size: 16px;
              font-weight: 500;
              color: #303133;
            }

            .confidence-tag {
              font-size: 12px;
            }
          }

          .geographic-info,
          .wikipedia-info,
          .places-info,
          .local-info {
            margin: 12px 0;
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;

            &:last-child {
              border-bottom: none;
            }

            h5 {
              margin: 0 0 8px 0;
              font-size: 14px;
              font-weight: 500;
              color: #409eff;
              display: flex;
              align-items: center;
              gap: 6px;
            }

            .info-item {
              display: flex;
              align-items: center;
              gap: 6px;
              margin-bottom: 6px;
              font-size: 13px;
              color: #606266;
            }

            .wiki-extract {
              color: #606266;
              font-size: 13px;
              line-height: 1.5;
              margin-bottom: 8px;
              max-height: 100px;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .wiki-link,
            .places-link {
              margin-top: 8px;
            }

            .local-desc {
              margin-left: 8px;
              color: #606266;
              font-size: 12px;
            }
          }

          .landmark-location {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #909399;
            font-size: 12px;
            margin-bottom: 8px;
          }

          .related-images {
            margin-top: 12px;

            h5 {
              margin: 0 0 8px 0;
              font-size: 14px;
              font-weight: 500;
            }

            .image-gallery {
              display: flex;
              gap: 8px;
              flex-wrap: wrap;

              .gallery-image {
                width: 80px;
                height: 80px;
                border-radius: 4px;
                overflow: hidden;

                &.small {
                  width: 60px;
                  height: 60px;
                }
              }
            }
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
            gap: 6px;
            margin-bottom: 8px;

            .distance,
            .rating {
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
            margin-bottom: 8px;
          }

          .recommendation-images {
            margin-top: 8px;

            .image-gallery {
              display: flex;
              gap: 6px;

              .gallery-image.small {
                width: 50px;
                height: 50px;
                border-radius: 4px;
                overflow: hidden;
              }
            }
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
