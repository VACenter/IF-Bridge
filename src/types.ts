export type ifResponse = {
    errorCode: number,
    result: any[]|Object
}

export type session = {
    maxUsers: number,
    id: string,
    name: string,
    userCount: number,
    type: number
}

export type flight = {
    username: string,
    callsign: string,
    latitude: number,
    longitude: number,
    altitude: number,
    speed: number,
    verticalSpeed: number,
    track: number,
    lastReport: string,
    flightId: string,
    userId: string,
    aircraftId: string,
    liveryId: string,
    heading: number,
    virtualOrganization: string
}

export type routePosition = {
    latitude: number,
    longitude: number,
    altitude: number,
    track: number,
    groundSpeed: number,
    date: string
}

export type flightPlanItem = {
    name: string,
    type: number,
    children: flightPlanItem[]|null,
    identifier: 'KCHS',
    altitude: number,
    location: {
        latitude: number,
        longitude: number
        altitude: number
    }
}

export type flightPlan = {
    flightPlanId: string,
    waypoints: string[],
    flightPlanType: number,
    flightId: string,
    flightPlanItems: flightPlanItem[]
}

export type ifbridgeResponse = {
    path: string,
    result: any[]|Object,
}
