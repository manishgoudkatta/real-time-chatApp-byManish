// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ?  : "/api",
//   withCredentials: true,
// });


import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_BASE_URL + "/api"
      : "https://real-time-chatapp-bymanish.onrender.com/api",
  withCredentials: true,
});
