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
  filePath: string
  s3Key?: string
  imageUrl?: string
  userId?: number
  uploaderId?: number
  user?: {
    userId: number
    username: string
    email?: string
  }
  uploader?: {
    userId: number
    username: string
    email?: string
  }
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
  uploaderId?: number
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

/** 增强版视觉识别结果 */
export interface EnhancedVisionResult {
  basicVisionResult: VisitHistoryResult
  enhancedLandmarks: EnhancedLandmark[]
  metadata: VisionMetadata
  nearbyRecommendations: EnhancedRecommendation[]
  processingStatus: ProcessingStatus
}

/** 基础视觉识别结果 */
export interface VisitHistoryResult {
  landmarks?: Landmark[]
  labels?: string[]
  textContent?: string
  latitude?: number
  longitude?: number
  description?: string
  safeSearchAnnotation?: any
  hasLandmark?: boolean
  processedAt?: string
  apiSource?: string
  nearbyRecommendations?: any
  country?: string
  isInJapan?: boolean
  savedToDatabase?: boolean
}

/** 地标信息 */
export interface Landmark {
  name: string
  score: number
  latitude?: number
  longitude?: number
  description?: string
}

/** 增强地标信息 */
export interface EnhancedLandmark {
  name: string
  score: number
  latitude?: number
  longitude?: number
  geographicInfo?: GeographicInfo
  localInfo?: LocalFacilityInfo
  placesInfo?: PlacesInfo
  wikipediaInfo?: WikipediaInfo
  relatedImages?: RelatedImage[]
}

/** 地理信息 */
export interface GeographicInfo {
  country?: string
  region?: string
  city?: string
  isInJapan?: boolean
}

/** 本地设施信息 */
export interface LocalFacilityInfo {
  facilityId?: number
  matchedName?: string
  description?: string
}

/** Google Places信息 */
export interface PlacesInfo {
  placeId?: string
  name?: string
  address?: string
  formattedAddress?: string
  phoneNumber?: string
  website?: string
  rating?: number
  userRatingsTotal?: number
  photos?: string[]
  types?: string[]
  reviews?: any
  priceLevel?: number
}

/** Wikipedia信息 */
export interface WikipediaInfo {
  pageId?: number
  title?: string
  extract?: string
  url?: string
  pageUrl?: string
  imageUrl?: string
  language?: string
  images?: WikipediaImage[]
  categories?: string[]
  coordinates?: {
    lat: number
    lon: number
  }
}

/** Wikipedia图片信息 */
export interface WikipediaImage {
  source: string
  width: number
  height: number
  description?: string
}

/** 相关图片 */
export interface RelatedImage {
  url: string
  imageUrl?: string
  thumbnail?: string
  caption?: string
  source?: string
  title?: string
  description?: string
  width?: number
  height?: number
}

/** 增强推荐信息 */
export interface EnhancedRecommendation {
  name: string
  type?: string
  category?: string
  description?: string
  distance?: number
  imageUrl?: string
  images?: RelatedImage[]
  rating?: number
  placesRating?: number
  placesReviews?: number
  recommendationScore?: number
  scoreFactors?: {
    distanceScore: number
    popularityScore?: number
    ratingScore: number
    relevanceScore: number
  }
}

/** 视觉识别元数据 */
export interface VisionMetadata {
  apiVersion?: string
  cacheUsed?: boolean
  enhancedCount?: number
  language?: string
  processedAt: string
  savedToDatabase?: boolean
  totalLandmarks?: number
  userId?: number
}

/** 处理状态 */
export interface ProcessingStatus {
  success?: boolean
  errorMessage?: string
  warnings?: string[]
  googleVisionSuccess: boolean
  googlePlacesSuccess: boolean
  localDatabaseSuccess: boolean
  wikipediaSuccess: boolean
  processingTime: number
}
