import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlistItems") || "[]"),
};

export const wishlistReducer = createReducer(initialState, {
  addToWishlist: (state, action) => {
    const item = action.payload;
    const isItemExist = state.wishlist.find((i) => i.id === item.id);
    if (isItemExist) {
      return {
        ...state,
        wishlist: state.wishlist.map((i) =>
          i._id === isItemExist.id ? item : i
        ),
      };
    } else {
      return {
        ...state,
        wishlist: [...state.wishlist, item],
      };
    }
  },

  removeFromWishlist: (state, action) => {
    return {
      ...state,
      wishlist: state.wishlist.filter((i) => i.id !== action.payload),
    };
  },
});
