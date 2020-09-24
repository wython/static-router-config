# static-router-config
react-router4提供了很优美的动态路由设计api，然而大多数场景下的业务可能依然会希望有可能的静态路由配置。

这样有几个优点：
1. 方便统一管理
2. 便于和导航栏协同

这是方便使用静态配置的一个小工具。
通过以下方式安装:
```
npm i static-router-config
```

你的config只要满足如下约定即可,?在ts表示不需要必填:
```typescript
type RouteConfigItem = {
  title?: string,
  path: string,
  children?: ConfigsType
  component?: ComponentType,
  showInMenu?: boolean,
  exact?: boolean,
  extend?: any
}
```

假如你也是使用ts开发,以下类型帮助校验格式
```typescript
type ConfigsType = Array<RouteConfigItem>
type BaseProps = {
  routeItem: RouteConfigItem
}
```

demo: 

``` typescript
import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  RenderConfig,
  ConfigsType
} from 'static-router-config'

const routerConfig: ConfigsType = [
  {
    path: '/login',
    title: 'login'
  },
  {
    path: '/register',
    title: 'register'
  },
  {
    title: 'app1',
    path: '/app',
    showInMenu: true,
    children: [
      {
        path: '/app/path1'
      }
    ]
  },
  {
    title: 'app2',
    path: '/app2',
    showInMenu: true,
    children: [
      {
        path: '/app2/path2',
      }
    ]
  }
]

export const App = () => {
  return (
    <Router>
      <RenderConfig routes={routerConfig}/>
    </Router>
  )
}

export default App
```
