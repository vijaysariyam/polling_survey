import instance from "./axios";
import LsService from "./localstorage";

class AuthServices {
  getUserType = () => {
    let user = LsService.getCurrentUser();
    return user.user_type;
  };
  getUserUid = () => {
    let user = LsService.getCurrentUser();
    return user.uid;
  };
  loginAdmin = (data) => instance.post("admin/loginadmin", { admin_username: data.username, admin_password: data.password });
}

export default new AuthServices();
