import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auths/Login';
import SignUp from './pages/auths/SignUp';
import UserRoutes from './components/UserRoutes';





import ProductDetail from './pages/auths/ProductDetail';

import AuthRoutes from './components/AuthRouters';
import CartPage from './pages/auths/CartPage';
import AdminRoutes from './components/AdminRoutes';
import ProductList from './pages/AdminPage.js/ProductList';
import AddProduct from './pages/AdminPage.js/AddProduct';
import EditProduct from './pages/AdminPage.js/EditProduct';


const App = () => {
  // let data = [{ id: 1, title: 'hello' }, { id: 2, title: 'welcome' }];


  // data = data.map((d) => d.id === 1 ? { title: 'sello', id: 1 } : d);
  // console.log(data);

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />}>

          <Route index element={<HomePage />} />

          <Route path='product/detail/:id' element={<ProductDetail />} />

          <Route element={<AuthRoutes />}>
            <Route path='user/login' element={<Login />} />
            <Route path='user/SignUp' element={<SignUp />} />
          </Route>

          <Route element={<UserRoutes />}>
            <Route path='user/cart' element={<CartPage />} />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route path='user/login' element={<Login />} />
            <Route path='user/SignUp' element={<SignUp />} />
            <Route path='products/all' element={<ProductList />} />
            <Route path='product/add' element={<AddProduct />} />
            <Route path='product/:id' element={<EditProduct />} />
          </Route>




        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />
    </>
  )
}

export default App