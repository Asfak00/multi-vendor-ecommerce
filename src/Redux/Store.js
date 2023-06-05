import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart";
import { wishlistReducer } from "./Wishlist";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
