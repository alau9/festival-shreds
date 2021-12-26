import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import accountReducer from "./account/account.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    account: accountReducer
})