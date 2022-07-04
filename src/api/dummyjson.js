import axios from "axios";

export const dummyJSON = axios.create({
  baseURL: "https://dummyjson.com/",
});
