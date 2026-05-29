let arr = [1, 2, 3];
arr.push(4, 5, 6);

console.log(arr);
/*
arr = 1, 2, 3 ,4, 5, 6
index = 0,1,2,3,4,5*/

//splice[start, deletecount,...ItemsToADD;
//spilce returns an array which contains the elements deleted.

console.log("org arr" + arr);
//let delete_arr = arr.splice(2, 2);
// console.log("delete arra after using splice" + delete_arr);

//splice method if we specify deletecount as zero means
//no element is deleted,
//3rd par if we specify inserts an element at the specified location index

//let delete_elem = arr.splice(2, 0, 99);
// in the above case don't deleted any element but insert an element at the specified index.
//in the above case as no elements are deleted since we specified 0 the 
//deleted array will be blank.
//console.log(arr);

//console.log(delete_elem);// []

//in java we have insert() and add () fn to add the elements.

//arr.splice(2, 1, 99);//here at second index delete 1 eleemnt and insert a new vale
//replace

arr.splice(1, 2, 10, 20);// 1,10,20,4,5,6
//in the above "2" elements to be deleted and new elements will be inserted
//from "1" index onwards
console.log(arr);
