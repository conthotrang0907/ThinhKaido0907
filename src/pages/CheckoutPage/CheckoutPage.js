import NavBar from "../../component/layout/Navbar";
import RenderCheckOut from "./RenderCheckOut";
const CheckoutPage = () => {
  //===========================
  // trang checkout page
  return (
    <div className="checkout-page">
      <NavBar></NavBar>
      <RenderCheckOut></RenderCheckOut>
    </div>
  );
};

export default CheckoutPage;
