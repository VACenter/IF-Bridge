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

export type frequency = {
    frequencyId: string,
    userId: string,
    username: string,
    virtualOrganization: string|null,
    airportName: string,
    type: number,
    latitude: number,
    longitude: number,
    startTime: string,
}

export type userStats = {
    onlineFlights: number,
    violations: number,
    xp: number,
    landingCount: number,
    flightTime: number,
    atcOperations: number,
    atcRank: number,
    grade: number,
    hash: string,
    violationCountByLevel: {
        level1: number,
        level2: number,
        level3: number,
    },
    roles: number[],
    userId: string,
    virtualOrganization: string|null,
    discourseName: string,
    groups: string[],
    errorCode: number,
}

export type userGrade = {
    totalXP: number,
    total12MonthsViolations: number,
    gradeDetails: {
        grades: any[],
        gradeIndex: number,
        ruleDefinitions: any[],
    },
    atcOperations: number,
    atcRank: number,
    lastLevel1ViolationDate: string,
    lastLevel2ViolationDate: string,
    lastLevel3ViolationDate: string,
    violationCountByLevel: {
        level1: number,
        level2: number,
        level3: number,
    },
    roles: number[],
    userId: string,
    virtualOrganization: string|null,
    discourseName: string,
    groups: string[],
    errorCode: number,
}

export type atcFacilities = {
    frequencyId: string,
    userId: string,
    username: string,
    virtualOrganization: string|null,
    airportName: string,
    type: number,
    latitude: number,
    longitude: number,
    startTime: string,
}

export type airportStatus = {
    airportIcao: string,
    inboundFlightsCount: number,
    inboundFlights: flight['flightId'][],
    outboundFlightsCount: number,
    outboundFlights: flight['flightId'][],
    atcFacilities: atcFacilities
}

export type ifbridgeResponse = {
    path: string,
    result: any[]|Object,
}
