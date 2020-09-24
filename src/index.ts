import {ComponentType} from 'react'
export type RouteConfigItem = {
  title?: string,
  path: string,
  children?: ConfigsType
  component?: ComponentType,
  showInMenu?: boolean,
  exact?: boolean,
  extend?: any
}

export type ConfigsType = Array<RouteConfigItem>

export type PropsType = {
  routes: ConfigsType
}

export type BaseProps = {
  routeItem: RouteConfigItem
}
export { RenderConfig } from './renderConfig'