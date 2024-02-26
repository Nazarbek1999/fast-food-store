import axios from "axios";

function apiCall(url, method, data) {
  return axios({
    baseURL: "https://jsonplaceholder.typicode.com",
    url,
    method,
    data,
  });
}
export default apiCall;
