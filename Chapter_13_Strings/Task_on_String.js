// String reverse and check whtether it is palin drome or not.

function PallindromeorNot(str) {

    let rev = "";
    str = str.toLowerCase();
    let l = str.length;

    for (let j = l - 1; j >= 0; j--) {
        rev = rev + str.charAt(j);
    }
    if (str === rev)
        console.log("given string is palindrome")
    else
        console.log("given string not palindrome");


}

PallindromeorNot("Madam");

//Annagrams or not An anagram is a word or phrase formed by 
//rearranging the letters of another word, using all the original letters exactly once (e.g., "listen" and "silent").

function areAnagrams(s1, s2) {

    if (s1.length !== s2.length) return false;

    // Sort both strings
    s1 = s1.toLowerCase();
    s1 = s1.split('').sort().join('');
    s2 = s2.toLowerCase();
    s2 = s2.split('').sort().join('');

    // Compare sorted strings
    return s1 === s2;
}

// Driver Code
const s1 = "Saw";
const s2 = "Was";
if (areAnagrams(s1, s2)) {
    console.log("true");
}
else {
    console.log("false");
}