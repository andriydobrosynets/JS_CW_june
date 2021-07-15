// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numberArray = [5,6,3,4,-98]
// console.log(numberArray)
// let stringArray = ['html','css','js','react','node.js']
// console.log(stringArray)
// let stringNumberBooleanArray = [4,'react',-434343,true,'false']
// console.log(stringNumberBooleanArray)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray = []
// emptyArray[0]=45
// emptyArray[1]='defdefe'
// emptyArray[5]=true
// console.log(emptyArray)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let text = ['Довільний текст','2','html','css','js','react','node.js',"efe",'dsf','efd']
// for (let i = 0; i < 10; i++) {
//     const textArray = text[i];
//     document.write(`<div>${textArray}</div>`)
// }
// //ТАКИЙ ВАРІАНТ ШЕ
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>ДОВІЛЬНИЙ ТЕКСТ </div>`)
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let text = ['Довільний текст','2','html','css','js','react','node.js',"efe",'dsf','efd']
// for (let i = 0; i < 10; i++) {
//     const textArray = text[i];
//     document.write(`<div>${textArray} - ${i}</div>`)
// }
// //ТАКИЙ ВАРІАНТ ШЕ
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>ДОВІЛЬНИЙ ТЕКСТ - ${i} </div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0
// while (i<20) {
//     document.write(`<h1>Довільний текст</h1>`)
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0
// while (i<20) {
//     document.write(`<h1>Довільний текст - ${i}</h1>`)
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array =[4,5,7,8,0,4,1,23,44,67]
// for (let i = 0; i < 10; i++) {
//     console.log(array[i]);
//
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let stringArray =['okten','js','react','html','css','node','java','c++','web','stars',]
// for (let i = 0; i < 10; i++) {
//     console.log(stringArray[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let stringNumberBooleanArray =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',]
// for (let i = 0; i < 10; i++) {
//     console.log(stringNumberBooleanArray[i])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let Array =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',]
// for (let i = 0; i < 10; i++) {
//     if(typeof Array[i] === 'boolean'){
//     console.log(Array[i])
// }}
//2Й СПОСІБ
// let Array =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',]
// for (const arrayElement of Array) {
//     if(typeof arrayElement === 'boolean'){
//         console.log(arrayElement)
//     }}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let Array =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',]
// for (const arrayElement of Array) {
//     if(typeof arrayElement === 'number'){
//         console.log(arrayElement)
//     }}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let Array =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',]
// for (const arrayElement of Array) {
//     if(typeof arrayElement === 'string'){
//         console.log(arrayElement)
//     }}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let emptyArray =[]
// emptyArray[0] = true;
// emptyArray[1] = 'Kamilla';
// emptyArray[2] = 'Anton';
// emptyArray[3] = 234;
// emptyArray[4] = false;
// emptyArray[5] = "A1234";
// emptyArray[6] = 23.5;
// emptyArray[7] = 'Ihor';
// emptyArray[8] = 'Rosa';
// emptyArray[9] = false;
// for (const emptyArrayElement of emptyArray) {
//     console.log(emptyArrayElement)
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let j = 0; j < 10; j++) {
//     const emptyArrayElement = j;
//     console.log(emptyArrayElement)
//     document.write(emptyArrayElement)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let j = 0; j < 100; j++) {
//     console.log(j)
//     document.write(j)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let j = 0; j < 100; j+=2) {
//     console.log(j)
//     document.write(j)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let x = 0; x < 100; x++) {
//     if(x % 2 == 0){
//     console.log(x)
//     document.write(x)
// }}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// for (let x = 0; x < 100; x++) {
//     if(x % 2 == 1){
//         console.log(x)
//         document.write(x)
//     }}


// - Дано 2 масиви з рівною кількістю об'єктів.// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         }]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 2, country: 'USA', city: 'Portland'},
    {user_id: 4, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 1, country: 'Poland', city: 'Krakow'},
    {user_id: 3, country: 'USA', city: 'Miami'}
];

let newArray = []
for (const user of usersWithId) {
    for (const citys of citiesWithId) {
        if (user.id === citys.user_id) {
            user.address = citys
        }
    }
    newArray.push(user)
}
console.log(newArray)


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c']
// for (let i = 0; i < 3; i++) {
//     array.push(i)
//
//     }
// console.log(array)


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1,2,3];
//
// let newArr = [];
// for (let i = 2; i >=0; i--) {
//     newArr.push(arr[i])
// }
// console.log(newArr);


//  - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr  = ['a','b','c']
for (let i = 1; i <= 3; i++){
    arr.push(i);
};
console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr = [1,2,3];
arr.push(4,5,6)
console.log(arr)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arr = [1,2,3];
arr.unshift(4,5,6)
console.log(arr)


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let arr = [1,2,3,4,5];
let arr2 = arr.slice(3, 5);
console.log(arr2);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

let arr = [1,2,3,4,5];
let arr2 = arr.slice(0, 2);
console.log(arr2);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

let arr = [1,2,3,4,5];
let arr2 = arr.slice(0, 3);
arr2.push('a','b','c')
console.log(arr2);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//   Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
let arr = [1,2,3,4,5];
arr.splice(3,0,'a','b','c');
console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']


let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a','b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr = [2,45,-22,98,-76,1,97,3,4,99];
for (let i = 0; i < arr.length; i++){
    if (arr[i]%2 === 0){
        console.log(arr[i]);
    }
};
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let array =[4,5,7,8,0,4,1,23,44,67]
let emptyArray = []
for (const empty of array) {
    emptyArray.push(empty)
}
console.log(emptyArray)



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let array =[4,5,7,8,0,4,1,23,44,67];
let emptyArray = [];
                                     //1Й СПОСІБ
for (let i = 0; i < array.length; i++) {

     emptyArray[i] = array[i]
}
console.log(emptyArray);
                                      //2Й СПОСІБ
for (const emptyArrayElement of array) {
    emptyArray = array
}
console.log(emptyArray);