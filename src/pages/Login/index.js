import React from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import styles from './index.less'
import session from '../../utils/session'

const { Item } = Form

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
}

const Component = (props) => {
  const { dispatch } = props
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const { validateFields, setFieldsValue } = form
  // const onFinish = (values) => {
  //   console.log('Success:', values)
  // }
  const onSubmit = async () => {
    try {
      const values = await validateFields()
      dispatch({
          type: 'login/login',
          payload: {
            ...values,
            callback: () => {
              navigate('/dashboard')
            }
          }
        }
      )
    }
    catch (e) {
      console.log(e, '◀◀◀e')
    }
  }
  return (
    <div className={styles.form}>
      <Form
        {...layout}
        form={form}
        initialValues={{ user_name: 'admin', password: '123456' }}
        autoComplete="off"
        // onFinish={onFinish}
      >
        <Item
          label="账号"
          name="user_name"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="请输入账号" />
        </Item>
        <Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Item>
        <Item
          wrapperCol={{ offset: 4, span: 20 }}
        >
          <div className={styles.form_btn}>
            {/*<Button type="primary" htmlType="submit">*/}
            <Button type="primary" onClick={onSubmit}>
              登录
            </Button>
            <Button danger onClick={() => {
              setFieldsValue({ user_name: 'admin', password: '123456' })
            }}>
              管理员账号
            </Button>
            <Button onClick={() => {
              setFieldsValue({ user_name: 'employee', password: '123456' })
            }}>
              普通账号
            </Button>
          </div>
        </Item>
      </Form>
    </div>

  )
}

const mapState = ({ login }) => login
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)

