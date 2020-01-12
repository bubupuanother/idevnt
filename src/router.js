import React, { Component } from 'react'
import loadable from '@/utils/loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'

const Login = loadable(() => import('@/pages/login'))
const Home = loadable(() => import('@/pages/home'))
const Register = loadable(() => import('@/pages/register'))
const Add = loadable(() => import('@/component/add'))

export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route path='/add' component={Add} />
						<Route path='/register' component={Register} />
						<Route path='/home' component={Home} />
						<Route path='/' component={Login} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}
