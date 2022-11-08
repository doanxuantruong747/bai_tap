import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../page/homePage/HomPage'
import AddProduct from '../page/addProduct/AddProduct';
import MyCarts from '../page/myCart/MyCarts';
import MyOder from '../page/myOder/MyOder';
import DetailPage from '../page/detailPage/DetailPage'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/cart" element={<MyCarts />} />
                <Route path="/oder" element={<MyOder />} />
                <Route path="product/:id" element={<DetailPage />} />
            </Route>
        </Routes>

    )
}

export default Router