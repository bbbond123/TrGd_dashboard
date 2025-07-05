<script setup lang="ts">
import type { Article, ArticleListRequest } from "@@/apis/articles/type"
import { deleteArticleApi, getArticleListApi } from "@@/apis/articles"
import { usePagination } from "@@/composables/usePagination"
import {
  Delete,
  Plus,
  Refresh,
  RefreshRight,
  Search
} from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"
import { reactive, ref, watch } from "vue"
import ArticleComments from "./components/ArticleComments.vue"
import ArticleDetail from "./components/ArticleDetail.vue"
import ArticleEdit from "./components/ArticleEdit.vue"
import ArticlePreview from "./components/ArticlePreview.vue"
import ArticleStatistics from "./components/ArticleStatistics.vue"
import TagManager from "./components/TagManager.vue"

defineOptions({
  name: "Articles"
})

const loading = ref<boolean>(false)
const { paginationData, handleCurrentChange, handleSizeChange }
  = usePagination()

// 搜索数据
const searchData = reactive<Partial<ArticleListRequest>>({
  title: "",
  category: "",
  status: undefined,
  locationName: "",
  bodyText: ""
})

// 表格数据
const tableData = ref<Article[]>([])
const selectedArticles = ref<Article[]>([])

// 弹窗控制
const detailVisible = ref(false)
const editVisible = ref(false)
const commentsVisible = ref(false)
const previewVisible = ref(false)
const statisticsVisible = ref(false)
const tagManagerVisible = ref(false)
const currentArticleId = ref<number>(0)
const currentArticleTitle = ref("")

// 获取表格数据
async function getTableData() {
  loading.value = true
  try {
    const params: ArticleListRequest = {
      page: paginationData.currentPage,
      pageSize: paginationData.page_size,
      ...searchData
    }

    if (params.title === "") {
      delete params.title
    }
    if (params.category === "") {
      delete params.category
    }
    if (params.locationName === "") {
      delete params.locationName
    }
    if (params.bodyText === "") {
      delete params.bodyText
    }
    if (params.status === undefined) {
      delete params.status
    }

    const res = await getArticleListApi(params)

    if (res.code === 200) {
      console.log("🚀 ~ getTableData ~ res:", res)
      tableData.value = res.data
      paginationData.total = res.total
    } else {
      ElMessage.error(res.errMessage)
    }
  } catch (error) {
    console.error("获取文章列表失败:", error)
    ElMessage.error("获取文章列表失败")
  } finally {
    loading.value = false
  }
}

// 搜索
function handleSearch() {
  paginationData.currentPage = 1
  getTableData()
}

// 重置搜索
function resetSearch() {
  Object.assign(searchData, {
    title: "",
    category: "",
    status: undefined,
    locationName: "",
    bodyText: ""
  })
  paginationData.currentPage = 1
  getTableData()
}

// 表格选择
function handleSelectionChange(selection: Article[]) {
  selectedArticles.value = selection
}

// 新增文章
function handleCreate() {
  currentArticleId.value = 0
  editVisible.value = true
}

// 查看文章
function handleView(row: Article) {
  currentArticleId.value = row.articleId
  detailVisible.value = true
}

// 编辑文章
function handleEdit(row: Article) {
  currentArticleId.value = row.articleId
  editVisible.value = true
}

// 查看评论
function handleComments(row: Article) {
  currentArticleId.value = row.articleId
  currentArticleTitle.value = row.title
  commentsVisible.value = true
}

// 预览文章
function handlePreview(row: Article) {
  currentArticleId.value = row.articleId
  previewVisible.value = true
}

// 查看统计
function handleStatistics() {
  statisticsVisible.value = true
}

// 标签管理
function handleTagManager() {
  tagManagerVisible.value = true
}

// 删除文章
async function handleDelete(row: Article) {
  try {
    await deleteArticleApi(row.articleId)
    ElMessage.success("删除成功")
    getTableData()
  } catch (error) {
    console.error("删除失败:", error)
    ElMessage.error("删除失败")
  }
}

// 批量删除
async function handleBatchDelete() {
  try {
    const promises = selectedArticles.value.map(item =>
      deleteArticleApi(item.articleId)
    )
    await Promise.all(promises)
    ElMessage.success("批量删除成功")
    getTableData()
  } catch (error) {
    console.error("批量删除失败:", error)
    ElMessage.error("批量删除失败")
  }
}

// 格式化日期时间
function formatDateTime(dateTime: string) {
  return new Date(dateTime).toLocaleString("zh-CN")
}

// 监听分页变化
watch(
  [() => paginationData.currentPage, () => paginationData.page_size],
  getTableData,
  { immediate: true }
)
</script>

