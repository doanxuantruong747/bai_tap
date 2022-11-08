import { useDispatch } from 'react-redux';
import './addNewProduct.css';
import * as Actions from '../constant'

import { Button, Form, InputNumber, Typography, Input } from "antd";



const AddNewProduct = () => {

    const dispatch = useDispatch();

    const onFinish = (values) => {


        dispatch({
            type: Actions.ADD_NEW_PRODUCT,
            data: {
                product: values,
            },
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Add Error:', errorInfo);
    };
    let _id = Math.floor(Math.random() * 1000);

    return (
        <>
            <Typography
                style={{
                    marginTop: "4rem",
                    textAlign: "center",
                    fontSize: '30px',
                    fontWeight: 600,
                }}>
                Add New Product</Typography>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* <Form.Item name={_id}>
                    <Input hidden />
                </Form.Item> */}

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "enter name ?",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="URL Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: "enter image ?",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "enter price ?",
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: "50%", height: "50px" }}
                    />
                </Form.Item>

                <Form.Item
                    label="Tax"
                    name="tax"
                    rules={[
                        {
                            required: true,
                            message: "enter tax ?",
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: "50%", height: "50px" }}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        style={{ width: "50%", height: "50px", marginBottom: "4rem" }}
                        type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};
export default AddNewProduct;