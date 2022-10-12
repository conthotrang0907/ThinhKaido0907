//======================
const RenderResult = (props) => {
  return (
    <div className="result_item">
      <img src={props.imgPoster} alt={props.name} />
    </div>
  );
};
export default RenderResult;
