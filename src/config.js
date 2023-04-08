import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://95.46.96.60:9090/buxoroUZ/api/v1/",
  headers: {
  	"Authorization": "Bearer " + localStorage.getItem("token")
  }
});

export const urlFile = "http://95.46.96.60:9090/buxoroUZ/api/v1/file/byID";
