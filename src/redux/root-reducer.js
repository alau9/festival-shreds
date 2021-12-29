import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import accountReducer from "./account/account.reducer";

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    account: accountReducer
});

export default persistReducer(persistConfig, rootReducer)

