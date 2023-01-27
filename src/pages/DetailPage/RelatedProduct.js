import { useNavigate } from "react-router-dom";

//========================
//truyền id qua props và hiển thị
const RelatedProduct = (props) => {
  let navigate = useNavigate();
  return (
    <div className="related-item">
      <img
        src={props.img1}
        alt={props.name}
        onClick={() => {
          navigate(`/detail/${props.id}`);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      ></img>
      <h3>{props.name}</h3>
      <h4>{props.price} VND</h4>
    </div>
  );
};
export default RelatedProduct;
