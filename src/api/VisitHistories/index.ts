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

const mockUrl_0_0_0_1 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_1 = undefined as any

/**
 * 接口 [更新访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/590) 的 **请求类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `PUT /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiPutVisitHistoriesRequest {
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
  visionId?: number
}

/**
 * 接口 [更新访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/590) 的 **返回类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `PUT /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiPutVisitHistoriesResponse {
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
 * 接口 [更新访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/590) 的 **请求配置的类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `PUT /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiPutVisitHistoriesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/visit_histories',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/590) 的 **请求配置**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `PUT /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiPutVisitHistoriesRequestConfig: ApiPutVisitHistoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/visit_histories',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutVisit_histories',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/590) 的 **请求函数**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `PUT /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiPutVisit_histories = /*#__PURE__*/ (
  requestData: ApiPutVisitHistoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPutVisitHistoriesResponse>(prepare(apiPutVisitHistoriesRequestConfig, requestData), ...args)
}

apiPutVisit_histories.requestConfig = apiPutVisitHistoriesRequestConfig

/**
 * 接口 [新建访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/596) 的 **请求类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiPostVisitHistoriesRequest {
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
}

/**
 * 接口 [新建访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/596) 的 **返回类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiPostVisitHistoriesResponse {
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
 * 接口 [新建访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/596) 的 **请求配置的类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiPostVisitHistoriesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/visit_histories',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/596) 的 **请求配置**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiPostVisitHistoriesRequestConfig: ApiPostVisitHistoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/visit_histories',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostVisit_histories',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/596) 的 **请求函数**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiPostVisit_histories = /*#__PURE__*/ (
  requestData: ApiPostVisitHistoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostVisitHistoriesResponse>(prepare(apiPostVisitHistoriesRequestConfig, requestData), ...args)
}

apiPostVisit_histories.requestConfig = apiPostVisitHistoriesRequestConfig

/**
 * 接口 [获取访问历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/602) 的 **请求类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories/list`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiPostVisitHistoriesListRequest {
  /**
   * 国家过滤
   */
  country?: string
  /**
   * 日本地区过滤
   */
  isInJapan?: boolean
  /**
   * 页码
   */
  page?: number
  /**
   * 每页数量
   */
  pageSize?: number
  /**
   * 用户ID过滤
   */
  userId?: number
}

/**
 * 接口 [获取访问历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/602) 的 **返回类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories/list`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiPostVisitHistoriesListResponse {
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
 * 接口 [获取访问历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/602) 的 **请求配置的类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories/list`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiPostVisitHistoriesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/visit_histories/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取访问历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/602) 的 **请求配置**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories/list`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiPostVisitHistoriesListRequestConfig: ApiPostVisitHistoriesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/visit_histories/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostVisit_historiesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取访问历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/602) 的 **请求函数**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `POST /api/visit_histories/list`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiPostVisit_historiesList = /*#__PURE__*/ (
  requestData: ApiPostVisitHistoriesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostVisitHistoriesListResponse>(
    prepare(apiPostVisitHistoriesListRequestConfig, requestData),
    ...args,
  )
}

apiPostVisit_historiesList.requestConfig = apiPostVisitHistoriesListRequestConfig

/**
 * 接口 [获取访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/608) 的 **请求类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `GET /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiGetVisitHistoriesHistoryIdRequest {
  /**
   * 访问历史记录ID
   */
  history_id: string
}

/**
 * 接口 [获取访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/608) 的 **返回类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `GET /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiGetVisitHistoriesHistoryIdResponse {
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
 * 接口 [获取访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/608) 的 **请求配置的类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `GET /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiGetVisitHistoriesHistoryIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/visit_histories/{history_id}',
    undefined,
    'history_id',
    string,
    false
  >
>

/**
 * 接口 [获取访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/608) 的 **请求配置**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `GET /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiGetVisitHistoriesHistoryIdRequestConfig: ApiGetVisitHistoriesHistoryIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/visit_histories/{history_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['history_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetVisit_historiesHistory_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/608) 的 **请求函数**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `GET /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiGetVisit_historiesHistory_id = /*#__PURE__*/ (
  requestData: ApiGetVisitHistoriesHistoryIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetVisitHistoriesHistoryIdResponse>(
    prepare(apiGetVisitHistoriesHistoryIdRequestConfig, requestData),
    ...args,
  )
}

apiGetVisit_historiesHistory_id.requestConfig = apiGetVisitHistoriesHistoryIdRequestConfig

/**
 * 接口 [删除访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/614) 的 **请求类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `DELETE /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiDeleteVisitHistoriesHistoryIdRequest {
  /**
   * 访问历史记录ID
   */
  history_id: string
}

/**
 * 接口 [删除访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/614) 的 **返回类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `DELETE /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export interface ApiDeleteVisitHistoriesHistoryIdResponse {
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
 * 接口 [删除访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/614) 的 **请求配置的类型**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `DELETE /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
type ApiDeleteVisitHistoriesHistoryIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/visit_histories/{history_id}',
    undefined,
    'history_id',
    string,
    false
  >
>

/**
 * 接口 [删除访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/614) 的 **请求配置**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `DELETE /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
const apiDeleteVisitHistoriesHistoryIdRequestConfig: ApiDeleteVisitHistoriesHistoryIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/visit_histories/{history_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['history_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteVisit_historiesHistory_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除访问历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/614) 的 **请求函数**
 *
 * @分类 [VisitHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_107)
 * @标签 `VisitHistories`
 * @请求头 `DELETE /api/visit_histories/{history_id}`
 * @更新时间 `2025-08-30 13:36:01`
 */
export const apiDeleteVisit_historiesHistory_id = /*#__PURE__*/ (
  requestData: ApiDeleteVisitHistoriesHistoryIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteVisitHistoriesHistoryIdResponse>(
    prepare(apiDeleteVisitHistoriesHistoryIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteVisit_historiesHistory_id.requestConfig = apiDeleteVisitHistoriesHistoryIdRequestConfig

/* prettier-ignore-end */
