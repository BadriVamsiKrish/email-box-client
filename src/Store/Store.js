import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth-slice";

const Store=configureStore({
  reducer:{auth:AuthSlice}
});
export default Store;