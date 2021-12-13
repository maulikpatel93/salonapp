import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import storageSession from 'redux-persist/lib/storage/session'
//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
  auth: persistReducer(
    {
      key: "auth",
      storage,
      keyPrefix: "salon-",
      debug: false,
      timeout: 20000
    },
    authReducer,
  ),
  message: messageReducer,
});

export default reducer;
