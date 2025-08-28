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

const mockUrl_0_0_0_16 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_16 = '' as any
const prodUrl_0_0_0_16 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_16 = undefined as any

/**
 * 接口 [更新标签↗](https://yapi.ifoodme.com/project/11/interface/api/470) 的 **请求类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `PUT /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPutTagsRequest {
  is_active?: boolean
  tag_id: number
  tag_name?: string
}

/**
 * 接口 [更新标签↗](https://yapi.ifoodme.com/project/11/interface/api/470) 的 **返回类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `PUT /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPutTagsResponse {
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
 * 接口 [更新标签↗](https://yapi.ifoodme.com/project/11/interface/api/470) 的 **请求配置的类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `PUT /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPutTagsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/tags',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新标签↗](https://yapi.ifoodme.com/project/11/interface/api/470) 的 **请求配置**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `PUT /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPutTagsRequestConfig: ApiPutTagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/api/tags',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutTags',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新标签↗](https://yapi.ifoodme.com/project/11/interface/api/470) 的 **请求函数**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `PUT /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPutTags = /*#__PURE__*/ (requestData: ApiPutTagsRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutTagsResponse>(prepare(apiPutTagsRequestConfig, requestData), ...args)
}

apiPutTags.requestConfig = apiPutTagsRequestConfig

/**
 * 接口 [创建标签↗](https://yapi.ifoodme.com/project/11/interface/api/476) 的 **请求类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostTagsRequest {
  is_active?: boolean
  tag_name: string
}

/**
 * 接口 [创建标签↗](https://yapi.ifoodme.com/project/11/interface/api/476) 的 **返回类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostTagsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    is_active?: boolean
    tag_id?: number
    tag_name?: string
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
 * 接口 [创建标签↗](https://yapi.ifoodme.com/project/11/interface/api/476) 的 **请求配置的类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostTagsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/tags',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [创建标签↗](https://yapi.ifoodme.com/project/11/interface/api/476) 的 **请求配置**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostTagsRequestConfig: ApiPostTagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/api/tags',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostTags',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建标签↗](https://yapi.ifoodme.com/project/11/interface/api/476) 的 **请求函数**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostTags = /*#__PURE__*/ (requestData: ApiPostTagsRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostTagsResponse>(prepare(apiPostTagsRequestConfig, requestData), ...args)
}

apiPostTags.requestConfig = apiPostTagsRequestConfig

/**
 * 接口 [获取标签列表↗](https://yapi.ifoodme.com/project/11/interface/api/482) 的 **请求类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostTagsListRequest {
  keyword?: string
  page: number
  pageSize: number
}

/**
 * 接口 [获取标签列表↗](https://yapi.ifoodme.com/project/11/interface/api/482) 的 **返回类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostTagsListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    created_at?: string
    is_active?: boolean
    tag_id?: number
    tag_name?: string
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
 * 接口 [获取标签列表↗](https://yapi.ifoodme.com/project/11/interface/api/482) 的 **请求配置的类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostTagsListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/tags/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取标签列表↗](https://yapi.ifoodme.com/project/11/interface/api/482) 的 **请求配置**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostTagsListRequestConfig: ApiPostTagsListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/api/tags/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostTagsList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取标签列表↗](https://yapi.ifoodme.com/project/11/interface/api/482) 的 **请求函数**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `POST /api/tags/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostTagsList = /*#__PURE__*/ (requestData: ApiPostTagsListRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostTagsListResponse>(prepare(apiPostTagsListRequestConfig, requestData), ...args)
}

apiPostTagsList.requestConfig = apiPostTagsListRequestConfig

/**
 * 接口 [获取标签↗](https://yapi.ifoodme.com/project/11/interface/api/488) 的 **请求类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `GET /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiGetTagsTagIdRequest {
  /**
   * 标签ID
   */
  tag_id: string
}

/**
 * 接口 [获取标签↗](https://yapi.ifoodme.com/project/11/interface/api/488) 的 **返回类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `GET /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiGetTagsTagIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    created_at?: string
    is_active?: boolean
    tag_id?: number
    tag_name?: string
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
 * 接口 [获取标签↗](https://yapi.ifoodme.com/project/11/interface/api/488) 的 **请求配置的类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `GET /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
type ApiGetTagsTagIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/tags/{tag_id}',
    undefined,
    'tag_id',
    string,
    false
  >
>

/**
 * 接口 [获取标签↗](https://yapi.ifoodme.com/project/11/interface/api/488) 的 **请求配置**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `GET /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
const apiGetTagsTagIdRequestConfig: ApiGetTagsTagIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/api/tags/{tag_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: ['tag_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetTagsTag_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取标签↗](https://yapi.ifoodme.com/project/11/interface/api/488) 的 **请求函数**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `GET /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
export const apiGetTagsTag_id = /*#__PURE__*/ (requestData: ApiGetTagsTagIdRequest, ...args: UserRequestRestArgs) => {
  return request<ApiGetTagsTagIdResponse>(prepare(apiGetTagsTagIdRequestConfig, requestData), ...args)
}

apiGetTagsTag_id.requestConfig = apiGetTagsTagIdRequestConfig

/**
 * 接口 [删除标签↗](https://yapi.ifoodme.com/project/11/interface/api/494) 的 **请求类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `DELETE /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiDeleteTagsTagIdRequest {
  /**
   * 标签ID
   */
  tag_id: string
}

/**
 * 接口 [删除标签↗](https://yapi.ifoodme.com/project/11/interface/api/494) 的 **返回类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `DELETE /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiDeleteTagsTagIdResponse {
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
 * 接口 [删除标签↗](https://yapi.ifoodme.com/project/11/interface/api/494) 的 **请求配置的类型**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `DELETE /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
type ApiDeleteTagsTagIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/tags/{tag_id}',
    undefined,
    'tag_id',
    string,
    false
  >
>

/**
 * 接口 [删除标签↗](https://yapi.ifoodme.com/project/11/interface/api/494) 的 **请求配置**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `DELETE /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
const apiDeleteTagsTagIdRequestConfig: ApiDeleteTagsTagIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_16,
  devUrl: devUrl_0_0_0_16,
  prodUrl: prodUrl_0_0_0_16,
  path: '/api/tags/{tag_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_16,
  paramNames: ['tag_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteTagsTag_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除标签↗](https://yapi.ifoodme.com/project/11/interface/api/494) 的 **请求函数**
 *
 * @分类 [Tags↗](https://yapi.ifoodme.com/project/11/interface/api/cat_95)
 * @标签 `Tags`
 * @请求头 `DELETE /api/tags/{tag_id}`
 * @更新时间 `2025-08-28 18:12:01`
 */
export const apiDeleteTagsTag_id = /*#__PURE__*/ (
  requestData: ApiDeleteTagsTagIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteTagsTagIdResponse>(prepare(apiDeleteTagsTagIdRequestConfig, requestData), ...args)
}

apiDeleteTagsTag_id.requestConfig = apiDeleteTagsTagIdRequestConfig

/* prettier-ignore-end */
