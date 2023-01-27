import NavBar from "../../component/layout/Navbar";
import BannerShop from "../../component/layout/BannerShop";
import ProductList from "../../component/ShopProduct/ProductList";

//===========================
//trang shop-page
const ShopPage = () => {
  return (
    <div className="shop">
      <NavBar></NavBar>
      <BannerShop></BannerShop>
      <ProductList></ProductList>
    </div>
  );
};

export default ShopPage;
