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

const mockUrl_0_0_0_14 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_14 = '' as any
const prodUrl_0_0_0_14 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_14 = undefined as any

/**
 * 接口 [更新Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/392) 的 **请求类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `PUT /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutRefreshTokensRequest {
  expires_at?: string
  refresh_token?: string
  revoked?: boolean
  token_id: number
  user_id?: number
}

/**
 * 接口 [更新Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/392) 的 **返回类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `PUT /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutRefreshTokensResponse {
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
 * 接口 [更新Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/392) 的 **请求配置的类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `PUT /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPutRefreshTokensRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/refresh_tokens',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/392) 的 **请求配置**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `PUT /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPutRefreshTokensRequestConfig: ApiPutRefreshTokensRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_14,
  devUrl: devUrl_0_0_0_14,
  prodUrl: prodUrl_0_0_0_14,
  path: '/api/refresh_tokens',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_14,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutRefresh_tokens',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/392) 的 **请求函数**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `PUT /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPutRefresh_tokens = /*#__PURE__*/ (
  requestData: ApiPutRefreshTokensRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPutRefreshTokensResponse>(prepare(apiPutRefreshTokensRequestConfig, requestData), ...args)
}

apiPutRefresh_tokens.requestConfig = apiPutRefreshTokensRequestConfig

/**
 * 接口 [新建Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/398) 的 **请求类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostRefreshTokensRequest {
  expires_at: string
  refresh_token: string
  revoked?: boolean
  user_id: number
}

/**
 * 接口 [新建Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/398) 的 **返回类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostRefreshTokensResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    expires_at?: string
    refresh_token?: string
    revoked?: boolean
    token_id?: number
    user_id?: number
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
 * 接口 [新建Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/398) 的 **请求配置的类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostRefreshTokensRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/refresh_tokens',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/398) 的 **请求配置**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostRefreshTokensRequestConfig: ApiPostRefreshTokensRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_14,
  devUrl: devUrl_0_0_0_14,
  prodUrl: prodUrl_0_0_0_14,
  path: '/api/refresh_tokens',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_14,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostRefresh_tokens',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/398) 的 **请求函数**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostRefresh_tokens = /*#__PURE__*/ (
  requestData: ApiPostRefreshTokensRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostRefreshTokensResponse>(prepare(apiPostRefreshTokensRequestConfig, requestData), ...args)
}

apiPostRefresh_tokens.requestConfig = apiPostRefreshTokensRequestConfig

/**
 * 接口 [获取Refresh Token列表↗](https://yapi.ifoodme.com/project/11/interface/api/404) 的 **请求类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostRefreshTokensListRequest {
  page: number
  pageSize: number
}

/**
 * 接口 [获取Refresh Token列表↗](https://yapi.ifoodme.com/project/11/interface/api/404) 的 **返回类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostRefreshTokensListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    created_at?: string
    expires_at?: string
    refresh_token?: string
    revoked?: boolean
    token_id?: number
    user_id?: number
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
 * 接口 [获取Refresh Token列表↗](https://yapi.ifoodme.com/project/11/interface/api/404) 的 **请求配置的类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostRefreshTokensListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/refresh_tokens/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取Refresh Token列表↗](https://yapi.ifoodme.com/project/11/interface/api/404) 的 **请求配置**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostRefreshTokensListRequestConfig: ApiPostRefreshTokensListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_14,
  devUrl: devUrl_0_0_0_14,
  prodUrl: prodUrl_0_0_0_14,
  path: '/api/refresh_tokens/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_14,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostRefresh_tokensList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取Refresh Token列表↗](https://yapi.ifoodme.com/project/11/interface/api/404) 的 **请求函数**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `POST /api/refresh_tokens/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostRefresh_tokensList = /*#__PURE__*/ (
  requestData: ApiPostRefreshTokensListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostRefreshTokensListResponse>(prepare(apiPostRefreshTokensListRequestConfig, requestData), ...args)
}

apiPostRefresh_tokensList.requestConfig = apiPostRefreshTokensListRequestConfig

/**
 * 接口 [获取Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/410) 的 **请求类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `GET /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetRefreshTokensTokenIdRequest {
  /**
   * Token ID
   */
  token_id: string
}

/**
 * 接口 [获取Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/410) 的 **返回类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `GET /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetRefreshTokensTokenIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    expires_at?: string
    refresh_token?: string
    revoked?: boolean
    token_id?: number
    user_id?: number
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
 * 接口 [获取Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/410) 的 **请求配置的类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `GET /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetRefreshTokensTokenIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/refresh_tokens/{token_id}',
    undefined,
    'token_id',
    string,
    false
  >
>

/**
 * 接口 [获取Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/410) 的 **请求配置**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `GET /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetRefreshTokensTokenIdRequestConfig: ApiGetRefreshTokensTokenIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_14,
  devUrl: devUrl_0_0_0_14,
  prodUrl: prodUrl_0_0_0_14,
  path: '/api/refresh_tokens/{token_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_14,
  paramNames: ['token_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetRefresh_tokensToken_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/410) 的 **请求函数**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `GET /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetRefresh_tokensToken_id = /*#__PURE__*/ (
  requestData: ApiGetRefreshTokensTokenIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetRefreshTokensTokenIdResponse>(
    prepare(apiGetRefreshTokensTokenIdRequestConfig, requestData),
    ...args,
  )
}

apiGetRefresh_tokensToken_id.requestConfig = apiGetRefreshTokensTokenIdRequestConfig

/**
 * 接口 [删除Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/416) 的 **请求类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `DELETE /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteRefreshTokensTokenIdRequest {
  /**
   * Token ID
   */
  token_id: string
}

/**
 * 接口 [删除Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/416) 的 **返回类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `DELETE /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteRefreshTokensTokenIdResponse {
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
 * 接口 [删除Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/416) 的 **请求配置的类型**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `DELETE /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiDeleteRefreshTokensTokenIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/refresh_tokens/{token_id}',
    undefined,
    'token_id',
    string,
    false
  >
>

/**
 * 接口 [删除Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/416) 的 **请求配置**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `DELETE /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiDeleteRefreshTokensTokenIdRequestConfig: ApiDeleteRefreshTokensTokenIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_14,
  devUrl: devUrl_0_0_0_14,
  prodUrl: prodUrl_0_0_0_14,
  path: '/api/refresh_tokens/{token_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_14,
  paramNames: ['token_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteRefresh_tokensToken_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除Refresh Token↗](https://yapi.ifoodme.com/project/11/interface/api/416) 的 **请求函数**
 *
 * @分类 [RefreshTokens↗](https://yapi.ifoodme.com/project/11/interface/api/cat_83)
 * @标签 `RefreshTokens`
 * @请求头 `DELETE /api/refresh_tokens/{token_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiDeleteRefresh_tokensToken_id = /*#__PURE__*/ (
  requestData: ApiDeleteRefreshTokensTokenIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteRefreshTokensTokenIdResponse>(
    prepare(apiDeleteRefreshTokensTokenIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteRefresh_tokensToken_id.requestConfig = apiDeleteRefreshTokensTokenIdRequestConfig

/* prettier-ignore-end */
