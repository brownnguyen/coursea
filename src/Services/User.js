import Axios from "axios";

export default class UserServices {
    Login (data) {
        return Axios({
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data
        })
    }
}