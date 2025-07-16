import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import Cookies from 'js-cookie'
import qs from 'qs' // 建议直接用 qs 库
// import i18n from '@/locales'
// import type { AxiosInstanceOptions } from '@/api/type'
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
      return "200"
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

const instance = (obj?: any): AxiosInstance => {
  const https = axios.create({
    // baseURL: import.meta.env.VITE_PROXY_DOMAIN,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': localStorage.getItem('language') || 'en-US'
    },
    // 正确的 qs 用法
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
  })

  // 请求拦截器
  https.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers = config.headers || {}
      const token = Cookies.get('token')
      if (token) {
        config.headers['authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  // 响应拦截器
  https.interceptors.response.use(
    (response: AxiosResponse) => {
      // 统一处理返回结构
      return response.data
    },
    (error: AxiosError) => {
      // 统一错误提示
      if (error.response) {
        const code = error.response.status
        const msg = Msg(code)
        ElMessage.error(msg)
      } else {
        ElMessage.error(error.message)
      }
      return Promise.reject(error)
    }
  )
  return https
}

const http = {
  get: <T>(url: string, data?: any, obj?: any): Promise<T> => {
    // data 对象里面是null 或者 undefined  ‘’ , data[key] is array, and array is empty
    if (data && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        if (data[key] === null || data[key] === undefined || (Array.isArray(data[key]) && data[key].length === 0)) {
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
    return obj ? instance(obj).post(url, data) : instance().post(url, data)
  },
  put: <T>(url: string, data: any, obj?: any): Promise<T> => {
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
    return obj ? instance(obj).put(url, data) : instance().put(url, data)
  },
  delete: <T>(url: string, data?: any, obj?: any): Promise<T> => {
    return instance().delete(url, { params: data })
  }
}

export default http
