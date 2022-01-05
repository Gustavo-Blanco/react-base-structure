import { API_BASE_URL } from './config';
import requests from "./requests";

const all = async () => {
    const url = `${API_BASE_URL}user/all`;
    const users = await requests.get(url);
    return users;
};

const store = async (body) => {
    const url = `${API_BASE_URL}user/store`;
    const user = await requests.post(url, body);
    return user;
};

const update = async (id, body) => {
    const url = `${API_BASE_URL}user/update/${id}`;
    const user = await requests.put(url, body);
    return user;
};

const show = async (id) => {
    const url = `${API_BASE_URL}user/show/${id}`;
    const user = await requests.get(url);
    return user;
};

const remove = async (id) => {
    const url = `${API_BASE_URL}user/remove/${id}`;
    const user = await requests.remove(url);
    return user;
};

const userRequest = {
    all,
    store,
    update,
    show,
    remove
}
 export default userRequest;