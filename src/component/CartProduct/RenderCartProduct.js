import { useRef, useState } from "react";
import { cartAction } from "../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//=============================
// hiển thị dữ liệu và cập nhật lại dữ liệu 
const RenderCartProduct = (props) => {
  const inputQuantity = useRef();
  const cartItemId = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrice, settotalPrice] = useState(props.quantity * props.price);

  const chaneHandler = () => {
    console.log(cartItemId);
    dispatch(
      cartAction.UPDATE_CART({
        itemId: props.id,
        quantity: inputQuantity.current.value,
      })
    );
    settotalPrice(inputQuantity.current.value * props.price);
    navigate("/cart");
  };
  const removeHandler = () => {
    alert("ban chac chan chu");
    dispatch(cartAction.DELETE_CART({ itemId: props.id }));
    navigate("/cart");
  };

  return (
    <div className="row">
      <div className="cell">
        <img src={props.img1} alt={props.name} style={{ width: "100px" }}></img>
      </div>
      <div className="cell">{props.name}</div>
      <div className="cell">
        {`${props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}
      </div>
      <div className="cell">
        <input
          type="number"
          min="1"
          step="1"
          placeholder="QUANTITY"
          defaultValue={props.quantity}
          onChange={chaneHandler}
          ref={inputQuantity}
        ></input>
      </div>
      <div className="cell">
        {String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </div>
      <button className="cell remove" onClick={removeHandler}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default RenderCartProduct;
