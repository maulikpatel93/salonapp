
import storage from "redux-persist/lib/storage";

export default function authHeader(token) {
  if (token) {
    return { "Authorization": `Bearer ${token}` }
  }else{
    return {}
  }
}
