<script setup lang="ts">
import { Plus, Delete } from "@element-plus/icons-vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { ref, reactive, onMounted } from "vue"

interface Props {
  modelValue: boolean
}

interface Emits {
  (e: "update:modelValue", value: boolean): void
  (e: "refresh"): void
}

interface Tag {
  id: string
  name: string
  count: number
  color?: string
  createdAt: string
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const dialogVisible = ref(false)
const loading = ref(false)

// 标签数据
const tags = ref<Tag[]>([])
const newTagName = ref("")
const selectedTags = ref<Tag[]>([])

// 预定义颜色
const tagColors = [
  "#409eff", "#67c23a", "#e6a23c", "#f56c6c", 
  "#909399", "#2196f3", "#4caf50", "#ff9800",
  "#ff5722", "#9c27b0", "#3f51b5", "#00bcd4"
]

// 监听 modelValue 变化
watch(
  () => props.modelValue,
  (val) => {
    dialogVisible.value = val
    if (val) {
      loadTags()
    }
  },
  { immediate: true }
)

// 监听 dialogVisible 变化
watch(dialogVisible, (val) => {
  emit("update:modelValue", val)
})

// 加载标签数据（模拟数据，实际应该从API获取）
function loadTags() {
  loading.value = true
  
  // 模拟API调用
  setTimeout(() => {
    tags.value = [
      {
        id: "1",
        name: "旅游",
        count: 25,
        color: "#409eff",
        createdAt: "2024-01-15T10:30:00Z"
      },
      {
        id: "2", 
        name: "美食",
        count: 18,
        color: "#67c23a",
        createdAt: "2024-01-16T14:20:00Z"
      },
      {
        id: "3",
        name: "文化",
        count: 12,
        color: "#e6a23c",
        createdAt: "2024-01-17T09:15:00Z"
      },
      {
        id: "4",
        name: "历史",
        count: 8,
        color: "#f56c6c",
        createdAt: "2024-01-18T16:45:00Z"
      },
      {
        id: "5",
        name: "自然",
        count: 15,
        color: "#909399",
        createdAt: "2024-01-19T11:30:00Z"
      },
      {
        id: "6",
        name: "建筑",
        count: 6,
        color: "#2196f3",
        createdAt: "2024-01-20T13:20:00Z"
      }
    ]
    loading.value = false
  }, 500)
}

// 添加新标签
function addTag() {
  if (!newTagName.value.trim()) {
    ElMessage.warning("请输入标签名称")
    return
  }

  // 检查是否已存在
  if (tags.value.some(tag => tag.name === newTagName.value.trim())) {
    ElMessage.warning("标签已存在")
    return
  }

  const newTag: Tag = {
    id: Date.now().toString(),
    name: newTagName.value.trim(),
    count: 0,
    color: tagColors[Math.floor(Math.random() * tagColors.length)],
    createdAt: new Date().toISOString()
  }

  tags.value.unshift(newTag)
  newTagName.value = ""
  ElMessage.success("标签添加成功")
  emit("refresh")
}

// 删除标签
function deleteTag(tag: Tag) {
  ElMessageBox.confirm(
    `确认删除标签"${tag.name}"吗？此操作不可恢复。`,
    "删除确认",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }
  ).then(() => {
    const index = tags.value.findIndex(t => t.id === tag.id)
    if (index > -1) {
      tags.value.splice(index, 1)
      ElMessage.success("删除成功")
      emit("refresh")
    }
  }).catch(() => {
    // 用户取消删除
  })
}

// 批量删除标签
function batchDeleteTags() {
  if (selectedTags.value.length === 0) {
    ElMessage.warning("请选择要删除的标签")
    return
  }

  const tagNames = selectedTags.value.map(tag => tag.name).join("、")
  ElMessageBox.confirm(
    `确认删除选中的 ${selectedTags.value.length} 个标签吗？\n标签：${tagNames}`,
    "批量删除确认",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消", 
      type: "warning"
    }
  ).then(() => {
    const selectedIds = selectedTags.value.map(tag => tag.id)
    tags.value = tags.value.filter(tag => !selectedIds.includes(tag.id))
    selectedTags.value = []
    ElMessage.success("批量删除成功")
    emit("refresh")
  }).catch(() => {
    // 用户取消删除
  })
}

