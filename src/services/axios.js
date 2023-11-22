import axios from "axios";
const instance = axios.create({
  // baseURL: "http://letzaddapi-env.eba-tcppe2gr.ap-south-1.elasticbeanstalk.com/api/",
  baseURL: "https://487a-123-201-175-60.ngrok-free.app/api/",
});
export default instance;
