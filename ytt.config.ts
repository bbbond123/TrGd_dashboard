import { Config, ExtendedInterface, ChangeCase } from 'yapi-to-typescript'

const token = 'cda4ab73d12cc220cf877869e4cf21c3b844e845ba354c13fd0ca9ab484b4ab9'
const getRequestFunctionName = (interfaceInfo: ExtendedInterface, changeCase: ChangeCase) => {
  const { method, parsedPath } = interfaceInfo

  // 取完整路径
  let path = parsedPath.dir + '/' + parsedPath.name

  // 去掉第一个斜杠加api
  path = path.replace(/^\/api\//, '')
  // 替换 {xxx} 为 Xxx
  path = path.replace(/\{(\w+)\}/g, (_, p1) => p1.charAt(0).toUpperCase() + p1.slice(1))
  // 处理 - 为驼峰
  const parts = path.split('/').map((part) =>
    part
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
  )
  // 拼接 method

  return `api${method.charAt(0).toUpperCase() + method.slice(1).toLowerCase()}${parts.join('')}`
}

const config: Config = [
  {
    target: 'typescript',
    // 服务器地址
    serverUrl: 'https://yapi.ifoodme.com',
    // 是否只生成接口请求内容和返回内容的 TypeSript 类型
    typesOnly: false,
    // 是否生成 React Hooks 请求函数
    reactHooks: {
      enabled: false
    },
    // 测试环境名称
    devEnvName: 'dev',
    // 生产环境名称
    prodEnvName: 'prod',
    // 类型文件输出路径
    outputFilePath: (interfaceInfo) => {
      return `src/api/${interfaceInfo._category.desc}/index.ts`
    },
    // 请求函数文件路径
    requestFunctionFilePath: 'src/api/request.ts',
    projects: [
      {
        token,
        categories: [
          {
            id: [59, 107, 101, 95, 89, 83, 77, 71, 65, 11, 53, 59, 47, 41, 35, 29, 23, 17],
            getRequestFunctionName
          }
        ]
      }
    ]
  }
]

export default config
