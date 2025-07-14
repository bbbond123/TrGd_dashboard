import Mock from 'mockjs'
import setupMock, { successResponseWrap, failResponseWrap } from '@/mock/setup-mock'
import type { MockParams, UserInfo, LoginResponse, MenuItem } from '@/types/mock'

setupMock({
  setup() {
    // 登录
    Mock.mock(new RegExp('/api/auth/login'), (params: MockParams) => {
      const { username, password } = JSON.parse(params.body)

      if (!username) {
        return failResponseWrap(null, '用户名不能为空', 400)
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 400)
      }

      // 模拟用户验证
      const users = [
        { username: 'admin', password: 'admin123', role: 'admin', nickname: '超级管理员' },
        { username: 'user', password: 'user123', role: 'user', nickname: '普通用户' },
        { username: 'editor', password: 'editor123', role: 'editor', nickname: '编辑' }
      ]

      const user = users.find((u) => u.username === username && u.password === password)

      if (user) {
        const token = Mock.mock('@guid')
        const userInfo: UserInfo = {
          id: Mock.mock('@increment'),
          username: user.username,
          nickname: user.nickname,
          role: user.role,
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          email: `${user.username}@example.com`,
          phone: '138****8888',
          status: 1,
          createTime: '2023-01-01 12:00:00'
        }

        // 模拟存储用户信息到本地存储
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))

        const response: LoginResponse = {
          token,
          user: userInfo
        }

        return successResponseWrap(response)
      }

      return failResponseWrap(null, '用户名或密码错误', 401)
    })

    // 登出
    Mock.mock(new RegExp('/api/auth/logout'), () => {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userInfo')
      return successResponseWrap(null)
    })

    // 刷新token
    Mock.mock(new RegExp('/api/auth/refresh'), () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        const newToken = Mock.mock('@guid')
        window.localStorage.setItem('token', newToken)
        return successResponseWrap({
          token: newToken
        })
      }
      return failResponseWrap(null, 'Token无效', 401)
    })

    // 获取用户权限菜单
    Mock.mock(new RegExp('/api/user/menus'), () => {
      const userInfo = window.localStorage.getItem('userInfo')
      if (!userInfo) {
        return failResponseWrap(null, '未登录', 401)
      }

      const user: UserInfo = JSON.parse(userInfo)
      const adminMenus: MenuItem[] = [
        {
          id: 1,
          name: 'Dashboard',
          path: '/dashboard',
          icon: 'dashboard',
          component: 'Dashboard',
          children: []
        },
        {
          id: 2,
          name: '系统管理',
          path: '/system',
          icon: 'system',
          children: [
            {
              id: 21,
              name: '用户管理',
              path: '/system/user',
              icon: 'user',
              component: 'SystemUser'
            },
            {
              id: 22,
              name: '角色管理',
              path: '/system/role',
              icon: 'role',
              component: 'SystemRole'
            }
          ]
        }
      ]

      const userMenus: MenuItem[] = [
        {
          id: 1,
          name: 'Dashboard',
          path: '/dashboard',
          icon: 'dashboard',
          component: 'Dashboard',
          children: []
        }
      ]

      const menus = user.role === 'admin' ? adminMenus : userMenus
      return successResponseWrap(menus)
    })
  }
})
