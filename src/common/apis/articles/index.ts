import type { IBaseResponse, IResponse } from "../type"
import type * as Articles from "./type"
import type { Article, ArticleComments, LikeArticle } from "./type"
import { request } from "@/http/axios"

/** 驼峰转下划线 */
function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

/** 转换对象键名为下划线格式 */
function toSnakeCase<T extends Record<string, any>>(obj: T): Record<string, any> {
  const result: Record<string, any> = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = camelToSnake(key)
      result[snakeKey] = obj[key]
    }
  }
  return result
}

/** 获取文章列表 */
export function getArticleListApi(data: Articles.ArticleListRequest): Promise<IResponse<Article>> {
  return request({
    url: "/articles/list",
    method: "post",
    data
  })
}

/** 获取文章统计信息 */
export function getArticleStatsApi(data: Articles.ArticleStatsRequest): Promise<IBaseResponse<Articles.ArticleStatsResponse>> {
  return request({
    url: "/articles/stats",
    method: "post",
    data
  })
}

/** 获取文章详情 */
export function getArticleApi(articleId: number): Promise<IBaseResponse<Article>> {
  return request({
    url: `/articles/${articleId}`,
    method: "get"
  })
}

/** 创建文章 */
export function createArticleApi(data: Articles.CreateArticleRequest): Promise<IBaseResponse<Article>> {
  return request({
    url: "/articles",
    method: "post",
    data: toSnakeCase(data) // 转换为 snake_case 发送给后端
  })
}

/** 创建文章（支持图片上传） */
export function createArticleWithImageApi(data: Articles.CreateArticleWithImageRequest): Promise<IBaseResponse<Article>> {
  const formData = new FormData()

  // 添加文章基本信息（转换为 snake_case）
  Object.keys(data).forEach((key) => {
    if (key === "images") return
    const value = data[key as keyof Articles.CreateArticleWithImageRequest]
    if (value !== undefined && value !== null) {
      const snakeKey = camelToSnake(key) // 转换键名为 snake_case
      if (typeof value === "object" && Array.isArray(value)) {
        formData.append(snakeKey, JSON.stringify(value))
      } else {
        formData.append(snakeKey, String(value))
      }
    }
  })

  // 添加图片文件
  if (data.images && data.images.length > 0) {
    data.images.forEach((file) => {
      formData.append("image", file) // 后端期望 'image' 字段
    })
  }

  return request({
    url: "/articles/with-image",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

/** 更新文章 */
export function updateArticleApi(data: Articles.UpdateArticleRequest): Promise<IBaseResponse<Article>> {
  return request({
    url: "/articles",
    method: "put",
    data: toSnakeCase(data) // 转换为 snake_case 发送给后端
  })
}

/** 更新文章（支持图片上传） */
export function updateArticleWithImageApi(data: Articles.UpdateArticleRequest & { image?: File }): Promise<IBaseResponse<Article>> {
  const formData = new FormData()

  // 添加文章基本信息（转换为 snake_case）
  Object.keys(data).forEach((key) => {
    if (key === "image") return
    const value = data[key as keyof typeof data]
    if (value !== undefined && value !== null) {
      const snakeKey = camelToSnake(key) // 转换键名为 snake_case
      if (typeof value === "object" && Array.isArray(value)) {
        formData.append(snakeKey, JSON.stringify(value))
      } else {
        formData.append(snakeKey, String(value))
      }
    }
  })

  // 添加图片文件
  if (data.image) {
    formData.append("image", data.image)
  }

  return request({
    url: "/articles/with-image",
    method: "put",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

/** 删除文章 */
export function deleteArticleApi(articleId: number): Promise<IBaseResponse<boolean>> {
  return request({
    url: `/articles/${articleId}`,
    method: "delete"
  })
}

/** 获取文章评论 */
export function getArticleCommentsApi(articleId: number): Promise<IBaseResponse<ArticleComments>> {
  return request({
    url: `/articles/${articleId}/comments`,
    method: "get"
  })
}

/** 文章点赞 */
export function likeArticleApi(articleId: number): Promise<IBaseResponse<LikeArticle>> {
  return request({
    url: `/articles/${articleId}/like`,
    method: "post"
  })
}

/** 搜索附近文章 */
export function getNearbyArticlesApi(data: Articles.NearbyArticlesRequest): Promise<IResponse<Article>> {
  return request({
    url: "/articles/nearby",
    method: "post",
    data
  })
}
