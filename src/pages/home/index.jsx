import React, { Component } from 'react';
import "./styles.less";
import Head from '@/component/head'
import Body from '@/component/body'

export default class extends Component {

	search = (v) => {
		console.log(v)
	}

	render() {
		return (
			<div id="home">
				<Head search={this.search} />
				<Body />
			</div>
		)
	}
}