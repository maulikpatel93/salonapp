import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from "redux-persist";
import rootReducer from './reducer';


const actionMiddleware = (store) => (next) => (action) => {
  if(action.type == "auth/logout/fulfilled"){
    store.dispatch({type: 'client/view/reset'});
    persistStore(store).purge();
  }
  return next(action);
};
const store = configureStore({
  reducer:rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // }
    serializableCheck: false,
  }).concat(actionMiddleware),
});
const persister = persistStore(store);



export { store, persister };