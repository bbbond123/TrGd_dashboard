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

const mockUrl_0_0_0_8 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_8 = '' as any
const prodUrl_0_0_0_8 = 'https://api.ifoodme.com' as any
const dataKey_0_0_0_8 = undefined as any

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutFilesRequest {
  fileData?: number[]
  fileId: number
  fileName?: string
  fileSize?: number
  fileType?: string
  imageUrl?: string
  location?: string
  relatedId?: number
  /**
   * 关联标签ID数组
   */
  tagIds?: number[]
}

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutFilesResponse {
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
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPutFilesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPutFilesRequestConfig: ApiPutFilesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutFiles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPutFiles = /*#__PURE__*/ (requestData: ApiPutFilesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutFilesResponse>(prepare(apiPutFilesRequestConfig, requestData), ...args)
}

apiPutFiles.requestConfig = apiPutFilesRequestConfig

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesRequest {
  fileData: number[]
  fileName: string
  fileSize?: number
  fileType: string
  imageUrl?: string
  location: string
  relatedId: number
  /**
   * 关联标签ID数组
   */
  tagIds?: number[]
}

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    createdAt?: string
    fileData?: number[]
    fileId?: number
    fileName?: string
    fileSize?: number
    fileType?: string
    imageUrl?: string
    location?: string
    relatedId?: number
    s3Key?: string
    s3Url?: string
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    updatedAt?: string
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
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesRequestConfig: ApiPostFilesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFiles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFiles = /*#__PURE__*/ (requestData: ApiPostFilesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostFilesResponse>(prepare(apiPostFilesRequestConfig, requestData), ...args)
}

apiPostFiles.requestConfig = apiPostFilesRequestConfig

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesAnalyzeRequest {
  /**
   * 要分析的图片
   */
  image: FileData
  /**
   * 拍摄位置纬度
   */
  latitude?: string
  /**
   * 拍摄位置经度
   */
  longitude?: string
}

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesAnalyzeResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 识别置信度
     */
    confidence?: number
    /**
     * 识别到的对象
     */
    detectedObjects?: string[]
    /**
     * 位置信息
     */
    location?: {
      /**
       * 纬度
       */
      latitude?: number
      /**
       * 经度
       */
      longitude?: number
    }
    /**
     * 处理时间
     */
    processedAt?: string
    /**
     * 推荐内容
     */
    recommendations?: {
      /**
       * 分类
       */
      category?: string
      /**
       * 描述
       */
      description?: string
      /**
       * 距离(米)
       */
      distance?: number
      /**
       * 推荐项目的图片URL
       */
      imageUrl?: string
      /**
       * 名称
       */
      name?: string
      /**
       * 评分
       */
      rating?: number
      /**
       * 类型: facility, store
       */
      type?: string
    }[]
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
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesAnalyzeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/analyze',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesAnalyzeRequestConfig: ApiPostFilesAnalyzeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/analyze',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFilesAnalyze',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFilesAnalyze = /*#__PURE__*/ (
  requestData: ApiPostFilesAnalyzeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFilesAnalyzeResponse>(prepare(apiPostFilesAnalyzeRequestConfig, requestData), ...args)
}

apiPostFilesAnalyze.requestConfig = apiPostFilesAnalyzeRequestConfig

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesListRequest {
  fileData?: number[]
  fileId?: number
  fileName?: string
  fileSize?: number
  fileType?: string
  imageUrl?: string
  location?: string
  page: number
  pageSize: number
  relatedId?: number
  s3Key?: string
  s3Url?: string
  /**
   * 添加用户ID过滤
   */
  userId?: number
}

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    createdAt?: string
    fileId?: number
    fileName?: string
    fileSize?: number
    fileType?: string
    imageUrl?: string
    location?: string
    relatedId?: number
    s3Key?: string
    s3Url?: string
    updatedAt?: string
    userAvatar?: string
    userId?: number
    /**
     * 用户信息
     */
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
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesListRequestConfig: ApiPostFilesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFilesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFilesList = /*#__PURE__*/ (requestData: ApiPostFilesListRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostFilesListResponse>(prepare(apiPostFilesListRequestConfig, requestData), ...args)
}

