
// if we specify default for a praticular function , they can have one default per js file

export default function log(message) {
    console.log("[LOG] - default " + message);
}

export function log2(message) {
    console.log("[LOGS] " + message);
}