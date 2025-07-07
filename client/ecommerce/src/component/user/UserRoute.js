import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Userhome from './Userhome';
import Userabout from './Userabout';
import Usershop from './Usershop';
import ProductDetails from './ProductDetails';
import Userblog from './Userblog';
import UserProduct from './UserProduct';

function UserRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Userhome />}></Route>
                    <Route path='/about' element={<Userabout />}></Route>
                    <Route path='/shop' element={<Usershop />}></Route>
                    <Route path="/product/:productName" element={<ProductDetails />} />
                    <Route path='/blog' element={<Userblog />}></Route>
                    <Route path="/product" element={<UserProduct />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default UserRoute