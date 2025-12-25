<script setup lang="ts">
import type {
  CreateArticleRequest,
  CreateArticleWithImageRequest,
  UpdateArticleRequest
} from "@@/apis/articles/type"
import type { CheckboxValueType, FormInstance, UploadProps } from "element-plus"
import type { ApiPostTagsListResponse, ApiPostTagsRequest } from "@/api/Tags"
import {
  createArticleApi,
  createArticleWithImageApi,
  getArticleApi,
  updateArticleApi
} from "@@/apis/articles"
import { uploadFileApi } from "@@/apis/files"
import { CircleCheck, Plus, Upload } from "@element-plus/icons-vue"
import {

  ElMessage

} from "element-plus"
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue"
import { apiPostTags, apiPostTagsList } from "@/api/Tags"

interface Props {
  modelValue: boolean
  articleId: number
}

interface Emits {
  (e: "update:modelValue", value: boolean): void
  (e: "refresh"): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const dialogVisible = ref(false)
const loading = ref(false)
const saving = ref(false)
const formRef = ref<FormInstance>()

// 是否为编辑模式
const isEdit = computed(() => Boolean(props.articleId))

// 表单数据
const formData = reactive<CreateArticleRequest & { tagIds?: number[] }>({
  title: "",
  bodyText: "",
  summary: "",
  category: "",
  status: "draft",
  tagIds: [],
  address: "",
  locationName: "",
  latitude: undefined,
  longitude: undefined,
  imageFileId: undefined,
  coverImage: "" // R2 图片 URL
})

// 封面预览 URL（用于本地预览，不会提交到服务器）
const coverPreviewUrl = ref("")
// 待上传的封面文件（选择后暂存，提交时才上传）
const pendingCoverFile = ref<File | null>(null)
// 标记封面是否已经存在于服务器（编辑模式下加载的已有封面）
const coverExistsOnServer = ref(false)

// 启用位置信息
const enableLocation = ref(false)

// 图片上传相关
const imageFileList = ref<any[]>([])
const uploadImages = ref<File[]>([])

// 标签相关
// interface Tag {
//   created_at?: string
//   is_active?: boolean
//   tag_id?: number | string
//   tag_name?: string
//   updated_at?: string
// }

const allTags = ref<ApiPostTagsListResponse["data"]>([])
const loadingTags = ref(false)
const creatingTag = ref(false)

// 表单验证规则
const rules = {
  title: [{ required: true, message: "请输入文章标题", trigger: "blur" }]
}

// 监听 modelValue 变化
watch(
  () => props.modelValue,
  async (val) => {
    dialogVisible.value = val
    if (val) {
      if (isEdit.value) {
        await getArticleDetail()
      } else {
        resetForm()
      }
    }
  },
  { immediate: true }
)

// 监听 dialogVisible 变化
watch(dialogVisible, (val) => {
  emit("update:modelValue", val)
})

// 组件挂载时获取标签列表
onMounted(async () => {
  await fetchTags()
})

// 获取标签列表
async function fetchTags() {
  loadingTags.value = true
  try {
    const res = await apiPostTagsList({
      page: 1,
      pageSize: 100
    })
    if (res.success && res.data) {
      allTags.value = res.data.filter(tag => tag.is_active !== false)
    }
  } catch (error) {
    console.error("获取标签列表失败:", error)
  } finally {
    loadingTags.value = false
  }
}

// 处理标签变化（创建新标签）
async function handleTagChange(values: any[]) {
  // 检查是否有新创建的标签（字符串类型）
  const newTagNames = values.filter(v => typeof v === "string")

  if (newTagNames.length > 0) {
    creatingTag.value = true
    try {
      // 创建新标签
      for (const tagName of newTagNames) {
        const res = await apiPostTags({
          tag_name: tagName,
          is_active: true
        })

        if (res.success && res.data) {
          // 添加到标签列表
          allTags.value?.push({
            created_at: res.data.created_at,
            is_active: res.data.is_active,
            tag_id: res.data.tag_id,
            tag_name: res.data.tag_name,
            updated_at: res.data.updated_at
          })

          // 替换formData中的字符串为新创建的标签ID
          const index = formData.tagIds!.indexOf(tagName as any)
          if (index > -1) {
            formData.tagIds![index] = res.data.tag_id!
          }
        }
      }

      // 刷新标签列表
      await fetchTags()
    } catch (error) {
      console.error("创建标签失败:", error)
      ElMessage.error("创建标签失败")
    } finally {
      creatingTag.value = false
    }
  }
}

// 获取文章详情
async function getArticleDetail() {
  if (!props.articleId) return

  loading.value = true
  try {
    const res = await getArticleApi(props.articleId)
    if (res.success) {
      const article = res.data
      // 优先使用 coverImage，兼容 imageUrl
      const coverUrl = article.coverImage || article.imageUrl || ""
      Object.assign(formData, {
        title: article.title,
        bodyText: article.bodyText,
        summary: article.summary || "",
        category: article.category || "",
        status: article.status || "draft",
        tagIds: article.tagIds || [],
        address: article.address || "",
        locationName: article.locationName || "",
        latitude: article.latitude,
        longitude: article.longitude,
        imageFileId: article.imageFileId,
        coverImage: coverUrl // 使用已有的 R2 URL
      })

      // 如果有封面图，设置预览 URL 并标记已存在于服务器
      if (coverUrl) {
        coverPreviewUrl.value = coverUrl
        coverExistsOnServer.value = true
      }

      // 设置位置信息状态
      enableLocation.value = !!(article.latitude && article.longitude)
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

// 重置表单
function resetForm() {
  Object.assign(formData, {
    title: "",
    bodyText: "",
    summary: "",
    category: "",
    status: "draft",
    tagIds: [],
    address: "",
    locationName: "",
    latitude: undefined,
    longitude: undefined,
    imageFileId: undefined,
    coverImage: ""
  })
  // 清除预览 URL（释放内存）
  if (coverPreviewUrl.value && coverPreviewUrl.value.startsWith("blob:")) {
    URL.revokeObjectURL(coverPreviewUrl.value)
  }
  coverPreviewUrl.value = ""
  pendingCoverFile.value = null
  coverExistsOnServer.value = false
  enableLocation.value = false
  imageFileList.value = []
  uploadImages.value = []
  nextTick(() => {
    formRef.value?.clearValidate()
  })
}

// 位置信息切换
function handleLocationToggle(val: CheckboxValueType) {
  if (!val) {
    formData.latitude = undefined
    formData.longitude = undefined
    formData.address = ""
    formData.locationName = ""
  }
}

// 封面图选择处理 - 只预览，不立即上传
const handleCoverUpload: UploadProps["beforeUpload"] = (file) => {
  const isImage = file.type.startsWith("image/")
  const isLt10M = file.size / 1024 / 1024 < 10

  if (!isImage) {
    ElMessage.error("只能上传图片文件!")
    return false
  }
  if (!isLt10M) {
    ElMessage.error("图片大小不能超过 10MB!")
    return false
  }

  // 清理旧的预览 URL
  if (coverPreviewUrl.value && coverPreviewUrl.value.startsWith("blob:")) {
    URL.revokeObjectURL(coverPreviewUrl.value)
  }

  // 创建本地预览 URL
  coverPreviewUrl.value = URL.createObjectURL(file)
  // 保存文件对象，等待提交时上传
  pendingCoverFile.value = file
  // 清除已有的服务器 URL（因为用户选择了新图片）
  formData.coverImage = ""
  formData.imageFileId = undefined
  coverExistsOnServer.value = false

  return false // 阻止自动上传
}

// 删除封面
function removeCover() {
  // 清理预览 URL
  if (coverPreviewUrl.value && coverPreviewUrl.value.startsWith("blob:")) {
    URL.revokeObjectURL(coverPreviewUrl.value)
  }
  coverPreviewUrl.value = ""
  formData.coverImage = ""
  formData.imageFileId = undefined
  pendingCoverFile.value = null
  coverExistsOnServer.value = false
}

// 图片上传处理
const handleImageUpload: UploadProps["beforeUpload"] = (file) => {
  const isImage = file.type.startsWith("image/")
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isImage) {
    ElMessage.error("只能上传图片文件!")
    return false
  }
  if (!isLt2M) {
    ElMessage.error("图片大小不能超过 2MB!")
    return false
  }

  uploadImages.value.push(file)
  return false // 阻止自动上传
}

// 删除图片
function handleImageRemove(file: any) {
  const index = uploadImages.value.findIndex(img => img.name === file.name)
  if (index > -1) {
    uploadImages.value.splice(index, 1)
  }
}

// 保存文章
async function handleSave() {
  if (!formRef.value) return

  try {
    await formRef.value.validate()
    saving.value = true

    // 如果有待上传的封面图片，先上传到 R2
    if (pendingCoverFile.value) {
      try {
        const uploadRes = await uploadFileApi(pendingCoverFile.value)
        if (uploadRes.success && uploadRes.data?.url) {
          formData.coverImage = uploadRes.data.url
          formData.imageFileId = uploadRes.data.file_id
          pendingCoverFile.value = null // 清除待上传文件
        } else {
          ElMessage.error(uploadRes.errMessage || "封面上传失败")
          return
        }
      } catch (error) {
        console.error("封面上传失败:", error)
        ElMessage.error("封面上传失败")
        return
      }
    }

    if (isEdit.value) {
      const updateData: UpdateArticleRequest = {
        articleId: props.articleId,
        ...formData
      }
      const res = await updateArticleApi(updateData)
      if (res.success) {
        ElMessage.success("更新成功")
        emit("refresh")
        handleClose()
      } else {
        ElMessage.error(res.errMessage || "更新失败")
      }
    } else {
      const res = await createArticleApi(formData)
      if (res.success) {
        ElMessage.success("创建成功")
        emit("refresh")
        handleClose()
      } else {
        ElMessage.error(res.errMessage || "创建失败")
      }
    }
  } catch (error) {
    console.error("保存失败:", error)
    ElMessage.error("保存失败")
  } finally {
    saving.value = false
  }
}

// 保存文章（支持图片上传）
async function handleSaveWithImage() {
  if (!formRef.value) return

  try {
    await formRef.value.validate()
    saving.value = true

    const createData: CreateArticleWithImageRequest = {
      ...formData,
      images: uploadImages.value
    }

    const res = await createArticleWithImageApi(createData)
    if (res.success) {
      ElMessage.success("创建成功")
      emit("refresh")
      handleClose()
    } else {
      ElMessage.error(res.errMessage || "创建失败")
    }
  } catch (error) {
    console.error("保存失败:", error)
    ElMessage.error("保存失败")
  } finally {
    saving.value = false
  }
}

// 关闭弹窗
function handleClose() {
  dialogVisible.value = false
  resetForm()
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible" :title="isEdit ? '编辑文章' : '新增文章'" width="90%" :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <div v-loading="loading">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px" class="article-form">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="文章标题" prop="title">
              <el-input v-model="formData.title" placeholder="请输入文章标题" maxlength="100" show-word-limit />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文章状态" prop="status">
              <el-select v-model="formData.status" placeholder="请选择状态">
                <el-option label="草稿" value="draft" />
                <el-option label="已发布" value="published" />
                <el-option label="已归档" value="archived" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="文章分类" prop="category">
              <el-input v-model="formData.category" placeholder="请输入文章分类" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文章标签" prop="tagIds">
              <el-select
                v-model="formData.tagIds" multiple filterable allow-create default-first-option
                placeholder="请选择或输入标签" style="width: 100%" :loading="loadingTags || creatingTag"
                @change="handleTagChange"
              >
                <el-option v-for="tag in allTags" :key="tag.tag_id" :label="tag.tag_name" :value="tag.tag_id!" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="文章摘要" prop="summary">
          <el-input
            v-model="formData.summary" type="textarea" :rows="3" placeholder="请输入文章摘要" maxlength="300"
            show-word-limit
          />
        </el-form-item>

        <el-form-item label="封面图片" prop="cover_image">
          <div class="cover-upload">
            <el-upload
              class="cover-uploader" action="#" :show-file-list="false" :before-upload="handleCoverUpload"
              accept="image/*"
            >
              <img v-if="coverPreviewUrl" :src="coverPreviewUrl" class="cover">
              <el-icon v-else class="cover-uploader-icon">
                <Plus />
              </el-icon>
            </el-upload>
            <div class="cover-actions" v-if="coverPreviewUrl">
              <el-button size="small" type="danger" @click="removeCover">
                删除封面
              </el-button>
              <!-- 待上传状态：有待上传文件 -->
              <span v-if="pendingCoverFile" class="upload-pending">
                <el-icon><Upload /></el-icon> 待上传（提交时上传）
              </span>
              <!-- 已存在状态：服务器已有图片 -->
              <span v-else-if="coverExistsOnServer" class="upload-success">
                <el-icon><CircleCheck /></el-icon> 已存在
              </span>
            </div>
          </div>
        </el-form-item>

        <el-form-item label="文章内容" prop="bodyText">
          <el-input
            v-model="formData.bodyText" type="textarea" :rows="15" placeholder="请输入文章内容"
            class="content-textarea"
          />
        </el-form-item>

        <!-- 位置信息 -->
        <el-form-item label="位置信息">
          <div class="location-section">
            <el-checkbox v-model="enableLocation" @change="handleLocationToggle">
              启用位置信息
            </el-checkbox>
            <template v-if="enableLocation">
              <el-row :gutter="20" style="margin-top: 12px">
                <el-col :span="8">
                  <el-input v-model="formData.latitude" placeholder="纬度" type="number" />
                </el-col>
                <el-col :span="8">
                  <el-input v-model="formData.longitude" placeholder="经度" type="number" />
                </el-col>
                <el-col :span="8">
                  <el-input v-model="formData.address" placeholder="地址描述（可选）" />
                </el-col>
              </el-row>
            </template>
          </div>
        </el-form-item>

        <!-- 图片上传 -->
        <el-form-item label="相关图片">
          <el-upload
            class="image-uploader" action="#" :file-list="imageFileList" :before-upload="handleImageUpload"
            :on-remove="handleImageRemove" multiple accept="image/*" list-type="picture-card"
          >
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleSave" :loading="saving">
          {{ isEdit ? "更新" : "创建" }}
        </el-button>
        <el-button v-if="!isEdit" type="success" @click="handleSaveWithImage" :loading="saving">
          创建（支持图片）
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.article-form {
  .content-textarea {
    :deep(.el-textarea__inner) {
      font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .cover-upload {
    .cover-uploader {
      :deep(.el-upload) {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: border-color 0.2s;

        &:hover {
          border-color: #409eff;
        }
      }

      :deep(.el-upload.is-disabled) {
        cursor: not-allowed;
      }

      .cover-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        text-align: center;
        line-height: 120px;
      }

      .cover {
        width: 120px;
        height: 120px;
        display: block;
        object-fit: cover;
      }

      .cover-loading {
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #409eff;

        .is-loading {
          font-size: 24px;
          animation: rotating 2s linear infinite;
        }

        span {
          margin-top: 8px;
          font-size: 12px;
        }
      }
    }

    .cover-actions {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 12px;

      .upload-success {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #67c23a;
        font-size: 12px;
      }

      .upload-pending {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #e6a23c;
        font-size: 12px;
      }
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .location-section {
    .el-checkbox {
      margin-bottom: 0;
    }
  }

  .image-uploader {
    :deep(.el-upload--picture-card) {
      width: 100px;
      height: 100px;
    }

    :deep(.el-upload-list--picture-card .el-upload-list__item) {
      width: 100px;
      height: 100px;
    }
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
