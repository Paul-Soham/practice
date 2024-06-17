import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Userhome from './Userhome';
import Userabout from './Userabout';
import Usershop from './Usershop';
import UserSingleProduct from './UserSingleProduct';
import Userblog from './Userblog';

function UserRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Userhome />}></Route>
                    <Route path='/about' element={<Userabout />}></Route>
                    <Route path='/shop' element={<Usershop />}></Route>
                    <Route path='/shop/:title' element={<UserSingleProduct />}></Route>
                    <Route path='/blog' element={<Userblog />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default UserRoute