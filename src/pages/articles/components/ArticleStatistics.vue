<script setup lang="ts">
import type { ArticleStatsRequest, ArticleStatsResponse } from "@@/apis/articles/type"
import { getArticleStatsApi } from "@@/apis/articles"
import { usePagination } from "@@/composables/usePagination"
import { BarChart, Document, Reading, Star, View } from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"
import { onMounted, reactive, ref } from "vue"

interface Props {
  modelValue: boolean
}

interface Emits {
  (e: "update:modelValue", value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const dialogVisible = ref(false)
const loading = ref(false)
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()

// 统计数据
const statistics = ref({
  totalArticles: 0,
  publishedArticles: 0,
  draftArticles: 0,
  archivedArticles: 0,
  totalLikes: 0,
  totalComments: 0,
  totalViews: 0,
  avgLikesPerArticle: 0
})

// 搜索数据
const searchData = reactive<Partial<ArticleStatsRequest>>({
  category: "",
  status: undefined,
  keyword: ""
})

// 文章数据
const articleData = ref<ArticleStatsResponse | null>(null)

// 监听 modelValue 变化
watch(
  () => props.modelValue,
  (val) => {
    dialogVisible.value = val
    if (val) {
      getStatistics()
    }
  },
  { immediate: true }
)

// 监听 dialogVisible 变化
watch(dialogVisible, (val) => {
  emit("update:modelValue", val)
})

// 获取统计数据
async function getStatistics() {
  loading.value = true
  try {
    const params: ArticleStatsRequest = {
      page: paginationData.currentPage,
      pageSize: paginationData.page_size,
      ...searchData
    }

    // 清理空参数
    if (params.category === "") delete params.category
    if (params.status === undefined) delete params.status
    if (params.keyword === "") delete params.keyword

    const res = await getArticleStatsApi(params)
    if (res.code === 200) {
      articleData.value = res.data

      // 计算统计数据
      const articles = res.data.articles || []
      statistics.value = {
        totalArticles: articles.length,
        publishedArticles: articles.filter(a => a.status === 'published').length,
        draftArticles: articles.filter(a => a.status === 'draft').length,
        archivedArticles: articles.filter(a => a.status === 'archived').length,
        totalLikes: articles.reduce((sum, a) => sum + (a.likeCount || 0), 0),
        totalComments: articles.reduce((sum, a) => sum + (a.commentCount || 0), 0),
        totalViews: articles.length * 100, // 假设数据
        avgLikesPerArticle: articles.length > 0 ? Math.round(articles.reduce((sum, a) => sum + (a.likeCount || 0), 0) / articles.length * 100) / 100 : 0
      }

      paginationData.total = res.data.total
    } else {
      ElMessage.error(res.errMessage || "获取统计数据失败")
    }
  } catch (error) {
    console.error("获取统计数据失败:", error)
    ElMessage.error("获取统计数据失败")
  } finally {
    loading.value = false
  }
}

// 搜索
function handleSearch() {
  paginationData.currentPage = 1
  getStatistics()
}

// 重置搜索
function resetSearch() {
  Object.assign(searchData, {
    category: "",
    status: undefined,
    keyword: ""
  })
  paginationData.currentPage = 1
  getStatistics()
}

// 格式化日期时间
function formatDateTime(dateTime: string) {
  return new Date(dateTime).toLocaleString("zh-CN")
}

// 监听分页变化
watch(
  [() => paginationData.currentPage, () => paginationData.page_size],
  getStatistics
)

onMounted(() => {
  if (props.modelValue) {
    getStatistics()
  }
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="文章统计分析"
    width="90%"
    :close-on-click-modal="false"
  >
    <div v-loading="loading">
      <!-- 搜索栏 -->
      <el-card shadow="never" class="search-wrapper">
        <el-form :inline="true" :model="searchData">
          <el-form-item prop="keyword" label="关键词">
            <el-input
              v-model="searchData.keyword"
              placeholder="请输入关键词"
              clearable
              @keyup.enter="handleSearch"
            />
          </el-form-item>
          <el-form-item prop="category" label="分类">
            <el-input
              v-model="searchData.category"
              placeholder="请输入分类"
              clearable
            />
          </el-form-item>
          <el-form-item prop="status" label="状态">
            <el-select
              v-model="searchData.status"
              placeholder="请选择状态"
              clearable
              style="width: 120px"
            >
              <el-option label="草稿" value="draft" />
              <el-option label="已发布" value="published" />
              <el-option label="已归档" value="archived" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button @click="resetSearch">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 统计卡片 -->
      <div class="statistics-wrapper">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon total">
                  <el-icon><Document /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">文章总数</div>
                  <div class="statistics-value">{{ statistics.totalArticles }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon published">
                  <el-icon><Reading /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">已发布</div>
                  <div class="statistics-value">{{ statistics.publishedArticles }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon likes">
                  <el-icon><Star /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">总点赞数</div>
                  <div class="statistics-value">{{ statistics.totalLikes }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon comments">
                  <el-icon><BarChart /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">总评论数</div>
                  <div class="statistics-value">{{ statistics.totalComments }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="16" style="margin-top: 16px">
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon draft">
                  <el-icon><Document /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">草稿数</div>
                  <div class="statistics-value">{{ statistics.draftArticles }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon archived">
                  <el-icon><View /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">已归档</div>
                  <div class="statistics-value">{{ statistics.archivedArticles }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon views">
                  <el-icon><View /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">总浏览量</div>
                  <div class="statistics-value">{{ statistics.totalViews }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="statistics-card">
              <div class="statistics-item">
                <div class="statistics-icon avg">
                  <el-icon><Star /></el-icon>
                </div>
                <div class="statistics-content">
                  <div class="statistics-title">平均点赞</div>
                  <div class="statistics-value">{{ statistics.avgLikesPerArticle }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 文章列表 -->
      <el-card shadow="never" style="margin-top: 16px">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span>文章详情列表</span>
            <span v-if="articleData">
              总计: {{ articleData.total }} 篇文章
            </span>
          </div>
        </template>

        <el-table
          v-if="articleData"
          :data="articleData.articles"
          border
          style="width: 100%"
        >
          <el-table-column prop="title" label="标题" min-width="200" />
          <el-table-column prop="category" label="分类" width="100" />
          <el-table-column prop="status" label="状态" width="100" align="center">
            <template #default="scope">
              <el-tag
                :type="scope.row.status === 'published' ? 'success' : scope.row.status === 'draft' ? 'info' : 'warning'"
                size="small"
              >
                {{ scope.row.status === 'published' ? '已发布' : scope.row.status === 'draft' ? '草稿' : '已归档' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="likeCount" label="点赞数" width="100" align="center" />
          <el-table-column prop="commentCount" label="评论数" width="100" align="center" />
          <el-table-column prop="createdAt" label="创建时间" width="180" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.createdAt) }}
            </template>
          </el-table-column>
        </el-table>

        <div class="pager-wrapper" style="margin-top: 16px">
          <el-pagination
            background
            :layout="paginationData.layout"
            :page-sizes="paginationData.pageSizes"
            :total="paginationData.total"
            :page-size="paginationData.page_size"
            :current-page="paginationData.currentPage"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-card>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.statistics-wrapper {
  .statistics-card {
    .statistics-item {
      display: flex;
      align-items: center;

      .statistics-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        color: white;
        font-size: 24px;

        &.total {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        &.published {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        &.draft {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        &.archived {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        &.likes {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }

        &.comments {
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
        }

        &.views {
          background: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%);
        }

        &.avg {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
      }

      .statistics-content {
        flex: 1;

        .statistics-title {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }

        .statistics-value {
          font-size: 28px;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>