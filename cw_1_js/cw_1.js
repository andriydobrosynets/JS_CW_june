/*1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.*/

let str = 'Привіт'
console.log(typeof str)
let num = 123
console.log(typeof num)
let flag = true
console.log(typeof flag)
let txt = 'true'
console.log (typeof txt)

/*2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
    34,
        12,
        66,
        90,
        87
Старайтесь використовувати різні оператори.
    Example: 88 = (16 / 2) * 11*/

let a1 = (12*2+10)
console.log(a1)
let a2 = (2*2*3)
console.log(a2)
let a3 = (20*4-14)
console.log(a3)
let a4 = (200/2-10)
console.log(a4)
let a5 = (60+9*3)
console.log(a5)

/*3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3,
    75 + 'кг'*/

let a6 = 5%3
console.log(a6)
let a7 = 3 % 5
console.log(a7)
let a8 = 5 + '3'
console.log(a8)
let a9 = '5' - 3
console.log(a9)
let a10 =75 + 'кг'
console.log(a10)

/*4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).Значееня площі зберігати в змінній s.*/

let height =23
let width = 10
let s = height*width
console.log(s)

/*5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),результат поместите в переменную v.*/

let heightC=10
let dC=4
let radius = dC/2
let pow = Math.pow (radius, 2)
let pi = 3.14157
let v=pi*pow*heightC
console.log(v)

/*6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).*/


let n = 3
let m = 4
let k=Math.sqrt(Math.pow(n,2)+Math.pow(m,2))
console.log(k)




/*8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).*/

alert(` ${'Dobrosynets Andriy'}\n ${25}\n ${'Footbal'}`)



/*9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
    Вывести в документ содержимое переменной concatenation спомощью document.write*/

let str1 = 'Хто'
let str2 = 'ти'
let str3 = 'такий?'
let concatenation = `${str1} ${str2} ${str3}`
document.write(`<h1/> ${concatenation}<br/>`)


/*10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?*/

let str = "20";
let a = 5;
document.write(str + a + "<br/>");//205
document.write(str - a + "<br/>");//15
document.write(str * "2" + "<br/>");//40
document.write(str / 2 + "<br/>");//10



/*13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert*/

let numberOne = +prompt('NumberOne')
let numberTwo = +prompt('NumberTwo')
alert(numberOne+numberTwo)

/*14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert*/

let firstName= prompt('Name')
let secondName = prompt('Second Name')
let age = prompt('Age')
alert(`Доброго вечора ${firstName} ${secondName}, мої вітання що вам ${age}`)

/*=====================
======ДОП============
=====================*/




/*1. Три різних числа вводяться через prompt().
    За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)*/

let a = +prompt('А');
let b = +prompt('B');
let c = +prompt('C');
console.log ('A='+a,'B='+b,'C='+c)
if (a<b && b<c && a<c)
{
    console.log(`${a}\n${b}\n${c}`)
}
else if (a<b && a<c && c<b)
    {
        console.log(`${a}\n${c}\n${b}`)
    }
else if (b<c && c<a && b<a)
    {
        console.log(`${b}\n${c}\n${a}`)
    }
else if (b<a && a<c && b<c)
{
    console.log(`${b}\n${a}\n${c}`)
}
else if (c<a && a<b && c<b)
{
    console.log(`${c}\n${a}\n${b}`)
}
else if (c<b && c<a && b<a)
{
    console.log(`${c}\n${b}\n${a}`)
}

/*2.
Все параматры получаем с клавиатуры!!!!
    Имитируем поведение пешехода на перекстке.
    Если светофор зеленый - вывести "иди".
    Если светофор желтый - вывести "подожди".
    Если светофор красный - вывести "стой".
    Если светофор в аварийном режиме вывести "делай что хочешь"!*/

let svitlofor = prompt('Колір світлофора');
switch (svitlofor)
{   case 'Зелений':
    console.log('Йди')
    alert('Йди')
        break
}
switch(svitlofor)
{   case 'Жовтий':
    console.log('Чекай')
    alert('Чекай')
        break
}
switch(svitlofor)
{   case 'Червоний':
    console.log('Стій')
    alert('Стій')
        break
}
switch(svitlofor )
{   case 'Аварія':
    console.log('Роби що хочеш')
    alert('Роби що хочеш')
        break
}

/*2й СПОСІБ*/
let svitlofor = prompt('Колір світлофора');
if(svitlofor ==  'Зелений')
{
    console.log('Йди')
    alert('Йди')
}
if(svitlofor ==  'Жовтий')
{
    console.log('Чекай')
    alert('Чекай')
}
if(svitlofor ==  'Червоний')
{
    console.log('Стій')
    alert('Стій')

}
if(svitlofor ==  'Аварія')
{
    console.log('Роби що хочеш')
    alert('Роби що хочеш')
}   else
{
    console.log('Україньскою мовою з великиї літери')
    alert('Україньскою мовою з великиї літери')
}

/*
3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
    Улучшаем предыдущее задание.
    Если светофор зеленый и машин нет - вывести "иди".
    Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
    Если светофор желтый и машин нет - вывести "все рано жди".
    Если светофор красный и машин нет- вывести "стой все рано".
    Если светофор красный - и машины есть вывести "стой и жди".
    Если светофор в аварийном режиме вывести "делай что хочешь"!
*/

let color = prompt('Колір світлофора')
let isRoadClear = confirm('Машини на дорозі')

switch(color){
    case 'Зелений':
        isRoadClear ?
            console.log('Почекай поки порушники проїдуть'): console.log('йди')
        break;

    case 'Жовтий':
        isRoadClear ?
            console.log('Чекай'): console.log('Все одно чекай')
        break;

    case 'Червоний':
        isRoadClear ?
            console.log('Все одно чекай'): console.log('Стій і чекай')
        break;


    case ('Аварія'):
        console.log('Роби що хочеш')
        break;
    default:
        console.log('Зроби правильний ввід')
}

