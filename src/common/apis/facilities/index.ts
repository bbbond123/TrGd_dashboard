import type { IBaseResponse, IResponse } from "../type"
import type { Facility, FacilityListRequest, CreateFacilityRequest, UpdateFacilityRequest, NearbyFacilitiesRequest } from "./type"
import { request } from "@/http/axios"

/** 获取设施列表 */
export function getFacilityListApi(data: FacilityListRequest) {
  return request<IResponse<Facility>>({
    url: "/facilities/list",
    method: "post",
    data
  })
}

/** 获取设施详情 */
export function getFacilityDetailApi(facilityId: number) {
  return request<IBaseResponse<Facility>>({
    url: `/facilities/${facilityId}`,
    method: "get"
  })
}

/** 创建设施 */
export function createFacilityApi(data: CreateFacilityRequest) {
  return request<IBaseResponse<Facility>>({
    url: "/facilities",
    method: "post",
    data
  })
}

/** 更新设施 */
export function updateFacilityApi(data: UpdateFacilityRequest) {
  return request<IBaseResponse<Facility>>({
    url: `/facilities/${data.facilityId}`,
    method: "put",
    data
  })
}

/** 删除设施 */
export function deleteFacilityApi(facilityId: number) {
  return request<IBaseResponse<boolean>>({
    url: `/facilities/${facilityId}`,
    method: "delete"
  })
}

/** 搜索附近设施 */
export function getNearbyFacilitiesApi(data: NearbyFacilitiesRequest) {
  return request<IResponse<Facility>>({
    url: "/facilities/nearby",
    method: "post",
    data
  })
}