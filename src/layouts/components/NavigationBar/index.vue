<script lang="ts" setup>
import Notify from "@@/components/Notify/index.vue"
import Screenfull from "@@/components/Screenfull/index.vue"
import SearchMenu from "@@/components/SearchMenu/index.vue"
import ThemeSwitch from "@@/components/ThemeSwitch/index.vue"
import { useDevice } from "@@/composables/useDevice"
import { useLayoutMode } from "@@/composables/useLayoutMode"
import { UserFilled } from "@element-plus/icons-vue"
import { useAppStore } from "@/pinia/stores/app"
import { useSettingsStore } from "@/pinia/stores/settings"
import { useUserStore } from "@/pinia/stores/user"
import { encryptPassword, checkPasswordStrength } from "@@/utils/crypto"
import { getCurrentUserApi, updateUserApi } from "@@/apis/users"
import type { User } from "@@/apis/users/type"
import type { FormInstance, FormRules } from "element-plus"
import { ElMessage } from "element-plus"
import { Breadcrumb, Hamburger, Sidebar } from "../index"
import { formatDateTime } from "@@/utils/datetime"

const { isMobile } = useDevice()
const { isTop } = useLayoutMode()
const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const settingsStore = useSettingsStore()
const { showNotify, showThemeSwitch, showScreenfull, showSearchMenu } = storeToRefs(settingsStore)

// 用户信息弹窗相关状态
const userInfoDialogVisible = ref(false)
const userInfoFormRef = ref<FormInstance>()
const loading = ref(false)

// 用户信息表单数据
const userInfoForm = reactive<Partial<User>>({
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  gender: undefined
})

// 表单验证规则
const userInfoRules: FormRules = {
  name: [
    { required: true, message: "请输入姓名", trigger: "blur" }
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" }
  ],
  password: [
     {
      validator: (rule, value, callback) => {
        if(!value){
          callback()
        }

       if (value && value.length < 8) {
          callback(new Error("密码长度不能少于8位"))
        } else if (value && checkPasswordStrength(value) === 'weak') {
          callback(new Error("密码强度太低，请包含大小写字母、数字和特殊字符"))
        } else {
          callback()
        }
      },
      trigger: "blur"
    }
  ]
}

/** 切换侧边栏 */
function toggleSidebar() {
  appStore.toggleSidebar(false)
}

/** 登出 */
function logout() {
  userStore.logout()
  router.push("/login")
}

// 打开用户信息弹窗
async function openUserInfo() {
  try {
    loading.value = true
    const res = await getCurrentUserApi()
    if (res.code === 200) {
      Object.assign(userInfoForm, res.data)
      userInfoDialogVisible.value = true
    } else {
      ElMessage.error(res.errMessage || "获取用户信息失败")
    }
  } catch (error) {
    console.error("获取用户信息失败:", error)
    ElMessage.error("获取用户信息失败")
  } finally {
    loading.value = false
  }
}

// 保存用户信息
async function saveUserInfo() {
  if (!userInfoFormRef.value) return

  // 权限检查：只能更新自己的信息
  if (!userStore.isAdmin && userStore.userEmail !== userInfoForm.email) {
    ElMessage.error("您只能修改自己的信息")
    return
  }

  try {
    const valid = await userInfoFormRef.value.validate()
    if (!valid) return

    loading.value = true
    const updateData: any = {
      userId: userInfoForm.userId!,
      name: userInfoForm.name,
      email: userInfoForm.email,
      phoneNumber: userInfoForm.phoneNumber,
      address: userInfoForm.address,
      gender: userInfoForm.gender
    }

    // 如果输入了新密码，包含密码更新
    if (userInfoForm.password) {
      updateData.password = userInfoForm.password
    }

    const res = await updateUserApi(updateData)

    if (res.code === 200) {
      ElMessage.success("更新成功")
      userInfoDialogVisible.value = false
      // 更新用户store中的信息
      userStore.setUsername(userInfoForm.name || "")
      userStore.setUserEmail(userInfoForm.email || "")
    } else {
      ElMessage.error(res.errMessage || "更新失败")
    }
  } catch (error) {
    console.error("更新用户信息失败:", error)
  } finally {
    loading.value = false
  }
}

// 取消编辑
function cancelEdit() {
  userInfoDialogVisible.value = false
  userInfoFormRef.value?.clearValidate()
}

</script>

