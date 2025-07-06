import { getCurrentUserApi } from "@@/apis/users"
import { setToken as _setToken, getToken, removeToken } from "@@/utils/cache/cookies"
import { pinia } from "@/pinia"
import { resetRouter } from "@/router"
import { routerConfig } from "@/router/config"
import { useSettingsStore } from "./settings"
import { useTagsViewStore } from "./tags-view"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "")
  const roles = ref<string[]>([])
  const username = ref<string>("")
  const userRole = ref<string>("")
  const userEmail = ref<string>("")

  const tagsViewStore = useTagsViewStore()
  const settingsStore = useSettingsStore()

  // 设置 Token
  const setToken = (value: string) => {
    _setToken(value)
    token.value = value
  }

  const setUsername = (value:string) => {
    username.value = value
  }

  const setUserRole = (value: string) => {
    userRole.value = value
  }

  const setUserEmail = (value: string) => {
    userEmail.value = value
  }

  // 检查是否为管理员
  const isAdmin = computed(() => userRole.value === "admin")

  // 检查是否为admin@ar-backend.com
  const isSystemAdmin = computed(() => userRole.value === "admin")

  // 获取用户详情
  const getInfo = async () => {
    const res = await getCurrentUserApi()
    if (res.success) {
      username.value = res.data.username
      // 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
      roles.value = res.data.roles?.length > 0 ? res.data.roles : routerConfig.defaultRoles
    } else {
      throw new Error(res.errMessage || "获取用户信息失败")
    }
  }

  // 模拟角色变化
  const changeRoles = (role: string) => {
    const newToken = `token-${role}`
    token.value = newToken
    _setToken(newToken)
    // 用刷新页面代替重新登录
    location.reload()
  }

  // 登出
  const logout = () => {
    removeToken()
    token.value = ""
    roles.value = []
    username.value = ""
    userRole.value = ""
    userEmail.value = ""
    resetRouter()
    resetTagsView()
  }

  // 重置 Token
  const resetToken = () => {
    removeToken()
    token.value = ""
    roles.value = []
    username.value = ""
    userRole.value = ""
    userEmail.value = ""
  }

  // 重置 Visited Views 和 Cached Views
  const resetTagsView = () => {
    if (!settingsStore.cacheTagsView) {
      tagsViewStore.delAllVisitedViews()
      tagsViewStore.delAllCachedViews()
    }
  }

  return {
    token,
    roles,
    username,
    userRole,
    userEmail,
    isAdmin,
    isSystemAdmin,
    setToken,
    getInfo,
    changeRoles,
    logout,
    resetToken,
    setUsername,
    setUserRole,
    setUserEmail
  }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useUserStoreOutside() {
  return useUserStore(pinia)
}
