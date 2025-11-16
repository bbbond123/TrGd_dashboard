<script lang="ts" setup>
import type {
  Language,
  CreateLanguageRequestData,
  UpdateLanguageRequestData,
} from "@@/apis/languages/type";
import { usePagination } from "@@/composables/usePagination";
import { ElMessage, ElMessageBox } from "element-plus";
import { Search, Refresh, Plus, Edit, Delete } from "@element-plus/icons-vue";
import {
  apiPostLanguagesList,
  apiPostLanguages,
  apiPutLanguages,
  apiDeleteLanguagesLanguage_id,
  type ApiPostLanguagesListRequest,
  type ApiPostLanguagesListResponse,
  type ApiPostLanguagesRequest,
  type ApiPutLanguagesRequest,
} from "@/api/Languages/index";
const loading = ref(false);
const { paginationData, handleSizeChange, handleCurrentChange } =
  usePagination();

// 搜索表单
const searchFormRef = ref();
const searchData = reactive({
  keyword: "",
});

// 语言列表数据
const languageTableData = ref<ApiPostLanguagesListResponse["data"]>([]);

// 将下划线格式转换为驼峰格式（用于兼容 Language 类型）
const convertToCamelCase = (data: any[]): Language[] => {
  return data.map((item) => ({
    languageId: item.language_id,
    languageName: item.language_name,
    displayOrder: item.display_order,
    isActive: item.is_active,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  }));
};

// 语言表单对话框
const dialogVisible = ref(false);
const formRef = ref();
const formData = reactive<CreateLanguageRequestData>({
  languageName: "",
  displayOrder: undefined,
  isActive: true,
});

// 编辑模式
const isEdit = ref(false);
const editingLanguageId = ref<number>();

// 表单验证规则
const formRules = {
  languageName: [
    { required: true, message: "请输入语言名称", trigger: "blur" },
  ],
};

// 获取语言列表
const getLanguageList = async () => {
  loading.value = true;
  try {
    const params: ApiPostLanguagesListRequest = {
      page: paginationData.currentPage,
      pageSize: paginationData.page_size,
      keyword: searchData.keyword || undefined,
    };
    // const response = await getLanguageListApi(params)
    const response = await apiPostLanguagesList(params);
    languageTableData.value = convertToCamelCase(response.data || []) as any;
    paginationData.total = response.total || 0;
  } catch (error) {
    console.error("获取语言列表失败:", error);
    ElMessage.error("获取语言列表失败");
  } finally {
    loading.value = false;
  }
};

// 搜索
const handleSearch = () => {
  paginationData.currentPage = 1;
  getLanguageList();
};

// 重置搜索
const resetSearch = () => {
  searchFormRef.value?.resetFields();
  handleSearch();
};

// 打开新增对话框
const openCreateDialog = () => {
  isEdit.value = false;
  dialogVisible.value = true;
  resetForm();
};

// 打开编辑对话框
const openEditDialog = (row: Language) => {
  isEdit.value = true;
  editingLanguageId.value = row.languageId;
  dialogVisible.value = true;

  // 填充表单数据
  formData.languageName = row.languageName;
  formData.displayOrder = row.displayOrder;
  formData.isActive = row.isActive;
};

// 重置表单
const resetForm = () => {
  formData.languageName = "";
  formData.displayOrder = undefined;
  formData.isActive = true;
  formRef.value?.clearValidate();
};

// 关闭对话框
const closeDialog = () => {
  dialogVisible.value = false;
  resetForm();
};

// 保存语言
const saveLanguage = async () => {
  if (!formRef.value) return;

  try {
    await formRef.value.validate();
    loading.value = true;

    if (isEdit.value && editingLanguageId.value) {
      // 编辑 - 转换为下划线格式
      const updateData: ApiPutLanguagesRequest = {
        language_id: editingLanguageId.value,
        language_name: formData.languageName,
        display_order: formData.displayOrder,
        is_active: formData.isActive,
      };
      await apiPutLanguages(updateData);
      ElMessage.success("更新成功");
    } else {
      // 新增 - 转换为下划线格式
      const createData: ApiPostLanguagesRequest = {
        language_name: formData.languageName,
        display_order: formData.displayOrder,
        is_active: formData.isActive,
      };
      await apiPostLanguages(createData);
      ElMessage.success("创建成功");
    }

    closeDialog();
    getLanguageList();
  } catch (error) {
    console.error("保存语言失败:", error);
    ElMessage.error("保存失败");
  } finally {
    loading.value = false;
  }
};