<template>
  <div class="app-container">
    <!-- 搜索栏 -->
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form :inline="true" :model="searchData">
        <el-form-item prop="title" label="标题">
          <el-input
            v-model="searchData.title"
            placeholder="请输入文章标题"
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
        <el-form-item prop="locationName" label="地点">
          <el-input
            v-model="searchData.locationName"
            placeholder="请输入地点名称"
            clearable
          />
        </el-form-item>
        <el-form-item prop="bodyText" label="内容">
          <el-input
            v-model="searchData.bodyText"
            placeholder="请输入内容关键词"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">
            搜索
          </el-button>
          <el-button :icon="Refresh" @click="resetSearch">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 操作栏 -->
    <el-card v-loading="loading" shadow="never">
      <div class="toolbar-wrapper">
        <div>
          <el-button type="primary" :icon="Plus" @click="handleCreate">
            新增文章
          </el-button>
          <el-button type="success" @click="handleStatistics">
            文章统计
          </el-button>
          <el-button type="warning" @click="handleTagManager">
            标签管理
          </el-button>
          <el-popconfirm
            title="确定要批量删除选中的文章吗？"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="handleBatchDelete"
          >
            <template #reference>
              <el-button
                type="danger"
                :icon="Delete"
                :disabled="!selectedArticles.length"
              >
                批量删除 ({{ selectedArticles.length }})
              </el-button>
            </template>
          </el-popconfirm>
        </div>
        <div>
          <el-tooltip content="刷新当前页">
            <el-button
              type="primary"
              :icon="RefreshRight"
              circle
              @click="getTableData"
            />
          </el-tooltip>
        </div>
      </div>
    </el-card>

    <!-- 表格 -->
    <el-card v-loading="loading" shadow="never">
      <div class="table-wrapper">
        <el-table :data="tableData" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column
            prop="title"
            label="标题"
            align="center"
            min-width="200"
          >
            <template #default="scope">
              <el-link type="primary" @click="handleView(scope.row)">
                {{ scope.row.title }}
              </el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="category"
            label="分类"
            align="center"
            width="120"
          />
          <el-table-column
            prop="status"
            label="状态"
            align="center"
            width="100"
          >
            <template #default="scope">
              <el-tag
                :type="scope.row.status === 'published' ? 'success' : scope.row.status === 'draft' ? 'info' : 'warning'"
                size="small"
              >
                {{ scope.row.status === 'published' ? '已发布' : scope.row.status === 'draft' ? '草稿' : '已归档' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="locationName"
            label="地点"
            align="center"
            width="150"
          />
          <el-table-column
            prop="likeCount"
            label="点赞数"
            align="center"
            width="100"
          />
          <el-table-column
            prop="commentCount"
            label="评论数"
            align="center"
            width="100"
          />
          <el-table-column
            prop="imageUrl"
            label="封面"
            align="center"
            width="100"
          >
            <template #default="scope">
              <el-image
                v-if="scope.row.imageUrl"
                :src="scope.row.imageUrl"
                fit="cover"
                style="width: 60px; height: 40px; border-radius: 4px"
                :preview-src-list="[scope.row.imageUrl]"
              />
              <span v-else class="text-gray-400">无图片</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="创建时间"
            align="center"
            width="180"
          >
            <template #default="scope">
              {{ formatDateTime(scope.row.createdAt) }}
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="260"
            align="center"
          >
            <template #default="scope">
              <el-button
                type="primary"
                text
                bg
                size="small"
                @click="handleView(scope.row)"
              >
                查看
              </el-button>
              <el-button
                type="warning"
                text
                bg
                size="small"
                @click="handlePreview(scope.row)"
              >
                预览
              </el-button>
              <el-button
                type="success"
                text
                bg
                size="small"
                @click="handleEdit(scope.row)"
              >
                编辑
              </el-button>
              <el-button
                type="info"
                text
                bg
                size="small"
                @click="handleComments(scope.row)"
              >
                评论
              </el-button>
              <el-popconfirm
                :title="`确定要删除文章${scope.row.title}吗？`"
                confirm-button-text="确定"
                cancel-button-text="取消"
                @confirm="handleDelete(scope.row)"
              >
                <template #reference>
                  <el-button
                    type="danger"
                    text
                    bg
                    size="small"
                  >
                    删除
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pager-wrapper">
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

    <!-- 文章详情弹窗 -->
    <ArticleDetail
      v-model="detailVisible"
      :article-id="currentArticleId"
      @refresh="getTableData"
    />

    <!-- 文章编辑弹窗 -->
    <ArticleEdit
      v-model="editVisible"
      :article-id="currentArticleId"
      @refresh="getTableData"
    />

    <!-- 评论管理弹窗 -->
    <ArticleComments
      v-model="commentsVisible"
      :article-id="currentArticleId"
      :article-title="currentArticleTitle"
    />

    <!-- 文章预览弹窗 -->
    <ArticlePreview
      v-model="previewVisible"
      :article-id="currentArticleId"
    />

    <!-- 文章统计弹窗 -->
    <ArticleStatistics
      v-model="statisticsVisible"
    />

    <!-- 标签管理弹窗 -->
    <TagManager
      v-model="tagManagerVisible"
      @refresh="getTableData"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
