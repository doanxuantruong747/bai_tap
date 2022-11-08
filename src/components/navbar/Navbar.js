import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'


function Navbar() {
    const navigate = useNavigate()
    const [home, setHome] = useState(true)
    const [addProduct, setaddProduct] = useState(false)
    const [myCart, setMyCart] = useState(false)
    const [myOder, setMyOder] = useState(false)

    const clickHome = () => {
        setHome(true);
        setaddProduct(false);
        setMyCart(false);
        setMyOder(false);
        navigate("/");
    }
    const clickAddProduct = () => {
        setHome(false);
        setaddProduct(true);
        setMyCart(false);
        setMyOder(false);
        navigate("/addproduct");
    }
    const clickMyCart = () => {
        setHome(false);
        setaddProduct(false);
        setMyCart(true);
        setMyOder(false);
        navigate("/cart");
    }
    const clickMyOder = () => {
        setHome(false);
        setaddProduct(false);
        setMyCart(false);
        setMyOder(true);
        navigate("/oder")
    }

    return (
        <ul>
            <li >
                <div onClick={clickHome}
                    className={home ? "active" : ""}
                >Home</div>
            </li>
            <li>
                <div onClick={clickAddProduct}
                    className={addProduct ? "active" : ""}
                >Add Product</div>
            </li>
            <li>
                <div onClick={clickMyCart}
                    className={myCart ? "active" : ""}
                >My Cart</div>
            </li>
            <li>
                <div onClick={clickMyOder}
                    className={myOder ? "active" : ""}
                >My Oder</div>
            </li>
        </ul>
    )
}

export default Navbar