import React, { Component, useState } from 'react'
import './styles.less'
import { Form, Icon, Input, Button, message } from 'antd';
import { log } from '@/api/actions'
import { connect } from 'react-redux'

export default @connect(state => {
	return {}
}, {
	get: option => {
		return {
			type: 'LOGIN',
			payload: option
		}
	}
})
@Form.create({ name: 'normal_login' })
class extends Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const obj = {
					userName: values.username,
					passWord: values.password
				}
				log(obj).then(res => {
					if (res.code === 200) {
						if (obj.userName === 'lbb123') {
							localStorage.setItem('vip', true)
						} else {
							localStorage.setItem('vip', false)
						}
						message.info('登录成功')
						this.props.get(obj)
						localStorage.setItem('quan', res.result)
						this.props.history.push('./home')
					} else {
						message.info('登录失败')
					}
				})
			}
		})
	}

	register = () => {
		this.props.history.push('/register')
	}

	validator = (rule, value, callback) => {
		if (value.length < 6 || value.length > 18) {
			callback('长度不对6-18')
		} else {
			callback()
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className="login_box">
				<div className="body">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [
									{
										validator: this.validator
									},
									{
										required: true,
										message: '没输入'
									}
								],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="请输入用户名"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [
									{
										validator: this.validator
									},
									{
										required: true,
										message: 'Please input your Password!'
									}
								],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="请输入密码"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
              </Button>
							<Button onClick={this.register} type="danger">注册</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}
