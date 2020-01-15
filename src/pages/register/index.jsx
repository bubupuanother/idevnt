import React, { Component } from 'react'
import './styles.less'
import { Form, Icon, Input, Button, message } from 'antd'
import { reg } from '@/api/actions'


export default @Form.create({ name: 'normal_login' })
class extends Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const obj = {
					userName: values.username,
					passWord: values.password,
					rePassWord: values.truepassword
				}
				reg(obj).then(res => {
					if (res.code === 200) {
						message.success('注册成功')
						this.props.history.push('/login')
					} else {
						message.error('注册失败')
					}
				})
			}
		})
	}

	login = () => {
		this.props.history.push('/login')
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
										message: '请输入'
									}
								],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="用户名"
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
									placeholder="密码"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('truepassword', {
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
									placeholder="确认密码"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								注册
              </Button>
							<span onClick={this.login}>已有账号，去登陆</span>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}
