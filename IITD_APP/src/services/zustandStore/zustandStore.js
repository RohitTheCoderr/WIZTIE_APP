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
  withimg:"",
  setUserdata: (userData) => set({ userData }),
  setWithimg:(withimg)=>set({withimg})
});


const useGetUserdata = create(
  devtools(getUserdata, {
    name: "userData",
    withimg:"withimg",
    getStorage: () => sessionStorage,
  })
);



const getUserProfiledata = (set) => ({
  userProfileData: "",
  setUserProfiledata: (userProfileData) => set({ userProfileData }),
});


const useGetProfileUserdata = create(
  devtools(getUserProfiledata, {
    name: "userProfileData",
    getStorage: () => sessionStorage,
  })
);



const getAllUserProfiledata = (set) => ({
  alluserProfileData: [],
  setAllUserProfiledata: (alluserProfileData) => set({ alluserProfileData }),
});


const useGetALLProfileUserdata = create(
  devtools(getAllUserProfiledata, {
    name: "alluserProfileData",
    getStorage: () => sessionStorage,
  })
);


const getMyConnections= (set) => ({
  myConnections: [],
  setMyConnections: (myConnections) => set({ myConnections }),
});


const useGettingMyConnectionsZustand = create(
  devtools(getMyConnections, {
    name: "myConnections",
    getStorage: () => sessionStorage,
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

const getShowmore = (set) => ({
  show: false,
  setShowmore: (show) => set({ show }),
});

const useGetShowmore = create(
  devtools(getShowmore, {
    name: "show",
    getStorage: () => localStorage,
  })
);


///////  Exports /////////////////////////
export { useAuthStore, useGetCount, useGetUserdata,useGetProfileUserdata, useGetShow ,useGetALLProfileUserdata , useGettingMyConnectionsZustand, useGetShowmore};

/* 
get().state --> useful when work conditional state

*/
