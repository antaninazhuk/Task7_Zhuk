// Task 1

// let food = [
//     { name: " ORANGE", price: 500, isFruit: true },
//     { name: "burger", price: 100, isFruit: false },
//     { name: "watermelon", price: 210, isFruit: false },
//     { name: "toast", price: 350, isFruit: false },
//     { name: "apple ", price: 140, isFruit: true },
//     { name: " bAn ana", price: 380, isFruit: true }
// ]

// forEach

// function getNewArr(arr) {
//     newArr = [];
//     arr.forEach(item => {
//         if (item.price > 200) {
//             newArr.push(item.name.toLowerCase().trim().replace(' ', ''))
//         }
//     });

//     return newArr;
// }

// result = getNewArr(food);
// console.log(result);

// filter + map

// function getNewArr(arr) {

//     return arr.filter(item => item.price > 200).map(item => item.name.toLowerCase().trim().replace(' ', ''));
// }

// result = getNewArr(food);
// console.log(result);

// reduce

// function getNewArr(arr) {
//     return arr.reduce((acc, item) => {
//         if (item.price > 200) {
//             acc.push(item.name.toLowerCase().trim().replace(' ', ''));
//         }
//         return acc;
//     }, [])
// }

// result = getNewArr(food);
// console.log(result);

// Task 2

// let salary = [1000, 500, 1200, 230];

// function getNewArr(arr) {
//     newArr = arr.slice();
//     newArr.sort((a, b) => a - b);
//     newArr.reverse();
//     console.log(`Это массив? ${Array.isArray(newArr)}`);

//     return newArr;

// }

// result = getNewArr(salary);
// console.log(result);

// Task 3

// let serials = ["How i met your mom", "Friends", "Big bang theory"];

// console.log(serials.join(' '));

// Task 4

// let food = [
//     { name: " ORANGE", price: 500, isFruit: true },
//     { name: "burger", price: 100, isFruit: false },
//     { name: "watermelon", price: 210, isFruit: false },
//     { name: "toast", price: 350, isFruit: false },
//     { name: "apple ", price: 140, isFruit: true },
//     { name: " bAn ana", price: 380, isFruit: true }
// ];

// reduce


// function getSumProducts(arr) {
//     return arr.reduce((acc, item) => acc += item.price, 0);
// }

// sum = getSumProducts(food);
// console.log(sum);


// forEach

// function getSumProducts(arr) {
//     sum = 0;
//     arr.forEach(item => sum += item.price);
//     return sum;
// }

// result = getSumProducts(food);
// console.log(result);