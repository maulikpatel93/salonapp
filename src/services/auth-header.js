
import { store } from '../store';

export default function authHeader(gettoken = '') {
  const token = gettoken ?  gettoken : store.getState().auth.token;
  if (token) {
    return { "Authorization": `Bearer ${token}` }
  }else{
    return {}
  }
}
