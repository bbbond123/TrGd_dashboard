// Mock 响应数据结构 - 匹配项目的 IBaseResponse
export interface MockResponse<T = any> {
  success: boolean
  errCode?: string
  errMessage?: string
  data: T
}

// Mock 请求参数
export interface MockParams {
  body: string
  url: string
  type: string
}

// 用户信息
export interface UserInfo {
  id: number
  username: string
  nickname: string
  avatar: string
  email: string
  phone: string
  role: string
  status: number
  createTime: string
  updateTime?: string
}

// 登录响应
export interface LoginResponse {
  token: string
  user: UserInfo
}

// 分页响应
export interface PageResponse<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// 菜单项 - 匹配用户提供的数据结构
export interface MenuInfo {
  id?: string
  parentId: string
  path: string
  name: string
  component: string
  hasParent: boolean
  hasChildren: boolean
  children?: MenuInfo[]
}

// 兼容旧的 MenuItem
export interface MenuItem {
  id: number
  name: string
  path: string
  icon?: string
  component?: string
  children?: MenuItem[]
}
