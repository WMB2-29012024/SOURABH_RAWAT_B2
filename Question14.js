// Branch Name: B2_W4_D3

//  Question 14: There are 2 different arrays, write a for-loop, that should log elements at the same index in both the arrays. The loop should run till the longer array's length.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9, 10, 11, 12]    

function hero(arr, arr1){
    const maxInd = Math.max(arr.length, arr1.length);
    for(let i = 0; i < maxInd; i++){
       if(i < arr.length|| i < arr1.length){
        return arr, arr1;
       }
       console.log(arr)
    }
}

hero(numArr1, numArr2);