// 删除语言
const deleteLanguage = (row: Language) => {
  ElMessageBox.confirm(`确定要删除语言 "${row.languageName}" 吗？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    try {
      await apiDeleteLanguagesLanguage_id({
        language_id: String(row.languageId),
      });
      ElMessage.success("删除成功");
      getLanguageList();
    } catch (error) {
      console.error("删除语言失败:", error);
      ElMessage.error("删除失败");
    }
  });
};

// 切换语言状态
const toggleLanguageStatus = async (row: Language) => {
  try {
    const updateData: ApiPutLanguagesRequest = {
      language_id: row.languageId,
      language_name: row.languageName,
      display_order: row.displayOrder,
      is_active: !row.isActive,
    };
    await apiPutLanguages(updateData);
    ElMessage.success(`${row.isActive ? "禁用" : "启用"}成功`);
    getLanguageList();
  } catch (error) {
    console.error("更新语言状态失败:", error);
    ElMessage.error("操作失败");
  }
};

// 页面加载时获取数据
onMounted(() => {
  getLanguageList();
});

// 监听分页变化
watch(
  [() => paginationData.currentPage, () => paginationData.page_size],
  getLanguageList
);
</script>

<template>
  <div class="app-container">
    <el-card shadow="never">
      <div class="toolbar-wrapper">
        <div>
          <el-button type="primary" :icon="Plus" @click="openCreateDialog">
            新增语言
          </el-button>
        </div>
        <div>
          <el-tooltip content="刷新当前页">
            <el-button
              type="primary"
              :icon="Refresh"
              circle
              @click="getLanguageList"
            />
          </el-tooltip>
        </div>
      </div>
      <div class="table-wrapper">
        <el-table v-loading="loading" :data="languageTableData" border>
          <el-table-column prop="languageId" label="ID" />
          <el-table-column prop="languageName" label="语言名称" />
          <el-table-column prop="displayOrder" label="显示顺序" />
          <el-table-column prop="isActive" label="状态">
            <template #default="{ row }">
              <el-switch
                v-model="row.isActive"
                @change="toggleLanguageStatus(row)"
                active-text="启用"
                inactive-text="禁用"
              />
            </template>
          </el-table-column>
          <el-table-column prop="createdAt" label="创建时间">
            <template #default="{ row }">
              {{ new Date(row.createdAt).toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column prop="updatedAt" label="更新时间">
            <template #default="{ row }">
              {{
                row.updatedAt ? new Date(row.updatedAt).toLocaleString() : "-"
              }}
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template #default="{ row }">
              <el-button
                type="primary"
                text
                bg
                size="small"
                @click="openEditDialog(row)"
              >
                编辑
              </el-button>
              <el-button
                type="danger"
                text
                bg
                size="small"
                @click="deleteLanguage(row)"
              >
                删除
              </el-button>
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
          :currentPage="paginationData.currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>

    <!-- 语言表单对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="isEdit ? '编辑语言' : '新增语言'"
      width="500px"
      @close="closeDialog"
    >
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-width="100px"
      >
        <el-form-item label="语言名称" prop="languageName">
          <el-input
            v-model="formData.languageName"
            placeholder="请输入语言名称"
          />
        </el-form-item>
        <el-form-item label="显示顺序">
          <el-input-number
            v-model="formData.displayOrder"
            :min="0"
            placeholder="显示顺序"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="formData.isActive"
            active-text="启用"
            inactive-text="禁用"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取消</el-button>
          <el-button type="primary" @click="saveLanguage" :loading="loading">
            确定
          </el-button>
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
</style>
