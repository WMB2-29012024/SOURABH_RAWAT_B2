// Branch Name: B2_W4_D3

//  Question 12: Write a for-loop to log every element, starting from middle of the array

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function hero(str) {
    const center = Math.floor(str.length/2);
    for (let i = center; i < str.length; i++){
        console.log(str[i]);
    }
}

hero(numArr);