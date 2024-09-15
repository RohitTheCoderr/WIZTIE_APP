import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

////////////// auth //////////////////
const authStore = (set) => ({
  token: "",
  setToken: (newToken) => set({ token: newToken }),
  removeToken: () => set({ token: null }),
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "token",
      getStorage: () => localStorage,
    })
  )
);


////////////////// product count  ////////////////
const getCount = (set) => ({
  count: "",
  setCount: (count) => set({ count }),
});


const useGetCount = create(
  devtools(getCount, {
    name: "count",
    getStorage: () => localStorage,
  })
);



const getUserdata = (set) => ({
  userData: "",
  setUserdata: (userData) => set({ userData }),
});


const useGetUserdata = create(
  devtools(getUserdata, {
    name: "userData",
    getStorage: () => localStorage,
  })
);


const getShow = (set) => ({
  show: false,
  setShow: (show) => set({ show }),
});


const useGetShow = create(
  devtools(getShow, {
    name: "show",
    getStorage: () => localStorage,
  })
);


///////  Exports /////////////////////////
export { useAuthStore, useGetCount, useGetUserdata, useGetShow };

/* 
get().state --> useful when work conditional state

*/
