import { useRef, useState } from "react";
import background from "../img/banner1.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//============================
// trang sign in, sign up , tải dữ liệu lên localStorage
const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signIn, setIssignIn] = useState(true);
  const enterEmailRef = useRef();
  const enterPassRef = useRef();
  const enterFullnameRef = useRef();
  const enterPhoneRef = useRef();
  const useArr = JSON.parse(localStorage.getItem("useArr")) || [];

  const togle = () => {
    setIssignIn(!signIn);
  };
  //lọc dữ liệu input sing up
  const Validate = (data) => {
    let checkData = true;
    if (
      data.email.trim() === "" ||
      data.password.trim() === "" ||
      data.fullname.trim() === "" ||
      data.phone.trim() === ""
    ) {
      alert("Dien day du thong tin!!!");
      checkData = false;
      return checkData;
    }
    if (useArr.length !== 0 && useArr.find((a) => a.email === data.email)) {
      alert("Email da duoc dang ki!!!");
      checkData = false;
      return checkData;
    }
    if (data.password.length < 8) {
      alert("mat khau it nhat 8 ki tu!!!");
      checkData = false;
      return checkData;
    }
    return checkData;
  };
  //lọc dữ liệu input sing in
  const ValidateLogin = (data) => {
    let check = true;
    if (
      useArr.length !== 0 &&
      useArr.find((a) => a.email === data.email && a.password === data.password)
    ) {
      check = true;
      return check;
    } else if (
      useArr.length !== 0 &&
      useArr.find((a) => a.email !== data.email)
    ) {
      alert("Email khong ton tai");
      check = false;
      return check;
    } else if (
      useArr.length !== 0 &&
      useArr.find((a) => a.email === data.email && a.password !== data.password)
    ) {
      alert("Sai mat khau");
      check = false;
      return check;
    }
    return check;
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (signIn) {
      let userArrCurrent = {
        email: enterEmailRef.current.value,
        password: enterPassRef.current.value,
      };
      if (ValidateLogin(userArrCurrent)) {
        dispatch({ type: "ON_LOGIN" });
        alert("Dang nhap thanh cong");
        let userCurent = useArr.find((a) => a.email === userArrCurrent.email);
        localStorage.setItem("useArrCurrent", JSON.stringify(userCurent));

        navigate("/");
      }
    } else {
      let useArrHandler = {
        email: enterEmailRef.current.value,
        password: enterPassRef.current.value,
        fullname: enterFullnameRef.current.value,
        phone: enterPhoneRef.current.value,
        amount: [],
      };
      if (Validate(useArrHandler)) {
        console.log(useArr);
        useArr.push(useArrHandler);
        localStorage.setItem("useArr", JSON.stringify(useArr));
        setIssignIn(true);
      }
    }
  };

  return (
    <>
      <img src={background} alt="background"></img>
      <section className="auth">
        <h1>{signIn ? "Sign in" : "Sign Up"}</h1>
        <form onSubmit={SubmitHandler}>
          {!signIn && (
            <input placeholder="FullName" ref={enterFullnameRef}></input>
          )}
          <input
            placeholder="Email"
            type="email"
            id="email"
            required
            ref={enterEmailRef}
          ></input>
          <input
            placeholder="Password"
            type="password"
            id="password"
            required
            ref={enterPassRef}
          ></input>
          {!signIn && <input placeholder="Phone" ref={enterPhoneRef}></input>}
          <button type="submit">{signIn ? "SIGN IN" : "SIGN UP"}</button>
        </form>
        <p>
          {signIn ? "Create an account" : "Login?"}

          <button onClick={togle} className="togle">
            {signIn ? "Sign up" : "Click"}
          </button>
        </p>
      </section>
    </>
  );
};
export default AuthForm;
