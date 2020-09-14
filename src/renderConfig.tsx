
import { ComponentType, SFC } from 'react'
import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
export type RouteConfigItem = {
  title: string,
  path: string,
  disabled: boolean,
  component?: ComponentType,
  children: RouteConfigs
  exact?: boolean,
  extend?: any
}

export type RouteConfigs = Array<RouteConfigItem>

export type PropsType = {
  routes: RouteConfigs
}

export type BaseProps = {
  routeItem: RouteConfigItem
}
export const RenderConfig: SFC<PropsType> = (props: PropsType) => {
  const { routes } = props
  const list = routes.map(route => {
    const NotMatch: SFC<BaseProps> = (propsC) => (<>{
      propsC.children ? propsC.children : route.title
    }</>)
    const Comp: ComponentType<any> = route.component || NotMatch

    return (
      <Route exact={route.exact} key={route.path} path={route.path}>
        {
          Array.isArray(route.children) ? <Comp RouteItem={route}>
            <RenderConfig routes={route.children}/>
          </Comp> : <Comp RouteConfigs={route}/>
        }
      </Route>
    )
  })

  return (
    <Switch>{list}</Switch>
  )
}