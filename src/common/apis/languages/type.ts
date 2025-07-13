/** 语言数据类型 */
export interface Language {
  languageId: number
  languageName: string
  displayOrder?: number
  isActive: boolean
  createdAt: string
  updatedAt?: string
}

/** 创建语言请求 */
export interface CreateLanguageRequestData {
  languageName: string
  displayOrder?: number
  isActive: boolean
}

/** 更新语言请求 */
export interface UpdateLanguageRequestData {
  languageId: number
  languageName: string
  displayOrder?: number
  isActive: boolean
}

/** 语言列表请求 */
export interface GetLanguageListRequestData {
  page: number
  pageSize: number
  keyword?: string
}

/** 语言列表响应 */
export interface GetLanguageListResponse {
  data: Language[]
  total: number
  page: number
  pageSize: number
}

/** 支持的语言映射 */
export interface SupportedLanguages {
  [key: string]: string
}

/** 当前语言信息 */
export interface CurrentLanguage {
  code: string
  name: string
}