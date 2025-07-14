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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPutVisionHistoriesRequest {}

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPutVisionHistoriesResponse {}

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-07-08 23:44:20`
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
    true
  >
>

/**
 * 接口 [更新视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/542) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `PUT /api/vision-histories`
 * @更新时间 `2025-07-08 23:44:20`
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
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export const apiPutVisionHistories = /*#__PURE__*/ (
  requestData?: ApiPutVisionHistoriesRequest,
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPostVisionHistoriesRequest {}

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPostVisionHistoriesResponse {}

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-07-08 23:44:20`
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
    true
  >
>

/**
 * 接口 [新建视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/548) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories`
 * @更新时间 `2025-07-08 23:44:20`
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
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export const apiPostVisionHistories = /*#__PURE__*/ (
  requestData?: ApiPostVisionHistoriesRequest,
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPostVisionHistoriesGenerateTestDataRequest {}

/**
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPostVisionHistoriesGenerateTestDataResponse {}

/**
 * 接口 [生成丰富的测试数据 (开发\/测试用)↗](https://yapi.ifoodme.com/project/11/interface/api/554) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/generate-test-data`
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPostVisionHistoriesListRequest {}

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiPostVisionHistoriesListResponse {}

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-07-08 23:44:20`
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
    true
  >
>

/**
 * 接口 [获取视觉历史记录列表↗](https://yapi.ifoodme.com/project/11/interface/api/560) 的 **请求配置**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `POST /api/vision-histories/list`
 * @更新时间 `2025-07-08 23:44:20`
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
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export const apiPostVisionHistoriesList = /*#__PURE__*/ (
  requestData?: ApiPostVisionHistoriesListRequest,
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiGetVisionHistoriesMyResponse {}

/**
 * 接口 [获取当前用户的视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/566) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/my`
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiGetVisionHistoriesStatisticsRequest {}

/**
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **返回类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiGetVisionHistoriesStatisticsResponse {}

/**
 * 接口 [获取视觉历史记录统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/572) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/statistics`
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiGetVisionHistoriesVisionIdResponse {}

/**
 * 接口 [获取视觉历史记录信息↗](https://yapi.ifoodme.com/project/11/interface/api/578) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `GET /api/vision-histories/{vision_id}`
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
 */
export interface ApiDeleteVisionHistoriesVisionIdResponse {}

/**
 * 接口 [删除视觉历史记录↗](https://yapi.ifoodme.com/project/11/interface/api/584) 的 **请求配置的类型**
 *
 * @分类 [VisionHistories↗](https://yapi.ifoodme.com/project/11/interface/api/cat_101)
 * @标签 `VisionHistories`
 * @请求头 `DELETE /api/vision-histories/{vision_id}`
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
 * @更新时间 `2025-07-08 23:44:20`
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
