import React, { Component } from 'react'
import './styles.less'
import { Input } from 'antd'

const { Search } = Input

export default class extends Component {
  render() {
    return (
      <div className="head">
        <img src="image/1.png" alt="" />
        <div className="head_1">
          <p>Home</p>
          <p>Offer</p>
          <p className="asd">Ad Samples</p>
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
