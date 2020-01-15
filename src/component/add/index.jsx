import React, { Component } from 'react'
import './styless.less'
import { Input } from 'antd'
import { Addone } from "@/utils/routersLoader"
const { Search } = Input
export default class extends Component {
  table = () => {
    this.props.history.push('./home')
  }
  render() {
    return (
      <div>
        <div className="head">
          <img src="image/1.png" alt="" />
          <div className="head_1">
            <p>添加</p>
            <p onClick={this.table}>列表</p>
          </div>
          <div className="val">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ height: 50 }}
              onChange={e => this.props.search(e.target.value)}
            />
          </div>
          <div className="head_2">
            用户名：<span>{JSON.parse(localStorage.getItem('persist:root')).userName}</span>
          </div>
        </div>
        <Addone {...this.props} />
      </div>
    )
  }
}
