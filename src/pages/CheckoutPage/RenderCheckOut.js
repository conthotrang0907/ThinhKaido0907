import { useContext } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";
import RenderData from "./RenderData";
import { DataContext } from "./../../store/data-context";
//================================
// lấy dữ liệu từ useArrCurrent và lọc id sau đó hiển thị
const RenderCheckOut = () => {
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
      <div>
        <div className="checkout">
          <div className="Banner-Checkout">
            <h1>Cart</h1>
            <h3>HOME/CART/CHECKOUT</h3>
          </div>
          <div className="title-checkout">
            <h2>BILLING DETAIL</h2>
          </div>
          <div className="checkout-form">
            <div className="checkout-input">
              <h3>FULLNAME</h3>
              <input placeholder="Enter Your Full Name Here!"></input>
              <h3>EMAIL</h3>
              <input placeholder="Enter Your Email Here!"></input>
              <h3>PHONE NUMBER</h3>
              <input placeholder="Enter Your Phone Number Here!"></input>
              <h3>ADDRESS</h3>
              <input placeholder="Enter Your Address Here!"></input>
              <button>Place order</button>
            </div>
            <div className="checkout-total">
              <h1>YOUR ORDER</h1>
              {data.length !== 0 &&
                data.map((a) => (
                  <RenderData
                    key={a.name}
                    name={a.name}
                    quantity={a.amount.quantity}
                    price={a.price}
                  ></RenderData>
                ))}
              <div className="row total">
                <h2>TOTAL</h2>
                <h2>{String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default RenderCheckOut;
