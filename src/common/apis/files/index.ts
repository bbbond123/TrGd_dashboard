import type { IBaseResponse, IResponse } from "../type"
import type { EnhancedVisionResult, FileDetail, FileListRequest, FileUploadResponse } from "./type"
import { request } from "@/http/axios"

/** 文件上传 */
export function uploadFileApi(file: File) {
  const formData = new FormData()
  formData.append("file", file)

  return request<IBaseResponse<FileUploadResponse>>({
    url: "/files/upload",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

/** 获取文件列表 */
export function getFileListApi(data: FileListRequest) {
  return request<IResponse<FileDetail>>({
    url: "/files/list",
    method: "post",
    data
  })
}

/** 获取文件详情 */
export function getFileDetailApi(fileId: number) {
  return request<IBaseResponse<FileDetail>>({
    url: `/files/${fileId}`,
    method: "get"
  })
}

/** 下载文件 */
export function downloadFileApi(fileId: number) {
  return request<Blob>({
    url: `/files/${fileId}/download`,
    method: "get",
    responseType: "blob"
  })
}

/** 删除文件 */
export function deleteFileApi(fileId: number) {
  return request<IBaseResponse<boolean>>({
    url: `/files/${fileId}`,
    method: "delete"
  })
}

/** 图片视觉分析 */
export function visionAnalyzeApi(file: File, options?: {
  latitude?: number
  longitude?: number
  enablePlaces?: boolean
  enableWikipedia?: boolean
  enableCache?: boolean
}) {
  const formData = new FormData()
  formData.append("image", file)

  if (options?.latitude) {
    formData.append("latitude", options.latitude.toString())
  }
  if (options?.longitude) {
    formData.append("longitude", options.longitude.toString())
  }
  if (options?.enablePlaces !== undefined) {
    formData.append("enable_places", options.enablePlaces.toString())
  }
  if (options?.enableWikipedia !== undefined) {
    formData.append("enable_wikipedia", options.enableWikipedia.toString())
  }
  if (options?.enableCache !== undefined) {
    formData.append("enable_cache", options.enableCache.toString())
  }

  return request<IBaseResponse<EnhancedVisionResult>>({
    url: "/files/vision-analyze-enhanced",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

/** 通用图片分析 */
export function analyzeImageApi(file: File) {
  const formData = new FormData()
  formData.append("image", file)

  return request<IBaseResponse<any>>({
    url: "/files/analyze",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

/** 测试S3功能 */
export function testS3Api() {
  return request<IBaseResponse<any>>({
    url: "/files/test-s3",
    method: "post"
  })
}
