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

const mockUrl_0_0_0_15 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_15 = '' as any
const prodUrl_0_0_0_15 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_15 = undefined as any

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutStoresRequest {
  address?: string
  business_hours?: string
  description?: string
  latitude?: number
  location?: string
  longitude?: number
  phone_number?: string
  rating_score?: number
  store_category?: string
  store_id: number
  store_name?: string
  /**
   * 关联标签ID数组
   */
  tag_ids?: number[]
}

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutStoresResponse {
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
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPutStoresRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPutStoresRequestConfig: ApiPutStoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutStores',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPutStores = /*#__PURE__*/ (requestData: ApiPutStoresRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutStoresResponse>(prepare(apiPutStoresRequestConfig, requestData), ...args)
}

apiPutStores.requestConfig = apiPutStoresRequestConfig

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostStoresRequest {
  address: string
  business_hours: string
  description?: string
  latitude: number
  location: string
  longitude: number
  phone_number: string
  rating_score: number
  store_category: string
  store_name: string
  /**
   * 关联标签ID数组
   */
  tag_ids?: number[]
}

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostStoresResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    address?: string
    business_hours?: string
    created_at?: string
    description?: string
    latitude?: number
    location?: string
    longitude?: number
    phone_number?: string
    rating_score?: number
    store_category?: string
    store_id?: number
    store_name?: string
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
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostStoresRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostStoresRequestConfig: ApiPostStoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostStores',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostStores = /*#__PURE__*/ (requestData: ApiPostStoresRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostStoresResponse>(prepare(apiPostStoresRequestConfig, requestData), ...args)
}

apiPostStores.requestConfig = apiPostStoresRequestConfig

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostStoresListRequest {
  keyword?: string
  page: number
  pageSize: number
  /**
   * 标签ID数组过滤
   */
  tag_ids?: number[]
}

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostStoresListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    address?: string
    business_hours?: string
    created_at?: string
    description?: string
    latitude?: number
    location?: string
    longitude?: number
    phone_number?: string
    rating_score?: number
    store_category?: string
    store_id?: number
    store_name?: string
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
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostStoresListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostStoresListRequestConfig: ApiPostStoresListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostStoresList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostStoresList = /*#__PURE__*/ (
  requestData: ApiPostStoresListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostStoresListResponse>(prepare(apiPostStoresListRequestConfig, requestData), ...args)
}

apiPostStoresList.requestConfig = apiPostStoresListRequestConfig

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetStoresStoreIdTagsRequest {
  /**
   * 商铺ID
   */
  storeID: string
}

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetStoresStoreIdTagsResponse {
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
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetStoresStoreIdTagsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{storeID}/tags',
    undefined,
    'storeID',
    string,
    false
  >
>

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetStoresStoreIdTagsRequestConfig: ApiGetStoresStoreIdTagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{storeID}/tags',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['storeID'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetStoresStoreIDTags',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetStoresStoreIDTags = /*#__PURE__*/ (
  requestData: ApiGetStoresStoreIdTagsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetStoresStoreIdTagsResponse>(prepare(apiGetStoresStoreIdTagsRequestConfig, requestData), ...args)
}

apiGetStoresStoreIDTags.requestConfig = apiGetStoresStoreIdTagsRequestConfig

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostStoresStoreIdTagsRequest {
  tag_id: number
  /**
   * 商铺ID
   */
  storeID: string
}

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostStoresStoreIdTagsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    address?: string
    business_hours?: string
    created_at?: string
    description?: string
    latitude?: number
    location?: string
    longitude?: number
    phone_number?: string
    rating_score?: number
    store_category?: string
    store_id?: number
    store_name?: string
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
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostStoresStoreIdTagsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{storeID}/tags',
    undefined,
    'storeID',
    string,
    false
  >
>

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostStoresStoreIdTagsRequestConfig: ApiPostStoresStoreIdTagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{storeID}/tags',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['storeID'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostStoresStoreIDTags',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostStoresStoreIDTags = /*#__PURE__*/ (
  requestData: ApiPostStoresStoreIdTagsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostStoresStoreIdTagsResponse>(prepare(apiPostStoresStoreIdTagsRequestConfig, requestData), ...args)
}

apiPostStoresStoreIDTags.requestConfig = apiPostStoresStoreIdTagsRequestConfig

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteStoresStoreIdTagsTagIdRequest {
  /**
   * 商铺ID
   */
  storeID: string
  /**
   * 标签ID
   */
  tagID: string
}

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteStoresStoreIdTagsTagIdResponse {
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
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiDeleteStoresStoreIdTagsTagIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{storeID}/tags/{tagID}',
    undefined,
    'storeID' | 'tagID',
    string,
    false
  >
>

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiDeleteStoresStoreIdTagsTagIdRequestConfig: ApiDeleteStoresStoreIdTagsTagIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{storeID}/tags/{tagID}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['storeID', 'tagID'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteStoresStoreIDTagsTagID',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiDeleteStoresStoreIDTagsTagID = /*#__PURE__*/ (
  requestData: ApiDeleteStoresStoreIdTagsTagIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteStoresStoreIdTagsTagIdResponse>(
    prepare(apiDeleteStoresStoreIdTagsTagIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteStoresStoreIDTagsTagID.requestConfig = apiDeleteStoresStoreIdTagsTagIdRequestConfig

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetStoresStoreIdRequest {
  /**
   * 商铺ID
   */
  store_id: string
}

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetStoresStoreIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    address?: string
    business_hours?: string
    created_at?: string
    description?: string
    latitude?: number
    location?: string
    longitude?: number
    phone_number?: string
    rating_score?: number
    store_category?: string
    store_id?: number
    store_name?: string
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
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetStoresStoreIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{store_id}',
    undefined,
    'store_id',
    string,
    false
  >
>

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetStoresStoreIdRequestConfig: ApiGetStoresStoreIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{store_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['store_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetStoresStore_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetStoresStore_id = /*#__PURE__*/ (
  requestData: ApiGetStoresStoreIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetStoresStoreIdResponse>(prepare(apiGetStoresStoreIdRequestConfig, requestData), ...args)
}

apiGetStoresStore_id.requestConfig = apiGetStoresStoreIdRequestConfig

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteStoresStoreIdRequest {
  /**
   * 商铺ID
   */
  store_id: string
}

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteStoresStoreIdResponse {
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
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiDeleteStoresStoreIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{store_id}',
    undefined,
    'store_id',
    string,
    false
  >
>

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiDeleteStoresStoreIdRequestConfig: ApiDeleteStoresStoreIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{store_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['store_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteStoresStore_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiDeleteStoresStore_id = /*#__PURE__*/ (
  requestData: ApiDeleteStoresStoreIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteStoresStoreIdResponse>(prepare(apiDeleteStoresStoreIdRequestConfig, requestData), ...args)
}

apiDeleteStoresStore_id.requestConfig = apiDeleteStoresStoreIdRequestConfig

/* prettier-ignore-end */
