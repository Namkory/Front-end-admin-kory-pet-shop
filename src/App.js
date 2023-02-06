import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Customers from './pages/customers/Customers';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import Analytics from './pages/analytics/Analytics';
import Categories from './pages/categories/Categories';
import Discount from './pages/discount/Discount';
import Inventory from './pages/inventory/Inventory';
import Settings from './pages/settings/Settings';
import NewProduct from './pages/newProduct/NewProduct';
import Layout from './layout/Layout';

function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route
                                index
                                element={
                                    <Layout>
                                        <Dashboard />
                                    </Layout>
                                }
                            />
                            <Route
                                path="customer"
                                element={
                                    <Layout>
                                        <Customers />
                                    </Layout>
                                }
                            />
                            <Route path="products">
                                <Route
                                    index
                                    element={
                                        <Layout>
                                            <Products />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="new"
                                    element={
                                        <Layout>
                                            <NewProduct />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="edit-product/:id"
                                    element={
                                        <Layout>
                                            <NewProduct />
                                        </Layout>
                                    }
                                />
                            </Route>

                            <Route
                                path="orders"
                                element={
                                    <Layout>
                                        <Orders />
                                    </Layout>
                                }
                            />
                            <Route
                                path="analytics"
                                element={
                                    <Layout>
                                        <Analytics />
                                    </Layout>
                                }
                            />
                            <Route
                                path="categories"
                                element={
                                    <Layout>
                                        <Categories />
                                    </Layout>
                                }
                            />
                            <Route
                                path="discount"
                                element={
                                    <Layout>
                                        <Discount />
                                    </Layout>
                                }
                            />
                            <Route
                                path="inventory"
                                element={
                                    <Layout>
                                        <Inventory />
                                    </Layout>
                                }
                            />
                            <Route
                                path="settings"
                                element={
                                    <Layout>
                                        <Settings />
                                    </Layout>
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
