import { API_PATH } from "@/utils/constants";
import axios from  'axios';

const getProperties = async () => {
    return await axios.get(`${API_PATH}/api/Properties`)
}

export { getProperties }