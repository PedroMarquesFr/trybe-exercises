let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (array[i] > array[j]) {
//             let position = array[i];
                                            
//             array[i] = array[j];  algoritmo de ordenação Bubble Sort
//             array[j] = position;
//         }
//     }
// }

// console.log(array);

var newarray = [];

for (let i = 1; i < array.length; i+=1) {
    newarray.push(array[i] * array[i-1]);
    if(i+1 === array.length){
        newarray.push(array[i]*2);
    }
}

console.log(newarray);