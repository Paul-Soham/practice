import React from 'react'
import AdminRegistration from './AdminRegistartion'
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome'
import AdminUsers from './AdminUsers'
import AdminContacts from './AdminContacts'
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
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AdminRoute