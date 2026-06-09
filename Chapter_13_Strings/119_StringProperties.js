console.log(typeof ("200"));//string
let str = "Hello, World!";
console.log(str.length);//length will always start from 1

//Access by index. index will start from Zero 0

console.log(str[0]); //H
console.log(str[7]);//W
console.log(str[-1]);// undefined
console.log(str.at(-1));// !  reverse from ending to starting i.e.right to left
console.log(str.at(-6));//W

//index =0; length =1

console.log(str.charAt(0));//H
console.log(str.charCodeAt(0));//72