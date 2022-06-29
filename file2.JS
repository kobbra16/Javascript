// Откройте в VSCode task2.json файл.Скопируйте из него JSONky, вставьтев свой код присвоив в переменную.


// Дан массив обьектов.Каждый объект является идентификационной карточкой человека.Нам нужно хранить только
// уникальные значения в этом массиве.Реализуйте функцию, которая будет выполнять эту работу.
// console.log(arr);


// let arr = [...new Set(arr)];
// let arr = Array.from(new Set(arr));
// console.log(a1);

// let a2 = arr.filter((item, index) => {
// return arr.indexOf(item) === index;
// })
// console.log(a2);

//let a3 = arr.reduce((result, item) => {
//return result.includes(item) ? result : [...reult, item];
//}, []);

//console.log(a3);

// function uniq(arr) {
// varresult = [];

// for (var i = 0; i < arr.length; i++) {
// if (!inArray(result, arr[1])) {
// result.push(arr[i])
// }

// }
// return result;
// }

// function inArray(arr, elem) {
// for (var i = 0; i < arr.length; i++) {
// if (arr[i] === elem) {
// return true;
// }
// }
// return false;
// }
// consjle.log(uniq(["Leanne Graham", "Clementine Bauch", "Ervin Howell", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Clementina DuBuque", "Nicholas Runolfsdottir V", ]));
const fs = require('fs')
let jsonData = fs.readFileSync('task2.json')
let idCards = JSON.parse(jsonData)
const uniqueCards = () => {
    const unique = []
    const map = new Map()
    for (const uniqueData of idCards) {
        if (!map.has(uniqueData.name)) {
            map.set(uniqueData.name)
            unique.push({
                ...uniqueData
            })
        }
    }
    console.log(unique)
}
uniqueCards()