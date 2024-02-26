import { configureStore, createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "Inter",
  initialState: {
    users: [],
    todo: [],
    cart: [],
    tarix: [],
    adminValue: {
      food: "",
      price: "",
      img: "",
      foodCount: "",
      count: 1,
    },
    cartObj: {
      cartAdress: "",
      cartPhone: "",
    },
    isOpen: false,
    isTarix: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    foodName: (state, action) => {
      state.adminValue = { ...state.adminValue, name: action.payload };
    },
    foodPrice: (state, action) => {
      state.adminValue = { ...state.adminValue, price: action.payload };
    },
    foodCount: (state, action) => {
      state.adminValue = { ...state.adminValue, foodCount: action.payload };
    },
    saveFood: (state, action) => {
      state.todo.push({ ...state.adminValue, img: action.payload });
      state.users.push({ ...state.adminValue, img: action.payload });
      state.isOpen = !state.isOpen;
      state.adminValue = { ...state.adminValue, name: "", price: "", img: "" };
    },
    buyFood: (state, action) => {
      state.cart.push({ ...action.payload, count: 1 });
    },
    plus: (state, action) => {
      if (
        state.cart[action.payload].foodCount <= state.cart[action.payload].count
      ) {
        alert("mahsulot qolmadi");
      } else {
        state.cart[action.payload].count = state.cart[action.payload].count + 1;
      }
    },
    minus: (state, action) => {
      if (state.cart[action.payload].count <= 1) {
        alert("bundan kam bo`lmaydi");
      } else {
        state.cart[action.payload].count = state.cart[action.payload].count - 1;
      }
    },
    openCart: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    adressCart: (state, action) => {
      state.cartObj = { ...state.cartObj, cartAdress: action.payload };
    },
    phoneCart: (state, action) => {
      state.cartObj = { ...state.cartObj, cartPhone: action.payload };
    },
    goUsers: (state, action) => {
      state.isOpen = !state.isOpen;
      state.tarix.push(state.cartObj);
      state.cart.splice(length)
      console.log(state.tarix);
    },
    tarixniKor:(state, action)=>{
      state.isTarix=!state.isTarix
    }
  },
});

const store = configureStore({
  reducer: countSlice.reducer,
});
export const action = countSlice.actions;
export default store;
