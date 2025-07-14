import Mock from 'mockjs'
import setupMock, { successResponseWrap, failResponseWrap } from '@/mock/setup-mock'
import type { MockParams, UserInfo } from '@/types/mock'

setupMock({
  setup() {
    // 用户信息
    Mock.mock(new RegExp('/api/user/info'), () => {
      const userInfo = window.localStorage.getItem('userInfo')
      if (userInfo) {
        return successResponseWrap(JSON.parse(userInfo))
      }
      return failResponseWrap(null, '未登录', 401)
    })

    // 用户列表
    Mock.mock(new RegExp('/api/user/list'), (params: MockParams) => {
      const { url } = params
      const urlParams = new URLSearchParams(url.split('?')[1])
      const page = Number(urlParams.get('page')) || 1
      const pageSize = Number(urlParams.get('pageSize')) || 10

      const total = 100
      const list: UserInfo[] = Mock.mock({
        [`list|${pageSize}`]: [
          {
            'id|+1': (page - 1) * pageSize + 1,
            username: '@word(5,10)',
            nickname: '@cname',
            avatar: '@image("100x100", "#50B347", "#FFF", "Avatar")',
            email: '@email',
            phone: /^1[3-9]\d{9}$/,
            'role|1': ['admin', 'user', 'editor'],
            'status|1': [0, 1],
            createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
            updateTime: '@datetime("yyyy-MM-dd HH:mm:ss")'
          }
        ]
      }).list

      return successResponseWrap({
        list,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize)
      })
    })

    // 创建用户
    Mock.mock(new RegExp('/api/user/create'), (params: MockParams) => {
      const userData = JSON.parse(params.body)
      return successResponseWrap({
        id: Mock.mock('@increment'),
        ...userData,
        createTime: new Date().toISOString()
      })
    })

    // 更新用户
    Mock.mock(new RegExp('/api/user/update/\\d+'), (params: MockParams) => {
      const userData = JSON.parse(params.body)
      return successResponseWrap({
        ...userData,
        updateTime: new Date().toISOString()
      })
    })

    // 删除用户
    Mock.mock(new RegExp('/api/user/delete/\\d+'), () => {
      return successResponseWrap(null)
    })
  }
})
