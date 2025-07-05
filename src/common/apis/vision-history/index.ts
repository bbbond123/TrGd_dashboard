import type { ApiResponse, PaginationResponse } from "../type"
import type {
  CreateVisionHistoryRequest,
  UpdateVisionHistoryRequest,
  VisionHistory,
  VisionHistoryListRequest,
  VisionHistoryResult,
  VisionHistoryStatistics
} from "./type"
import { request } from "@/http/axios"

/** 获取视觉识别历史列表 */
export function getVisionHistoryListApi(data: VisionHistoryListRequest) {
  return request<ApiResponse<PaginationResponse<VisionHistory>>>({
    url: "/vision-histories/list",
    method: "post",
    data
  })
}

/** 获取视觉识别历史详情 */
export function getVisionHistoryDetailApi(visionId: number) {
  return request<ApiResponse<VisionHistory>>({
    url: `/vision-histories/${visionId}`,
    method: "get"
  })
}

/** 创建视觉识别历史 */
export function createVisionHistoryApi(data: CreateVisionHistoryRequest) {
  return request<ApiResponse<VisionHistory>>({
    url: "/vision-histories",
    method: "post",
    data
  })
}

/** 获取当前用户的视觉识别历史 */
export function getMyVisionHistoriesApi() {
  return request<ApiResponse<VisionHistory[]>>({
    url: "/vision-histories/my",
    method: "get"
  })
}

/** 获取视觉识别历史统计信息 */
export function getVisionHistoryStatisticsApi() {
  return request<ApiResponse<VisionHistoryStatistics>>({
    url: "/vision-histories/statistics",
    method: "get"
  })
}

/** 生成测试数据 */
export function generateTestDataApi() {
  return request<ApiResponse<void>>({
    url: "/vision-histories/generate-test-data",
    method: "post"
  })
}

/** 图片识别分析 */
export function visionAnalyzeApi(imageFile: File, userId?: number) {
  const formData = new FormData()
  formData.append("image", imageFile)
  if (userId) {
    formData.append("user_id", userId.toString())
  }

  return request<ApiResponse<VisionHistoryResult>>({
    url: "/files/vision-analyze",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: formData
  })
}

/** 通用图片分析 */
export function analyzeImageApi(imageFile: File) {
  const formData = new FormData()
  formData.append("image", imageFile)

  return request<ApiResponse<VisionHistoryResult>>({
    url: "/files/analyze",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: formData
  })
}
