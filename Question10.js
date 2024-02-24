// Branch Name: B2_W4_D3

//   Question 10: Write a for-loop, and log the current, its immediate previous, and its immediate next element,
// Put the elements in a new object, and push that object in an array.
// Return that array at the end of the loop

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function hero(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        const currentEl = str[i];
        const prevEl = str[i-1];
        const immedEl = str[i+1];

        const elementObj = {
            current: currentEl,
            previous: prevEl,
            next: immedEl,
        };

        arr.push(elementObj);
        console.log(currentEl, prevEl, immedEl)
    }
    return arr;
}

const arr = hero(numArr);
console.log(arr);