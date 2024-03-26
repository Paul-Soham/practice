import React from 'react'
import AdminRegistration from './AdminRegistartion'
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome'
import AdminUsers from './AdminUsers'
<<<<<<< HEAD
=======
import AdminContacts from './AdminContacts'
import AdminProduct from './AdminProduct'
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AdminRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin' element={<AdminRegistration />}>
                        
                    </Route>
<<<<<<< HEAD
                    <Route path='/admin/login' element={<AdminLogin />}></Route>
                    <Route path='/user' element={<AdminUsers />}></Route>
                    <Route path='/dashboard' element={<AdminHome />}></Route>
                    
=======
                    <Route path='/login' element={<AdminLogin />}></Route>
                    <Route path='/user' element={<AdminUsers />}></Route>
                    <Route path='/dashboard' element={<AdminHome />}></Route>
                    <Route path='/contact' element={<AdminContacts />}></Route>
                    <Route path='/product' element={<AdminProduct />}></Route>
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AdminRoute