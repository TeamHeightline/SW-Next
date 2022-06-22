import axios from "axios";
import {REST_URL} from "../settings";

const axiosClient = axios.create({
    baseURL: REST_URL
});

export default axiosClient
