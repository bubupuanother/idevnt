import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import "./style.less"
import { addset } from "@/api/actions"
class Cart extends React.Component {
	goDetials = (v) => {
		localStorage.setItem('data', JSON.stringify(this.props.data))
		this.props.history.push('/home/details');
	}
	like = (v) => {
		let b = v
		let c = JSON.parse(b.info)
		if (c.like == 1) {
			c.like = 0
		} else {
			c.like = 1
		}
		c.id=b.id
		let a = {
			token: localStorage.getItem("quan"),
			info:c
		}
		addset(a).then(res=>{
			this.props.setstatedata()
		})
	}
	componentDidMount(){
		console.log(JSON.parse(this.props.data.info).like)
	}
	render() {
		const { data, className } = this.props
		return (
			<div className={className}>
				<div className="positiongBox" onClick={() => this.like(data)}>
					{
						JSON.parse(data.info).like == 0 ? <p><Icon type="star" />Collect</p> :
							<p><Icon type="star" theme="filled" />Uncollect</p>
					}
				</div>
				<div style={{ marginTop: "5px" }} onClick={() => { this.goDetials(data) }}>
					<h1>{JSON.parse(data.info).Door}</h1>
					<p>{JSON.parse(data.info).homesize}</p>
					<img
						src={Array.isArray(JSON.parse(data.info).updatetime)
							? JSON.parse(data.info).updatetime[0]
							: JSON.parse(data.info).updatetime} alt=""
					/>
					<p>{JSON.parse(data.info).address}</p>
					<p>{JSON.parse(data.info).homeone}</p>
					<p className="mess">
						<span><Icon type="like" />{JSON.parse(data.info).building}</span>
						<span><Icon type="message" />{JSON.parse(data.info).leases}</span>
						<span><Icon type="share-alt" />{JSON.parse(data.info).status}</span>
					</p>
					<p>{JSON.parse(data.info).dataTime}</p>
					<p>
						<Icon type="eye" />
						<b>{JSON.parse(data.info).url}</b>
					</p>
				</div>
			</div>
		)
	}
}

export default withRouter(Cart)