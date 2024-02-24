// Branch Name: B2_W4_D3

//  Question 3: Write a for-loop to reverse a string.

const strArr = "asdasdzxczxc";

function reverseStr(str) {
    newArr = '';
    for(let i=str.length-1; i >= 0; i--){
        newArr += (str[i]);
    }
    console.log(newArr);
}

reverseStr(strArr);