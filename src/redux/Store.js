import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice";
import Categoryslice from "./slices/CategorySlice"
import SearchSlice from "./slices/Searchslice"

const Store = configureStore({

    reducer : {
        cart:CartSlice,
        category : Categoryslice,
        search: SearchSlice,

    },
});

export default Store;
