interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;

}

//? is the optional value when we used in the interface.


let response1: APIResponse = {
    body: 'Hi',
};

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};