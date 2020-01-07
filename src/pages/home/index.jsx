import React, { Component } from 'react'
import "./styles.less"
import { Icon, Menu } from "antd"
import { Switch, Route, Link } from 'react-router-dom'
import loadable from '@/utils/loader'

const { SubMenu } = Menu
const Management = loadable(() => import('@/pages/management'))
const Tenant = loadable(() => import('@/pages/tenant'))
const Family = loadable(() => import('@/pages/family'))
const Construction = loadable(() => import('@/pages/construction'))

export default class extends Component {
	componentDidMount() {
		if (!JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).name) {
			this.props.history.push('/login')
		}
	}
	render() {
		const Urlhistory = this.props.location.pathname
		var url = ['1']
		switch (Urlhistory) {
			case '/Home/tenant':
				url = ['2']
				break
			case '/Home/Construction':
				url = ['4']
				break
			case '/Home/family':
				url = ['3']
				break
			default:
				url = ['1']
				break
		}
		return (
			<div className="home_box">
				<div className="home_header">
					<p>住房租赁管理系统</p>
					<div>用户名：{JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).name}</div>
				</div>
				<div className="home_flex">
					<div className="flex_left">
						<br />
						<br />
						<div>
							<Icon type="message" />
						</div>
						<div>
							<Icon type="setting" />
						</div>
						<div>
							<Icon type="lock" />
						</div>
						<div className="flex"></div>
						<div className="lastBack">
							<Icon type="rollback" />
						</div>
					</div>
					<div className="flex_right">
						<div className="header_flex_left">
							<p className="headerFont">
								<span>系统管理</span> / System Management
              </p>
							<Menu
								style={{ width: 256 }}
								defaultSelectedKeys={url}
								defaultOpenKeys={['sub1']}
								mode="inline"
							>
								<SubMenu
									key="sub1"
									title={
										<span>
											<span>基础数据</span>
										</span>
									}
								>
									<Menu.Item key="1">
										<span></span>
										<Link to="/Home/">房源管理</Link>
									</Menu.Item>
									<Menu.Item key="2">
										<span></span>
										<Link to="/Home/tenant">承租方管理</Link>
									</Menu.Item>
									{
										localStorage.vip === 'true' ?
											(
												<Menu.Item key="3">
													<span></span>
													<Link to="/Home/family">家庭成员管理</Link>
												</Menu.Item>
											) : ""
									}
									{
										localStorage.vip === 'true' ?
											(
												<Menu.Item key="4">
													<span></span>
													<Link to="/Home/Construction">施工单位</Link>
												</Menu.Item>
											) : ""
									}
								</SubMenu>
							</Menu>
						</div>
						<Switch>
							<Route path="/Home/tenant" component={Tenant} />
							<Route path="/Home/family" component={Family} />
							<Route path="/Home/Construction" component={Construction} />
							<Route path="/Home/" component={Management} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}
