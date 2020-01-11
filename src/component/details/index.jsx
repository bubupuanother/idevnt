import React from 'react'

export default class extends React.Component {
	state = {
		data: JSON.parse(localStorage.getItem('data'))
	}
	render() {
		const { data } = this.state
		data.info=JSON.parse(data.info)
		
		console.log(data)
		return (
			<div className="details">

			</div>
		)
	}
}