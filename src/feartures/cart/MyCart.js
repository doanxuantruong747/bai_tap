import { Typography, Space, Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableCart from "./TableCart";
import * as Actions from "./actionsMyCart";
import * as ActionsOrder from "../order/actionsOrder";

const MyCart = () => {
    const { Title } = Typography;

    const dispatch = useDispatch();

    const { myCart } = useSelector((state) => state.myCartReducer)
    const { listProducts } = myCart

    const handleOder = () => {
        dispatch({
            type: ActionsOrder.ORDER_PAYMENT,
            data: { myCart: myCart },
        })
    };

    return (
        <div >
            <Typography>
                <Title>Cart</Title>
            </Typography>

            <TableCart listProducts={listProducts} />
            <div style={{ textAlign: "right", marginTop: "10px" }}>
                <Button
                    style={{
                        height: "50px", width: "200px",
                    }}
                    type="primary" onClick={handleOder}>
                    Order Payment
                </Button>
            </div>


        </div>
    );
};

export default MyCart;