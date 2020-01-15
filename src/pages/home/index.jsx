import React, { Component } from 'react'
import "./styles.less"
import { Menu } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'
import { Head, Body, Native, Adult, Details } from "@/utils/routersLoader"
export default class extends Component {
	search = (v) => {
		console.log(v)
	}
	render() {
		let styledata = ['1']
		const dis = this.props.location.pathname
		console.log(dis)
		switch (dis) {
			case '/home/native':
				styledata = ['2']
				break;
			case '/home/':
				styledata = ['1']
				break;
			case '/home/adult':
				styledata = ['3']
				break;
		}
		return (
			<div id="home">
				<Head {...this.props} search={this.search} />
				<div className="home-nav">
					<Menu
						className="ul"
						defaultSelectedKeys={styledata}
					>
						<Menu.Item key="1"> <Link to="/home/">Facebook</Link> </Menu.Item>
						<Menu.Item key="2"> <Link to="/home/native">Native</Link>	</Menu.Item>
						<Menu.Item key="3"> <Link to="/home/adult">Adult</Link> </Menu.Item>
					</Menu>
				</div>
				<Switch>
					<Route path="/home/details" component={Details} />
					<Route path="/home/native" component={Native} />
					<Route path="/home/adult" component={Adult} />
					<Route path="/home/" component={Body} />
				</Switch>
			</div>
		)
	}
}