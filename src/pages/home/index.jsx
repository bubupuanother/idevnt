import React, { Component } from 'react';
import "./styles.less";
import Head from '@/component/head'

export default class extends Component {

	search = (v) => {
		console.log(v)
	}

	render() {
		return (
			<div id="home">
				<Head search={this.search} />
				<section>

				</section>
			</div>
		)
	}
}