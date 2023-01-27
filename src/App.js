import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import "./styles/dist/style.css";
import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import React from "react";

//Sử dụng thư viện react-router-dom để tạo các Route và phân trang cho ứng dụng.
//------------------------------------------
// su dung react lazy 
const DetailPage = React.lazy(() => import("./pages/DetailPage/DetailPage"));
const ShopPage = React.lazy(() => import("./pages/ShopPage/ShopPage"));
const CartPage = React.lazy(() => import("./pages/CartPage/CartPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage/CheckoutPage"));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense>
         
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail/:productId" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
