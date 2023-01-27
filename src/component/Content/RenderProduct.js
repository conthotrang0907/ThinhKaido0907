import Popups from "../Popup/Popup";
import Popup from "reactjs-popup";
//=====================================
// hiển thị danh sách sản phẩm
const RenderProduct = (props) => {
  return (
    <div className="products-item">
      <Popup
        modal
        trigger={<img src={props.img1} alt={props.name}></img>}
        position="right center"
      >
        {(close) => (
          <Popups
            id={props.id}
            img={props.img1}
            name={props.name}
            shortDesc={props.shortDesc}
            price={props.price}
            close={close}
          ></Popups>
        )}
      </Popup>

      <h3>{props.name}</h3>
      <h4>{`${props.price} VND`}</h4>
    </div>
  );
};
export default RenderProduct;
