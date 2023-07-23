import request from 'request';
import { parseErrorCode } from '../liveParser';
import { IFKey } from '../index';
import { ifResponse, flight } from '../types'

const getAll = (sessionId:string) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            url: `https://api.infiniteflight.com/public/v2/sessions/${sessionId}/flights`,
            headers: { Authorization: `Bearer ${IFKey}` }
        };

        request(options, function (error, response, body) {
            if(error){
                reject(error);
            }else{
                if(body){
                    const data = (typeof body === 'string' ? JSON.parse(body) : body) as ifResponse;
                    if(data.hasOwnProperty('errorCode')){
                        const handle = parseErrorCode(data.errorCode);
                        if(handle.failed == false){
                            resolve({
                                path: `/public/v2/sessions/${sessionId}/flights`,
                                result: data.result as flight[]
                            });
                        }else{
                            reject(handle);
                        }
                    }else{
                        reject({
                            failed: true,
                            errorCode: null,
                            errorMessage: "Malformed response"
                        });
                        console.error(data);
                    }
                }else{
                    if(response.statusCode == 200){
                        reject({
                            failed: true,
                            errorCode: null,
                            errorMessage: "Malformed response"
                        });
                    }else{
                        reject({
                            failed: true,
                            errorCode: response.statusCode,
                            errorMessage: response.statusMessage
                        })
                    }
                }
            }
        });

    });
}



export default getAll