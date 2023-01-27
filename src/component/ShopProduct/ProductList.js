import { useState, useContext } from "react";
import { DataContext } from "./../../store/data-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import RenderListProduct from "./RenderListProduct";

//=======================================
// lấy dữ liệu từ sự kiện click và lọc dữ liệu ứng với click sau đó truyền dữ liệu render
const ProductList = () => {
  const { dataProduct, error, isLoading } = useContext(DataContext);
  const [category, setcategory] = useState("all");

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
    let data = dataProduct.filter((a) => a.category === category);
    if (category === "all") {
      data = dataProduct.valueOf();
    }

    return (
      <div className="shop-content">
        <div className="col-1">
          <h2>CATEGORIES</h2>
          <ul>
            <li>APPLE</li>
            <ul>
              <li
                onClick={() => {
                  setcategory("all");
                }}
              >
                All
              </li>
            </ul>
            <li>IPHONE & MAC</li>
            <ul>
              <li
                onClick={() => {
                  setcategory("iphone");
                }}
              >
                iphone
              </li>
              <li
                onClick={() => {
                  setcategory("ipad");
                }}
              >
                ipad
              </li>
              <li
                onClick={() => {
                  setcategory("maxbook");
                }}
              >
                Max-book
              </li>
            </ul>
            <li>WIRELESS</li>
            <ul>
              <li
                onClick={() => {
                  setcategory("airpod");
                }}
              >
                Airpod
              </li>
              <li
                onClick={() => {
                  setcategory("watch");
                }}
              >
                Watch
              </li>
            </ul>
            <li>OHTHER</li>
            <ul>
              <li
                onClick={() => {
                  setcategory("mouse");
                }}
              >
                Mouse
              </li>
              <li
                onClick={() => {
                  setcategory("keyboad");
                }}
              >
                Keyboard
              </li>
              <li
                onClick={() => {
                  setcategory("orther");
                }}
              >
                Orther
              </li>
            </ul>
          </ul>
        </div>
        <div className="col-2">
          <div className="row-1">
            <input placeholder="Enter Search Phone"></input>
            <select>
              <option>default sorting</option>
            </select>
          </div>
          <div className="row-2">
            {!(data === 0) &&
              data.map((a) => (
                <RenderListProduct
                  key={a._id.$oid}
                  id={a._id.$oid}
                  category={a.category}
                  longDesc={a.long_desc}
                  name={a.name}
                  price={a.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  shortDesc={a.short_desc}
                  img1={a.img1}
                  img2={a.img2}
                  img3={a.img3}
                  img4={a.img4}
                ></RenderListProduct>
              ))}
          </div>
        </div>
      </div>
    );
  }
};
export default ProductList;
