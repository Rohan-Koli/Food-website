import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/cartSlice';
import categorySlice from './slices/categorySlice';
import searchSlice from './slices/searchSlice';
import couponSlice from './slices/couponSlice';
import filterSlice from './slices/filterSlice';
import darkModeSlice from './slices/darkModeSlice';
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category : categorySlice,
    search: searchSlice,
    coupon: couponSlice,
    filterData:filterSlice,
    darkMode:darkModeSlice,
  }
});


