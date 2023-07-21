//Dependencies

import request from 'request';
import { parseErrorCode } from './liveParser';
import sessions from './servers/main';

let IFKey:string|null = null;

const setIFKey = (key: string) => {
    IFKey = key as string;
}

export {
    IFKey,
    setIFKey,
    sessions
}