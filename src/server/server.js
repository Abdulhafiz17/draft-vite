import axios from "axios";
import baseurl from "./baseurl";
const token = localStorage.getItem("access_token");

export default async function server(
  endpoint = "",
  method = "get",
  data = null
) {
  let result, error;

  await axios
    .request({
      baseURL: baseurl + endpoint,
      headers: { Authorization: `Bearer ${token}` },
      method: method,
      data: data,
    })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      error = err;
      console.error(error);
    })
    .finally(() => {});

  return new Promise((resolve, reject) => {
    if (result) resolve(result);
    else reject(error);
  });
}
