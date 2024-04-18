let userAge = 36;
let userInfo = "Фрилансер ${userAge}";// не спрацює, бо стоять ", а не `
console.log(userInfo);

let userHeight = 145 / 0;
console.log(userHeight);// поверне infinity, а не Nan

let userName;
console.log(typeof userName)//поверне undefined, а не Nan

let userSize = "45" / "8";
console.log(typeof userSize);//поверне number