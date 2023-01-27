import ip from "../img/product_1.png";
import mac from "../img/product_2.png";
import ipad from "../img/product_3.png";
import watch from "../img/product_4.png";
import AirPods from "../img/product_5.png";
import { useNavigate } from "react-router-dom";
//===================================
//Danh sách các danh mục
const Category = () => {
  let navigate = useNavigate();
  return (
    <div className="category">
      <div className="row-1">
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h3>BROWSER OUR CATEGORIES</h3>
      </div>
      <div className="row-2">
        <img
          src={ip}
          alt="ip"
          onClick={() => {
            navigate("/shop");
          }}
        />
        <img
          src={mac}
          alt="mac"
          onClick={() => {
            navigate("/shop");
          }}
        />
      </div>
      <div className="row-3">
        <img
          src={ipad}
          alt="ipad"
          onClick={() => {
            navigate("/shop");
          }}
        />
        <img
          src={watch}
          alt="watch"
          onClick={() => {
            navigate("/shop");
          }}
        />
        <img
          src={AirPods}
          alt="AirPods"
          onClick={() => {
            navigate("/shop");
          }}
        />
      </div>
    </div>
  );
};
export default Category;
