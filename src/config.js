import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.30.114:9090/buxoroUZ/api/v1/",
  headers: {
  	"Authorization": "Bearer " + localStorage.getItem("token")
  }
});

export const urlFile = "http://192.168.30.114:9090/buxoroUZ/api/v1/";
