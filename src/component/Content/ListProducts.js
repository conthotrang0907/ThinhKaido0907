// import { useEffect, useState } from "react";
import RenderProduct from "./RenderProduct";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useContext } from "react";
import { DataContext } from "../../store/data-context";
//================================
//danh sách các sản phẩm 
const ListProducts = () => {
  const { dataProduct, error, isLoading } = useContext(DataContext);
  if (!isLoading && dataProduct.length === 0) {
    return;
  }
  if (isLoading && dataProduct.length === 0) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  // console.log(dataProduct)
  if (!isLoading && dataProduct.length !== 0) {
    return (
      <div className="products">
        <div className="title-list">
          <h4>MADE THE HARD WAY</h4>
          <h3>TOP TRENDING PRODUCTS</h3>
        </div>
        <div className="list-products">
          {dataProduct.map((product) => (
            <RenderProduct
              key={product._id.$oid}
              id={product._id.$oid}
              category={product.category}
              longDesc={product.long_desc}
              name={product.name}
              price={product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              shortDesc={product.short_desc}
              img1={product.img1}
              img2={product.img2}
              img3={product.img3}
              img4={product.img4}
            ></RenderProduct>
          ))}
        </div>
      </div>
    );
  }
};
export default ListProducts;
