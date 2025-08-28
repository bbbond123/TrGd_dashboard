<script setup lang="ts">
import type { EnhancedVisionResult } from "@@/apis/files/type";
import type { UploadFile } from "element-plus";
import { visionAnalyzeApi } from "@@/apis/files";
import {
  Camera,
  Document,
  InfoFilled,
  Link,
  Location,
  Picture,
  Star,
  Upload,
  View,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
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
            <!-- Panel 1: 基础视觉识别结果 -->
            <el-card shadow="never" class="panel-card mb-4">
              <template #header>
                <div class="panel-header">
                  <el-icon><View /></el-icon>
                  <span>基础视觉识别结果</span>
                </div>
              </template>

              <!-- 基础地标识别 -->
              <div
                v-if="analysisResult?.basicVisionResult?.landmarks?.length"
                class="section"
              >
                <h4>
                  <el-icon><Location /></el-icon> 地标识别
                </h4>
                <el-row :gutter="12">
                  <el-col
                    v-for="landmark in analysisResult.basicVisionResult
                      .landmarks"
                    :key="landmark.name"
                    :span="12"
                    class="mb-3"
                  >
                    <el-card shadow="hover" class="landmark-card">
                      <div class="landmark-content">
                        <div class="landmark-header">
                          <h5>{{ landmark.name }}</h5>
                          <el-tag
                            :type="getConfidenceColor(landmark.score)"
                            class="confidence-tag"
                          >
                            置信度: {{ (landmark.score * 100).toFixed(1) }}% ({{
                              getConfidenceText(landmark.score)
                            }})
                          </el-tag>
                        </div>
                        <div
                          v-if="landmark.latitude && landmark.longitude"
                          class="landmark-location"
                        >
                          <el-icon><Location /></el-icon>
                          坐标: {{ landmark.latitude.toFixed(6) }},
                          {{ landmark.longitude.toFixed(6) }}
                        </div>
                        <div
                          v-if="landmark?.description"
                          class="landmark-description"
                        >
                          {{ landmark.description }}
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>

              <!-- 基础识别标签 -->
              <div
                v-if="analysisResult?.basicVisionResult?.labels?.length"
                class="section"
              >
                <h4>
                  <el-icon><Document /></el-icon> 识别标签
                </h4>
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
                v-if="analysisResult?.basicVisionResult?.textContent"
                class="section"
              >
                <h4>
                  <el-icon><Document /></el-icon> 识别的文本
                </h4>
                <el-card shadow="never" class="text-card">
                  <p>{{ analysisResult.basicVisionResult.textContent }}</p>
                </el-card>
              </div>

              <!-- 基础信息 -->
              <div class="section">
                <h4>
                  <el-icon><InfoFilled /></el-icon> 基础信息
                </h4>
                <el-descriptions :column="2" border>
                  <el-descriptions-item label="API来源">
                    <el-tag>
                      {{
                        analysisResult?.basicVisionResult?.apiSource ||
                        "Google Vision API"
                      }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="处理时间">
                    {{
                      analysisResult?.basicVisionResult?.processedAt
                        ? formatDateTime(
                            analysisResult.basicVisionResult.processedAt
                          )
                        : "未知"
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item label="国家">
                    <el-tag
                      v-if="analysisResult.basicVisionResult.country"
                      type="success"
                    >
                      {{ analysisResult.basicVisionResult.country }}
                    </el-tag>
                    <span v-else>未知</span>
                  </el-descriptions-item>
                  <el-descriptions-item label="是否在日本">
                    <el-tag
                      :type="
                        analysisResult.basicVisionResult.isInJapan
                          ? 'success'
                          : 'info'
                      "
                    >
                      {{
                        analysisResult.basicVisionResult.isInJapan ? "是" : "否"
                      }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="包含地标">
                    <el-tag
                      :type="
                        analysisResult.basicVisionResult.hasLandmark
                          ? 'success'
                          : 'info'
                      "
                    >
                      {{
                        analysisResult.basicVisionResult.hasLandmark
                          ? "是"
                          : "否"
                      }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="已保存到数据库">
                    <el-tag
                      :type="
                        analysisResult.basicVisionResult.savedToDatabase
                          ? 'success'
                          : 'warning'
                      "
                    >
                      {{
                        analysisResult.basicVisionResult.savedToDatabase
                          ? "是"
                          : "否"
                      }}
                    </el-tag>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </el-card>

            <!-- Panel 2: 增强地标信息 -->
            <el-card
              v-if="analysisResult.enhancedLandmarks?.length"
              shadow="never"
              class="panel-card mb-4"
            >
              <template #header>
                <div class="panel-header">
                  <el-icon><Star /></el-icon>
                  <span>增强地标信息</span>
                </div>
              </template>

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
                        <h5>
                          <el-icon><Location /></el-icon> 地理信息
                        </h5>
                        <div
                          v-if="landmark.geographicInfo.country"
                          class="info-item"
                        >
                          <el-icon><InfoFilled /></el-icon>
                          <span
                            >国家: {{ landmark.geographicInfo.country }}</span
                          >
                        </div>
                        <div
                          v-if="landmark.geographicInfo.region"
                          class="info-item"
                        >
                          <el-icon><Location /></el-icon>
                          <span
                            >地区: {{ landmark.geographicInfo.region }}</span
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
                      <div v-if="landmark.wikipediaInfo" class="wikipedia-info">
                        <h5>
                          <el-icon><Document /></el-icon> Wikipedia 信息
                        </h5>
                        <div
                          v-if="landmark.wikipediaInfo.title"
                          class="info-item"
                        >
                          <strong>标题:</strong>
                          {{ landmark.wikipediaInfo.title }}
                        </div>
                        <div
                          v-if="landmark.wikipediaInfo.extract"
                          class="wiki-extract"
                        >
                          <strong>摘要:</strong>
                          {{ landmark.wikipediaInfo.extract }}
                        </div>
                        <div
                          v-if="
                            landmark.wikipediaInfo.url ||
                            landmark.wikipediaInfo.pageUrl
                          "
                          class="wiki-link"
                        >
                          <el-button
                            type="primary"
                            size="small"
                            :icon="Link"
                            @click="
                              openWikipediaPage(
                                landmark.wikipediaInfo.url ||
                                  landmark.wikipediaInfo.pageUrl ||
                                  ''
                              )
                            "
                          >
                            查看Wikipedia页面
                          </el-button>
                        </div>
                        <div
                          v-if="landmark.wikipediaInfo.coordinates"
                          class="wiki-coordinates"
                        >
                          <strong>Wikipedia坐标:</strong>
                          {{ landmark.wikipediaInfo.coordinates.lat }},
                          {{ landmark.wikipediaInfo.coordinates.lon }}
                        </div>
                      </div>

                      <!-- Google Places 信息 -->
                      <div v-if="landmark.placesInfo" class="places-info">
                        <h5>
                          <el-icon><Star /></el-icon> Google Places 信息
                        </h5>
                        <div v-if="landmark.placesInfo.name" class="info-item">
                          <strong>名称:</strong> {{ landmark.placesInfo.name }}
                        </div>
                        <div
                          v-if="landmark.placesInfo.formattedAddress"
                          class="info-item"
                        >
                          <strong>地址:</strong>
                          {{ landmark.placesInfo.formattedAddress }}
                        </div>
                        <div
                          v-if="landmark.placesInfo.rating"
                          class="info-item"
                        >
                          <strong>评分:</strong>
                          {{ landmark.placesInfo.rating }}/5
                          <span v-if="landmark.placesInfo.userRatingsTotal">
                            ({{ landmark.placesInfo.userRatingsTotal }} 条评价)
                          </span>
                        </div>
                        <div
                          v-if="landmark.placesInfo.types?.length"
                          class="info-item"
                        >
                          <strong>类型:</strong>
                          <el-tag
                            v-for="type in landmark.placesInfo.types"
                            :key="type"
                            size="small"
                            class="ml-1"
                          >
                            {{ type }}
                          </el-tag>
                        </div>
                      </div>

                      <!-- 相关图片 -->
                      <div
                        v-if="landmark.relatedImages?.length"
                        class="related-images"
                      >
                        <h5>
                          <el-icon><Picture /></el-icon> 相关图片 ({{
                            landmark.relatedImages.length
                          }}张)
                        </h5>
                        <div class="image-gallery">
                          <el-image
                            v-for="(image, index) in landmark.relatedImages"
                            :key="index"
                            :src="image.imageUrl || image.url"
                            :preview-src-list="
                              landmark.relatedImages.map(
                                (img) => img.imageUrl || img.url
                              )
                            "
                            class="gallery-image"
                            fit="cover"
                          >
                            <template #error>
                              <div class="image-error">加载失败</div>
                            </template>
                          </el-image>
                        </div>
                        <div class="image-details">
                          <div
                            v-for="(image, index) in landmark.relatedImages"
                            :key="index"
                            class="image-detail"
                          >
                            <div class="image-info">
                              <span class="image-title">{{ image.title }}</span>
                              <el-tag
                                size="small"
                                :type="
                                  image.source === 'wikipedia'
                                    ? 'primary'
                                    : 'success'
                                "
                              >
                                {{
                                  image.source === "wikipedia"
                                    ? "Wikipedia"
                                    : "Google Places"
                                }}
                              </el-tag>
                            </div>
                            <div class="image-description">
                              {{ image.description }}
                            </div>
                            <div class="image-size">
                              {{ image.width }} × {{ image.height }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>

            <!-- Panel 3: 附近推荐 -->
            <el-card
              v-if="analysisResult.nearbyRecommendations?.length"
              shadow="never"
              class="panel-card mb-4"
            >
              <template #header>
                <div class="panel-header">
                  <el-icon><Location /></el-icon>
                  <span
                    >附近推荐 ({{
                      analysisResult.nearbyRecommendations.length
                    }}个)</span
                  >
                </div>
              </template>

              <el-row
                :gutter="12"
                v-if="analysisResult?.nearbyRecommendations?.length > 0"
              >
                <el-col
                  v-for="recommendation in analysisResult?.nearbyRecommendations"
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
                        <el-tag
                          v-if="recommendation.type"
                          size="small"
                          type="info"
                        >
                          {{ recommendation.type }}
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
                          <span v-if="recommendation.placesReviews">
                            ({{ recommendation.placesReviews }} 条评价)
                          </span>
                        </div>
                        <div
                          v-if="recommendation.recommendationScore"
                          class="recommendation-score"
                        >
                          <el-icon><Star /></el-icon>
                          推荐度:
                          {{ recommendation.recommendationScore.toFixed(2) }}
                        </div>
                      </div>

                      <div
                        v-if="recommendation.description"
                        class="recommendation-description"
                      >
                        {{ recommendation.description }}
                      </div>

                      <!-- 评分因子 -->
                      <div
                        v-if="recommendation.scoreFactors"
                        class="score-factors"
                      >
                        <h6>评分因子:</h6>
                        <div class="factor-grid">
                          <div class="factor-item">
                            <span>距离:</span>
                            <el-tag size="small">
                              {{ recommendation.scoreFactors.distanceScore }}
                            </el-tag>
                          </div>
                          <div class="factor-item">
                            <span>热度:</span>
                            <el-tag size="small">
                              {{
                                recommendation.scoreFactors.popularityScore?.toFixed(
                                  1
                                )
                              }}
                            </el-tag>
                          </div>
                          <div class="factor-item">
                            <span>评分:</span>
                            <el-tag size="small">
                              {{ recommendation.scoreFactors.ratingScore }}
                            </el-tag>
                          </div>
                          <div class="factor-item">
                            <span>相关性:</span>
                            <el-tag size="small">
                              {{ recommendation.scoreFactors.relevanceScore }}
                            </el-tag>
                          </div>
                        </div>
                      </div>

                      <!-- 推荐项目的图片 -->
                      <div
                        v-if="recommendation.images?.length"
                        class="recommendation-images"
                      >
                        <h6>图片 ({{ recommendation.images.length }}张):</h6>
                        <div class="image-gallery">
                          <el-image
                            v-for="(image, index) in recommendation?.images"
                            :key="index"
                            :src="image.imageUrl || image.url"
                            :preview-src-list="
                              recommendation.images.map(
                                (img) => img.imageUrl || img.url
                              )
                            "
                            class="gallery-image small"
                            fit="cover"
                          >
                            <template #error>
                              <div class="image-error">加载失败</div>
                            </template>
                          </el-image>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>

            <!-- Panel 4: 处理状态 -->
            <el-card shadow="never" class="panel-card mb-4">
              <template #header>
                <div class="panel-header">
                  <el-icon><InfoFilled /></el-icon>
                  <span>处理状态</span>
                </div>
              </template>

              <el-descriptions :column="2" border>
                <el-descriptions-item label="Google Vision API">
                  <el-tag
                    :type="
                      analysisResult?.processingStatus.googleVisionSuccess
                        ? 'success'
                        : 'danger'
                    "
                  >
                    {{
                      analysisResult.processingStatus.googleVisionSuccess
                        ? "成功"
                        : "失败"
                    }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="Google Places API">
                  <el-tag
                    :type="
                      analysisResult.processingStatus.googlePlacesSuccess
                        ? 'success'
                        : 'danger'
                    "
                  >
                    {{
                      analysisResult.processingStatus.googlePlacesSuccess
                        ? "成功"
                        : "失败"
                    }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="Wikipedia API">
                  <el-tag
                    :type="
                      analysisResult.processingStatus.wikipediaSuccess
                        ? 'success'
                        : 'danger'
                    "
                  >
                    {{
                      analysisResult.processingStatus.wikipediaSuccess
                        ? "成功"
                        : "失败"
                    }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="本地数据库">
                  <el-tag
                    :type="
                      analysisResult.processingStatus.localDatabaseSuccess
                        ? 'success'
                        : 'danger'
                    "
                  >
                    {{
                      analysisResult.processingStatus.localDatabaseSuccess
                        ? "成功"
                        : "失败"
                    }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="总处理时间">
                  <el-tag>
                    {{ analysisResult.processingStatus.processingTime }}
                    秒
                  </el-tag>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>

            <!-- Panel 5: 元数据信息 -->
            <el-card shadow="never" class="panel-card mb-4">
              <template #header>
                <div class="panel-header">
                  <el-icon><Document /></el-icon>
                  <span>元数据信息</span>
                </div>
              </template>

              <el-descriptions :column="2" border>
                <el-descriptions-item label="API版本">
                  <el-tag>
                    {{ analysisResult.metadata.apiVersion || "v1" }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="处理时间">
                  {{ formatDateTime(analysisResult.metadata.processedAt) }}
                </el-descriptions-item>
                <el-descriptions-item label="语言">
                  <el-tag>
                    {{ analysisResult.metadata.language || "zh" }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="用户ID">
                  <el-tag>{{ analysisResult.metadata.userId || "N/A" }}</el-tag>
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
                <el-descriptions-item label="使用缓存">
                  <el-tag
                    :type="
                      analysisResult.metadata.cacheUsed ? 'success' : 'info'
                    "
                  >
                    {{ analysisResult.metadata.cacheUsed ? "是" : "否" }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="识别地标总数">
                  <el-tag>
                    {{ analysisResult.metadata.totalLandmarks || 0 }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="增强地标数">
                  <el-tag>
                    {{ analysisResult.metadata.enhancedCount || 0 }}
                  </el-tag>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
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

    .ml-1 {
      margin-left: 4px;
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

    h4 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 16px 0 10px 0;
      font-size: 15px;
      font-weight: 500;
      color: #409eff;
    }

    h5 {
      display: flex;
      align-items: center;
      gap: 6px;
      margin: 12px 0 8px 0;
      font-size: 14px;
      font-weight: 500;
      color: #409eff;
    }

    h6 {
      margin: 8px 0 6px 0;
      font-size: 13px;
      font-weight: 500;
      color: #606266;
    }

    .panel-card {
      border-radius: 8px;

      .panel-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-size: 16px;
        color: #303133;
      }

      .section {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

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

          h4,
          h5 {
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
            margin: 8px 0;
          }

          .wiki-link,
          .places-link {
            margin-top: 8px;
          }

          .wiki-coordinates {
            margin-top: 8px;
            font-size: 12px;
            color: #909399;
          }
        }

        .landmark-location {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #909399;
          font-size: 12px;
          margin: 8px 0;
        }

        .landmark-description {
          color: #606266;
          font-size: 13px;
          margin: 8px 0;
        }

        .related-images {
          margin-top: 12px;

          .image-gallery {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 12px;

            .gallery-image {
              width: 120px;
              height: 90px;
              border-radius: 6px;
              overflow: hidden;
              cursor: pointer;

              .image-error {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                background: #f5f7fa;
                color: #909399;
                font-size: 12px;
              }
            }
          }

          .image-details {
            .image-detail {
              margin-bottom: 8px;
              padding: 8px;
              background: #f8f9fa;
              border-radius: 4px;
              font-size: 12px;

              .image-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 4px;

                .image-title {
                  font-weight: 500;
                  color: #303133;
                }
              }

              .image-description {
                color: #606266;
                margin-bottom: 4px;
              }

              .image-size {
                color: #909399;
              }
            }
          }
        }
      }
    }

    .labels-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .label-tag {
        font-size: 12px;
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
          flex-wrap: wrap;
          gap: 8px;

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
          .rating,
          .recommendation-score {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #909399;
            font-size: 12px;
          }
        }

        .recommendation-description {
          color: #606266;
          font-size: 13px;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .score-factors {
          margin: 12px 0;
          padding: 8px;
          background: #f8f9fa;
          border-radius: 4px;

          .factor-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            margin-top: 6px;

            .factor-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 12px;

              span {
                color: #606266;
              }
            }
          }
        }

        .recommendation-images {
          margin-top: 8px;

          .image-gallery {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;

            .gallery-image.small {
              width: 80px;
              height: 60px;
              border-radius: 4px;
              overflow: hidden;
              cursor: pointer;

              .image-error {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                background: #f5f7fa;
                color: #909399;
                font-size: 10px;
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