apiPostFilesList.requestConfig = apiPostFilesListRequestConfig

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesTestS3Request {}

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesTestS3Response {
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
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetFilesTestS3RequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/test-s3',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetFilesTestS3RequestConfig: ApiGetFilesTestS3RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/test-s3',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetFilesTestS3',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetFilesTestS3 = /*#__PURE__*/ (
  requestData?: ApiGetFilesTestS3Request,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetFilesTestS3Response>(prepare(apiGetFilesTestS3RequestConfig, requestData), ...args)
}

apiGetFilesTestS3.requestConfig = apiGetFilesTestS3RequestConfig

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesUploadRequest {
  /**
   * 文件
   */
  file: FileData
  /**
   * 位置
   */
  location: string
  /**
   * 关联ID
   */
  related_id: string
}

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesUploadResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    createdAt?: string
    fileData?: number[]
    fileId?: number
    fileName?: string
    fileSize?: number
    fileType?: string
    imageUrl?: string
    location?: string
    relatedId?: number
    s3Key?: string
    s3Url?: string
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    updatedAt?: string
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
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesUploadRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/upload',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesUploadRequestConfig: ApiPostFilesUploadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/upload',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFilesUpload',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFilesUpload = /*#__PURE__*/ (
  requestData: ApiPostFilesUploadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFilesUploadResponse>(prepare(apiPostFilesUploadRequestConfig, requestData), ...args)
}

apiPostFilesUpload.requestConfig = apiPostFilesUploadRequestConfig

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesVisionAnalyzeRequest {
  /**
   * 要分析的图片
   */
  image: FileData
  /**
   * 拍摄位置纬度
   */
  latitude?: string
  /**
   * 拍摄位置经度
   */
  longitude?: string
}

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesVisionAnalyzeResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * API来源
     */
    apiSource?: string
    /**
     * 识别的国家
     */
    country?: string
    /**
     * 错误信息
     */
    errorMessage?: string
    /**
     * 是否识别到地标
     */
    hasLandmark?: boolean
    /**
     * 是否在日本
     */
    isInJapan?: boolean
    /**
     * 标签列表
     */
    labels?: string[]
    /**
     * 地标列表
     */
    landmarks?: {
      /**
       * 详细描述
       */
      description?: string
      /**
       * 纬度
       */
      latitude?: number
      /**
       * 本地设施ID
       */
      localFacilityId?: number
      /**
       * 经度
       */
      longitude?: number
      /**
       * 地标名称
       */
      name?: string
      /**
       * 置信度
       */
      score?: number
    }[]
    /**
     * 附近推荐
     */
    nearbyRecommendations?: {
      /**
       * 分类
       */
      category?: string
      /**
       * 描述
       */
      description?: string
      /**
       * 距离(米)
       */
      distance?: number
      /**
       * 推荐项目的图片URL
       */
      imageUrl?: string
      /**
       * 名称
       */
      name?: string
      /**
       * 评分
       */
      rating?: number
      /**
       * 类型: facility, store
       */
      type?: string
    }[]
    /**
     * 处理时间
     */
    processedAt?: string
    /**
     * 是否已保存到数据库
     */
    savedToDatabase?: boolean
    /**
     * 识别的文字
     */
    textContent?: string
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
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesVisionAnalyzeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/vision-analyze',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesVisionAnalyzeRequestConfig: ApiPostFilesVisionAnalyzeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/vision-analyze',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFilesVisionAnalyze',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFilesVisionAnalyze = /*#__PURE__*/ (
  requestData: ApiPostFilesVisionAnalyzeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFilesVisionAnalyzeResponse>(
    prepare(apiPostFilesVisionAnalyzeRequestConfig, requestData),
    ...args,
  )
}

