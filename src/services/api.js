import Axios from "axios";

const url = "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/";

export default function api(uri, method, data = null) {
  return Axios({
    method,
    url: url + uri,
    data
  });
}
