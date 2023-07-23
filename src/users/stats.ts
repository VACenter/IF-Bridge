import request from 'request';
import { parseErrorCode } from '../liveParser';
import { IFKey } from '../index';
import { ifResponse, userStats } from '../types'

const getStats = (userIds: userStats['userId'][], discourseNames: userStats['discourseName'][], userHashes: userStats['hash'][]) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            url: `https://api.infiniteflight.com/public/v2/users`,
            headers: { Authorization: `Bearer ${IFKey}`, 'Content-Type': 'application/json', },
            body: {
                userIds: userIds,
                discourseNames: discourseNames,
                userHashes: userHashes
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                if (body) {
                    const data = (typeof body === 'string' ? JSON.parse(body) : body) as ifResponse;
                    if (data.hasOwnProperty('errorCode')) {
                        const handle = parseErrorCode(data.errorCode);
                        if (handle.failed == false) {
                            resolve({
                                path: `/public/v2/users`,
                                query: options.body,
                                result: data.result as userStats[]
                            });
                        } else {
                            reject(handle);
                        }
                    } else {
                        reject({
                            failed: true,
                            errorCode: null,
                            errorMessage: "Malformed response"
                        });
                        console.error(data);
                    }
                } else {
                    if (response.statusCode == 200) {
                        reject({
                            failed: true,
                            errorCode: null,
                            errorMessage: "Malformed response"
                        });
                    } else {
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



export default getStats