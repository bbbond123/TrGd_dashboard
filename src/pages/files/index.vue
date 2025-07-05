<script setup lang="ts">
import type { FileDetail, FileListRequest } from "@@/apis/files/type"
import { deleteFileApi, downloadFileApi, getFileListApi, uploadFileApi } from "@@/apis/files"
import { usePagination } from "@@/composables/usePagination"
import {
  Delete,
  Download,
  Plus,
  Refresh,
  RefreshRight,
  Search,
  Upload
} from "@element-plus/icons-vue"
import { ElMessage, type UploadFile } from "element-plus"
import { reactive, ref, watch } from "vue"

defineOptions({
  name: "Files"
})

const loading = ref<boolean>(false)
const uploadLoading = ref<boolean>(false)
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination()

// 搜索数据
const searchData = reactive<Partial<FileListRequest>>({
  fileName: "",
  fileType: undefined,
  userId: undefined
})

// 表格数据
const tableData = ref<FileDetail[]>([])
const selectedFiles = ref<FileDetail[]>([])

// 上传对话框
const uploadDialogVisible = ref(false)

// 获取表格数据
async function getTableData() {
  loading.value = true
  try {
    const params: FileListRequest = {
      page: paginationData.currentPage,
      pageSize: paginationData.page_size,
      ...searchData
    }

    if (!params.fileName) {
      delete params.fileName
    }
    if (!params.fileType) {
      delete params.fileType
    }
    if (!params.userId) {
      delete params.userId
    }

    const res = await getFileListApi(params)

    if (res.code === 200) {
      tableData.value = res.data
      paginationData.total = res.total
    } else {
      ElMessage.error(res.errMessage)
    }
  } catch (error) {
    console.error("获取文件列表失败:", error)
    ElMessage.error("获取文件列表失败")
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
    fileName: "",
    fileType: "",
    userId: undefined
  })
  paginationData.currentPage = 1
  getTableData()
}

// 表格选择
function handleSelectionChange(selection: FileDetail[]) {
  selectedFiles.value = selection
}

// 上传文件
function handleUpload() {
  uploadDialogVisible.value = true
}

// 文件上传成功
async function handleFileUpload(file: UploadFile) {
  if (!file.raw) return

  uploadLoading.value = true
  try {
    await uploadFileApi(file.raw)
    ElMessage.success("文件上传成功")
    uploadDialogVisible.value = false
    getTableData()
  } catch (error) {
    console.error("文件上传失败:", error)
    ElMessage.error("文件上传失败")
  } finally {
    uploadLoading.value = false
  }
}

// 下载文件
async function handleDownload(row: FileDetail) {
  try {
    const blob = await downloadFileApi(row.fileId)
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = row.fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    ElMessage.success("文件下载成功")
  } catch (error) {
    console.error("文件下载失败:", error)
    ElMessage.error("文件下载失败")
  }
}

// 删除文件
async function handleDelete(row: FileDetail) {
  try {
    await deleteFileApi(row.fileId)
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
    const promises = selectedFiles.value.map(item => deleteFileApi(item.fileId))
    await Promise.all(promises)
    ElMessage.success("批量删除成功")
    getTableData()
  } catch (error) {
    console.error("批量删除失败:", error)
    ElMessage.error("批量删除失败")
  }
}

// 格式化文件大小
function formatFileSize(size: number) {
  const units = ['B', 'KB', 'MB', 'GB']
  let index = 0
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024
    index++
  }
  return `${size.toFixed(2)} ${units[index]}`
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
        <el-form-item prop="fileName" label="文件名">
          <el-input
            v-model="searchData.fileName"
            placeholder="请输入文件名"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        <el-form-item prop="fileType" label="文件类型">
          <el-select
            v-model="searchData.fileType"
            placeholder="请选择文件类型"
            clearable
            style="width: 150px"
          >
            <el-option label="图片" value="image" />
            <el-option label="文档" value="document" />
            <el-option label="视频" value="video" />
            <el-option label="音频" value="audio" />
            <el-option label="其他" value="other" />
          </el-select>
        </el-form-item>
        <el-form-item prop="userId" label="用户ID">
          <el-input
            v-model.number="searchData.userId"
            placeholder="请输入用户ID"
            clearable
            type="number"
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
          <el-button type="primary" :icon="Plus" @click="handleUpload">
            上传文件
          </el-button>
          <el-popconfirm
            title="确定要批量删除选中的文件吗？"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="handleBatchDelete"
          >
            <template #reference>
              <el-button
                type="danger"
                :icon="Delete"
                :disabled="!selectedFiles.length"
              >
                批量删除 ({{ selectedFiles.length }})
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
            prop="imageUrl"
            label="缩略图"
            align="center"
            width="100"
          >
            <template #default="scope">
              <el-image :src="scope.row.imageUrl" style="width: 50px; height: 50px;" />
            </template>
          </el-table-column>
          <el-table-column
            prop="fileName"
            label="文件名"
            align="center"
            min-width="200"
          />
          <el-table-column
            prop="fileType"
            label="文件类型"
            align="center"
            width="120"
          >
            <template #default="scope">
              <el-tag
                :type="scope.row.fileType === 'image' ? 'success' :
                      scope.row.fileType === 'document' ? 'info' :
                      scope.row.fileType === 'video' ? 'warning' : 'danger'"
                size="small"
              >
                {{ scope.row.fileType }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="fileSize"
            label="文件大小"
            align="center"
            width="120"
          >
            <template #default="scope">
              {{ formatFileSize(scope.row.fileSize) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="filePath"
            label="文件路径"
            align="center"
            min-width="250"
            show-overflow-tooltip
          />
          <el-table-column
            label="上传者"
            align="center"
            width="150"
          >
            <template #default="scope">
              <div v-if="scope.row.userName" class="user-info">{{ scope.row.userName }}</div>
              <span v-else class="text-gray-400">未知用户</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="上传时间"
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
            width="180"
            align="center"
          >
            <template #default="scope">
              <el-button
                type="primary"
                text
                bg
                size="small"
                :icon="Download"
                @click="handleDownload(scope.row)"
              >
                下载
              </el-button>
              <el-popconfirm
                :title="`确定要删除文件${scope.row.fileName}吗？`"
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

    <!-- 文件上传对话框 -->
    <el-dialog
      v-model="uploadDialogVisible"
      title="上传文件"
      width="500px"
    >
      <el-upload
        drag
        :auto-upload="false"
        :on-change="handleFileUpload"
        :show-file-list="false"
        accept="*/*"
      >
        <el-icon class="el-icon--upload" style="font-size: 67px; color: #409eff;">
          <Upload />
        </el-icon>
        <div class="el-upload__text">
          将文件拖到此处，或<em>点击上传</em>
        </div>
      </el-upload>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="uploadDialogVisible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
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

.el-upload__text em {
  color: #409eff;
}

.user-info {
  .username {
    font-weight: 500;
    color: #303133;
  }

  .user-id {
    font-size: 12px;
    color: #909399;
    margin-left: 4px;
  }
}

.user-email {
  font-size: 12px;
  color: #606266;
  margin-top: 2px;
}
</style>
