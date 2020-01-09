import React, { Component } from 'react';
import "./styles.less";
<<<<<<< HEAD
import Head from '@/component/head'
import Body from '@/component/body'
import From from '@/component/from'

=======
import loadable from "@/utils/loader"
import { Menu, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom'
const { SubMenu } = Menu;
const Head = loadable(() => import("@/component/head"))
const Body = loadable(() => import("@/component/body"))
const Native = loadable(() => import("@/component/native"))
const Adult = loadable(() => import("@/component/adult"))
>>>>>>> 709a1435a3825c775e87b6fb54d32461acae4406
export default class extends Component {
	search = (v) => {
		console.log(v)
	}
	render() {
		return (
			<div id="home">
				<Head search={this.search} />
<<<<<<< HEAD
				<From />
				<Body />
=======
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
					<Route path="/home/native" component={Native} />
					<Route path="/home/adult" component={Adult} />
					<Route path="/home/" component={Body} />
				</Switch>
>>>>>>> 709a1435a3825c775e87b6fb54d32461acae4406
			</div>
		)
	}
}