import { useNavigate } from "react-router-dom";
//===================================
// render dữ liệu props
const RenderListProduct = (props) => {
  let navigate=useNavigate();
  return (
    <div className="product-item">
    <img src={props.img1} alt={props.name} onClick={()=>navigate(`/detail/${props.id}`)}></img>
    <h3>{props.name}</h3>
    <h4>{props.price}</h4>
    </div>
  );
};
export default RenderListProduct;
