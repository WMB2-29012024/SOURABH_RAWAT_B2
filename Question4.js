// Branch Name: B2_W4_D3

//  Question 4: Write a for-loop to log every alternate element, starting from 0th index.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function hero (str) {
    for(let i = 0; i < str.length; i +=2){
        console.log(str[i]);
    }
}

hero(numArr);