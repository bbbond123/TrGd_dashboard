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

const mockUrl_0_0_0_3 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_3 = undefined as any

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPutArticlesRequest {
  /**
   * 详细地址
   */
  address?: string
  articleId: number
  articleImage?: number[]
  bodyText?: string
  category?: string
  commentCount?: number
  imageFileId?: number
  /**
   * 地理位置相关字段
   */
  latitude?: number
  likeCount?: number
  /**
   * 地点名称
   */
  locationName?: string
  /**
   * 经度
   */
  longitude?: number
  /**
   * 关联标签ID数组
   */
  tagIds?: number[]
  title?: string
}

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPutArticlesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    address?: string
    articleId?: number
    bodyText?: string
    category?: string
    commentCount?: number
    createdAt?: string
    imageFileId?: number
    imageUrl?: string
    latitude?: number
    likeCount?: number
    locationName?: string
    longitude?: number
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    title?: string
    updatedAt?: string
    userAvatar?: string
    userId?: number
    /**
     * 用户信息
     */
    userName?: string
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
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPutArticlesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPutArticlesRequestConfig: ApiPutArticlesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutArticles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPutArticles = /*#__PURE__*/ (requestData: ApiPutArticlesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutArticlesResponse>(prepare(apiPutArticlesRequestConfig, requestData), ...args)
}

apiPutArticles.requestConfig = apiPutArticlesRequestConfig

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesRequest {
  /**
   * 文章标题
   */
  title: string
  /**
   * 文章内容
   */
  body_text: string
  /**
   * 文章分类
   */
  category?: string
  /**
   * 点赞数
   */
  like_count?: string
  /**
   * 评论数
   */
  comment_count?: string
  /**
   * 纬度
   */
  latitude?: string
  /**
   * 经度
   */
  longitude?: string
  /**
   * 地点名称
   */
  location_name?: string
  /**
   * 详细地址
   */
  address?: string
  /**
   * 文章图片
   */
  image?: FileData
}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 详细地址
     */
    address?: string
    articleId?: number
    articleImage?: number[]
    bodyText?: string
    category?: string
    commentCount?: number
    createdAt?: string
    imageFileId?: number
    imageUrl?: string
    /**
     * 地理位置相关字段
     */
    latitude?: number
    likeCount?: number
    /**
     * 地点名称
     */
    locationName?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    title?: string
    updatedAt?: string
    /**
     * 发表人ID
     */
    userId?: number
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
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostArticlesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostArticlesRequestConfig: ApiPostArticlesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostArticles = /*#__PURE__*/ (requestData: ApiPostArticlesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostArticlesResponse>(prepare(apiPostArticlesRequestConfig, requestData), ...args)
}

apiPostArticles.requestConfig = apiPostArticlesRequestConfig

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesListRequest {
  address?: string
  bodyText?: string
  category?: string
  commentCount?: number
  latitude?: number
  likeCount?: number
  locationName?: string
  longitude?: number
  page: number
  pageSize: number
  /**
   * 标签ID数组过滤
   */
  tagIds?: number[]
  title?: string
}

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    /**
     * 详细地址
     */
    address?: string
    articleId?: number
    articleImage?: number[]
    bodyText?: string
    category?: string
    commentCount?: number
    createdAt?: string
    imageFileId?: number
    imageUrl?: string
    /**
     * 地理位置相关字段
     */
    latitude?: number
    likeCount?: number
    /**
     * 地点名称
     */
    locationName?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    title?: string
    updatedAt?: string
    /**
     * 发表人ID
     */
    userId?: number
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
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostArticlesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostArticlesListRequestConfig: ApiPostArticlesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostArticlesList = /*#__PURE__*/ (
  requestData: ApiPostArticlesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesListResponse>(prepare(apiPostArticlesListRequestConfig, requestData), ...args)
}

apiPostArticlesList.requestConfig = apiPostArticlesListRequestConfig

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesNearbyRequest {
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
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesNearbyResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    /**
     * 详细地址
     */
    address?: string
    articleId?: number
    articleImage?: number[]
    bodyText?: string
    category?: string
    commentCount?: number
    createdAt?: string
    imageFileId?: number
    imageUrl?: string
    /**
     * 地理位置相关字段
     */
    latitude?: number
    likeCount?: number
    /**
     * 地点名称
     */
    locationName?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    title?: string
    updatedAt?: string
    /**
     * 发表人ID
     */
    userId?: number
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
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostArticlesNearbyRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/nearby',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostArticlesNearbyRequestConfig: ApiPostArticlesNearbyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/nearby',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesNearby',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostArticlesNearby = /*#__PURE__*/ (
  requestData: ApiPostArticlesNearbyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesNearbyResponse>(prepare(apiPostArticlesNearbyRequestConfig, requestData), ...args)
}

apiPostArticlesNearby.requestConfig = apiPostArticlesNearbyRequestConfig

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesStatsRequest {
  category?: string
  keyword?: string
  page: number
  pageSize: number
}

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesStatsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    /**
     * 当前页
     */
    currentPage?: number
    /**
     * 是否有下一页
     */
    hasNext?: boolean
    /**
     * 是否有上一页
     */
    hasPrev?: boolean
    /**
     * 每页数量
     */
    pageSize?: number
    /**
     * 总文章数
     */
    total?: number
    /**
     * 总页数
     */
    totalPages?: number
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
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostArticlesStatsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/stats',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostArticlesStatsRequestConfig: ApiPostArticlesStatsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/stats',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesStats',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostArticlesStats = /*#__PURE__*/ (
  requestData: ApiPostArticlesStatsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesStatsResponse>(prepare(apiPostArticlesStatsRequestConfig, requestData), ...args)
}

