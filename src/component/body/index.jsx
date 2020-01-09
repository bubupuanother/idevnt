import React from 'react'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import cs from 'classnames'
import { listDate } from "@/api/actions"
import { Spin } from 'antd'
import imagesLoaded from 'imagesloaded'
import Cart from '@/component/cart'
import './styles.less'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasMore: true, // 是否开启下拉加载
      data: [], // 接受我每次的数据
      count: 0,
      limit: 8,
      className: [, ,]
    }
    // 拿第一次的数据
    this.loadMoreData()
  }

  advanceWidth = () => {
    // new Masonry(节点, 配置)
    new Masonry(document.querySelector('.pages-hoc'), {
      itemSelector: '.d', // 要布局的网格元素
      columnWidth: 200,  // 获取节点 可以自动计算每列的宽度
      fitWidth: true, // 设置网格容器宽度等于网格宽度
      gutter: 20,
    })
  }

  // 加载更多数据
  loadMoreData = (page = 1) => {
    // page 当前滚动到了第几页
    // const { data, count } = this.state
    // 超过200条数据 不继续监听下拉事件

    let a = {
      token: localStorage.getItem("quan"),
      limit: this.state.limit,
      pages: 1
    }
    // page 是当前请求第几页数据
    // limit 每页我需要返回的数据条数
    listDate(a).then(res => {
      this.setState({
        data: res.result.list,
        count: res.result.count,
        limit: this.state.limit + 8
      }, () => {
        this.img()
      })
    })
      .catch(err => console.log(err))
  }

  img = () => {
    const imgone = imagesLoaded(".pages-hoc")
    imgone.on('always', () => {
      this.advanceWidth()
    })
  }

  new = () => {
    const { data } = this.state
    this.setState({
      className: ['span', ,],
      data: data.sort((a, b) => {
        return b.createtime - a.createtime
      })
    })
    this.img()
  }

  hot = () => {
    const { data } = this.state

    this.setState({
      className: [, 'span',],
      data: data.sort((a, b) => {
        return JSON.parse(b.info).leases - JSON.parse(a.info).leases
      })
    })
    this.img()
  }
  like = () => {
    const { data } = this.state

    this.setState({
      className: [, , 'span'],
      data: data.sort((a, b) => {
        return JSON.parse(b.info).building - JSON.parse(a.info).building
      })
    })
    this.img()
  }

  render() {
    return (
      <div className="box">
        <div className="paix">
          <p>排序:</p>
          <span className={this.state.className[0]} onClick={this.new}>最新</span>
          <span className={this.state.className[1]} onClick={this.hot}>最热</span>
          <span className={this.state.className[2]} onClick={this.like}>喜欢</span>
        </div>
        <InfiniteScroll
          loader={<div className="loader" key={0}><Spin />
            <span>Loading...</span></div>}
          initialLoad={false} // 不让它进入直接加载
          pageStart={1} // 设置初始化请求的页数
          loadMore={this.loadMoreData}  // 监听的ajax请求
          hasMore={true} // 是否继续监听滚动事件 true 监听 | false 不再监听
        >
          <div className="pages-hoc">
            {
              this.state.data.map((v, i) => {
                return (
                  <Cart
                    key={i}
                    data={v}
                    className={cs('d', { v: i % 2 === 0, v: i % 2 !== 0 })}
                  />
                )
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