apiPostFilesVisionAnalyze.requestConfig = apiPostFilesVisionAnalyzeRequestConfig

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesVisionAnalyzeEnhancedRequest {
  /**
   * 要分析的图片
   */
  image: FileData
  /**
   * 拍摄位置纬度
   */
  latitude?: string
  /**
   * 拍摄位置经度
   */
  longitude?: string
  /**
   * 启用Google Places API增强
   */
  enable_places?: string
  /**
   * 启用Wikipedia API增强
   */
  enable_wikipedia?: string
  /**
   * 启用缓存
   */
  enable_cache?: string
}

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesVisionAnalyzeEnhancedResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 基础Vision API结果
     */
    basicVisionResult?: {
      /**
       * API来源
       */
      apiSource?: string
      /**
       * 识别的国家
       */
      country?: string
      /**
       * 错误信息
       */
      errorMessage?: string
      /**
       * 是否识别到地标
       */
      hasLandmark?: boolean
      /**
       * 是否在日本
       */
      isInJapan?: boolean
      /**
       * 标签列表
       */
      labels?: string[]
      /**
       * 地标列表
       */
      landmarks?: {
        /**
         * 详细描述
         */
        description?: string
        /**
         * 纬度
         */
        latitude?: number
        /**
         * 本地设施ID
         */
        localFacilityId?: number
        /**
         * 经度
         */
        longitude?: number
        /**
         * 地标名称
         */
        name?: string
        /**
         * 置信度
         */
        score?: number
      }[]
      /**
       * 附近推荐
       */
      nearbyRecommendations?: {
        /**
         * 分类
         */
        category?: string
        /**
         * 描述
         */
        description?: string
        /**
         * 距离(米)
         */
        distance?: number
        /**
         * 推荐项目的图片URL
         */
        imageUrl?: string
        /**
         * 名称
         */
        name?: string
        /**
         * 评分
         */
        rating?: number
        /**
         * 类型: facility, store
         */
        type?: string
      }[]
      /**
       * 处理时间
       */
      processedAt?: string
      /**
       * 是否已保存到数据库
       */
      savedToDatabase?: boolean
      /**
       * 识别的文字
       */
      textContent?: string
    }
    /**
     * 增强的地标信息
     */
    enhancedLandmarks?: {
      /**
       * 地理信息
       */
      geographicInfo?: {
        address?: string
        city?: string
        country?: string
        district?: string
        elevation?: number
        postal?: string
        region?: string
        timezone?: string
      }
      latitude?: number
      /**
       * 本地数据库匹配信息
       */
      localInfo?: {
        description?: string
        facilityId?: number
        facilityName?: string
        location?: string
        /**
         * 匹配置信度
         */
        matchConfidence?: number
        /**
         * 匹配方法: "name", "keyword", "proximity"
         */
        matchMethod?: string
        personId?: number
      }
      longitude?: number
      /**
       * 基础信息 (来自Google Vision)
       */
      name?: string
      /**
       * Google Places API 增强信息
       */
      placesInfo?: {
        businessStatus?: string
        formattedAddress?: string
        name?: string
        openingHours?: {
          openNow?: boolean
          weekdayText?: string[]
        }
        phoneNumber?: string
        photos?: {
          height?: number
          htmlAttributions?: string[]
          photoReference?: string
          width?: number
        }[]
        placeId?: string
        priceLevel?: number
        rating?: number
        reviews?: {
          authorName?: string
          language?: string
          rating?: number
          text?: string
          time?: number
        }[]
        types?: string[]
        userRatingsTotal?: number
        website?: string
      }
      /**
       * 相关图片
       */
      relatedImages?: {
        description?: string
        height?: number
        imageUrl?: string
        /**
         * "places", "wikipedia", "local"
         */
        source?: string
        title?: string
        width?: number
      }[]
      score?: number
      /**
       * Wikipedia API 增强信息
       */
      wikipediaInfo?: {
        categories?: string[]
        coordinates?: {
          lat?: number
          lon?: number
        }
        /**
         * 摘要
         */
        extract?: string
        /**
         * 完整文本
         */
        fullText?: string
        images?: {
          description?: string
          height?: number
          source?: string
          width?: number
        }[]
        language?: string
        pageId?: number
        title?: string
        url?: string
      }
    }[]
    /**
     * 元数据
     */
    metadata?: {
      apiVersion?: string
      cacheUsed?: boolean
      enhancedCount?: number
      language?: string
      processedAt?: string
      savedToDatabase?: boolean
      totalLandmarks?: number
      userId?: number
    }
    /**
     * 增强的附近推荐
     */
    nearbyRecommendations?: {
      /**
       * 分类
       */
      category?: string
      /**
       * 描述
       */
      description?: string
      /**
       * 距离(米)
       */
      distance?: number
      /**
       * 推荐项目的图片URL
       */
      imageUrl?: string
      images?: {
        description?: string
        height?: number
        imageUrl?: string
        /**
         * "places", "wikipedia", "local"
         */
        source?: string
        title?: string
        width?: number
      }[]
      /**
       * 名称
       */
      name?: string
      /**
       * 增强信息
       */
      placesRating?: number
      placesReviews?: number
      /**
       * 评分
       */
      rating?: number
      /**
       * 评分算法
       */
      recommendationScore?: number
      scoreFactors?: {
        /**
         * 距离分数
         */
        distanceScore?: number
        /**
         * 受欢迎程度分数
         */
        popularityScore?: number
        /**
         * 评分分数
         */
        ratingScore?: number
        /**
         * 相关性分数
         */
        relevanceScore?: number
      }
      /**
       * 类型: facility, store
       */
      type?: string
      wikipediaExtract?: string
    }[]
    /**
     * 处理状态
     */
    processingStatus?: {
      errors?: string[]
      googlePlacesSuccess?: boolean
      googleVisionSuccess?: boolean
      localDatabaseSuccess?: boolean
      /**
       * 处理时间(毫秒)
       */
      processingTime?: number
      warnings?: string[]
      wikipediaSuccess?: boolean
    }
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
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesVisionAnalyzeEnhancedRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/vision-analyze-enhanced',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesVisionAnalyzeEnhancedRequestConfig: ApiPostFilesVisionAnalyzeEnhancedRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/vision-analyze-enhanced',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFilesVisionAnalyzeEnhanced',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFilesVisionAnalyzeEnhanced = /*#__PURE__*/ (
  requestData: ApiPostFilesVisionAnalyzeEnhancedRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFilesVisionAnalyzeEnhancedResponse>(
    prepare(apiPostFilesVisionAnalyzeEnhancedRequestConfig, requestData),
    ...args,
  )
}

