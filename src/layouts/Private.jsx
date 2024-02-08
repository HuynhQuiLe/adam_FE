import { userLocalStorage } from "../api/localStorage";
// import { notify } from "../utils/toast/toast";

const Private = ({ children }) => {
  let  user  = userLocalStorage.get()

  if (user) {
    return children;
  }
  // notify.error('Please log in to continue using our services.')
  history.back()

};

export default Private;
