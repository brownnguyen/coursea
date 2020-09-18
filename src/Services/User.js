import Axios from "axios";

export default class UserServices {
    Login (data) {
        return Axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data
        })
    }
    SignUp (data) {
        return Axios({
            url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            method: "POST",
            data
        })
    }
}