// 表格选择变化
function handleSelectionChange(selection: Tag[]) {
  selectedTags.value = selection
}

// 编辑标签颜色
function editTagColor(tag: Tag, color: string) {
  tag.color = color
  ElMessage.success("标签颜色更新成功")
  emit("refresh")
}

// 格式化日期
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("zh-CN")
}

onMounted(() => {
  if (props.modelValue) {
    loadTags()
  }
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="标签管理"
    width="70%"
    :close-on-click-modal="false"
  >
    <div v-loading="loading">
      <!-- 添加新标签 -->
      <el-card shadow="never" class="add-tag-card">
        <template #header>
          <span>添加新标签</span>
        </template>
        <div class="add-tag-form">
          <el-input
            v-model="newTagName"
            placeholder="请输入标签名称"
            style="width: 300px; margin-right: 12px"
            @keyup.enter="addTag"
            maxlength="20"
            show-word-limit
          />
          <el-button type="primary" :icon="Plus" @click="addTag">
            添加标签
          </el-button>
        </div>
      </el-card>

      <!-- 标签统计 -->
      <div class="tag-stats">
        <el-row :gutter="16">
          <el-col :span="8">
            <el-statistic title="标签总数" :value="tags.length" />
          </el-col>
          <el-col :span="8">
            <el-statistic 
              title="总使用次数" 
              :value="tags.reduce((sum, tag) => sum + tag.count, 0)" 
            />
          </el-col>
          <el-col :span="8">
            <el-statistic 
              title="平均使用次数"
              :value="tags.length > 0 ? Math.round(tags.reduce((sum, tag) => sum + tag.count, 0) / tags.length * 100) / 100 : 0"
            />
          </el-col>
        </el-row>
      </div>

      <!-- 操作栏 -->
      <div class="toolbar">
        <div>
          <el-button
            type="danger"
            :icon="Delete"
            :disabled="selectedTags.length === 0"
            @click="batchDeleteTags"
          >
            批量删除 ({{ selectedTags.length }})
          </el-button>
        </div>
        <div>
          <span class="tag-count">共 {{ tags.length }} 个标签</span>
        </div>
      </div>

      <!-- 标签列表 -->
      <el-card shadow="never">
        <el-table 
          :data="tags" 
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="name" label="标签名称" min-width="120">
            <template #default="scope">
              <el-tag 
                :color="scope.row.color" 
                effect="dark"
                style="color: white"
              >
                {{ scope.row.name }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="count" label="使用次数" width="100" align="center">
            <template #default="scope">
              <el-badge :value="scope.row.count" :max="99" class="badge-item">
                <span>{{ scope.row.count }}</span>
              </el-badge>
            </template>
          </el-table-column>
          <el-table-column prop="color" label="标签颜色" width="150" align="center">
            <template #default="scope">
              <div class="color-picker">
                <el-color-picker
                  v-model="scope.row.color"
                  size="small"
                  @change="(color) => editTagColor(scope.row, color)"
                />
                <span class="color-text">{{ scope.row.color }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="createdAt" label="创建时间" width="120" align="center">
            <template #default="scope">
              {{ formatDate(scope.row.createdAt) }}
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120" align="center">
            <template #default="scope">
              <el-button
                type="danger"
                text
                bg
                size="small"
                @click="deleteTag(scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <!-- 常用标签颜色预设 -->
      <el-card shadow="never" style="margin-top: 16px">
        <template #header>
          <span>预设颜色</span>
        </template>
        <div class="color-presets">
          <div 
            v-for="color in tagColors"
            :key="color"
            class="color-preset"
            :style="{ backgroundColor: color }"
            :title="color"
          ></div>
        </div>
      </el-card>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.add-tag-card {
  margin-bottom: 20px;

  .add-tag-form {
    display: flex;
    align-items: center;
  }
}

.tag-stats {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  .tag-count {
    color: #666;
    font-size: 14px;
  }
}

.color-picker {
  display: flex;
  align-items: center;
  gap: 8px;

  .color-text {
    font-size: 12px;
    color: #666;
    font-family: monospace;
  }
}

.color-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .color-preset {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ddd;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.badge-item {
  :deep(.el-badge__content) {
    background-color: #409eff;
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>