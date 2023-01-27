import { useContext, useRef } from "react";
import { DataContext } from "../../store/data-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import RelatedProduct from "./RelatedProduct";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store";
import { useNavigate } from "react-router-dom";
//=================================
// lấy dữ liệu id từ url truyền qua props 
// lọc id qua data và hiển thị
const RenderDetail = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const islogin = useSelector((state) => state.islogin.islogin);
  const { dataProduct, error, isLoading } = useContext(DataContext);
  const inputQuantityRef = useRef();

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
    let data = dataProduct.filter((a) => a._id.$oid === props.id);

    let dataRelated = dataProduct.filter(
      (a) => a.category === data[0].category && a._id.$oid !== data[0]._id.$oid
    );
    const addCartHandler = () => {
      const quantity = inputQuantityRef.current.value;
      if (islogin) {
        if (quantity) {
          dispatch(
            cartAction.ADD_CART({
              itemId: data[0]._id.$oid,
              quantity: quantity,
            })
          );
        }
      } else {
        alert("vui long dang nhap");
        navigate("/login");
      }
    };
 console.log(data[0])
    return (
      <div className="container-detail">
        <div className="row-1">
          <div className="col-1">
            <img src={data[0].img1} alt={data[0].name}></img>
            <img src={data[0].img2} alt={data[0].name}></img>
            <img src={data[0].img3} alt={data[0].name}></img>
            <img src={data[0].img4} alt={data[0].name}></img>
          </div>
          <div className="col-2">
            <img src={data[0].img1} alt={data[0].name}></img>
          </div>
          <div className="col-3">
            <h1>{data[0].name}</h1>
            <h4>{data[0].price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</h4>
            <p>{data[0].short_desc}</p>
            <p>
              <strong>CATEGOTY:</strong>
              {data[0].category}
            </p>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="QUANTITY"
              ref={inputQuantityRef}
            ></input>
            <button onClick={addCartHandler}>Add to cart</button>
          </div>
        </div>
        <div className="row-2">
          <button>DECRIPTION</button>
          <h3>PRODUCT DECRIPTION</h3>
          <p>{`${data[0].long_desc.replace("/n","/br")}`}</p>
        </div>
        <div className="row-3">
          <h3>RELATED PRODUCT</h3>
          <div className="related">
            {dataRelated.length !== 0 &&
              dataRelated.map((data) => (
                <RelatedProduct
                  key={data._id.$oid}
                  id={data._id.$oid}
                  category={data.category}
                  longDesc={data.long_desc}
                  name={data.name}
                  price={data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  shortDesc={data.short_desc}
                  img1={data.img1}
                  img2={data.img2}
                  img3={data.img3}
                  img4={data.img4}
                ></RelatedProduct>
              ))}
          </div>
        </div>
      </div>
    );
  }
};
export default RenderDetail;
