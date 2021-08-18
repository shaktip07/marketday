import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Authentication/login/Login.js'
// import Dashboard from './components/dashboard/Dashboard.js';
import ProtectedUrl from './components/Authentication/ProtectedUrl.js'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import ProductList from './components/Dashboard/product/ProductList'
import ProductCreate from './components/Dashboard/product/ProductCreate'
import ProductUpdate from './components/Dashboard/product/ProductUpdate'
import CustomerList from './components/Dashboard/customer/CustomerList'
import CustomerEditForm from './components/Dashboard/customer/CustomerEditForm'
import OrderList from './components/Dashboard/order/OrderList'
import OrderViewForm from './components/Dashboard/order/OrderViewForm.js';
import OrderEditForm from './components/Dashboard/order/OrderEditForm'
import CustomerDetails from './components/Dashboard/customer/CustomerDetails.js'

// Dashboard Pages
import Account from './components/Dashboard/Pages/Account'


function App() {
    return (
        <>
        
        <BrowserRouter>
            <Routes>
                
                <Route exact path="/" element={<DashboardLayout />}>
                    <ProtectedUrl comp={DashboardLayout} />
                </Route>
                <Route exact path="/dashboard/account" element={<DashboardLayout />}>
                    <ProtectedUrl comp={Account} />
                </Route>
                <Route exact path="/dashboard/products" element={<DashboardLayout />}>
                    <ProtectedUrl comp={ProductList} />
                </Route>
                <Route exact path="/dashboard/products/new" element={<DashboardLayout />}>
                    <ProtectedUrl comp={ProductCreate} />
                </Route>
                {/* <Route exact path="/dashboard/products/update" element={<DashboardLayout />}>
                    <ProtectedUrl comp={ProductCreate} />
                </Route> */}
                <Route exact path="dashboard/products/update/:id" element={<DashboardLayout />}>
                    <ProtectedUrl comp={ProductUpdate} />
                </Route>
                
                {/* Customer Route Mapping */}
                <Route exact path="/dashboard/customers" element={<DashboardLayout />}>
                    <ProtectedUrl comp={CustomerList} />
                </Route>
                <Route exact path="/dashboard/customer/edit/:id" element={<DashboardLayout />}>
                    <ProtectedUrl comp={CustomerEditForm} />
                </Route>
                <Route exact path="/dashboard/customers/:id" element={<DashboardLayout />}>
                    <ProtectedUrl comp={CustomerDetails} />
                </Route>

                {/* End Customer Mapping */}


                {/* Order Route Mapping */}
                <Route exact path="/dashboard/orders" element={<DashboardLayout />}>
                    <ProtectedUrl comp={OrderList} />
                </Route>
                <Route exact path="/dashboard/order/:id" element={<DashboardLayout />}>
                    <ProtectedUrl comp={OrderViewForm} />
                </Route>

                <Route exact path="/dashboard/order/edit/:id" element={<DashboardLayout />}>
                    <ProtectedUrl comp={OrderEditForm} />
                </Route>
                {/* End Order Mapping */}
                <Route exact path="/login"  element={<Login/>}>
                    <ProtectedUrl />
                </Route>
            </Routes>
           
        </BrowserRouter>
        </>
    )
}

export default App;
