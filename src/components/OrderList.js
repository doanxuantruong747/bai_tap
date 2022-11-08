import React from "react";
import { Typography, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

function OrderList() {
    const { Title } = Typography;

    const dispatch = useDispatch();

    const order = useSelector((state) => state.orderReducer.order)
    console.log(order);

    const columns = [

        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (quantity) => quantity,
        },
        {
            title: "Sum Tax",
            dataIndex: "tax",
            key: "tax",
        },
        {
            title: "Total Before Tax",
            render: (_, data) => data.price * data.quantity,
        },
        {
            title: "Sum Tax",
            render: (_, data) => data.tax * data.quantity,
        },
        {
            title: "Total",
            render: (_, data) =>
                data.tax * data.quantity + data.price * data.quantity,
        },
    ];
    return (
        <div>

            <Table
                columns={columns}
                // dataSource={listProducts}
                pagination={false}
                rowKey={(record) => record.id}
                summary={(pageData) => {
                    let sum = 0;
                    pageData.forEach(({ price, tax, quantity }) => {
                        sum += (price + tax) * quantity;
                    });

                    return (
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0} colSpan={7} align="right">
                                <Title level={3}>Total:</Title>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={1} colSpan={1}>
                                <Title level={3}>{sum}</Title>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    );
                }}
            />
        </div>
    );
}

export default OrderList