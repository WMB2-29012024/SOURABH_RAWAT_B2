// Branch Name: B2_W4_D3

//  Question 13: Write a for-loop:
// - Start from 0th index, log every element,
// - then go to next index, log all next elements,
// - continue till last element

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function hero(str){
    for(let idx=0; idx<str.length; idx++){
        for(let i=idx; i<str.length; i++){
            console.log(str[i]);
        }
    }
}

hero(numArr);