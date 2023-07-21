function parseErrorCode(errorCode:number){
    switch (errorCode) {
        case 0:
            return {
                code: 0,
                text: "Ok",
                failed: false
            }
            break;
        case 1:
            return {
                code: 1,
                text: "UserNotFound",
                failed: true
            }
            break;
        case 2: 
            return {
                code: 2,
                text: "MissingRequestParameters",
                failed: true
            }
            break;
        case 3:
            return {
                code: 3,
                text: "EndpointError",
                failed: true
            }
            break;
        case 4: 
            return {
                code: 4,
                text: "NotAuthorized",
                failed: true
            }
            break;
        case 5:
            return {
                code: 5,
                text: "ServerNotFound",
                failed: true
            }
            break;
        case 6:
            return {
                code: 6,
                text: "ServerError",
                failed: true
            }
            break;
        case 7: 
            return {
                code: 7,
                text: "NoAtisAvailable",
                failed: true
            }
            break;
        default:
            return {
                code: errorCode,
                text: "UnknownError",
                failed: true
            }
            break;
    }
}

export {
    parseErrorCode
}