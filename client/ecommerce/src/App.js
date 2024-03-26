import React from 'react';
import AdminRoute from './component/admin/AdminRoute';
import UserRoute from './component/user/UserRoute';
const App = () => {
  return (
    <>
      <AdminRoute />
      <UserRoute/>
    </>
  );
};

export default App;