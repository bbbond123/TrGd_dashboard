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

const mockUrl_0_0_0_11 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_11 = '' as any
const prodUrl_0_0_0_11 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_11 = undefined as any

/**
 * 接口 [更新菜单↗](https://yapi.ifoodme.com/project/11/interface/api/308) 的 **请求类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `PUT /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutMenusRequest {}

/**
 * 接口 [更新菜单↗](https://yapi.ifoodme.com/project/11/interface/api/308) 的 **返回类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `PUT /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutMenusResponse {}

/**
 * 接口 [更新菜单↗](https://yapi.ifoodme.com/project/11/interface/api/308) 的 **请求配置的类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `PUT /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutMenusRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/menus',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新菜单↗](https://yapi.ifoodme.com/project/11/interface/api/308) 的 **请求配置**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `PUT /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPutMenusRequestConfig: ApiPutMenusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/api/menus',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutMenus',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新菜单↗](https://yapi.ifoodme.com/project/11/interface/api/308) 的 **请求函数**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `PUT /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutMenus = /*#__PURE__*/ (requestData?: ApiPutMenusRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutMenusResponse>(prepare(apiPutMenusRequestConfig, requestData), ...args)
}

apiPutMenus.requestConfig = apiPutMenusRequestConfig

/**
 * 接口 [新建菜单↗](https://yapi.ifoodme.com/project/11/interface/api/314) 的 **请求类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostMenusRequest {}

/**
 * 接口 [新建菜单↗](https://yapi.ifoodme.com/project/11/interface/api/314) 的 **返回类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostMenusResponse {}

/**
 * 接口 [新建菜单↗](https://yapi.ifoodme.com/project/11/interface/api/314) 的 **请求配置的类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostMenusRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/menus',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建菜单↗](https://yapi.ifoodme.com/project/11/interface/api/314) 的 **请求配置**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostMenusRequestConfig: ApiPostMenusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/api/menus',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostMenus',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建菜单↗](https://yapi.ifoodme.com/project/11/interface/api/314) 的 **请求函数**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostMenus = /*#__PURE__*/ (requestData?: ApiPostMenusRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostMenusResponse>(prepare(apiPostMenusRequestConfig, requestData), ...args)
}

apiPostMenus.requestConfig = apiPostMenusRequestConfig

/**
 * 接口 [获取菜单列表↗](https://yapi.ifoodme.com/project/11/interface/api/320) 的 **请求类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostMenusListRequest {}

/**
 * 接口 [获取菜单列表↗](https://yapi.ifoodme.com/project/11/interface/api/320) 的 **返回类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostMenusListResponse {}

/**
 * 接口 [获取菜单列表↗](https://yapi.ifoodme.com/project/11/interface/api/320) 的 **请求配置的类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostMenusListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/menus/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取菜单列表↗](https://yapi.ifoodme.com/project/11/interface/api/320) 的 **请求配置**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostMenusListRequestConfig: ApiPostMenusListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/api/menus/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostMenusList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取菜单列表↗](https://yapi.ifoodme.com/project/11/interface/api/320) 的 **请求函数**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `POST /api/menus/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostMenusList = /*#__PURE__*/ (requestData?: ApiPostMenusListRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostMenusListResponse>(prepare(apiPostMenusListRequestConfig, requestData), ...args)
}

apiPostMenusList.requestConfig = apiPostMenusListRequestConfig

/**
 * 接口 [获取菜单↗](https://yapi.ifoodme.com/project/11/interface/api/326) 的 **请求类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `GET /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetMenusMenuIdRequest {
  /**
   * 菜单ID
   */
  menu_id: string
}

/**
 * 接口 [获取菜单↗](https://yapi.ifoodme.com/project/11/interface/api/326) 的 **返回类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `GET /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetMenusMenuIdResponse {}

/**
 * 接口 [获取菜单↗](https://yapi.ifoodme.com/project/11/interface/api/326) 的 **请求配置的类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `GET /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetMenusMenuIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/menus/{menu_id}',
    undefined,
    'menu_id',
    string,
    false
  >
>

/**
 * 接口 [获取菜单↗](https://yapi.ifoodme.com/project/11/interface/api/326) 的 **请求配置**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `GET /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetMenusMenuIdRequestConfig: ApiGetMenusMenuIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/api/menus/{menu_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: ['menu_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetMenusMenu_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取菜单↗](https://yapi.ifoodme.com/project/11/interface/api/326) 的 **请求函数**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `GET /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetMenusMenu_id = /*#__PURE__*/ (
  requestData: ApiGetMenusMenuIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetMenusMenuIdResponse>(prepare(apiGetMenusMenuIdRequestConfig, requestData), ...args)
}

apiGetMenusMenu_id.requestConfig = apiGetMenusMenuIdRequestConfig

/**
 * 接口 [删除菜单↗](https://yapi.ifoodme.com/project/11/interface/api/332) 的 **请求类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `DELETE /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteMenusMenuIdRequest {
  /**
   * 菜单ID
   */
  menu_id: string
}

/**
 * 接口 [删除菜单↗](https://yapi.ifoodme.com/project/11/interface/api/332) 的 **返回类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `DELETE /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteMenusMenuIdResponse {}

/**
 * 接口 [删除菜单↗](https://yapi.ifoodme.com/project/11/interface/api/332) 的 **请求配置的类型**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `DELETE /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteMenusMenuIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/menus/{menu_id}',
    undefined,
    'menu_id',
    string,
    false
  >
>

/**
 * 接口 [删除菜单↗](https://yapi.ifoodme.com/project/11/interface/api/332) 的 **请求配置**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `DELETE /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteMenusMenuIdRequestConfig: ApiDeleteMenusMenuIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/api/menus/{menu_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: ['menu_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteMenusMenu_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除菜单↗](https://yapi.ifoodme.com/project/11/interface/api/332) 的 **请求函数**
 *
 * @分类 [Menus↗](https://yapi.ifoodme.com/project/11/interface/api/cat_65)
 * @标签 `Menus`
 * @请求头 `DELETE /api/menus/{menu_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteMenusMenu_id = /*#__PURE__*/ (
  requestData: ApiDeleteMenusMenuIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteMenusMenuIdResponse>(prepare(apiDeleteMenusMenuIdRequestConfig, requestData), ...args)
}

apiDeleteMenusMenu_id.requestConfig = apiDeleteMenusMenuIdRequestConfig

/* prettier-ignore-end */
