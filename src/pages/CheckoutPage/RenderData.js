//=============================
// hiển thị dữ liệu truyền qua props

const RenderData = (props) => {
  return (
    <div className="row">
      <div className="name-product">
        <p>{props.name}</p>
      </div>
      <p>{`${props.price} VND x ${props.quantity}`}</p>
    </div>
  );
};
export default RenderData;
