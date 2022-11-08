import React from "react";
import { Typography, Table, Image } from "antd";

const TableCart = ({ listProducts }) => {
    const { Title } = Typography;

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => <Image src={image} width={150} />,
        },
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
                dataSource={listProducts}
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
};

export default TableCart;
