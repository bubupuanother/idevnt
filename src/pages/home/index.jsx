import React, { Component } from 'react';
import "./styles.less";
import { PageHeader } from 'antd';
import Head from '@/component/head'

export default class extends Component {
	render() {
		return (
			<div>
				<PageHeader
					style={{
						border: '1px solid rgb(235, 237, 240)',
					}}
					subTitle={<Head />}
				/>
			</div>
		)
	}
}