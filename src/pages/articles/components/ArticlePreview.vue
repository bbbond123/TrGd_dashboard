<script setup lang="ts">
import type { Article } from "@@/apis/articles/type"
import { getArticleApi } from "@@/apis/articles"
import { formatDateTime } from "@@/utils/datetime"
import { ChatDotRound, Star } from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"

interface Props {
  modelValue: boolean
  articleId: number
}

interface Emits {
  (e: "update:modelValue", value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const dialogVisible = ref(false)
const loading = ref(false)
const article = ref<Article | null>(null)

// 监听 modelValue 变化
watch(
  () => props.modelValue,
  async (val) => {
    dialogVisible.value = val
    if (val && props.articleId) {
      await getArticleDetail()
    }
  },
  { immediate: true }
)

// 监听 dialogVisible 变化
watch(dialogVisible, (val) => {
  emit("update:modelValue", val)
})

// 获取文章详情
async function getArticleDetail() {
  if (!props.articleId) return

  loading.value = true
  try {
    const res = await getArticleApi(props.articleId)
    if (res.success) {
      article.value = res.data
    } else {
      ElMessage.error(res.errMessage || "获取文章详情失败")
    }
  } catch (error) {
    console.error("获取文章详情失败:", error)
    ElMessage.error("获取文章详情失败")
  } finally {
    loading.value = false
  }
}

// 获取状态显示文本
function getStatusText(status?: string) {
  switch (status) {
    case "published": return "已发布"
    case "draft": return "草稿"
    case "archived": return "已归档"
    default: return "未知"
  }
}

// 获取状态标签类型
function getStatusType(status?: string) {
  switch (status) {
    case "published": return "success"
    case "draft": return "info"
    case "archived": return "warning"
    default: return "info"
  }
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="文章预览"
    width="80%"
    :close-on-click-modal="false"
  >
    <div v-loading="loading" class="article-preview">
      <template v-if="article">
        <!-- 文章头部信息 -->
        <div class="article-header">
          <h1 class="article-title">
            {{ article.title }}
          </h1>

          <div class="article-meta">
            <div class="meta-left">
              <el-tag :type="getStatusType(article.status)" size="small">
                {{ getStatusText(article.status) }}
              </el-tag>
              <span v-if="article.category" class="category">
                分类: {{ article.category }}
              </span>
              <span v-if="article.tagIds && article.tagIds.length" class="tags">
                标签: {{ article.tagIds.length }} 个
              </span>
            </div>
            <div class="meta-right">
              <span class="stats">
                <el-icon><Star /></el-icon>
                {{ article.likeCount }} 点赞
              </span>
              <span class="stats">
                <el-icon><ChatDotRound /></el-icon>
                {{ article.commentCount }} 评论
              </span>
            </div>
          </div>

          <div class="article-info">
            <span>创建时间: {{ formatDateTime(article.createdAt) }}</span>
            <span v-if="article.updatedAt !== article.createdAt">
              更新时间: {{ formatDateTime(article.updatedAt) }}
            </span>
          </div>
        </div>

        <!-- 文章封面 -->
        <div v-if="article.imageUrl" class="article-cover">
          <el-image
            :src="article.imageUrl"
            fit="cover"
            class="cover-image"
            :preview-src-list="[article.imageUrl]"
          />
        </div>

        <!-- 文章摘要 -->
        <div v-if="article.summary" class="article-summary">
          <h3>文章摘要</h3>
          <p>{{ article.summary }}</p>
        </div>

        <!-- 文章内容 -->
        <div class="article-content">
          <h3>文章内容</h3>
          <div class="content-body" v-html="article.bodyText || '暂无内容'" />
        </div>

        <!-- 位置信息 -->
        <div v-if="article.latitude && article.longitude" class="article-location">
          <h3>位置信息</h3>
          <div class="location-info">
            <p v-if="article.locationName">
              <strong>地点名称:</strong> {{ article.locationName }}
            </p>
            <p v-if="article.address">
              <strong>详细地址:</strong> {{ article.address }}
            </p>
            <p>
              <strong>坐标:</strong>
              纬度 {{ article.latitude }}, 经度 {{ article.longitude }}
            </p>
            <div class="location-map">
              <el-button type="primary" size="small">
                在地图中查看
              </el-button>
            </div>
          </div>
        </div>

        <!-- 相关图片 -->
        <div v-if="article.articleImage && article.articleImage.length" class="article-images">
          <h3>相关图片</h3>
          <div class="image-gallery">
            <el-image
              v-for="(imageId, index) in article.articleImage"
              :key="imageId"
              :src="`/api/files/${imageId}`"
              fit="cover"
              class="gallery-image"
              :preview-src-list="article.articleImage.map(id => `/api/files/${id}`)"
              :initial-index="index"
            />
          </div>
        </div>
      </template>

      <el-empty v-else-if="!loading" description="暂无文章数据" />
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.article-preview {
  max-height: 70vh;
  overflow-y: auto;
  padding: 0 4px;

  .article-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
    margin-bottom: 20px;

    .article-title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      margin: 0 0 12px 0;
      line-height: 1.4;
    }

    .article-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      .meta-left {
        display: flex;
        align-items: center;
        gap: 12px;

        .category,
        .tags {
          font-size: 14px;
          color: #666;
        }
      }

      .meta-right {
        display: flex;
        gap: 16px;

        .stats {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: #666;
        }
      }
    }

    .article-info {
      display: flex;
      gap: 20px;
      font-size: 13px;
      color: #999;
    }
  }

  .article-cover {
    margin-bottom: 20px;

    .cover-image {
      width: 100%;
      max-height: 300px;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .article-summary {
    margin-bottom: 20px;
    padding: 16px;
    background-color: #f8f9fa;
    border-left: 4px solid #409eff;
    border-radius: 4px;

    h3 {
      margin: 0 0 8px 0;
      font-size: 16px;
      color: #333;
    }

    p {
      margin: 0;
      line-height: 1.6;
      color: #666;
    }
  }

  .article-content {
    margin-bottom: 20px;

    h3 {
      font-size: 18px;
      margin: 0 0 12px 0;
      color: #333;
    }

    .content-body {
      line-height: 1.8;
      color: #333;
      white-space: pre-wrap;
      word-wrap: break-word;

      :deep(p) {
        margin-bottom: 12px;
      }

      :deep(img) {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin: 8px 0;
      }
    }
  }

  .article-location {
    margin-bottom: 20px;
    padding: 16px;
    background-color: #f0f9ff;
    border-radius: 8px;

    h3 {
      font-size: 16px;
      margin: 0 0 12px 0;
      color: #333;
    }

    .location-info {
      p {
        margin: 8px 0;
        color: #666;
      }

      .location-map {
        margin-top: 12px;
      }
    }
  }

  .article-images {
    margin-bottom: 20px;

    h3 {
      font-size: 16px;
      margin: 0 0 12px 0;
      color: #333;
    }

    .image-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 12px;

      .gallery-image {
        width: 100%;
        height: 120px;
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
