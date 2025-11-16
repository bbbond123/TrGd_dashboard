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

const mockUrl_0_0_0_13 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_13 = '' as any
const prodUrl_0_0_0_13 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_13 = undefined as any

/**
 * 接口 [批量增强多个地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/368) 的 **请求类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `POST /api/photos/batch-enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
export type ApiPostPhotosBatchEnhanceRequest = {
  /**
   * 每个地点的最大照片数量，默认5
   */
  max_photos_per_place?: string
  [k: string]: unknown
} & {
  latitude?: number
  longitude?: number
  name?: string
}[]

/**
 * 接口 [批量增强多个地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/368) 的 **返回类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `POST /api/photos/batch-enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostPhotosBatchEnhanceResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    enhancedPhotos?: {
      /**
       * 版权声明
       */
      attributions?: string[]
      /**
       * 照片类型: exterior, interior, food, view
       */
      category?: string
      /**
       * 高度
       */
      height?: number
      /**
       * 是否官方照片
       */
      isOfficial?: boolean
      /**
       * Places API照片引用
       */
      photoReference?: string
      /**
       * 质量: high, medium, low
       */
      quality?: string
      /**
       * 来源: places, wikipedia, local
       */
      source?: string
      /**
       * 完整的照片URL
       */
      url?: string
      /**
       * 宽度
       */
      width?: number
    }[]
    placeId?: string
    placeName?: string
    /**
     * 处理时间(毫秒)
     */
    processTime?: number
    totalPhotos?: number
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
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [批量增强多个地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/368) 的 **请求配置的类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `POST /api/photos/batch-enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostPhotosBatchEnhanceRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/photos/batch-enhance',
    undefined,
    string,
    'max_photos_per_place',
    false
  >
>

/**
 * 接口 [批量增强多个地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/368) 的 **请求配置**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `POST /api/photos/batch-enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostPhotosBatchEnhanceRequestConfig: ApiPostPhotosBatchEnhanceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/api/photos/batch-enhance',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: ['max_photos_per_place'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostPhotosBatchEnhance',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [批量增强多个地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/368) 的 **请求函数**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `POST /api/photos/batch-enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostPhotosBatchEnhance = /*#__PURE__*/ (
  requestData: ApiPostPhotosBatchEnhanceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostPhotosBatchEnhanceResponse>(
    prepare(apiPostPhotosBatchEnhanceRequestConfig, requestData),
    ...args,
  )
}

apiPostPhotosBatchEnhance.requestConfig = apiPostPhotosBatchEnhanceRequestConfig

/**
 * 接口 [通过Google Places API增强地点照片↗](https://yapi.ifoodme.com/project/11/interface/api/374) 的 **请求类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetPhotosEnhanceRequest {
  /**
   * 地点名称
   */
  place_name: string
  /**
   * 纬度
   */
  latitude?: string
  /**
   * 经度
   */
  longitude?: string
  /**
   * 最大照片数量，默认10
   */
  max_photos?: string
  /**
   * 最低质量要求: low, medium, high
   */
  quality?: string
  /**
   * 照片类型过滤: exterior, interior, food, view
   */
  category?: string
}

/**
 * 接口 [通过Google Places API增强地点照片↗](https://yapi.ifoodme.com/project/11/interface/api/374) 的 **返回类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetPhotosEnhanceResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    enhancedPhotos?: {
      /**
       * 版权声明
       */
      attributions?: string[]
      /**
       * 照片类型: exterior, interior, food, view
       */
      category?: string
      /**
       * 高度
       */
      height?: number
      /**
       * 是否官方照片
       */
      isOfficial?: boolean
      /**
       * Places API照片引用
       */
      photoReference?: string
      /**
       * 质量: high, medium, low
       */
      quality?: string
      /**
       * 来源: places, wikipedia, local
       */
      source?: string
      /**
       * 完整的照片URL
       */
      url?: string
      /**
       * 宽度
       */
      width?: number
    }[]
    placeId?: string
    placeName?: string
    /**
     * 处理时间(毫秒)
     */
    processTime?: number
    totalPhotos?: number
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
 * 接口 [通过Google Places API增强地点照片↗](https://yapi.ifoodme.com/project/11/interface/api/374) 的 **请求配置的类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetPhotosEnhanceRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/photos/enhance',
    undefined,
    string,
    'place_name' | 'latitude' | 'longitude' | 'max_photos' | 'quality' | 'category',
    false
  >
>

/**
 * 接口 [通过Google Places API增强地点照片↗](https://yapi.ifoodme.com/project/11/interface/api/374) 的 **请求配置**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetPhotosEnhanceRequestConfig: ApiGetPhotosEnhanceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/api/photos/enhance',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: ['place_name', 'latitude', 'longitude', 'max_photos', 'quality', 'category'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetPhotosEnhance',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [通过Google Places API增强地点照片↗](https://yapi.ifoodme.com/project/11/interface/api/374) 的 **请求函数**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/enhance`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetPhotosEnhance = /*#__PURE__*/ (
  requestData: ApiGetPhotosEnhanceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetPhotosEnhanceResponse>(prepare(apiGetPhotosEnhanceRequestConfig, requestData), ...args)
}

