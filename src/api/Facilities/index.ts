/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_7 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_7 = '' as any
const prodUrl_0_0_0_7 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_7 = undefined as any

/**
 * 接口 [新建设施↗](https://yapi.ifoodme.com/project/11/interface/api/164) 的 **请求类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostFacilitiesRequest {
  /**
   * 描述
   */
  description?: string
  /**
   * 设施名
   */
  facility_name: string
  /**
   * 纬度
   */
  latitude: number
  /**
   * 所在地
   */
  location: string
  /**
   * 经度
   */
  longitude: number
  /**
   * 相关人物ID（可选）
   */
  person_id?: number
  /**
   * 关联标签ID数组
   */
  tag_ids?: number[]
}

/**
 * 接口 [新建设施↗](https://yapi.ifoodme.com/project/11/interface/api/164) 的 **返回类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostFacilitiesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    /**
     * 设施描述
     */
    description?: string
    /**
     * 设施ID
     */
    facility_id?: number
    /**
     * 设施名
     */
    facility_name?: string
    /**
     * 纬度
     */
    latitude?: number
    /**
     * 所在地
     */
    location?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 相关人物ID（可选）
     */
    person_id?: number
    /**
     * 关联标签ID数组
     */
    tag_ids?: number[]
    updated_at?: string
  }
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [新建设施↗](https://yapi.ifoodme.com/project/11/interface/api/164) 的 **请求配置的类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostFacilitiesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/facilities',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建设施↗](https://yapi.ifoodme.com/project/11/interface/api/164) 的 **请求配置**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostFacilitiesRequestConfig: ApiPostFacilitiesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/api/facilities',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFacilities',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建设施↗](https://yapi.ifoodme.com/project/11/interface/api/164) 的 **请求函数**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostFacilities = /*#__PURE__*/ (
  requestData: ApiPostFacilitiesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFacilitiesResponse>(prepare(apiPostFacilitiesRequestConfig, requestData), ...args)
}

apiPostFacilities.requestConfig = apiPostFacilitiesRequestConfig

/**
 * 接口 [获取设施列表↗](https://yapi.ifoodme.com/project/11/interface/api/170) 的 **请求类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostFacilitiesListRequest {
  /**
   * 关键字（设施名模糊搜索）
   */
  keyword?: string
  /**
   * 页码
   */
  page: number
  /**
   * 每页数量
   */
  pageSize: number
  /**
   * 标签ID数组过滤
   */
  tag_ids?: number[]
}

/**
 * 接口 [获取设施列表↗](https://yapi.ifoodme.com/project/11/interface/api/170) 的 **返回类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostFacilitiesListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    created_at?: string
    /**
     * 设施描述
     */
    description?: string
    /**
     * 设施ID
     */
    facility_id?: number
    /**
     * 设施名
     */
    facility_name?: string
    /**
     * 纬度
     */
    latitude?: number
    /**
     * 所在地
     */
    location?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 相关人物ID（可选）
     */
    person_id?: number
    /**
     * 关联标签ID数组
     */
    tag_ids?: number[]
    updated_at?: string
  }[]
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 页码
   */
  page?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 请求是否成功
   */
  success?: boolean
  /**
   * 总条数
   */
  total?: number
}

/**
 * 接口 [获取设施列表↗](https://yapi.ifoodme.com/project/11/interface/api/170) 的 **请求配置的类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostFacilitiesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/facilities/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取设施列表↗](https://yapi.ifoodme.com/project/11/interface/api/170) 的 **请求配置**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostFacilitiesListRequestConfig: ApiPostFacilitiesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/api/facilities/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFacilitiesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取设施列表↗](https://yapi.ifoodme.com/project/11/interface/api/170) 的 **请求函数**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostFacilitiesList = /*#__PURE__*/ (
  requestData: ApiPostFacilitiesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFacilitiesListResponse>(prepare(apiPostFacilitiesListRequestConfig, requestData), ...args)
}

