import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd';
//通用的过场组件
const loadingC = () => <div className="divone"><Spin /></div>
//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingC) => {
  return Loadable({
    loader: loader,
    loading
  })
}