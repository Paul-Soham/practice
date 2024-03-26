import React from 'react'
import AdminRegistration from './AdminRegistartion'
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome'
import AdminUsers from './AdminUsers'
import AdminContacts from './AdminContacts'
import AdminProduct from './AdminProduct'
import AdminProductlist from './Adminproductlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AdminRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin' element={<AdminRegistration />}>
                        
                    </Route>
                    <Route path='/login' element={<AdminLogin />}></Route>
                    <Route path='/user' element={<AdminUsers />}></Route>
                    <Route path='/dashboard' element={<AdminHome />}></Route>
                    <Route path='/contact' element={<AdminContacts />}></Route>
                    <Route path='/product' element={<AdminProduct />}></Route>
                    <Route path='/product-list' element={<AdminProductlist />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AdminRoute