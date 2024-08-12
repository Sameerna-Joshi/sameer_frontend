
import axios from "axios";
const apiUrl ="http://localhost:8080/";

class UserService{
 saveuser(user)
 {
    return axios.post(apiUrl+"add", user);
 }

}
export default new UserService();