//if we use export before the variable and function we can use in other files

export let BASE_URL = "https://api.staging.com";

export function formatTestName(name) {
    return "TC_" + name.toUpperCase();
}