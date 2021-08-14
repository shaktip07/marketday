import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Authentication/login/Login.js'
// import Dashboard from './components/dashboard/Dashboard.js';
import ProtectedUrl from './components/Authentication/ProtectedUrl.js';
import DashboardLayout from './components/Dashboard/DashboardLayout'
import ProductList from './components/Dashboard/product/ProductList'
import ProductCreate from './components/Dashboard/product/ProductCreate'
import ProductUpdate from './components/Dashboard/product/ProductUpdate'

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
                <Route exact path="/login"  element={<Login/>}>
                    <ProtectedUrl />
                </Route>
            </Routes>
           
        </BrowserRouter>
        </>
    )
}

export default App;
