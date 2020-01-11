import React from 'react'
import { Carousel, Button } from 'antd'
import './style.less'

export default class extends React.Component {
	state = {
		data: JSON.parse(localStorage.getItem('data'))
	}
	render() {
		const { data } = this.state
		data.info = JSON.parse(data.info)
		return (
			<div className="details">
				<Button type="primary" onClick={() => { this.props.history.go(-1) }}>返回</Button>
				<p>{data.info.Door}</p>
				<p>{data.info.homesize}</p>
				<Carousel>
					{
						data.info.updatetime.map((v, i) => {
							return (
								<div key={i}>
									<h3>
										<img src={v} alt="" />
									</h3>
								</div>
							)
						})
					}
				</Carousel>
				<p>{data.info.address}</p>
				<p>{data.info.homeone}</p>
			</div>
		)
	}
}