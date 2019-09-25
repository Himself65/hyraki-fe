import React, { useState } from 'react'
import { Form, Icon, Input, Checkbox, Button, message } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { FormProps } from 'antd/es/form'
import { login } from '../../api'

const LoginBoard = (props: FormProps & RouteComponentProps<any>) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(username, password).then(res => {
      if (res.status === 200) {
        message.info('登陆成功')
        props.history.push('/dashboard') // fixme: 返回时错误的显示
      } else {
        message.error(res.statusText)
      }
    })
  }
  const { getFieldDecorator } = props.form! // tip: props.form must exists
  return (
    <Form style={{ padding: '0 0.5rem', marginTop: '12rem' }} onSubmit={handleSubmit} className='hy-login-board'>
      <Form.Item>
        {
          getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              placeholder='账号'
              onChange={e => setUsername(e.target.value)}
            />
          )
        }
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入您的密码' }]
        })(
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='密码'
            onChange={e => setPassword(e.target.value)}
          />
        )}
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)
        }
        {/* fixme: forget password href */}
        <a className='login-form-forgot' href=''>
          忘记密码
        </a>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          登录
        </Button>
        <a href=''>现在注册</a>
      </Form.Item>
    </Form>
  )
}

export const WrappedLoginBoard = Form.create({ name: 'normal_login_board' })(withRouter(LoginBoard))

export default WrappedLoginBoard