import type { ApiResponse, PaginationResponse } from "../type"
import type {
  CreateVisitHistoryRequest,
  UpdateVisitHistoryRequest,
  VisitHistory,
  VisitHistoryListRequest,
  VisitHistoryResult
} from "./type"
import { request } from "@/http/axios"

/** 获取访问历史列表 */
export function getVisitHistoryListApi(data: VisitHistoryListRequest) {
  return request<ApiResponse<PaginationResponse<VisitHistory>>>({
    url: "/visit-histories/list",
    method: "post",
    data
  })
}

/** 获取访问历史详情 */
export function getVisitHistoryDetailApi(visitId: number) {
  return request<ApiResponse<VisitHistory>>({
    url: `/visit-histories/${visitId}`,
    method: "get"
  })
}

/** 创建访问历史 */
export function createVisitHistoryApi(data: CreateVisitHistoryRequest) {
  return request<ApiResponse<VisitHistory>>({
    url: "/visit-histories",
    method: "post",
    data
  })
}

/** 更新访问历史 */
export function updateVisitHistoryApi(data: UpdateVisitHistoryRequest) {
  return request<ApiResponse<VisitHistory>>({
    url: "/visit-histories",
    method: "put",
    data
  })
}

/** 删除访问历史 */
export function deleteVisitHistoryApi(visitId: number) {
  return request<ApiResponse<void>>({
    url: `/visit-histories/${visitId}`,
    method: "delete"
  })
}

/** 处理访问记录 */
export function processVisitApi(imageFile: File, userId?: number) {
  const formData = new FormData()
  formData.append("image", imageFile)
  if (userId) {
    formData.append("user_id", userId.toString())
  }

  return request<ApiResponse<VisitHistoryResult>>({
    url: "/visit-histories/process",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: formData
  })
}

/** 获取用户的访问历史 */
export function getUserVisitHistoryApi(userId: number) {
  return request<ApiResponse<VisitHistory[]>>({
    url: `/visit-histories/users/${userId}`,
    method: "get"
  })
}

/** 获取特定地区的访问历史 */
export function getLocationVisitHistoryApi(latitude: number, longitude: number, radius: number = 1) {
  return request<ApiResponse<VisitHistory[]>>({
    url: "/visit-histories/location",
    method: "get",
    params: {
      latitude,
      longitude,
      radius
    }
  })
}
