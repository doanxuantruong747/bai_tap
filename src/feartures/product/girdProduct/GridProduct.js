import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../constant'
import './girdProduct.css'

import { Typography, Divider, Space, Col, Row, Badge, Grid } from "antd";
import "antd/dist/antd.css";
import Title from 'antd/lib/skeleton/Title';
import { ShoppingCartOutlined } from "@ant-design/icons";
import CardProduct from '../../../components/CardProduct';



function GridProduct() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: Actions.GET_LIST_PRODUCT,
        })

    }, [dispatch])
    const { products } = useSelector((state) => state.productReducer)
    return (
        <>
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Typography style={{ marginTop: "1rem" }}>
                        <Title level={1}>LIST_PRODUCTS</Title>
                    </Typography>
                </Col>
                <Col
                    span={8}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* <Badge count="1">
                        <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                    </Badge> */}
                </Col>
            </Row>
            <Divider />
            <Space
                direction="horizontal"
                size="large"
                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
            >
                {products
                    ? products.map((product, index) => (

                        <CardProduct key={index} product={product} />
                    ))
                    : null}
            </Space>
        </>
    )
}

export default GridProduct