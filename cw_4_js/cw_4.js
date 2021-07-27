// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id=id
        this.name=name
        this.surname=surname
        this.email=email
        this.phone=phone
        this.order = order
    }
}
let emptyArray=[]
let client1 =new Client(1,'Oksana','Super','oksana_super@gmail.com','0930230232',['bread','meet','apple','orange','juce'])
const client2 =new Client(2,'Ivan','Super','ivan_super@gmail.com','079868832',['bread','meet','apple','orange', 'milk'])
const client3 =new Client(3,'Oksana','Port','xbbcvb@gmail.com','0930230232',['bread','meet','apple','orange'])
const client4 =new Client(4,'dgfg','Ersfkrr','werw@gmail.com','0930230232',['bread','meet','apple','orange'])
const client5 =new Client(5,'Ffrkf','Adfsf','fserefes@gmail.com','0930230232',['bread','meet','orange'])
const client6 =new Client(6,'Gtywfgujdfhjd','Nmsd','iojhg@gmail.com','0930230232',['bread','meet','apple','orange'])
const client7 =new Client(7,'Bnvcn','Pefex','nvxf@gmail.com','0930230232',['bread','meet','apple','orange'])
const client8 =new Client(8,'Zsfe','Vcddf','verq@gmail.com','0930440232',['bread','meet','apple','orange'])
const client9 =new Client(9,'Pdvds','Aqerewr','brfde@gmail.com','0930230345',['bread','meet','apple','orange'])
const client10 =new Client(10,'Eetrt','Shjdg','qafsa @gmail.com','093975232',['bread','meet','apple','bananas','dsafasdf','daffda','orange'])
emptyArray.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
console.log(emptyArray)
let newOrder = emptyArray.sort(function (a,b){
    return b.name.length-a.name.length

})
console.log(newOrder)





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку