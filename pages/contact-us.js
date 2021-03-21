import React from 'react'
import {Form,Input,Button} from 'antd'
import styles from '../styles/Home.module.css'
const contact = () => {
    return  <div className={styles.contact}>
    <Form style={{width:'50%'}}>
        <h2>Enter Your Message</h2>
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Message"
      name="message"
      rules={[{ required: true, message: 'Please input your message!' }]}
    >
      <Input.TextArea rows={5} />
    </Form.Item>
    <Button type='submit'>Submit</Button>
    </Form>
    </div>
}

export default contact
