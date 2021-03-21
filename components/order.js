import React,{useState} from 'react'
import {Row,Col} from 'antd'
const order = () => {
    const [product,setProduct]=useState({
        productName:'safron cool',
        productPrice:100,
        productQuantity:4
    })
    return (
        <Row>
            <Col span={16}>
              List of Products
            </Col>
            <Col span={8}>
              Cost
              <p>Name : {`${product.productName}`}</p>
              <p>Quantity : {`${product.productQuantity}`}</p>
              <p>Total : {`${product.productPrice*product.productQuantity}`}</p>
            </Col>
        </Row>
    )
}

export default order
