import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth";
import messageReducer from "./slices/message";

//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
  auth: persistReducer(
    {
      key: "auth",
      storage,
      keyPrefix: "salon-",
    },
    authReducer,
  ),
  message: messageReducer,
});

export default reducer;
