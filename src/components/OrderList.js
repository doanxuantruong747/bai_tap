import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

function OrderList() {

    const dispatch = useDispatch();


    const order = useSelector((state) => state.orderReducer.order)
    // const rowOrder = useSelector((state) => state.rowOderReducer.rowOrder)
    console.log(order);

    const columns = [

        {
            title: "IdOrder",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "UserName",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Total Before Tax",
            dataIndex: "totalBeforeTax",
            key: "totalBeforeTax",
        },
        {
            title: "Sum Tax",
            dataIndex: "sumTax",
            key: "tsumTaxax",
            render: (quantity) => quantity,
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },


    ];
    return (
        <div>

            <Table
                columns={columns}
                dataSource={order}
                pagination={false}
                rowKey={(record) => record.id}
            />
        </div>
    );
}

export default OrderList