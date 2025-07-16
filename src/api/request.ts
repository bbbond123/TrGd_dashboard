import type { RequestFunctionParams } from 'yapi-to-typescript'
import http from '@/utils/http/index'
export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: 'prod' | 'dev' | 'mock',
}

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: 'prod',
  },
): Promise<TResponseData> {
  return new Promise<TResponseData>((resolve, reject) => {
    // 基本地址
    const baseUrl = options.server === 'mock'
    ? payload.mockUrl
    : options.server === 'dev'
    ? payload.devUrl
    : payload.prodUrl

    // 请求地址
    const url = `${baseUrl}${payload.path}`

    console.log("🚀 ~ url123123123123123:", url)
    // 具体请求逻辑
    switch (payload.method) {
      case 'GET':
        return http
          .get(url, payload.data)
          .then((res) => {
            resolve(res as TResponseData)
          })
          .catch((err) => {
            reject(err)
          })
      case 'POST':
        return http
          .post(url, payload.data)
          .then((res) => {
            resolve(res as TResponseData)
          })
          .catch((err) => {
            reject(err)
          })
      case 'PUT':
        return http
          .put(url, payload.data)
          .then((res) => {
            resolve(res as TResponseData)
          })
          .catch((err) => {
            reject(err)
          })
      case 'DELETE':
        return http
          .delete(url, payload.data)
          .then((res) => {
            resolve(res as TResponseData)
          })
          .catch((err) => {
            reject(err)
          })
      default:
        console.error('不支持的请求方法')
        break
    }
  })
}
