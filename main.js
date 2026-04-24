function isPalindrome(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false; 
        }
        i++;
        j--;
    }

    return true; 
}

var arr = [1, 2, 1];
console.log(isPalindrome(arr)); 