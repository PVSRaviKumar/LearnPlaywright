interface APIReponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responTime?: number
}

// readOnly
// Readonly - can't modify the readonly once assigned we can't change after wards

// ? - optional

let response: APIReponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

//response.statusCode = 404;//Cannot assign to 'statusCode' because it is a read-only property.
response.body = "dasdadas";