apiGetPhotosEnhance.requestConfig = apiGetPhotosEnhanceRequestConfig

/**
 * 接口 [增强附近地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/380) 的 **请求类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/nearby`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetPhotosNearbyRequest {
  /**
   * 当前位置纬度
   */
  latitude: string
  /**
   * 当前位置经度
   */
  longitude: string
  /**
   * 搜索半径(米)，默认1000
   */
  radius?: string
  /**
   * 最大地点数量，默认10
   */
  max_places?: string
  /**
   * 每个地点的照片数量，默认3
   */
  photos_per_place?: string
}

/**
 * 接口 [增强附近地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/380) 的 **返回类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/nearby`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetPhotosNearbyResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    enhancedPhotos?: {
      /**
       * 版权声明
       */
      attributions?: string[]
      /**
       * 照片类型: exterior, interior, food, view
       */
      category?: string
      /**
       * 高度
       */
      height?: number
      /**
       * 是否官方照片
       */
      isOfficial?: boolean
      /**
       * Places API照片引用
       */
      photoReference?: string
      /**
       * 质量: high, medium, low
       */
      quality?: string
      /**
       * 来源: places, wikipedia, local
       */
      source?: string
      /**
       * 完整的照片URL
       */
      url?: string
      /**
       * 宽度
       */
      width?: number
    }[]
    placeId?: string
    placeName?: string
    /**
     * 处理时间(毫秒)
     */
    processTime?: number
    totalPhotos?: number
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
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [增强附近地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/380) 的 **请求配置的类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/nearby`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetPhotosNearbyRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/photos/nearby',
    undefined,
    string,
    'latitude' | 'longitude' | 'radius' | 'max_places' | 'photos_per_place',
    false
  >
>

/**
 * 接口 [增强附近地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/380) 的 **请求配置**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/nearby`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetPhotosNearbyRequestConfig: ApiGetPhotosNearbyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/api/photos/nearby',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: ['latitude', 'longitude', 'radius', 'max_places', 'photos_per_place'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetPhotosNearby',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [增强附近地点的照片↗](https://yapi.ifoodme.com/project/11/interface/api/380) 的 **请求函数**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/nearby`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetPhotosNearby = /*#__PURE__*/ (
  requestData: ApiGetPhotosNearbyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetPhotosNearbyResponse>(prepare(apiGetPhotosNearbyRequestConfig, requestData), ...args)
}

apiGetPhotosNearby.requestConfig = apiGetPhotosNearbyRequestConfig

/**
 * 接口 [获取照片的多种尺寸URL↗](https://yapi.ifoodme.com/project/11/interface/api/386) 的 **请求类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/sizes`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetPhotosSizesRequest {
  /**
   * Google Places照片引用
   */
  photo_reference: string
}

/**
 * 接口 [获取照片的多种尺寸URL↗](https://yapi.ifoodme.com/project/11/interface/api/386) 的 **返回类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/sizes`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetPhotosSizesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {}
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
 * 接口 [获取照片的多种尺寸URL↗](https://yapi.ifoodme.com/project/11/interface/api/386) 的 **请求配置的类型**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/sizes`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetPhotosSizesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/photos/sizes',
    undefined,
    string,
    'photo_reference',
    false
  >
>

/**
 * 接口 [获取照片的多种尺寸URL↗](https://yapi.ifoodme.com/project/11/interface/api/386) 的 **请求配置**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/sizes`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetPhotosSizesRequestConfig: ApiGetPhotosSizesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_13,
  devUrl: devUrl_0_0_0_13,
  prodUrl: prodUrl_0_0_0_13,
  path: '/api/photos/sizes',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_13,
  paramNames: [],
  queryNames: ['photo_reference'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetPhotosSizes',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取照片的多种尺寸URL↗](https://yapi.ifoodme.com/project/11/interface/api/386) 的 **请求函数**
 *
 * @分类 [Photos↗](https://yapi.ifoodme.com/project/11/interface/api/cat_77)
 * @标签 `Photos`
 * @请求头 `GET /api/photos/sizes`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetPhotosSizes = /*#__PURE__*/ (
  requestData: ApiGetPhotosSizesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetPhotosSizesResponse>(prepare(apiGetPhotosSizesRequestConfig, requestData), ...args)
}

apiGetPhotosSizes.requestConfig = apiGetPhotosSizesRequestConfig

/* prettier-ignore-end */