apiPostFilesVisionAnalyzeEnhanced.requestConfig = apiPostFilesVisionAnalyzeEnhancedRequestConfig

/**
 * 接口 [获取文件↗](https://yapi.ifoodme.com/project/11/interface/api/248) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesFileIdRequest {
  /**
   * 文件ID
   */
  file_id: string
}

/**
 * 接口 [获取文件↗](https://yapi.ifoodme.com/project/11/interface/api/248) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesFileIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    createdAt?: string
    fileData?: number[]
    fileId?: number
    fileName?: string
    fileSize?: number
    fileType?: string
    imageUrl?: string
    location?: string
    relatedId?: number
    s3Key?: string
    s3Url?: string
    /**
     * 关联标签ID数组
     */
    tagIds?: number[]
    updatedAt?: string
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
 * 接口 [获取文件↗](https://yapi.ifoodme.com/project/11/interface/api/248) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetFilesFileIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/{file_id}',
    undefined,
    'file_id',
    string,
    false
  >
>

/**
 * 接口 [获取文件↗](https://yapi.ifoodme.com/project/11/interface/api/248) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetFilesFileIdRequestConfig: ApiGetFilesFileIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/{file_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: ['file_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetFilesFile_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文件↗](https://yapi.ifoodme.com/project/11/interface/api/248) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetFilesFile_id = /*#__PURE__*/ (
  requestData: ApiGetFilesFileIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetFilesFileIdResponse>(prepare(apiGetFilesFileIdRequestConfig, requestData), ...args)
}

apiGetFilesFile_id.requestConfig = apiGetFilesFileIdRequestConfig

/**
 * 接口 [删除文件↗](https://yapi.ifoodme.com/project/11/interface/api/254) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `DELETE /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteFilesFileIdRequest {
  /**
   * 文件ID
   */
  file_id: string
}

