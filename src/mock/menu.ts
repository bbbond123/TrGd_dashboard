import Mock from 'mockjs'
import setupMock, { successResponseWrap, failResponseWrap, successIBaseResponse } from '@/mock/setup-mock'
// import { http } from '@/utils/http/index'
import type { IBaseResponse } from '@/api/type'
import type { MenuInfo } from '@/types/mock'

setupMock({
  setup() {
    // 获取菜单列表 - 匹配 /menu/index API
    Mock.mock(new RegExp('/menu/index'), (): Promise<IBaseResponse<MenuInfo[]>> => {
      const menuData: MenuInfo[] = [
        {
          parentId: '0',
          path: '/home',
          name: 'home',
          component: '/home',
          hasParent: false,
          hasChildren: false
        },
        {
          id: '100',
          parentId: '0',
          path: '/coinMerchant',
          name: 'Merchant',
          component: '/coinMerchant',
          hasParent: false,
          hasChildren: true,
          children: [
            {
              id: '101',
              parentId: '100',
              path: '/coinMerchant/coinMerchantList',
              name: 'Merchant List',
              component: '/coinMerchant/coinMerchantList',
              hasParent: true,
              hasChildren: false
            },
            {
              id: '102',
              parentId: '100',
              path: '/coinMerchant/coinMerchantSubaccount',
              name: 'Merchant Subaccount',
              component: '/coinMerchant/coinMerchantSubaccount',
              hasParent: true,
              hasChildren: false
            }
          ]
        },
        {
          id: '200',
          parentId: '0',
          path: '/coinTransManage',
          name: 'Transfer',
          component: '/coinTransManage',
          hasParent: false,
          hasChildren: true,
          children: [
            {
              id: '201',
              parentId: '200',
              path: '/coinTransManage/transferList',
              name: 'Coin Transfer',
              component: '/coinTransManage/transferList',
              hasParent: true,
              hasChildren: false
            },
            {
              id: '202',
              parentId: '200',
              path: '/coinTransManage/transactionList',
              name: 'History transaction',
              component: '/coinTransManage/transactionList',
              hasParent: true,
              hasChildren: false
            }
          ]
        },
        {
          id: '33',
          parentId: '0',
          path: '/users',
          name: 'User Management',
          component: '/users',
          hasParent: false,
          hasChildren: true,
          children: [
            {
              id: '429',
              parentId: '33',
              path: '/users/usersList',
              name: 'User List',
              component: '/users/usersList',
              hasParent: true,
              hasChildren: false
            }
            // {
            //   id: '40',
            //   parentId: '33',
            //   path: '/user/userList',
            //   name: '用户列表',
            //   component: '/user/userList',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '465',
            //   parentId: '33',
            //   path: '/user/customerTags',
            //   name: '用户标签',
            //   component: '/user/customerTags',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '463',
            //   parentId: '33',
            //   path: '/user/memberLevel',
            //   name: '会员等级',
            //   component: '/user/memberLevel',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '464',
            //   parentId: '33',
            //   path: '/user/pointsRules',
            //   name: '积分规则',
            //   component: '/user/pointsRules',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '466',
            //   parentId: '33',
            //   path: '/user/pointDetail',
            //   name: '积分明细',
            //   component: '/user/pointDetail',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '467',
            //   parentId: '33',
            //   path: '/user/starDetail',
            //   name: '星星明细',
            //   component: '/user/starDetail',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '468',
            //   parentId: '33',
            //   path: '/user/activityCenter',
            //   name: '活动中心',
            //   component: '/user/activityCenter',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '495',
            //   parentId: '33',
            //   path: '/user/leaderboard',
            //   name: '排行榜',
            //   component: '/user/leaderboard',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '496',
            //   parentId: '33',
            //   path: '/user/recommendList',
            //   name: '推广管理',
            //   component: '/user/recommendList',
            //   hasParent: true,
            //   hasChildren: false
            // }
          ]
        },
        // {
        //   id: '100',
        //   parentId: '0',
        //   path: '/messageNotice',
        //   name: '消息公告',
        //   component: '/messageNotice',
        //   hasParent: false,
        //   hasChildren: true,
        //   children: [
        //     {
        //       id: '167',
        //       parentId: '100',
        //       path: '/messageNotice/notice',
        //       name: '公告管理',
        //       component: '/messageNotice/notice',
        //       hasParent: true,
        //       hasChildren: false
        //     },
        //     {
        //       id: '186',
        //       parentId: '100',
        //       path: '/messageNotice/maintenance',
        //       name: '维护管理',
        //       component: '/messageNotice/maintenance',
        //       hasParent: true,
        //       hasChildren: false
        //     }
        //   ]
        // },
        {
          id: '1',
          parentId: '0',
          path: '/system',
          name: 'System',
          component: '/system',
          hasParent: false,
          hasChildren: true,
          children: [
            {
              id: '2',
              parentId: '1',
              path: '/system/account',
              name: 'Account',
              component: '/system/account',
              hasParent: true,
              hasChildren: false
            }
            // {
            //   id: '3',
            //   parentId: '1',
            //   path: '/system/roles',
            //   name: '角色管理',
            //   component: '/system/roles',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '4',
            //   parentId: '1',
            //   path: '/system/resource',
            //   name: '资源管理',
            //   component: '/system/resource',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '427',
            //   parentId: '1',
            //   path: '/system/uploadLog',
            //   name: '上传日志',
            //   component: '/system/uploadLog',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '5',
            //   parentId: '1',
            //   path: '/system/log',
            //   name: '操作日志',
            //   component: '/system/log',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '6',
            //   parentId: '1',
            //   path: '/system/dictionary',
            //   name: '全局参数配置',
            //   component: '/system/dictionary',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '461',
            //   parentId: '1',
            //   path: '/system/ipAddress',
            //   name: 'IP地址',
            //   component: '/system/ipAddress',
            //   hasParent: true,
            //   hasChildren: false
            // },
            // {
            //   id: '499',
            //   parentId: '1',
            //   path: '/system/SMSManage',
            //   name: '短信',
            //   component: '/system/SMSManage',
            //   hasParent: true,
            //   hasChildren: false
            // }
          ]
        }
      ]
      return successIBaseResponse(menuData)
    })

    // 根据角色获取菜单 - 可选的扩展功能
    Mock.mock(new RegExp('/menu/user-menus'), () => {
      const userInfo = window.localStorage.getItem('userInfo')
      if (!userInfo) {
        return failResponseWrap(null, '未登录', 401)
      }

      const user = JSON.parse(userInfo)

      // 根据不同角色返回不同的菜单
      let menuData: MenuInfo[] = []

      if (user.role === 'admin') {
        // 管理员可以看到所有菜单
        menuData = [
          {
            parentId: '0',
            path: '/home',
            name: '首页',
            component: '/home',
            hasParent: false,
            hasChildren: false
          },
          {
            id: '33',
            parentId: '0',
            path: '/users',
            name: '用户管理',
            component: '/users',
            hasParent: false,
            hasChildren: true,
            children: [
              {
                id: '40',
                parentId: '33',
                path: '/users/usersList',
                name: '用户列表',
                component: '/users/usersList',
                hasParent: true,
                hasChildren: false
              }
            ]
          },
          {
            id: '1',
            parentId: '0',
            path: '/system',
            name: '系统管理',
            component: '/system',
            hasParent: false,
            hasChildren: true,
            children: [
              {
                id: '2',
                parentId: '1',
                path: '/system/account',
                name: '账号管理',
                component: '/system/account',
                hasParent: true,
                hasChildren: false
              }
            ]
          }
        ]
      } else {
        // 普通用户只能看到首页和部分功能
        menuData = [
          {
            parentId: '0',
            path: '/home',
            name: '首页',
            component: '/home',
            hasParent: false,
            hasChildren: false
          }
        ]
      }

      return successResponseWrap(menuData)
    })
  }
})
