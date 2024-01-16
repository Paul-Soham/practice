import React from 'react'
import AdminRegistration from './AdminRegistartion'
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome'
import AdminUsers from './AdminUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AdminRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin' element={<AdminRegistration />}>
                        
                    </Route>
                    <Route path='/admin/login' element={<AdminLogin />}></Route>
                    <Route path='/user' element={<AdminUsers />}></Route>
                    <Route path='/dashboard' element={<AdminHome />}></Route>
                    
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AdminRoute