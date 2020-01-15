import React, { Component } from 'react'
import './styles.less'
import { Input } from 'antd'

const { Search } = Input

export default class extends Component {
  
  add = () => {
    this.props.history.push('/add')
  }

  render() {
    return (
      <div className="head">
        <img src="image/1.png" alt="" />
        <div className="head_1">
          <p onClick={this.add}>添加</p>
          <p>列表</p>
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
    )
  }
}
