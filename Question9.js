// Branch Name: B2_W4_D3

//  Question 9: Write a for-loop, and log the current and its immediate previous element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function hero(str){
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
        console.log(str[i-1]);
    }
}

hero(numArr);