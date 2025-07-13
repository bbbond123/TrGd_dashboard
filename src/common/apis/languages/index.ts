import type * as Language from "./type"
import type { IBaseResponse, IResponse } from "@/common/apis/type"
import { request } from "@/http/axios"

/** 获取语言列表 */
export function getLanguageListApi(data: Language.GetLanguageListRequestData) {
  return request<IResponse<Language.Language>>({
    url: "languages/list",
    method: "post",
    data
  })
}

/** 获取单个语言信息 */
export function getLanguageApi(languageId: number) {
  return request<IBaseResponse<Language.Language>>({
    url: `languages/${languageId}`,
    method: "get"
  })
}

/** 创建语言 */
export function createLanguageApi(data: Language.CreateLanguageRequestData) {
  return request<IBaseResponse<Language.Language>>({
    url: "languages",
    method: "post",
    data
  })
}

/** 更新语言 */
export function updateLanguageApi(data: Language.UpdateLanguageRequestData) {
  return request<IBaseResponse<Language.Language>>({
    url: "languages",
    method: "put",
    data
  })
}

/** 删除语言 */
export function deleteLanguageApi(languageId: number) {
  return request<IBaseResponse<void>>({
    url: `languages/${languageId}`,
    method: "delete"
  })
}

/** 获取支持的语言列表 */
export function getSupportedLanguagesApi() {
  return request<IBaseResponse<Language.SupportedLanguages>>({
    url: "languages",
    method: "get"
  })
}

/** 获取当前语言设置 */
export function getCurrentLanguageApi() {
  return request<IBaseResponse<Language.CurrentLanguage>>({
    url: "languages/current",
    method: "get"
  })
}