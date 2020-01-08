import React, { Component } from 'react';
import "./styles.less";
import Head from '@/component/head'
import Body from '@/component/body'

export default class extends Component {
	render() {
		return (
			<div>
				<Head />
				<Body />
			</div>
		)
	}
}