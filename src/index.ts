import {ComponentType} from 'react'
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
export { RenderConfig } from './renderConfig'