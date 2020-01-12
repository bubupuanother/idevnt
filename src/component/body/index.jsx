import React from 'react'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import cs from 'classnames'
import { listDate } from "@/api/actions"
import { addset } from "@/api/actions"
import { Spin } from 'antd'
import imagesLoaded from 'imagesloaded'
import Cart from '@/component/cart'
import From from '@/component/from'
import './styles.less'
import { connect } from 'react-redux'

export default @connect(state => {
  return {
    datalist: state
  }
})
class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasMore: true, // 是否开启下拉加载
      data: [], // 接受我每次的数据
      count: 0,
      limit: 8,
      className: [, ,],
      data1: []
    }
    // 拿第一次的数据
    this.loadMoreData()
  }

  advanceWidth = () => {
    // new Masonry(节点, 配置)
    new Masonry(document.querySelector('.pages-hoc'), {
      itemSelector: '.d', // 要布局的网格元素
      columnWidth: 350,  // 获取节点 可以自动计算每列的宽度
      fitWidth: true, // 设置网格容器宽度等于网格宽度
      gutter: 20,
    })
  }
  componentDidMount(){
    let a = {
      token: localStorage.getItem("quan"),
      limit:1000,
      pages: 1
    }
    listDate(a).then(res => {
      let data = res.result.list
      console.log(data)
      // data.filter(v => {
      //   if (parseInt(v.id % 10) == 0) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/eb3992d3d1bffc13ed56bf0513b546251578464928.tmp"],
      //       address: "asdasdad",
      //       homeone: "No More Gray Hair RootsMy real hair colour is back and I no longer have to dye my hair.",
      //       homesize: "This is the routine I added to my mornings in order to bring back the colour of my hair.",
      //       Door: "刘冰冰",
      //       building: "5667",
      //       leases: "209",
      //       status: "666",
      //       dataTime: "2019.03.06~2019.03.13",
      //       url: "newnaturalcoloring.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-09",
      //       styleimg: "image",
      //       language: "English",
      //       child: "USA",
      //       usd: "cloaked",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 1) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/c5e6fbb0240b94126a2e9161ffb047f11578465575.tmp"],
      //       address: "23岁的白手起家的百万富翁透露：这是每个人都能做到的。",
      //       homeone: "当我们找到保罗的时候，他坐在曼哈顿中城最有名的一家餐馆外面。当我们去握手的时候，两位面色羞怯的，适合闲逛的男人，要求和他一起自拍。他发号施令，",
      //       homesize: "为这家伙竖起大拇指",
      //       Door: "王潇瑜",
      //       building: "3300",
      //       leases: "223",
      //       status: "899",
      //       dataTime: "2019.04.28~2019.05.04",
      //       url: "business-chronicle.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-08",
      //       styleimg: "image",
      //       language: "Chinese",
      //       child: "China",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 2) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/5675670990e1e1286fc4fef7c81ce2d61578465604.tmp", "http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/5675670990e1e1286fc4fef7c81ce2d61578465604.tmp"],
      //       address: "",//图片下面的文字标题
      //       homeone: "“和柠檬搅动--它对你有用(加班加点)”",//文字
      //       homesize: "我现在65岁了，听着，任何可能的事。用柠檬水试试，让它做它的事。“等了几个星期，当我出去散步的时候，每个人都微笑着，注意到了。”",//标题下面的内容
      //       Door: "郝云龙",//标题
      //       building: "233",
      //       leases: "66",
      //       status: "99",
      //       dataTime: "2019.04.23~2019.05.19",
      //       url: "happilyrestored.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-07",
      //       styleimg: "video",
      //       language: "Chinese",
      //       child: "China",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 3) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/f62a22e9f4471d5c8bcda7275d502b641578465658.tmp"],
      //       address: "",//图片下面的文字标题
      //       homeone: "",//文字
      //       homesize: "单肩色块Bodycon服装店：https://goo.gl/zU2stU",//标题下面的内容
      //       Door: "郝云龙间谍",//标题
      //       building: "66",
      //       leases: "962",
      //       status: "13",
      //       dataTime: "2019.03.07~2019.04.09",
      //       url: "chicme.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-06",
      //       styleimg: "image",
      //       language: "English",
      //       child: "巴基斯坦",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 4) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/cd35f381f4705e8755e75352e964a3ea1578465682.tmp"],
      //       address: "奥里给耶耶耶耶",//图片下面的文字标题
      //       homeone: "阿拉伯特种兵",//文字
      //       homesize: "特种兵王潇瑜",//标题下面的内容
      //       Door: "王潇瑜傻逼",//标题
      //       building: "6226",
      //       leases: "962222",
      //       status: "1222223",
      //       dataTime: "2020.01.08~2020.01.08",
      //       url: "www.baidu.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-05",
      //       styleimg: "image",
      //       language: "English",
      //       child: "巴基斯坦",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 5) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/30f6f23f2559f312b17c5546cf1c43de1578465705.tmp", "http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/30f6f23f2559f312b17c5546cf1c43de1578465705.tmp"],
      //       address: "我是特种兵",//图片下面的文字标题
      //       homeone: "",//文字
      //       homesize: "",//标题下面的内容
      //       Door: "王潇瑜",//标题
      //       building: "999",
      //       leases: "988",
      //       status: "999",
      //       dataTime: "2020.01.08~2020.01.08",
      //       url: "www.baidu.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-04",
      //       styleimg: "video",
      //       language: "English",
      //       child: "USA",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 6) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/2a2641701836183feacdd5787cd5707e1578465757.tmp", "http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/2a2641701836183feacdd5787cd5707e1578465757.tmp"],
      //       address: "芜湖",//图片下面的文字标题
      //       homeone: "炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫炫",//文字
      //       homesize: "",//标题下面的内容
      //       Door: "郝云龙",//标题
      //       building: "1",
      //       leases: "1",
      //       status: "1",
      //       dataTime: "2020.01.08~2020.01.08",
      //       url: "www.baidu.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-03",
      //       styleimg: "video",
      //       language: "Chinese",
      //       child: "China",
      //       usd: "cloaked",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 7) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/1e9d473bccb3ef1ee2a96fb1071fb8bb1578466648.tmp", "http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/1e9d473bccb3ef1ee2a96fb1071fb8bb1578466648.tmp"],
      //       address: "芜湖",//图片下面的文字标题
      //       homeone: "",//文字
      //       homesize: "",//标题下面的内容
      //       Door: "My.潇仔",//标题
      //       building: "0",
      //       leases: "0",
      //       status: "0",
      //       dataTime: "2020.01.08~2020.01.08",
      //       url: "www.baidu.com",
      //       firstTime: "2020-01-01",
      //       lastTime: "2020-01-02",
      //       styleimg: "video",
      //       language: "Chinese",
      //       child: "China",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 8) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/1fff4f03994ec198ab8af583652eb2621578466668.tmp"],
      //       address: "芜湖",//图片下面的文字标题
      //       homeone: "",//文字
      //       homesize: "",//标题下面的内容
      //       Door: "My.潇仔士兵",//标题
      //       building: "0",
      //       leases: "0",
      //       status: "0",
      //       dataTime: "2020.01.08~2020.01.08",
      //       url: "www.baidu.com",
      //       firstTime: "2019-12-01",
      //       lastTime: "2019-12-29",
      //       styleimg: "image",
      //       language: "Chinese",
      //       child: "China",
      //       usd: "suspectud",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      //   if (parseInt(v.id % 10) == 9) {
      //     let a = {
      //       id: v.id,
      //       updatetime: ["http://img-dove.oss-cn-hongkong.aliyuncs.com/Blogs/9f6a23f62ded4560be1ac40ed093ce251578466691.tmp"],
      //       address: "芜湖wxy",//图片下面的文字标题
      //       homeone: "巴基斯坦特种兵",//文字
      //       homesize: "巴基斯坦特种兵",//标题下面的内容
      //       Door: "My.潇仔间谍",//标题
      //       building: "30",
      //       leases: "30",
      //       status: "30",
      //       dataTime: "2020.01.08~2020.01.08",
      //       url: "www.baidu.com",
      //       firstTime: "2019-12-01",
      //       lastTime: "2019-12-28",
      //       styleimg: "image",
      //       language: "English",
      //       child: "USA",
      //       usd: "cloaked",
      //       like:0
      //     }
      //     let d = {
      //       token: localStorage.getItem("quan"),
      //       info: a
      //     }
      //     addset(d).then(res => {
      //       console.log(res)
      //     })
      //   }
      // })
    })
  }
  loadMoreData = (page = 1) => {
    // page 当前滚动到了第几页
    // const { data, count } = this.state
    // 超过200条数据 不继续监听下拉事件
    if (this.state.data1.length != 0) {
      this.img()
    } else {
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
  componentWillReceiveProps(a) {
    this.setState({
      data1: a.datalist.filterdata.filterdata,
      data: a.datalist.filterdata.filterdata,
    }, () => {
      this.img()
    })
  }
  render() {
    return (
      <div className="box">
        <From {...this.props} />
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

