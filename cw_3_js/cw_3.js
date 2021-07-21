// - створити функцію яка приймає масив та виводить його
/*let array = [34,45,'citroen',true,33,'fiat','opel']
function arrayElements(){
console.log(array)
}
arrayElements()*/

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*function minNumber(a,b,c) {
    if (a<b && a<c )
        console.log(a)
    else if(c<b && c<a )
        console.log(c)
    else if (b<a && b<c)
        console.log(b)
}
minNumber(7,4,1)*/


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*function maxNumber(a,b,c) {
    if (a>b && a>c )
        console.log(a)
    else if(c>b && c>a )
        console.log(c)
    else if (b>a && b>c)
        console.log(b)
}
minNumber(454,56,1)*/

// - створити функцію яка повертає найбільше число з масиву
/*let array = maxNumber([32,4,45,654,6575,23,42,21,43])
function maxNumber(arr) {
let max = arr [0]
    for (const maxElement of arr) {
        if(maxElement>max) max=maxElement
    }
    return max
    console.log(array)
}
console.log(array)*/

// - створити функцію яка повертає найменьше число з масиву

/*let array = minNumber([32,4,45,654,-6575,23,1,42,21,43])
function minNumber(arr) {
let min = arr [0]
    for (const minElement of arr) {
        if(minElement<min) min=minElement
    }
    return min
    console.log(array)
}
console.log(array)*/


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let array = sumMas([32,4,45,54,75,23,1,42,21,43])
function sumMas(arr) {
    let sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}
console.log(array)*/



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*let array = sumMas([32,4,45,54,75,23,1,42,21,43])
function sumMas(arr) {
    let sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]/arr.length
    }
    return sum

}
console.log(array)*/


/*- створити функцію яка заповнює масив рандомними числами
 (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
 Для виведення використати попередню функцію.*/

/*function arrElement(x) {
    let emptyArr=[]
    for (i = 0; i < x; i++) {
        emptyArr[i]=Math.round(Math.random()*1000)
    }
    function fan(x) {
        console.log(x);
    };
    fan(emptyArr)
}
arrElement(10)*/



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

/*let array = [{name: 'Dima', age: 13, status:true}, {model: 'Camry', color:'red'}]
function newArray(x) {
    let key=[]
    for (a of x) {
        for (i in a) {
            key.push(i)
        }
    }
    console.log(key);
}
newArray(array)*/
    


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let array = [{name: 'Dima', age: 13, status:true}, {model: 'Camry', color:'red'}]
function newArray(x) {
    let key=[]
    for (a of x) {
        for (i in a) {
            key.push(a[i])
        }
    }
    console.log(key);
}
newArray(array)