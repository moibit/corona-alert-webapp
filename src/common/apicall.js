import Moi_ID from 'js-moi-id';
import axios from 'axios';
import CryptoJS from "crypto-js";

const moi_id = new Moi_ID();


export const registeruser = async (data) => {
    try {
        await moi_id.create(data.mobile,data.mobile);
        return true
    }
    catch(err) {
        console.log(err);
    }
}

export const loginuser = async (data) => {
    try {
        const loginR = await moi_id.unlock(data.mobile,data.mobile);
        window.devIndex = moi_id.getDeveloperIndex();
        return loginR;
    }
    catch (err) {
        console.log(err);
    }
}

export const storeInMoiBit = async (data) => {
    const devIndex = moi_id.getDeveloperIndex();
    const authResponse = await axios({
        url : 'http://localhost:3019/keyaccount/id/'+devIndex,
        method : 'GET'
    });
    const config = authResponse.data.result;
    const symmetricKey = await moi_id.getCipherKey();
    let cipherText = CryptoJS.AES.encrypt(JSON.stringify(data),symmetricKey).toString();
    const name = moi_id.getID();
    const payload = {
        fileName : name+'.txt',
        text : cipherText,
        create : 'true'
    };
    const tempUrl = 'https://kfs'+config.api_url+'.moibit.io/moibit/v0/writetexttofile';
    return await axios({
        url : tempUrl,
        method : 'POST',
        data: payload,
        headers : {
            'api_key' : config.api_key,
            'api_secret' : config.api_secret
        }
    })
}

function decryptUD(encryptedKS,__passphrase) {
    return new Promise((resolve,reject) => {
        try {
            var decryptedBytes  = CryptoJS.AES.decrypt(encryptedKS.toString(),__passphrase);
            var decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
            resolve(decryptedData);
        }catch(e) {
            reject(e);
        }  
    })
}

export const getUserData = async () => {
    try {
        const name = moi_id.getID();
        const devIndex = moi_id.getDeveloperIndex();
        const authResponse = await axios({
            url : 'http://localhost:3019/keyaccount/id/'+devIndex,
            method : 'GET'
        });
        const config = authResponse.data.result;
            const tempUrl = 'https://kfs'+config.api_url+'.moibit.io/moibit/v0/readfile';
            const udR = await axios({
                url : tempUrl,
                method : 'POST',
                data: {
                    "fileName" : '/'+name+'.txt'
                },
                headers : {
                    'api_key' : config.api_key,
                    'api_secret' : config.api_secret
                }
            })
            const symmetricKey = await moi_id.getCipherKey();
            return await decryptUD(udR.data,symmetricKey);
    }catch(e) {
        return {};
    }
    
}
