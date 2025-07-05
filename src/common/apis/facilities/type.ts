import type { PaginationRequest } from "../type"

/** 设施类型 */
export type FacilityType = "restaurant" | "hotel" | "attraction" | "transport" | "shopping" | "entertainment" | "other"

/** 设施 */
export interface Facility {
  facilityId: number
  name: string
  description?: string
  type: FacilityType
  address: string
  latitude: number
  longitude: number
  phone?: string
  website?: string
  openingHours?: string
  rating?: number
  imageUrl?: string
  userId?: number
  createdAt: string
  updatedAt: string
}

/** 设施列表请求 */
export interface FacilityListRequest extends PaginationRequest {
  name?: string
  type?: FacilityType
  address?: string
  userId?: number
}

/** 创建设施请求 */
export interface CreateFacilityRequest {
  name: string
  description?: string
  type: FacilityType
  address: string
  latitude: number
  longitude: number
  phone?: string
  website?: string
  openingHours?: string
  rating?: number
  imageUrl?: string
}

/** 更新设施请求 */
export interface UpdateFacilityRequest {
  facilityId: number
  name?: string
  description?: string
  type?: FacilityType
  address?: string
  latitude?: number
  longitude?: number
  phone?: string
  website?: string
  openingHours?: string
  rating?: number
  imageUrl?: string
}

/** 附近设施搜索请求 */
export interface NearbyFacilitiesRequest {
  latitude: number
  longitude: number
  radius?: number // 半径，单位：公里，默认1km
  type?: FacilityType
  limit?: number
}