import { createSlice, configureStore } from "@reduxjs/toolkit";
const loginInitial = { islogin: false };
const cartInitial = { item: {} };
const useArrCurrent = JSON.parse(localStorage.getItem("useArrCurrent")) || [];
const useArr = JSON.parse(localStorage.getItem("useArr")) || [];
//=======================================
// Sử dụng redux toolkit kết nối dữ liệu
// tao action state cho sign up, sign in
const loginSlide = createSlice({
  name: "islogin",
  initialState: loginInitial,
  reducers: {
    ON_LOGIN(state) {
      state.islogin = true;
    },
    ON_LOGOUT(state) {
      for (const key in useArr) {
        if (useArr[key].email === useArrCurrent.email) {
          useArr.splice(key, 1, useArrCurrent);
        }
      }
      localStorage.setItem("useArr", JSON.stringify(useArr));
      localStorage.removeItem("useArrCurrent");
      state.islogin = false;
    },
  },
});
//tạo action và state cho cart page
const cartSlide = createSlice({
  name: "cart",
  initialState: cartInitial,
  reducers: {
    ADD_CART(state, action) {
      const amount = [];
      if (useArrCurrent.amount.length === 0) {
        amount.push(action.payload);
        useArrCurrent.amount = amount;
      } else {
        let trungId = true;
        for (const a in useArrCurrent.amount) {
          if (useArrCurrent.amount[a].itemId === action.payload.itemId) {
            useArrCurrent.amount[a] = action.payload;

            trungId = true;
            break;
          } else {
            trungId = false;
          }
        }
        if (!trungId) {
          useArrCurrent.amount.push(action.payload);
        }
      }
      localStorage.setItem("useArrCurrent", JSON.stringify(useArrCurrent));
    },
    UPDATE_CART(state, action) {
      for (const key in useArrCurrent.amount) {
        if (useArrCurrent.amount[key].itemId === action.payload.itemId) {
          useArrCurrent.amount[key].quantity = action.payload.quantity;
        }
      }
      localStorage.setItem("useArrCurrent", JSON.stringify(useArrCurrent));
    },
    DELETE_CART(state, action) {
      for (const key in useArrCurrent.amount) {
        if (useArrCurrent.amount[key].itemId === action.payload.itemId) {
          useArrCurrent.amount.splice(key, 1);
        }
      }
      localStorage.setItem("useArrCurrent", JSON.stringify(useArrCurrent));
    },
  },
});

export const loginAction = loginSlide.actions;
export const cartAction = cartSlide.actions;

const store = configureStore({
  reducer: { islogin: loginSlide.reducer, cart: cartSlide.reducer },
});

export default store;
