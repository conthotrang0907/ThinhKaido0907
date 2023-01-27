// import { Table } from "react-bootstrap";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useContext } from "react";
import { DataContext } from "../../store/data-context";
import RenderCartProduct from "./RenderCartProduct";
import { useNavigate } from "react-router-dom";

//=======================================
// hiển thị , lọc dữ liệu từ localStorage , truyền dữ liệu xuống props hiển thị
const CartProduct = () => {
  const navigate = useNavigate();
  const { dataProduct, error, isLoading } = useContext(DataContext);

  const useArrCurrent = JSON.parse(localStorage.getItem("useArrCurrent")) || [];

  if (!isLoading && dataProduct.length === 0) {
    return;
  }
  if (isLoading && dataProduct.length === 0) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  if (!isLoading && dataProduct.length !== 0) {
    let total = 0;
    let data = [];
    if (useArrCurrent.amount.length !== 0) {
      useArrCurrent.amount.map((b) => {
        let dataHandler = dataProduct.find((a) => a._id.$oid === b.itemId);
        dataHandler.amount = b;
        data.push(dataHandler);
        
      });
    }

    if (data.length !== 0) {
      for (const a in data) {
        total = data[a].price * data[a].amount.quantity + total;
      }
    }

    return (
      <div className="cart">
        <h2>SHOPPING CART</h2>
        <div className="cart-product">
          <div className="cart-table">
            <div className="row header">
              <div className="cell">IMAGE</div>
              <div className="cell">PRODUCT</div>
              <div className="cell">PRICE</div>
              <div className="cell">QUANTITY</div>
              <div className="cell">TOTAL</div>
              <div className="cell">REMOVE</div>
            </div>
            {data.length !== 0 &&
              data.map((product) => (
                <RenderCartProduct
                  key={product._id.$oid}
                  id={product._id.$oid}
                  category={product.category}
                  longDesc={product.long_desc}
                  name={product.name}
                  price={product.price}
                  shortDesc={product.short_desc}
                  img1={product.img1}
                  img2={product.img2}
                  img3={product.img3}
                  img4={product.img4}
                  quantity={product.amount.quantity}
                ></RenderCartProduct>
              ))}
          </div>
          <div className="cart-total">
            <h1>CART TOTAL</h1>
            <div className="row-2">
              <h3>SUBTOTAL</h3>
              <p>{String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
            </div>
            <div className="row-3">
              <h3>TOTAL</h3>
              <h2>{String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
            </div>
            <div className="row-4">
              <input placeholder="Enter your coupon"></input>
              <button>Apply coupon</button>
            </div>
          </div>
        </div>
        <div className="footer-btn">
          <button className="btn-ctn" onClick={() => navigate("/shop")}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Continue
            shopping
          </button>
          <button className="btn-proceed" onClick={() => navigate("/checkout")}>
            Proceed to checkout{" "}
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
};
export default CartProduct;
