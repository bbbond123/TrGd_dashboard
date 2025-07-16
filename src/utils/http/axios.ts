import axios from 'axios'
import type { ResponseType, AxiosResponse, AxiosInstance, AxiosError, AxiosProgressEvent } from 'axios'
// import router from '@/router'
import { ElMessage, ElMessageBox } from 'element-plus'
import Cookies from 'js-cookie'
// import i18n from '@/locales'
import { ref } from 'vue'
// const { t } = i18n.global

enum Msgs {
  '操作成功' = 200,
  '无权操作' = 401,
  '禁止访问' = 403,
  '系统内部错误' = 500
}
const Msg = (num: number) => {
  switch (num) {
    case 200:
      return '操作成功'
    case 401:
      return '无权操作'
    case 403:
      return '禁止访问'
    case 500:
      return '系统内部错误'
    default:
      return '请稍后再试'
  }
}
declare module 'axios' {
  interface IAxios {
    success: boolean
    errorCode: string | number
    data: any
    errMessage: string
  }
  // interface AxiosInstance{
  //   (config:AxiosRequestConfig):Promise<any>
  // }
  export interface AxiosResponse<T = any> extends IAxios { }
}
// 避免多个接口401弹出多个弹框
let isRefreshing = false
// 全局遮罩

const { VITE_NODE_ENV, VITE_PROXY_DOMAIN } = import.meta.env
// 创建http实例

interface AxiosInstanceOptions {
  baseurl?: string
  contenttype?: string
  responseType?: ResponseType
  timeout?: number
  headers?: {
    [key: string]: any
  }
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  signal?: AbortSignal
}

const apiPath = VITE_PROXY_DOMAIN
//
const random = ref<string | undefined>()
const instance = (obj?: AxiosInstanceOptions): AxiosInstance => {
  const https = axios.create({
    baseURL: obj?.baseurl ?? apiPath,
    timeout: obj?.timeout ?? 15000,
    responseType: obj?.responseType ?? 'json',
    headers: {
      'Content-Type': obj?.contenttype ?? 'application/json;charset=UTF-8',
      'Accept-Language': localStorage.getItem('language') || 'en-US'
    },
    onUploadProgress: obj?.onUploadProgress
  })
  // 添加请求拦截器
  https.interceptors.request.use(
    (config) => {
      config.headers = config.headers || {}
      const token = Cookies.get('token')
      if (token) {
        config.headers['authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 添加响应拦截器
  https.interceptors.response.use(
    (res: AxiosResponse) => {
      if (obj && obj.responseType == 'blob') {
        return res
      } else if (obj) {
        if (res.data.errCode === '10006') {
          if (!isRefreshing) {
            isRefreshing = true
            Cookies.remove('token')
            Cookies.remove('cid')
            Cookies.remove('state')
            localStorage.removeItem('imgUrl')
            // router.push('/login')
            isRefreshing = false
            // ElNotification({
            //   type: 'warning',
            //   message: '当前用户已过期，请重新登入'
            // })
            // ElMessageBox({
            //   message: '当前用户已过期，请重新登入',
            //   title: t('input.prompt')
            // })
          }
        }
        if (res.data) {
          return res.data
        } else {
          return res
        }
      } else {
        const obj = res.data
        if (obj.errCode === '10006') {
          if (!isRefreshing) {
            isRefreshing = true

            Cookies.remove('token')
            Cookies.remove('cid')
            Cookies.remove('state')
            localStorage.removeItem('imgUrl')
            // router.push('/login')
            // ElNotification({
            //   type: 'warning',
            //   message: '当前用户已过期，请重新登入'
            // })
            // ElMessageBox({
            //   message: '当前用户已过期，请重新登入',
            //   title: t('input.prompt')
            // })
            isRefreshing = false
          }
        }
        return res.data
      }
    },
    (err: AxiosError) => {
      const { response } = err
      if (err.code == 'ECONNABORTED') {
        ElMessage.error('网络繁忙，请稍后再试')
      }
      if (!response) return Promise.reject(err)
      const errCodes = [401, 403]
      const code = response.status
      const url = response.config.url

      if (url === '/api/admin/auth/login') {
        console.log('🚀 ~ https.interceptors.response.use ~ err:')
        return Promise.reject(err)
      }

      if (errCodes.includes(code)) {
        if (!isRefreshing) {
          isRefreshing = true
          ElMessageBox({
            message: Msg(code),
            title: '提示'
          })
            .then(() => {
              // router.push('/login')
            })
            .catch(() => {
              // router.push('/login')
            })
            .finally(() => {
              isRefreshing = false
              Cookies.remove('token')
            })
        }
        // removeUserInfo()

        return Promise.reject(err)
      }
      // ElMessage(Msg(code) || t('input.qingqiushibai'))
      return Promise.reject(err)
    }
  )

  return https
}

const http = {
  get: <T>(url: string, data?: any, obj?: AxiosInstanceOptions): Promise<T> => {
    // data 对象里面是null 或者 undefined  ‘’ , data[key] is array, and array is empty
    if (data && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        if (
          data[key] === null ||
          data[key] === undefined ||
          data[key] === '' ||
          (Array.isArray(data[key]) && data[key].length === 0)
        ) {
          delete data[key]
        }
      })
    }

    // data 是对象，则转换为查询参数
    if (typeof data === 'object') {
      const queryParams = new URLSearchParams()
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value as string)
        }
      })
      data = queryParams.toString()
      return obj ? instance(obj).get(url) : instance().get(url)
    }
    return obj ? instance(obj).get(url, { params: data }) : instance().get(url, { params: data })
  },
  post: <T>(url: string, data: any, obj?: any): Promise<T> => {
    // data 对象里面是null 或者 undefined  ‘’ , data[key] is array, and array is empty
    if (data && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        if (
          data[key] === null ||
          data[key] === undefined ||
          data[key] === '' ||
          (Array.isArray(data[key]) && data[key].length === 0)
        ) {
          delete data[key]
        }
      })
    }

    // Check if obj contains an onUploadProgress handler and pass it to the instance config
    const hasProgressHandler = obj && !!obj.signal

    // Create axios config with progress handler if provided
    const axiosConfig = hasProgressHandler
      ? {
        ...obj,
        onUploadProgress: obj.onUploadProgress,
        signal: obj.signal,
        timeout: obj.timeout
      }
      : obj

    return hasProgressHandler
      ? instance(axiosConfig).post(url, data, obj)
      : obj
        ? instance(obj).post(url, data)
        : instance().post(url, data)
  },
  put: <T>(url: string, data: any, obj?: AxiosInstanceOptions): Promise<T> => {
    // data 对象里面是null 或者 undefined  ‘’ , data[key] is array, and array is empty
    if (data && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        if (
          data[key] === null ||
          data[key] === undefined ||
          data[key] === '' ||
          (Array.isArray(data[key]) && data[key].length === 0)
        ) {
          delete data[key]
        }
      })
    }

    // data 是对象，则转换为查询参数
    if (typeof data === 'object') {
      const queryParams = new URLSearchParams()
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value as string)
        }
      })
      data = queryParams.toString()
      return obj ? instance(obj).put(url + '?' + data) : instance().put(url + '?' + data)
    }
    return obj ? instance(obj).put(url, data) : instance().put(url, data)
  },
  delete: <T>(url: string, data: any): Promise<T> => {
    return instance().delete(url, { data: data })
  },
  patch: <T>(url: string, data: any): Promise<T> => {
    return instance().patch(url, data)
  }
}

export default http
