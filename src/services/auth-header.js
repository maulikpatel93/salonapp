
import { store } from '../store';

export default function authHeader() {
  const token = store.getState().auth.token;
  if (token) {
    return { "Authorization": `Bearer ${token}` }
  }else{
    return {}
  }
}
