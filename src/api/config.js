import axios from "axios";
import { userLocalStorage } from "./localStorage";
import { setLoadingOff, setLoadingOn } from "../redux/loadingSlice";
import { store } from "../redux/configStore";
import { authSer } from "./api";
import { setToken } from "../redux/authSlice";
// import { notify } from "../utils/toast/toast";


let token = store.getState().authSlice.token

export const BASE_URL = "http://localhost:3000/";
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

https.interceptors.request.use(
  (config) => {
    store.dispatch(setLoadingOn());
    return config;
  },
  (err) => {
    store.dispatch(setLoadingOff());
    return Promise.reject(err);
  }
);

https.interceptors.response.use(
  (res) => {
    store.dispatch(setLoadingOff());
    return res;
  },
  (err) => {
    store.dispatch(setLoadingOff());
    if(err.response.data.statusCode === 401) {
      authSer
        .refreshToken()
        .then(({data}) => {
            console.log(data)
          if (data.message === "LOGIN_AGAIN") {
            alert("LOGIN_AGAIN");
             //goi log out
            // authSer
            // .logout()
            // .then(({ data }) => {
            //   notify.success(data.message);
            //   userLocalStorage.remove();
            // })
            // .catch((err) => {
            //   notify.error(err.response.data.message);
            // });
            return;
          }
          userLocalStorage.set(data.content);
          window.location.reload();
        })
        .catch((error) => {
          // notify.error(error.response.data.message);
        });
    }
    return Promise.reject(err);
  }
);
