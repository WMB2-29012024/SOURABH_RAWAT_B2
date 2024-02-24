// Branch Name: B2_W4_D3

//  Question 1: Write a for loop and log each element, starting from 0th index.

const numArr = [1, 234_45, 89,75, 4e9]
const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"]
const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true]

function Hello(str) {
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}

Hello(numArr);
Hello(strArr);
Hello(mixArr);