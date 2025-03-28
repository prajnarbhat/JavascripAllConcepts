// race praarp  check pallindroem

let str = "race";

let n = str.length;

function pallindrome(str,n){
    for(let i = 0; i < n/2; i++){
        if(str[i] == str[n-1]){
            return true;
        }
    }
    return false;
}

console.log(pallindrome(str,n))