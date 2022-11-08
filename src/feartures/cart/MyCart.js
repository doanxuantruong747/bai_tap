import { Typography, Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableCart from "./TableCart";

import * as ActionsOrder from "../order/actionsOrder";

const MyCart = () => {
    const { Title } = Typography;
    const { myCart } = useSelector((state) => state.myCartReducer)
    const { listProducts } = myCart

    const [DSProduct, setDSProduct] = useState(listProducts)

    const dispatch = useDispatch();

    const handleOder = () => {
        dispatch({
            type: ActionsOrder.ORDER_PAYMENT,
            data: { myCart: myCart },
        },
            setDSProduct([])
        )
    };

    return (
        <div >
            <Typography>
                <Title>Cart</Title>
            </Typography>

            <TableCart DSProduct={DSProduct} />
            <div style={{ textAlign: "right", marginTop: "10px", marginRight: "20px" }}>
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