apiPostFacilitiesList.requestConfig = apiPostFacilitiesListRequestConfig

/**
 * 接口 [搜索附近设施↗](https://yapi.ifoodme.com/project/11/interface/api/176) 的 **请求类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostFacilitiesNearbyRequest {
  /**
   * 搜索中心纬度
   */
  latitude: number
  /**
   * 搜索中心经度
   */
  longitude: number
  /**
   * 页码
   */
  page: number
  /**
   * 每页数量
   */
  pageSize: number
  /**
   * 搜索半径(米)
   */
  radius: number
}

/**
 * 接口 [搜索附近设施↗](https://yapi.ifoodme.com/project/11/interface/api/176) 的 **返回类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostFacilitiesNearbyResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    created_at?: string
    /**
     * 设施描述
     */
    description?: string
    /**
     * 设施ID
     */
    facility_id?: number
    /**
     * 设施名
     */
    facility_name?: string
    /**
     * 纬度
     */
    latitude?: number
    /**
     * 所在地
     */
    location?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 相关人物ID（可选）
     */
    person_id?: number
    /**
     * 关联标签ID数组
     */
    tag_ids?: number[]
    updated_at?: string
  }[]
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 页码
   */
  page?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 请求是否成功
   */
  success?: boolean
  /**
   * 总条数
   */
  total?: number
}

/**
 * 接口 [搜索附近设施↗](https://yapi.ifoodme.com/project/11/interface/api/176) 的 **请求配置的类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostFacilitiesNearbyRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/facilities/nearby',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [搜索附近设施↗](https://yapi.ifoodme.com/project/11/interface/api/176) 的 **请求配置**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostFacilitiesNearbyRequestConfig: ApiPostFacilitiesNearbyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/api/facilities/nearby',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFacilitiesNearby',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [搜索附近设施↗](https://yapi.ifoodme.com/project/11/interface/api/176) 的 **请求函数**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `POST /api/facilities/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostFacilitiesNearby = /*#__PURE__*/ (
  requestData: ApiPostFacilitiesNearbyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFacilitiesNearbyResponse>(prepare(apiPostFacilitiesNearbyRequestConfig, requestData), ...args)
}

apiPostFacilitiesNearby.requestConfig = apiPostFacilitiesNearbyRequestConfig

/**
 * 接口 [获取单个设施↗](https://yapi.ifoodme.com/project/11/interface/api/182) 的 **请求类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `GET /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetFacilitiesIdRequest {
  /**
   * 设施ID
   */
  id: string
}

/**
 * 接口 [获取单个设施↗](https://yapi.ifoodme.com/project/11/interface/api/182) 的 **返回类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `GET /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetFacilitiesIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    /**
     * 设施描述
     */
    description?: string
    /**
     * 设施ID
     */
    facility_id?: number
    /**
     * 设施名
     */
    facility_name?: string
    /**
     * 纬度
     */
    latitude?: number
    /**
     * 所在地
     */
    location?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 相关人物ID（可选）
     */
    person_id?: number
    /**
     * 关联标签ID数组
     */
    tag_ids?: number[]
    updated_at?: string
  }
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [获取单个设施↗](https://yapi.ifoodme.com/project/11/interface/api/182) 的 **请求配置的类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `GET /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiGetFacilitiesIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/facilities/{id}',
    undefined,
    'id',
    string,
    false
  >
>

/**
 * 接口 [获取单个设施↗](https://yapi.ifoodme.com/project/11/interface/api/182) 的 **请求配置**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `GET /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiGetFacilitiesIdRequestConfig: ApiGetFacilitiesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/api/facilities/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetFacilitiesId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取单个设施↗](https://yapi.ifoodme.com/project/11/interface/api/182) 的 **请求函数**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `GET /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiGetFacilitiesId = /*#__PURE__*/ (
  requestData: ApiGetFacilitiesIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetFacilitiesIdResponse>(prepare(apiGetFacilitiesIdRequestConfig, requestData), ...args)
}

apiGetFacilitiesId.requestConfig = apiGetFacilitiesIdRequestConfig

/**
 * 接口 [更新设施↗](https://yapi.ifoodme.com/project/11/interface/api/188) 的 **请求类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `PUT /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPutFacilitiesIdRequest {
  /**
   * 描述
   */
  description?: string
  /**
   * 设施ID
   */
  facility_id: number
  /**
   * 设施名
   */
  facility_name: string
  /**
   * 纬度
   */
  latitude: number
  /**
   * 所在地
   */
  location: string
  /**
   * 经度
   */
  longitude: number
  /**
   * 相关人物ID（可选）
   */
  person_id?: number
  /**
   * 关联标签ID数组
   */
  tag_ids?: number[]
  /**
   * 设施ID
   */
  id: string
}