<template>
  <div class="navigation-bar">
    <Hamburger
      v-if="!isTop || isMobile"
      :is-active="appStore.sidebar.opened"
      class="hamburger"
      @toggle-click="toggleSidebar"
    />
    <Breadcrumb v-if="!isTop || isMobile" class="breadcrumb" />
    <Sidebar v-if="isTop && !isMobile" class="sidebar" />
    <div class="right-menu">
      <!-- <SearchMenu v-if="showSearchMenu" class="right-menu-item" /> -->
      <Screenfull v-if="showScreenfull" class="right-menu-item" />
      <ThemeSwitch v-if="showThemeSwitch" class="right-menu-item" />
      <!-- <Notify v-if="showNotify" class="right-menu-item" /> -->
      <el-dropdown>
        <div class="right-menu-item user">
          <el-avatar :icon="UserFilled" :size="30" />
          <span>{{ userStore.username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a target="_blank" href="https://github.com/bbbond123/ar-backend">
              <el-dropdown-item>GitHub 后端go</el-dropdown-item>
            </a>
            <a target="_blank" href="https://github.com/bbbond123/ar-backend-admin">
              <el-dropdown-item>GitHub 后端Admin</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="openUserInfo">
              个人信息
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <!-- 用户信息弹窗 -->
    <el-dialog
      v-model="userInfoDialogVisible"
      title="个人信息"
      width="500px"
      :close-on-click-modal="false"
    >
      <el-form
        ref="userInfoFormRef"
        :model="userInfoForm"
        :rules="userInfoRules"
        label-width="100px"
        v-loading="loading"
      >
        <el-form-item label="用户ID">
          <el-input v-model="userInfoForm.userId" disabled />
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="userInfoForm.name"
            placeholder="请输入姓名"
            clearable
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="userInfoForm.password"
            placeholder="请输入密码"
            clearable
            type="password"
            show-password
          />
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="userInfoForm.email"
            type="email"
            placeholder="请输入邮箱"
            clearable
          />
        </el-form-item>

        <el-form-item label="手机号">
          <el-input
            v-model="userInfoForm.phoneNumber"
            placeholder="请输入手机号"
            clearable
          />
        </el-form-item>

        <el-form-item label="性别">
          <el-select
            v-model="userInfoForm.gender"
            placeholder="请选择性别"
            clearable
            style="width: 100%"
          >
            <el-option label="男" value="male" />
            <el-option label="女" value="female" />
            <el-option label="其他" value="other" />
          </el-select>
        </el-form-item>

        <el-form-item label="地址">
          <el-input
            v-model="userInfoForm.address"
            type="textarea"
            :rows="3"
            placeholder="请输入地址"
          />
        </el-form-item>

        <el-form-item label="注册方式">
          <el-tag v-if="userInfoForm.provider === 'email'" type="info">邮箱注册</el-tag>
          <el-tag v-else-if="userInfoForm.provider === 'google'" type="success">Google登录</el-tag>
          <el-tag v-else-if="userInfoForm.provider === 'apple'" type="warning">Apple登录</el-tag>
          <el-tag v-else type="info">{{ userInfoForm.provider || '未知' }}</el-tag>
        </el-form-item>

        <el-form-item label="状态">
          <el-tag
            :type="userInfoForm.status === 'active' ? 'success' :
                   userInfoForm.status === 'pending' ? 'warning' : 'danger'"
          >
            {{ userInfoForm.status === 'active' ? '正常' :
               userInfoForm.status === 'pending' ? '待激活' : '已禁用' }}
          </el-tag>
        </el-form-item>

        <el-form-item label="角色">
          <el-tag v-if="userInfoForm.role === 'admin'" type="danger">管理员</el-tag>
          <el-tag v-else-if="userInfoForm.role === 'user'" type="primary">用户</el-tag>
          <el-tag v-else type="info">{{ userInfoForm.role || '未知' }}</el-tag>
        </el-form-item>

        <el-form-item label="创建时间">
          <el-text>{{ formatDateTime(userInfoForm.createdAt) }}</el-text>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelEdit">取消</el-button>
          <el-button
            type="primary"
            @click="saveUserInfo"
            :loading="loading"
          >
            保存
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.navigation-bar {
  height: var(--v3-navigationbar-height);
  overflow: hidden;
  color: var(--v3-navigationbar-text-color);
  display: flex;
  justify-content: space-between;
  .hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;
  }
  .breadcrumb {
    flex: 1;
    // 参考 Bootstrap 的响应式设计将宽度设置为 576
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
  .sidebar {
    flex: 1;
    // 设置 min-width 是为了让 Sidebar 里的 el-menu 宽度自适应
    min-width: 0px;
    :deep(.el-menu) {
      background-color: transparent;
    }
    :deep(.el-sub-menu) {
      &.is-active {
        .el-sub-menu__title {
          color: var(--el-color-primary);
        }
      }
    }
  }
  .right-menu {
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    &-item {
      margin: 0 10px;
      cursor: pointer;
      &:last-child {
        margin-left: 20px;
      }
    }
    .user {
      display: flex;
      align-items: center;
      .el-avatar {
        margin-right: 10px;
      }
      span {
        font-size: 16px;
      }
    }
  }
}

</style>
