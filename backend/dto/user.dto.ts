export interface UserInput { 
    username: string, 
    email: string,
    password: string,
    drinks: [any],
    orderCreated: boolean,
}

export interface UserPayload { 
    email: string,
}