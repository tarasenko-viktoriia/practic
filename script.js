console.log("35" + - "22");//не 13, а 35-22
console.log('35' * "22");//770
console.log("558" > 22++);//не true, а помилка

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);// не 1, а 0

console.log(!false && 11 || 18 && !"");// 11, а не 18

let name = 0;
console.log(name ?? "Без даних");//0