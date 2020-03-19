import axios from 'axios';
const url = "http://localhost:3019"

export const registeruser = async (data) => {
    try {
        let response = await axios.post(url + "/user/create", data);
        //return response;
        console.log(response);
    }
    catch (Err) {
        console.log(Err);
    }
}

export const loginUser = async (data) => {
    try {
        let response = await axios.post(url + "/user/login", data);
        //return response;
        console.log(response)
    }
    catch (Err) {
        console.log(Err);
    }
}