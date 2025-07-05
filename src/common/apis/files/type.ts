import type { PaginationRequest } from "../type"

/** 文件类型 */
export type FileType = "image" | "video" | "audio" | "document" | "other"

/** 文件详情 */
export interface FileDetail {
  fileId: number
  fileName: string
  fileSize: number
  fileType: FileType
  mimeType: string
  s3Key?: string
  imageUrl?: string
  userId?: number
  createdAt: string
  updatedAt: string
}

/** 文件上传响应 */
export interface FileUploadResponse {
  fileId: number
  fileName: string
  fileSize: number
  fileType: FileType
  mimeType: string
  imageUrl?: string
  s3Key?: string
}

/** 文件列表请求 */
export interface FileListRequest extends PaginationRequest {
  fileType?: FileType
  userId?: number
  fileName?: string
}

/** 图片分析结果 */
export interface ImageAnalysisResult {
  confidence: number
  detectedObjects: string[]
  location?: {
    latitude: number
    longitude: number
    address?: string
  }
  processedAt: string
  recommendations?: string[]
}