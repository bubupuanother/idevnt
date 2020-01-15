import React, { Component } from 'react'
import './styles.less'
import { DatePicker, Select } from 'antd'
import { connect } from 'react-redux'
import { listDate } from "@/api/actions"
const { Option } = Select

export default @connect(state => {
  return {
    filterdata1: state
  }
}, {
  getdata: (v) => {
    return {
      type: 'DATAONE',
      payload: v
    }
  },
  filterdata: (v) => {
    return {
      type: "FILTER",
      payload: v
    }
  }
})
class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: [],
      child: [],
      usd: [],
      styleimg: "",
      firstTime: "",
      lastTime: ""
    }
  }
  listdata = []
  getlist(v) {
    let a = {
      token: localStorage.getItem("quan"),
      limit: 200,
      pages: 1
    }
    listDate(a).then(res => {
      let data = res.result.list
      if (typeof v === "string") {
        let a = ""
        for (let value in this.state) {
          if (this.state[value] === v) {
            a = value
          }
        }
        this.fengzhuang1(a, v, data, "dan")
      } else {
        let a = ""
        for (let value in this.state) {
          if (typeof this.state[value] !== "string") {
            if (this.state[value].length !== 0) {
              let sum = 0
              this.state[value].filter((i, k) => {
                if (i === v[k]) {
                  sum++
                }
                return true
              })
              if (sum === this.state[value].length) {
                a = value
                break
              }
            }
          }
        }
        this.fengzhuang1(a, v, data, "duo")
      }

    })
  }
  fengzhuang1(name, key, data, stylei) {
    let list = this.listdata
    if (list.length === 0) {
      if (stylei === "dan") {
        let arr = []
        data.filter(v => {
          if (JSON.parse(v.info)[name] === key) {
            arr.push(v)
          }
          return true
        })
        this.listdata = arr
        this.props.filterdata(arr)
      } else {
        let arr = []
        key.filter(v => {
          data.filter(j => {
            if (JSON.parse(j.info)[name] === v) {
              arr.push(j)
            }
            return true
          })
          return true
        })
        this.listdata = arr
        this.props.filterdata(arr)
      }
    } else {
      if (stylei === "dan") {
        let arr = []
        data.filter(v => {
          if (JSON.parse(v.info)[name] === key) {
            arr.push(v)
          }
          return true
        })
        this.listdata = arr
        this.props.filterdata(arr)
      } else {
        let sum = 0
        let num = 0
        for (let value in this.state) {
          if (typeof this.state[value] !== "string") {
            if (this.state[value].length !== 0) {
              sum++
              let j = this.state[value].length
              let k = 0
              this.state[value].filter((a, b) => {
                if (a === key[b]) {
                  k++
                }
                return true
              })
              if (j === k) {
                num++
              }
            }
          }
        }
        if (sum === num) {
          let arr = []
          let arr1 = this.listdata
          key.filter(v => {
            data.filter(j => {
              if (JSON.parse(j.info)[name] === v) {
                arr.push(j)
              }
              return true
            })
            return true
          })
          let aone = [...arr, ...arr1]
          aone.filter(v => {
            aone.filter((k, i) => {
              if (JSON.parse(v.info).id === JSON.parse(k.info).id) {
                aone.splice(i, 1)
              }
              return true
            })
            return true
          })
          this.listdata = arr
          this.props.filterdata(arr)
        } else {
          let arr = []
          let arr1 = this.listdata
          key.filter(v => {
            arr1.filter(j => {
              if (JSON.parse(j.info)[name] === v) {
                arr.push(j)
              }
              return true
            })
            return true
          })
          this.props.filterdata(arr)
        }
      }
    }
  }
  handleChange1 = (v) => {
    this.setState({
      language: v
    }, () => {
      this.getlist(v)
    })
  }
  handleChange2 = (v) => {
    this.setState({
      child: v
    }, () => {
      this.getlist(v)
    })
  }
  handleChange3 = (v) => {
    this.setState({
      usd: v
    }, () => {
      this.getlist(v)
    })
  }
  styleimgset = (v) => {
    this.setState({
      styleimg: v
    }, () => {
      this.getlist(v)
    })
  }
  render() {
    return (
      <div className="from_box">
        <div className="from_body">
          <div className="body_1">
            搜索位置：<span>页名</span><span>广告地址</span><span>广告文本</span><span>货币名字</span>
          </div>
          <div className="body_2">
            图片格式：<span className="image_lei" onClick={() => this.styleimgset("image")}>单个图片</span><span className="image_lei" onClick={() => this.styleimgset("video")}>轮播图片</span>
          </div>
          <div className="body_3">
            <div className="body_left">第一次见到日期：
              <DatePicker />
            </div>
            <div className="body_right">最后一条次见到日期：
              <DatePicker />
            </div>
          </div>
          <div className="body_4">
            <div className="asd">溢价搜索：</div>
            <div>
              <Select mode="tags" style={{ width: '100%' }} placeholder="语言" onChange={this.handleChange1}>
                <Option value="Chinese">Chinese</Option>
                <Option value="English">English</Option>
              </Select>
            </div>
            <div>
              <Select mode="tags" style={{ width: '100%' }} placeholder="地理位置" onChange={this.handleChange2}>
                <Option value="China">China</Option>
                <Option value="USA">USA</Option>
                <Option value="巴基斯坦">巴基斯坦</Option>
              </Select>
            </div>
            <div>
              <Select mode="tags" style={{ width: '100%' }} placeholder="广告类型" onChange={this.handleChange3}>
                <Option value="cloaked">cloaked</Option>
                <Option value="suspectud">suspectud</Option>
              </Select>
            </div>
          </div>
          <div className="body_4">
            <div className="asd">搜查：</div>

          </div>
        </div>
      </div>
    )
  }
}
