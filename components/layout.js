import React from 'react'
import {Menu } from 'antd'
import Link from 'next/link'
const layout = (props) => {
    return (
       <>
       <Menu  mode="horizontal" style={{padding:"1rem",fontSize:'1rem',marginBottom:'1rem'}}>
        <Menu.Item key="mail" >
          <Link href='about-us'>
          <a>About Us</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="app" >
        <Link href='order'>
          <a>Order</a>
          </Link>
        </Menu.Item>
       
        <Menu.Item key="alipay">
        <Link href='contact-us'>
          <a>Contact Us</a>
          </Link>
        </Menu.Item>
      </Menu>
      {props.children}
      <div style={{width:"100%" ,height:"2rem",display:"flex",justifyContent:'center'}}>
        Developed By : Amel Ul Mulk
      </div>
      </>
    )
}

export default layout
