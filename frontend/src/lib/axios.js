import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : " https://real-time-chatapp-bymanish-2.onrender.com",
  withCredentials: true,
});


// import axios from "axios";



// export const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.MODE === "development"
//       ? import.meta.env.VITE_BASE_URL + "/api"
//       : "https://real-time-chatapp-bymanish-1.onrender.com/api",
//   withCredentials: true,
// });
