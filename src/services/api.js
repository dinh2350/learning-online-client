import Axios from "axios";

const url = "http://elearning0706.cybersoft.edu.vn/api/";

export default function api(uri, method, data, headers) {
  return Axios({
    method,
    url: url + uri,
    data,
    headers,
  });
}
