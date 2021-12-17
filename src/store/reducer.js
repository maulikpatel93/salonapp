import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import clientReducer from "../store/slices/clientSlice";
import imageReducer from "../store/slices/imageSlice";
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
  client: clientReducer,
  image: imageReducer,
});

export default reducer;
