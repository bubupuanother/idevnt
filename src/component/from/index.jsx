import React, { Component } from 'react'
import './styles.less'
import { DatePicker, Select } from 'antd';

const { Option } = Select;

export default class extends Component {
  onChange = (date, dateString) => {
    // console.log(date, dateString);
  }
  onChange1 = (date, dateString) => {
    // console.log(date, dateString);
  }
  handleChange = (value) => {
    // console.log(`selected ${value}`);
  }

  disabledStartDate = startValue => {
    console.log(startValue)
    // const { endValue } = this.state;
    // if (!startValue || !endValue) {
    //   return false;
    // }
    // return startValue.valueOf() > endValue.valueOf();
  };

  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    const { Option } = Select;
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    return (
      <div className="from_box">
        <div className="from_body">
          <div className="body_1">
            搜索位置：<span>页名</span><span>广告地址</span><span>广告文本</span><span>货币名字</span>
          </div>
          <div className="body_2">
            图片格式：<span className="image_lei">单个图片</span><span className="image_lei">轮播图片</span>
          </div>
          <div className="body_3">
            <div className="body_left">第一次见到日期：
              <DatePicker
                disabledDate={this.disabledStartDate}
                onChange={this.onChange}
              />
            </div>
            <div className="body_right">最后一条次见到日期：<DatePicker onChange={this.onChange1} /></div>
          </div>
          <div className="body_4">
            <div className="asd">溢价搜索：</div>
            <div>
              <Select mode="tags" style={{ width: '100%' }} placeholder="地理位置" onChange={this.handleChange}>
                {children}
              </Select>
            </div>
            <div>
              <Select mode="tags" style={{ width: '100%' }} placeholder="语言" onChange={this.handleChange}>
                {children}
              </Select>
            </div>
            <div>
              <Select mode="tags" style={{ width: '100%' }} placeholder="广告类型" onChange={this.handleChange}>
                {children}
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
