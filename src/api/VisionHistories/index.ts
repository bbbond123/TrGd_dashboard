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

const mockUrl_0_0_0_0 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_0 = undefined as any

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutVisionHistoriesRequest {
  apiSource?: string
  confidenceScore?: number
  country?: string
  imageFileId?: number
  isInJapan?: boolean
  locationLatitude?: number
  locationLongitude?: number
  recognizedLabels?: string
  recognizedLandmarks?: string
  textContent?: string
  userId?: number
  visionId: number
}

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutVisionHistoriesResponse {
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
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPutVisionHistoriesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPutVisionHistoriesRequestConfig: ApiPutVisionHistoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutVisionHistories',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPutVisionHistories = /*#__PURE__*/ (
  requestData: ApiPutVisionHistoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPutVisionHistoriesResponse>(prepare(apiPutVisionHistoriesRequestConfig, requestData), ...args)
}

apiPutVisionHistories.requestConfig = apiPutVisionHistoriesRequestConfig

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostVisionHistoriesRequest {
  apiSource: string
  confidenceScore?: number
  country?: string
  imageFileId?: number
  isInJapan?: boolean
  locationLatitude?: number
  locationLongitude?: number
  recognizedLabels: string
  recognizedLandmarks: string
  textContent?: string
  userId?: number
}

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostVisionHistoriesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    apiSource?: string
    confidenceScore?: number
    country?: string
    createdAt?: string
    imageFileId?: number
    isInJapan?: boolean
    locationLatitude?: number
    locationLongitude?: number
    processedAt?: string
    recognizedLabels?: string
    recognizedLandmarks?: string
    textContent?: string
    updatedAt?: string
    userId?: number
    visionId?: number
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
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostVisionHistoriesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostVisionHistoriesRequestConfig: ApiPostVisionHistoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostVisionHistories',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostVisionHistories = /*#__PURE__*/ (
  requestData: ApiPostVisionHistoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostVisionHistoriesResponse>(prepare(apiPostVisionHistoriesRequestConfig, requestData), ...args)
}

apiPostVisionHistories.requestConfig = apiPostVisionHistoriesRequestConfig

/**
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostVisionHistoriesGenerateTestDataRequest {}

/**
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostVisionHistoriesGenerateTestDataResponse {
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
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostVisionHistoriesGenerateTestDataRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories/generate-test-data',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostVisionHistoriesGenerateTestDataRequestConfig: ApiPostVisionHistoriesGenerateTestDataRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/api/vision-histories/generate-test-data',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'apiPostVisionHistoriesGenerateTestData',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  }

/**
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostVisionHistoriesGenerateTestData = /*#__PURE__*/ (
  requestData?: ApiPostVisionHistoriesGenerateTestDataRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostVisionHistoriesGenerateTestDataResponse>(
    prepare(apiPostVisionHistoriesGenerateTestDataRequestConfig, requestData),
    ...args,
  )
}

apiPostVisionHistoriesGenerateTestData.requestConfig = apiPostVisionHistoriesGenerateTestDataRequestConfig

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostVisionHistoriesListRequest {
  apiSource?: string
  country?: string
  dateFrom?: string
  dateTo?: string
  hasLandmark?: boolean
  isInJapan?: boolean
  minScore?: number
  page: number
  pageSize: number
  userId?: number
}

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostVisionHistoriesListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    apiSource?: string
    confidenceScore?: number
    country?: string
    createdAt?: string
    imageFileId?: number
    isInJapan?: boolean
    locationLatitude?: number
    locationLongitude?: number
    processedAt?: string
    recognizedLabels?: string
    recognizedLandmarks?: string
    textContent?: string
    updatedAt?: string
    userId?: number
    visionId?: number
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
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostVisionHistoriesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostVisionHistoriesListRequestConfig: ApiPostVisionHistoriesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostVisionHistoriesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostVisionHistoriesList = /*#__PURE__*/ (
  requestData: ApiPostVisionHistoriesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostVisionHistoriesListResponse>(
    prepare(apiPostVisionHistoriesListRequestConfig, requestData),
    ...args,
  )
}

apiPostVisionHistoriesList.requestConfig = apiPostVisionHistoriesListRequestConfig

/**
 * 接口 [获取当前用户的视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/566) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/my`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetVisionHistoriesMyRequest {
  /**
   * 页码
   */
  page?: string
  /**
   * 每页数量
   */
  pageSize?: string
}

/**
 * 接口 [获取当前用户的视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/566) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/my`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetVisionHistoriesMyResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    apiSource?: string
    confidenceScore?: number
    country?: string
    createdAt?: string
    imageFileId?: number
    isInJapan?: boolean
    locationLatitude?: number
    locationLongitude?: number
    processedAt?: string
    recognizedLabels?: string
    recognizedLandmarks?: string
    textContent?: string
    updatedAt?: string
    userId?: number
    visionId?: number
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
 * 接口 [获取当前用户的视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/566) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/my`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetVisionHistoriesMyRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories/my',
    undefined,
    string,
    'page' | 'pageSize',
    false
  >
>

/**
 * 接口 [获取当前用户的视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/566) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/my`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetVisionHistoriesMyRequestConfig: ApiGetVisionHistoriesMyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories/my',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['page', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetVisionHistoriesMy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取当前用户的视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/566) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/my`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetVisionHistoriesMy = /*#__PURE__*/ (
  requestData: ApiGetVisionHistoriesMyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetVisionHistoriesMyResponse>(prepare(apiGetVisionHistoriesMyRequestConfig, requestData), ...args)
}

