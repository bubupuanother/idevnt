import React from 'react'
import { Icon } from 'antd'

export default class extends React.Component {
	render() {
		const { data, className } = this.props
		return (
			<div className={className}>
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