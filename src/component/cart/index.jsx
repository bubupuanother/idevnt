import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'

class Cart extends React.Component {

	goDetials = (v) => {
		localStorage.setItem('data', JSON.stringify(this.props.data))
		this.props.history.push('/home/details');
	}

	render() {
		const { data, className } = this.props
		return (
			<div className={className} onClick={() => { this.goDetials(data) }}>
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
		)
	}
}

export default withRouter(Cart)