/**
 * 接口 [删除文件↗](https://yapi.ifoodme.com/project/11/interface/api/254) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `DELETE /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteFilesFileIdResponse {
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
 * 接口 [删除文件↗](https://yapi.ifoodme.com/project/11/interface/api/254) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `DELETE /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiDeleteFilesFileIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/{file_id}',
    undefined,
    'file_id',
    string,
    false
  >
>

/**
 * 接口 [删除文件↗](https://yapi.ifoodme.com/project/11/interface/api/254) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `DELETE /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiDeleteFilesFileIdRequestConfig: ApiDeleteFilesFileIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/{file_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: ['file_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteFilesFile_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除文件↗](https://yapi.ifoodme.com/project/11/interface/api/254) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `DELETE /api/files/{file_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiDeleteFilesFile_id = /*#__PURE__*/ (
  requestData: ApiDeleteFilesFileIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteFilesFileIdResponse>(prepare(apiDeleteFilesFileIdRequestConfig, requestData), ...args)
}

apiDeleteFilesFile_id.requestConfig = apiDeleteFilesFileIdRequestConfig

/**
 * 接口 [下载文件↗](https://yapi.ifoodme.com/project/11/interface/api/260) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}/download`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesFileIdDownloadRequest {
  /**
   * 文件ID
   */
  file_id: string
}

/**
 * 接口 [下载文件↗](https://yapi.ifoodme.com/project/11/interface/api/260) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}/download`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesFileIdDownloadResponse {
  [k: string]: unknown
}

/**
 * 接口 [下载文件↗](https://yapi.ifoodme.com/project/11/interface/api/260) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}/download`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetFilesFileIdDownloadRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/{file_id}/download',
    undefined,
    'file_id',
    string,
    false
  >
>

/**
 * 接口 [下载文件↗](https://yapi.ifoodme.com/project/11/interface/api/260) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}/download`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetFilesFileIdDownloadRequestConfig: ApiGetFilesFileIdDownloadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/{file_id}/download',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: ['file_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetFilesFile_idDownload',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [下载文件↗](https://yapi.ifoodme.com/project/11/interface/api/260) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}/download`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetFilesFile_idDownload = /*#__PURE__*/ (
  requestData: ApiGetFilesFileIdDownloadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetFilesFileIdDownloadResponse>(
    prepare(apiGetFilesFileIdDownloadRequestConfig, requestData),
    ...args,
  )
}

apiGetFilesFile_idDownload.requestConfig = apiGetFilesFileIdDownloadRequestConfig

/**
 * 接口 [测试百度AI API连接↗](https://yapi.ifoodme.com/project/11/interface/api/628) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesTestBaiduRequest {}

/**
 * 接口 [测试百度AI API连接↗](https://yapi.ifoodme.com/project/11/interface/api/628) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetFilesTestBaiduResponse {
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
 * 接口 [测试百度AI API连接↗](https://yapi.ifoodme.com/project/11/interface/api/628) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetFilesTestBaiduRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/test-baidu',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [测试百度AI API连接↗](https://yapi.ifoodme.com/project/11/interface/api/628) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetFilesTestBaiduRequestConfig: ApiGetFilesTestBaiduRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/test-baidu',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetFilesTestBaidu',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [测试百度AI API连接↗](https://yapi.ifoodme.com/project/11/interface/api/628) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetFilesTestBaidu = /*#__PURE__*/ (
  requestData?: ApiGetFilesTestBaiduRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetFilesTestBaiduResponse>(prepare(apiGetFilesTestBaiduRequestConfig, requestData), ...args)
}