apiPostArticlesStats.requestConfig = apiPostArticlesStatsRequestConfig

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesWithImageRequest {
  /**
   * 文章标题
   */
  title: string
  /**
   * 文章内容
   */
  body_text: string
  /**
   * 文章分类
   */
  category?: string
  /**
   * 点赞数
   */
  like_count?: string
  /**
   * 评论数
   */
  comment_count?: string
  /**
   * 文章图片
   */
  image?: FileData
}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesWithImageResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 详细地址
     */
    address?: string
    articleId?: number
    articleImage?: number[]
    bodyText?: string
    category?: string
    commentCount?: number
    createdAt?: string
    imageFileId?: number
    imageUrl?: string
    /**
     * 地理位置相关字段
     */
    latitude?: number
    likeCount?: number
    /**
     * 地点名称
     */
    locationName?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    title?: string
    updatedAt?: string
    /**
     * 发表人ID
     */
    userId?: number
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
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostArticlesWithImageRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/with-image',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostArticlesWithImageRequestConfig: ApiPostArticlesWithImageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/with-image',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesWithImage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostArticlesWithImage = /*#__PURE__*/ (
  requestData: ApiPostArticlesWithImageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesWithImageResponse>(prepare(apiPostArticlesWithImageRequestConfig, requestData), ...args)
}

apiPostArticlesWithImage.requestConfig = apiPostArticlesWithImageRequestConfig

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetArticlesArticleIdRequest {
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetArticlesArticleIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 详细地址
     */
    address?: string
    articleId?: number
    articleImage?: number[]
    bodyText?: string
    category?: string
    commentCount?: number
    createdAt?: string
    imageFileId?: number
    imageUrl?: string
    /**
     * 地理位置相关字段
     */
    latitude?: number
    likeCount?: number
    /**
     * 地点名称
     */
    locationName?: string
    /**
     * 经度
     */
    longitude?: number
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    title?: string
    updatedAt?: string
    /**
     * 发表人ID
     */
    userId?: number
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
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiGetArticlesArticleIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}',
    undefined,
    'article_id',
    string,
    false
  >
>

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiGetArticlesArticleIdRequestConfig: ApiGetArticlesArticleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetArticlesArticle_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiGetArticlesArticle_id = /*#__PURE__*/ (
  requestData: ApiGetArticlesArticleIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetArticlesArticleIdResponse>(prepare(apiGetArticlesArticleIdRequestConfig, requestData), ...args)
}

apiGetArticlesArticle_id.requestConfig = apiGetArticlesArticleIdRequestConfig

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiDeleteArticlesArticleIdRequest {
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiDeleteArticlesArticleIdResponse {
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
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiDeleteArticlesArticleIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}',
    undefined,
    'article_id',
    string,
    false
  >
>

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiDeleteArticlesArticleIdRequestConfig: ApiDeleteArticlesArticleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteArticlesArticle_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiDeleteArticlesArticle_id = /*#__PURE__*/ (
  requestData: ApiDeleteArticlesArticleIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteArticlesArticleIdResponse>(
    prepare(apiDeleteArticlesArticleIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteArticlesArticle_id.requestConfig = apiDeleteArticlesArticleIdRequestConfig

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetArticlesArticleIdCommentsRequest {
  /**
   * 页码
   */
  page?: string
  /**
   * 每页数量
   */
  pageSize?: string
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetArticlesArticleIdCommentsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    articleId?: number
    commentId?: number
    commentText?: string
    createdAt?: string
    isPublished?: boolean
    replyToCommentId?: number
    updatedAt?: string
    userAvatar?: string
    userId?: number
    userName?: string
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
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiGetArticlesArticleIdCommentsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}/comments',
    undefined,
    'article_id',
    'page' | 'pageSize',
    false
  >
>

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiGetArticlesArticleIdCommentsRequestConfig: ApiGetArticlesArticleIdCommentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}/comments',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: ['page', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetArticlesArticle_idComments',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiGetArticlesArticle_idComments = /*#__PURE__*/ (
  requestData: ApiGetArticlesArticleIdCommentsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetArticlesArticleIdCommentsResponse>(
    prepare(apiGetArticlesArticleIdCommentsRequestConfig, requestData),
    ...args,
  )
}

apiGetArticlesArticle_idComments.requestConfig = apiGetArticlesArticleIdCommentsRequestConfig

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesArticleIdLikeRequest {
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostArticlesArticleIdLikeResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 是否已点赞
     */
    isLiked?: boolean
    /**
     * 总点赞数
     */
    likeCount?: number
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
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostArticlesArticleIdLikeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}/like',
    undefined,
    'article_id',
    string,
    false
  >
>

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostArticlesArticleIdLikeRequestConfig: ApiPostArticlesArticleIdLikeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}/like',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesArticle_idLike',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostArticlesArticle_idLike = /*#__PURE__*/ (
  requestData: ApiPostArticlesArticleIdLikeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesArticleIdLikeResponse>(
    prepare(apiPostArticlesArticleIdLikeRequestConfig, requestData),
    ...args,
  )
}

apiPostArticlesArticle_idLike.requestConfig = apiPostArticlesArticleIdLikeRequestConfig

/* prettier-ignore-end */
