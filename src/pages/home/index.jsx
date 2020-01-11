import React, { Component } from 'react'
import "./styles.less"
import loadable from "@/utils/loader"
import { Menu } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'
const Head = loadable(() => import("@/component/head"))
const Body = loadable(() => import("@/component/body"))
const Native = loadable(() => import("@/component/native"))
const Adult = loadable(() => import("@/component/adult"))
const Details = loadable(() => import("@/component/details"))

export default class extends Component {
	search = (v) => {
		console.log(v)
	}
	render() {
		return (
			<div id="home">
				<Head search={this.search} />
				<div className="home-nav">
					<Menu
						className="ul"
						defaultSelectedKeys={['1']}
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