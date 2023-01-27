import NavBar from "../../component/layout/Navbar";
import BannerCart from "../../component/layout/BannerCart";
import CartProduct from "../../component/CartProduct/CartProduct";

//==========================
// trang cart page
const CartPage = () => {
  return (
    <div className="cart-page">
      <NavBar></NavBar>
      <BannerCart></BannerCart>
      <CartProduct></CartProduct>
    </div>
  );
};

export default CartPage;
