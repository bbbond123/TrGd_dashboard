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
const prodUrl_0_0_0_8 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_8 = undefined as any

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutFilesRequest {}

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutFilesResponse {}

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutFilesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新文件↗](https://yapi.ifoodme.com/project/11/interface/api/200) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `PUT /api/files`
 * @更新时间 `2025-07-08 23:44:19`
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
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutFiles = /*#__PURE__*/ (requestData?: ApiPutFilesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutFilesResponse>(prepare(apiPutFilesRequestConfig, requestData), ...args)
}

apiPutFiles.requestConfig = apiPutFilesRequestConfig

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesRequest {}

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesResponse {}

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostFilesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建文件↗](https://yapi.ifoodme.com/project/11/interface/api/206) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files`
 * @更新时间 `2025-07-08 23:44:19`
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
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostFiles = /*#__PURE__*/ (requestData?: ApiPostFilesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostFilesResponse>(prepare(apiPostFilesRequestConfig, requestData), ...args)
}

apiPostFiles.requestConfig = apiPostFilesRequestConfig

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesAnalyzeRequest {}

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesAnalyzeResponse {}

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostFilesAnalyzeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files/analyze',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [分析图片（AR识别）↗](https://yapi.ifoodme.com/project/11/interface/api/212) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostFilesAnalyzeRequestConfig: ApiPostFilesAnalyzeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/analyze',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostFilesAnalyze = /*#__PURE__*/ (
  requestData?: ApiPostFilesAnalyzeRequest,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesListRequest {}

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesListResponse {}

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostFilesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取文件列表↗](https://yapi.ifoodme.com/project/11/interface/api/218) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/list`
 * @更新时间 `2025-07-08 23:44:19`
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
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostFilesList = /*#__PURE__*/ (requestData?: ApiPostFilesListRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostFilesListResponse>(prepare(apiPostFilesListRequestConfig, requestData), ...args)
}

apiPostFilesList.requestConfig = apiPostFilesListRequestConfig

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **请求类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetFilesTestS3Request {}

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetFilesTestS3Response {}

/**
 * 接口 [测试 S3 连接↗](https://yapi.ifoodme.com/project/11/interface/api/224) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/test-s3`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetFilesTestS3RequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesUploadRequest {}

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesUploadResponse {}

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostFilesUploadRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files/upload',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [上传文件到 S3↗](https://yapi.ifoodme.com/project/11/interface/api/230) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/upload`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostFilesUploadRequestConfig: ApiPostFilesUploadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/upload',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostFilesUpload = /*#__PURE__*/ (
  requestData?: ApiPostFilesUploadRequest,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesVisionAnalyzeRequest {}

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesVisionAnalyzeResponse {}

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostFilesVisionAnalyzeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files/vision-analyze',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [Google Vision 地标识别↗](https://yapi.ifoodme.com/project/11/interface/api/236) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostFilesVisionAnalyzeRequestConfig: ApiPostFilesVisionAnalyzeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/vision-analyze',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostFilesVisionAnalyze = /*#__PURE__*/ (
  requestData?: ApiPostFilesVisionAnalyzeRequest,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesVisionAnalyzeEnhancedRequest {}

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **返回类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostFilesVisionAnalyzeEnhancedResponse {}

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostFilesVisionAnalyzeEnhancedRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/files/vision-analyze-enhanced',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [增强版Google Vision地标识别 (Plan 3)↗](https://yapi.ifoodme.com/project/11/interface/api/242) 的 **请求配置**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `POST /api/files/vision-analyze-enhanced`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostFilesVisionAnalyzeEnhancedRequestConfig: ApiPostFilesVisionAnalyzeEnhancedRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/api/files/vision-analyze-enhanced',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostFilesVisionAnalyzeEnhanced = /*#__PURE__*/ (
  requestData?: ApiPostFilesVisionAnalyzeEnhancedRequest,
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetFilesFileIdResponse {}

/**
 * 接口 [获取文件↗](https://yapi.ifoodme.com/project/11/interface/api/248) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `GET /api/files/{file_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetFilesFileIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteFilesFileIdResponse {}

/**
 * 接口 [删除文件↗](https://yapi.ifoodme.com/project/11/interface/api/254) 的 **请求配置的类型**
 *
 * @分类 [Files↗](https://yapi.ifoodme.com/project/11/interface/api/cat_47)
 * @标签 `Files`
 * @请求头 `DELETE /api/files/{file_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteFilesFileIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetFilesFileIdDownloadRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
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
 * @更新时间 `2025-07-08 23:44:19`
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
 * @更新时间 `2025-07-08 23:44:19`
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

/* prettier-ignore-end */