/**
 * 接口 [更新设施↗](https://yapi.ifoodme.com/project/11/interface/api/188) 的 **返回类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `PUT /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPutFacilitiesIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    /**
     * 设施描述
     */
    description?: string
    /**
     * 设施ID
     */
    facility_id?: number
    /**
     * 设施名
     */
    facility_name?: string
    /**
     * 纬度
     */
    latitude?: number
    /**
     * 所在地
     */
    location?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 相关人物ID（可选）
     */
    person_id?: number
    /**
     * 关联标签ID数组
     */
    tag_ids?: number[]
    updated_at?: string
  }
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [更新设施↗](https://yapi.ifoodme.com/project/11/interface/api/188) 的 **请求配置的类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `PUT /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPutFacilitiesIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/facilities/{id}',
    undefined,
    'id',
    string,
    false
  >
>

/**
 * 接口 [更新设施↗](https://yapi.ifoodme.com/project/11/interface/api/188) 的 **请求配置**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `PUT /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPutFacilitiesIdRequestConfig: ApiPutFacilitiesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/api/facilities/{id}',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutFacilitiesId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新设施↗](https://yapi.ifoodme.com/project/11/interface/api/188) 的 **请求函数**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `PUT /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPutFacilitiesId = /*#__PURE__*/ (
  requestData: ApiPutFacilitiesIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPutFacilitiesIdResponse>(prepare(apiPutFacilitiesIdRequestConfig, requestData), ...args)
}

apiPutFacilitiesId.requestConfig = apiPutFacilitiesIdRequestConfig

/**
 * 接口 [删除设施↗](https://yapi.ifoodme.com/project/11/interface/api/194) 的 **请求类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `DELETE /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiDeleteFacilitiesIdRequest {
  /**
   * 设施ID
   */
  id: string
}

/**
 * 接口 [删除设施↗](https://yapi.ifoodme.com/project/11/interface/api/194) 的 **返回类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `DELETE /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiDeleteFacilitiesIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [删除设施↗](https://yapi.ifoodme.com/project/11/interface/api/194) 的 **请求配置的类型**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `DELETE /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiDeleteFacilitiesIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/facilities/{id}',
    undefined,
    'id',
    string,
    false
  >
>

/**
 * 接口 [删除设施↗](https://yapi.ifoodme.com/project/11/interface/api/194) 的 **请求配置**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `DELETE /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiDeleteFacilitiesIdRequestConfig: ApiDeleteFacilitiesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/api/facilities/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteFacilitiesId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除设施↗](https://yapi.ifoodme.com/project/11/interface/api/194) 的 **请求函数**
 *
 * @分类 [Facilities↗](https://yapi.ifoodme.com/project/11/interface/api/cat_41)
 * @标签 `Facilities`
 * @请求头 `DELETE /api/facilities/{id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiDeleteFacilitiesId = /*#__PURE__*/ (
  requestData: ApiDeleteFacilitiesIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteFacilitiesIdResponse>(prepare(apiDeleteFacilitiesIdRequestConfig, requestData), ...args)
}

apiDeleteFacilitiesId.requestConfig = apiDeleteFacilitiesIdRequestConfig

/* prettier-ignore-end */
