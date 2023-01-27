import { useNavigate } from "react-router-dom";

//====================================
//hiển thị popup qua props
const Popups = (props) => {
  console.log(props.id);
  let navigate = useNavigate();
  return (
    <div className="popup">
      <div className="popup-img">
        <img src={props.img} alt={props.name}></img>
      </div>
      <div className="popup-title">
        <button onClick={props.close}>x</button>
        <h2>
          <strong>{props.name}</strong>
        </h2>
        <h4>{`${props.price} VND`}</h4>
        <p>{props.shortDesc}</p>
        <button
          className="btn-detail"
          onClick={() => {
            navigate(`/detail/${props.id}`);
          }}
        >
          <i className="fa fa-shopping-cart"></i> View Detail
        </button>
      </div>
    </div>
  );
};
export default Popups;
