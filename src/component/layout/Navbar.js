import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../store";
//=======================================
//navbar cho cac trang page
const NavBar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.islogin.islogin);
  const useArrCurrent = JSON.parse(localStorage.getItem("useArrCurrent")) || [];

  if (useArrCurrent.length !== 0) {
    dispatch(loginAction.ON_LOGIN());
  }
  const clickLoginHandler = () => {
    if (islogin) {
      dispatch(loginAction.ON_LOGOUT());
    } else {
      navigate("/login");
    }
  };
  const cartHandler = () => {
    if (islogin) {
      navigate("/cart");
    } else {
      alert("Vui long dang nhap!!!");
      navigate("/login");
    }
  };
  return (
    <header className="navbar">
      <div className="navbar-item">
        <nav>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/shop");
            }}
          >
            Shop
          </li>
        </nav>
        <nav>
          <h2
            onClick={() => {
              navigate("/");
            }}
          >
            BOUTIQUE
          </h2>
        </nav>
        <nav>
          <li onClick={cartHandler}>
            <i className="fa fa-shopping-cart"></i> Cart
          </li>
          <li onClick={clickLoginHandler}>
            <i className="fas fa-user-alt"></i>{" "}
            {islogin ? `Logout (${useArrCurrent.fullname})` : "login"}
          </li>
        </nav>
      </div>
    </header>
  );
};
export default NavBar;
