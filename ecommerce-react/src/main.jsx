import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomeLayout from './layouts/HomeLayout.jsx'
import ProductList from './components/ProductList.jsx'
import CartList from './components/CartList.jsx'
import OrdersPage from './components/OrdersPage.jsx'
import LoginForm from './components/LoginForm.jsx'
import AdminPage from './components/AdminPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import SignupForm from './components/SignupForm.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
    <>
    <ToastContainer/>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route element={<HomeLayout />}>
                <Route path="/products" element={<ProductList/>} />
                <Route path="/cart" element={<CartList />} />
                <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
            </Route>
            <Route path="/login" element={<LoginForm/>}/>
             <Route path="/register" element={<SignupForm/>}/>
            <Route path="/admin" element={<PrivateRoute><AdminPage/></PrivateRoute>}/>
        </Routes>
    </BrowserRouter>
</>

)
