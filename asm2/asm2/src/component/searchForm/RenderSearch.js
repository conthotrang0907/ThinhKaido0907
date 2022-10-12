import IconSearch from "./IconSearch";
import { useState, useContext, useRef } from "react";
import Searchcontext from "../store/contextSearch";
//==================
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};
const RenderSearch = (props) => {
  const [inputRef, setInputFocus] = useFocus();
  const ctxSearch = useContext(Searchcontext);
  const [inputFilm, setinputFilm] = useState("");

  const inputHandler = (event) => {
    setinputFilm(event.target.value);
  };
  const onResetHandler = () => {
    setinputFilm("");
    ctxSearch.btnReset(inputFilm);
  };

  const onSubmitHandler = () => {
    setinputFilm(inputFilm);
    ctxSearch.btnSearch(inputFilm);
  };

  return (
    <div className="form_search">
      <div className="icon-search">
        <input
          type="text"
          onChange={inputHandler}
          value={inputFilm}
          ref={inputRef}
          // onClick={()=>focusInput}
        ></input>
        <IconSearch onFocusInput={setInputFocus}></IconSearch>
      </div>
      <div className="btn_search">
        <button className="btn btn-light" type="reset" onClick={onResetHandler}>
          RESET
        </button>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={onSubmitHandler}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};
export default RenderSearch;
