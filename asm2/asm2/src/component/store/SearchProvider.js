import Searchcontext from "./contextSearch";
import { useState } from "react";

const SearchProvider = (props) => {
  const [inputSearchHandler, setinputSearchHandler] = useState("");

  const btnSearchhHandler = (item) => {
    setinputSearchHandler(item);
  };

  const btnResethHandler = (item) => {
    setinputSearchHandler("");
  };
  const searchContext = {
    inputSearch: inputSearchHandler,
    btnSearch: btnSearchhHandler,
    btnReset: btnResethHandler,
  };
  return (
    <Searchcontext.Provider value={searchContext}>
      {props.children}
    </Searchcontext.Provider>
  );
};

export default SearchProvider;
