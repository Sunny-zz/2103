// Login 页面
import { Form, Input, Button, Typography, message } from 'antd'
import './login.css'
import { PasswordIcon, UserIcon } from '../../icons'
import IconFont from '../../icons/other'
import { login } from '../../api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    // 校验成功要登录
    // console.log(values)
    try {
      const userInfo = await login(values.password)
      message.success({
        content: '登录成功',
        duration: 1
      })
      // console.log(res)
      sessionStorage.setItem('info', JSON.stringify(userInfo))
      sessionStorage.setItem('token', values.password)
      navigate('/')
    } catch (error) {
      // 登录失败密码不匹配
      message.error({
        content: '登录失败,密码错误(token 错误)',
        duration: 2
      })
    }
  }
  return (
    <div className='login-wrap'>
      <Typography.Title level={2} className='title'>
        登录
      </Typography.Title>
      <Form
        className='login'
        name="basic"
        wrapperCol={{ span: 24 }}
        labelAlign='left'
        autoComplete="off"
        validateTrigger='onBlur'
        // 点击 submit 按钮并且校验成功触发
        onFinish={onFinish}
        // 点击 submit 按钮并且校验失败触发
        // onFinishFailed={onFinishFailed}
        initialValues={{
          username: '',
          password: '7de298fc-2bae-4afb-b20b-ca85130e4159'
        }}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: '请输入您的用户名!' },
            { max: 16, min: 6, message: '只能输入6-16位' }
          ]}
        >
          {/* <Input prefix={<UserIcon style={{ fontSize: '18px', color: '#ccc' }} />} size='large' placeholder='输入用户名(随便输入)' /> */}
          <Input prefix={<IconFont style={{ color: '#ccc', fontSize: '18px' }} type='icon-yonghu' />} size='large' placeholder='输入用户名(随便输入)' />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '请输入您的密码!' },
            { pattern: /^[0-9a-zA-Z-]+$/, message: 'token 只能是数字' },
            // 校验规则可以写成一个函数，这个函数接收一个表单对象作为参数，对象内有一个 getFieldValue 方法可以获取其他同级 FormItem 输入的值
            // 而且这个函数需要返回一个对象，对象内必须设置一个 validator 方法，该方法需要返回 promise, 这个方法接收两个参数，第二个参数是当前表单输入的值
            // ({ getFieldValue }) => ({
            //   validator: (_, value) => {
            //     const username = getFieldValue('username')
            //     console.log(username)
            //     return username.length >= 6 ? Promise.resolve() : Promise.reject(new Error('用户名少于6位'))
            //   }
            // })
          ]}
        >
          <Input.Password iconRender={(visible) => <IconFont style={{ fontSize: '20px' }} type={visible ? 'icon-yanjing_xianshi_o' : 'icon-yanjing_yincang_o'} />} size='large' prefix={<PasswordIcon style={{ fontSize: '18px', color: '#ccc' }} />} placeholder='输入密码(用户 token)' />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          {/* 当表单中的 Button 是 submit 按钮的时候自动会触发表单的 onFinish 或者 onFinishFailed */}
          <Button className='submit-btn' type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
