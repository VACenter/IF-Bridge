//Dependencies

import request from 'request';
import { parseErrorCode } from './liveParser';
import sessions from './sessions/main';
import flights from './flights/main';
import users from './users/main';
import * as types from './types';

let IFKey:string|null = null;

const setIFKey = (key: string) => {
    IFKey = key as string;
}

export {
    IFKey,
    setIFKey,
    sessions,
    flights,
    users,
    types
}