apiGetVisionHistoriesMy.requestConfig = apiGetVisionHistoriesMyRequestConfig

/**
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiGetVisionHistoriesStatisticsRequest {}

/**
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiGetVisionHistoriesStatisticsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 匿名记录数
     */
    anonymousRecords?: number
    /**
     * API来源统计
     */
    apiSourceStats?: {
      apiSource?: string
      count?: number
    }[]
    /**
     * 平均置信度
     */
    avgConfidenceScore?: number
    /**
     * 国际记录数
     */
    internationalRecords?: number
    /**
     * 日本地区记录数
     */
    japanRecords?: number
    /**
     * 统计时间
     */
    timestamp?: string
    /**
     * 热门国家
     */
    topCountries?: {
      count?: number
      country?: string
    }[]
    /**
     * 总地标数
     */
    totalLandmarks?: number
    /**
     * 总记录数
     */
    totalRecords?: number
    /**
     * 唯一用户数
     */
    uniqueUsers?: number
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
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiGetVisionHistoriesStatisticsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories/statistics',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiGetVisionHistoriesStatisticsRequestConfig: ApiGetVisionHistoriesStatisticsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories/statistics',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetVisionHistoriesStatistics',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiGetVisionHistoriesStatistics = /*#__PURE__*/ (
  requestData?: ApiGetVisionHistoriesStatisticsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetVisionHistoriesStatisticsResponse>(
    prepare(apiGetVisionHistoriesStatisticsRequestConfig, requestData),
    ...args,
  )
}

apiGetVisionHistoriesStatistics.requestConfig = apiGetVisionHistoriesStatisticsRequestConfig

/**
 * 接口 [获取视觉历史记录信息↗](https://yapi.ifoodme.com/project/11/interface/api/578) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiGetVisionHistoriesVisionIdRequest {
  /**
   * 视觉历史记录ID
   */
  vision_id: string
}

/**
 * 接口 [获取视觉历史记录信息↗](https://yapi.ifoodme.com/project/11/interface/api/578) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiGetVisionHistoriesVisionIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    apiSource?: string
    confidenceScore?: number
    country?: string
    createdAt?: string
    imageFileId?: number
    isInJapan?: boolean
    locationLatitude?: number
    locationLongitude?: number
    processedAt?: string
    recognizedLabels?: string
    recognizedLandmarks?: string
    textContent?: string
    updatedAt?: string
    userId?: number
    visionId?: number
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
 * 接口 [获取视觉历史记录信息↗](https://yapi.ifoodme.com/project/11/interface/api/578) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiGetVisionHistoriesVisionIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories/{vision_id}',
    undefined,
    'vision_id',
    string,
    false
  >
>

/**
 * 接口 [获取视觉历史记录信息↗](https://yapi.ifoodme.com/project/11/interface/api/578) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiGetVisionHistoriesVisionIdRequestConfig: ApiGetVisionHistoriesVisionIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories/{vision_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['vision_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetVisionHistoriesVision_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取视觉历史记录信息↗](https://yapi.ifoodme.com/project/11/interface/api/578) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiGetVisionHistoriesVision_id = /*#__PURE__*/ (
  requestData: ApiGetVisionHistoriesVisionIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetVisionHistoriesVisionIdResponse>(
    prepare(apiGetVisionHistoriesVisionIdRequestConfig, requestData),
    ...args,
  )
}

apiGetVisionHistoriesVision_id.requestConfig = apiGetVisionHistoriesVisionIdRequestConfig

/**
 * 接口 [删除视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/584) 的 **请求类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `DELETE /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiDeleteVisionHistoriesVisionIdRequest {
  /**
   * 视觉历史记录ID
   */
  vision_id: string
}

/**
 * 接口 [删除视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/584) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `DELETE /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiDeleteVisionHistoriesVisionIdResponse {
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
 * 接口 [删除视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/584) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `DELETE /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiDeleteVisionHistoriesVisionIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/vision-histories/{vision_id}',
    undefined,
    'vision_id',
    string,
    false
  >
>

/**
 * 接口 [删除视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/584) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `DELETE /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiDeleteVisionHistoriesVisionIdRequestConfig: ApiDeleteVisionHistoriesVisionIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/vision-histories/{vision_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['vision_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteVisionHistoriesVision_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/584) 的 **请求函数**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `DELETE /api/vision-histories/{vision_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiDeleteVisionHistoriesVision_id = /*#__PURE__*/ (
  requestData: ApiDeleteVisionHistoriesVisionIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteVisionHistoriesVisionIdResponse>(
    prepare(apiDeleteVisionHistoriesVisionIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteVisionHistoriesVision_id.requestConfig = apiDeleteVisionHistoriesVisionIdRequestConfig

/* prettier-ignore-end */