apiGetFilesTestBaidu.requestConfig = apiGetFilesTestBaiduRequestConfig

/**
 * 接口 [百度AI地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/630) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesVisionAnalyzeBaiduRequest {
  /**
   * 要分析的图片
   */
  image: FileData
  /**
   * 拍摄位置纬度
   */
  latitude?: string
  /**
   * 拍摄位置经度
   */
  longitude?: string
}

/**
 * 接口 [百度AI地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/630) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFilesVisionAnalyzeBaiduResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * API来源
     */
    apiSource?: string
    /**
     * 识别的国家
     */
    country?: string
    /**
     * 错误信息
     */
    errorMessage?: string
    /**
     * 是否识别到地标
     */
    hasLandmark?: boolean
    /**
     * 是否在日本
     */
    isInJapan?: boolean
    /**
     * 标签列表
     */
    labels?: string[]
    /**
     * 地标列表
     */
    landmarks?: {
      /**
       * 详细描述
       */
      description?: string
      /**
       * 纬度
       */
      latitude?: number
      /**
       * 本地设施ID
       */
      localFacilityId?: number
      /**
       * 经度
       */
      longitude?: number
      /**
       * 地标名称
       */
      name?: string
      /**
       * 置信度
       */
      score?: number
    }[]
    /**
     * 附近推荐
     */
    nearbyRecommendations?: {
      /**
       * 分类
       */
      category?: string
      /**
       * 描述
       */
      description?: string
      /**
       * 距离(米)
       */
      distance?: number
      /**
       * 推荐项目的图片URL
       */
      imageUrl?: string
      /**
       * 名称
       */
      name?: string
      /**
       * 评分
       */
      rating?: number
      /**
       * 类型: facility, store
       */
      type?: string
    }[]
    /**
     * 处理时间
     */
    processedAt?: string
    /**
     * 是否已保存到数据库
     */
    savedToDatabase?: boolean
    /**
     * 识别的文字
     */
    textContent?: string
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
 * 接口 [百度AI地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/630) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFilesVisionAnalyzeBaiduRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/files/vision-analyze-baidu',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [百度AI地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/630) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFilesVisionAnalyzeBaiduRequestConfig: ApiPostFilesVisionAnalyzeBaiduRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/vision-analyze-baidu',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFilesVisionAnalyzeBaidu',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [百度AI地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/630) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-baidu`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFilesVisionAnalyzeBaidu = /*#__PURE__*/ (
  requestData: ApiPostFilesVisionAnalyzeBaiduRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFilesVisionAnalyzeBaiduResponse>(
    prepare(apiPostFilesVisionAnalyzeBaiduRequestConfig, requestData),
    ...args,
  )
}

apiPostFilesVisionAnalyzeBaidu.requestConfig = apiPostFilesVisionAnalyzeBaiduRequestConfig

/**
 * 接口 [简单文件上传到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/637) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/file/fileUpload`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFileFileUploadRequest {
  /**
   * 文件
   */
  file: FileData
}

/**
 * 接口 [简单文件上传到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/637) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/file/fileUpload`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostFileFileUploadResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * S3 Key 相对路径
     */
    relativePath?: string
    /**
     * 完整的访问URL
     */
    url?: string
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
 * 接口 [简单文件上传到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/637) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/file/fileUpload`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostFileFileUploadRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://api.ifoodme.com',
    '/api/file/fileUpload',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [简单文件上传到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/637) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/file/fileUpload`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostFileFileUploadRequestConfig: ApiPostFileFileUploadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/file/fileUpload',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostFileFileUpload',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [简单文件上传到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/637) 的 **请求函数**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/file/fileUpload`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostFileFileUpload = /*#__PURE__*/ (
  requestData: ApiPostFileFileUploadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostFileFileUploadResponse>(prepare(apiPostFileFileUploadRequestConfig, requestData), ...args)
}

apiPostFileFileUpload.requestConfig = apiPostFileFileUploadRequestConfig

/* prettier-ignore-end */
