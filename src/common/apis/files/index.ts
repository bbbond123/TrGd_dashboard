import type { IBaseResponse, IResponse } from "../type"
import type { FileUploadResponse, FileListRequest, FileDetail } from "./type"
import { request } from "@/http/axios"

/** 文件上传 */
export function uploadFileApi(file: File) {
  const formData = new FormData()
  formData.append("file", file)

  return request<IBaseResponse<FileUploadResponse>>({
    url: "/api/files/upload",
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
    url: "/api/files/list",
    method: "post",
    data
  })
}

/** 获取文件详情 */
export function getFileDetailApi(fileId: number) {
  return request<IBaseResponse<FileDetail>>({
    url: `/api/files/${fileId}`,
    method: "get"
  })
}

/** 下载文件 */
export function downloadFileApi(fileId: number) {
  return request<Blob>({
    url: `/api/files/${fileId}/download`,
    method: "get",
    responseType: "blob"
  })
}

/** 图片视觉分析 */
export function visionAnalyzeApi(file: File, userId?: number) {
  const formData = new FormData()
  formData.append("image", file)
  if (userId) {
    formData.append("user_id", userId.toString())
  }

  return request<IBaseResponse<any>>({
    url: "/api/files/vision-analyze",
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
    url: "/api/files/analyze",
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
    url: "/api/files/test-s3",
    method: "post"
  })
}