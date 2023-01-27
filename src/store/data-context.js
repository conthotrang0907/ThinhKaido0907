import { createContext } from "react";
import { useEffect, useState } from "react";

//khởi tạo dữ liệu context
export const DataContext = createContext({
  dataProduct: [],
  error: "",
  isLoading: "",
});
//xử lý và truyền data context
const DataProvider = (props) => {
  const [dataProduct, setdataProduct] = useState([]);
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const linkAPI =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

  useEffect(() => {
    const getData = async () => {
      setisLoading(true);
      const response = await fetch(linkAPI);
      const data = await response.json();
      setisLoading(false);
      setdataProduct(data);
      
    };
    
    getData().catch((error) => {
      setisLoading(false);
      seterror(error.message);
    });
  }, [linkAPI]);

  const dataContext = {
    dataProduct: dataProduct,
    error: error,
    isLoading: isLoading,
  };
  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
