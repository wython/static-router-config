
import { ComponentType, SFC, useMemo } from 'react'
import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import { PropsType, BaseProps }  from './index'

export const RenderConfig: SFC<PropsType> = (props: PropsType) => {
  const location = useLocation()
  const { routes } = props
  const list = useMemo(() => {
    return routes.map(route => {
      const NotMatch: SFC<BaseProps> = (propsC) => (<>{
        propsC.children ? propsC.children : route.title
      }</>)
      const Comp: ComponentType<any> = route.component || NotMatch
  
      return (
        <Route exact={route.exact} key={route.path} path={route.path}>
          {
            Array.isArray(route.children) ? <Comp routeItem={route}>
              <RenderConfig routes={route.children}/>
            </Comp> : <Comp routeItem={route}/>
          }
        </Route>
      )
    })
  }, [routes])
  return (
    <Switch location={location}>{list}</Switch>
  )
}