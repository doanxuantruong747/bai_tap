import React, { useEffect, useState } from "react";
import { Card, Image, Form, InputNumber, Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../feartures/cart/actionsMyCart";

const CardProduct = ({ product }) => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState();

    const { litsProducts } = useSelector((state) => state.myCartReducer.myCart)

    useEffect(() => {
        const index = litsProducts?.findIndex(
            (element) => element.id === product.id
        );
        if (index > -1) setQuantity(litsProducts[index]?.quantity);
    }, [litsProducts]);

    const onFinish = (values) => {

        dispatch({
            type: Actions.ADD_TO_CART,
            data: {
                product: { ...product, quantity: values.quantity },
            },

        });

    };
    const onFinishFailed = (errorInfo) => {
        console.log("error Card:", errorInfo);
    };

    return (
        <Card
            style={{
                width: 300,
            }}
        >
            <Image width={250} height={200} src={product.image} />
            <Typography style={{
                textAlign: 'center',
                fontWeight: 600,
                fontSize: 18,
                marginBottom: 10,
            }}>{product.name}</Typography>

            <Typography style={{
                textAlign: 'center'
            }}>price :{product.price}</Typography>
            <Typography style={{
                textAlign: 'center'
            }}> Product Cart : {quantity ? quantity : 0}</Typography>
            <Form
                name="myCart"
                layout="horizontal"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 25,
                }}
                initialValues={{
                    remember: true,
                    soLuong: 1,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Quantity"
                    name="quantity"
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        offset: 0,
                        span: 25,
                    }}
                    rules={[
                        {
                            required: true,
                            message: "Quantity ?",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    style={{ textAlign: 'center', }}
                    wrapperCol={{
                        span: 25,
                    }}
                >
                    <Button type="primary" htmlType="submit" >

                        Add My Cart
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CardProduct;
