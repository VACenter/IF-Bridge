//Dependencies

import request from 'request';
import { parseErrorCode } from './liveParser';

let IFKey:string|null = null;

const setIFKey = (key: string) => {
    IFKey = key as string;
}



export {
    IFKey,
    setIFKey
}