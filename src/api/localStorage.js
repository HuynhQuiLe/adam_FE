export const userLocalStorage = {
    get: () =>
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    set: (userDataContentInfo) => {
      const dataJson = JSON.stringify(userDataContentInfo);
      localStorage.setItem("user", dataJson);
    },
    remove: () => {
      localStorage.removeItem("user");
    },
  };

  export const userSignupLocalStorage = {
    get: () =>
      localStorage.getItem("userSignup")
        ? JSON.parse(localStorage.getItem("userSignup"))
        : null,
    set: (userSignup) => {
      const dataJson = JSON.stringify(userSignup);
      localStorage.setItem("userSignup", dataJson);
    },
    remove: () => {
      localStorage.removeItem("userSignup");
    },
  };

  export const notificationLocalStorage = {
    get: () =>
      localStorage.getItem("notification")
        ? JSON.parse(localStorage.getItem("notification"))
        : null,
    set: (message) => {
      const dataJson = JSON.stringify(message);
      localStorage.setItem("notification", dataJson);
    },
    remove: () => {
      localStorage.removeItem("notification");
    },
  };