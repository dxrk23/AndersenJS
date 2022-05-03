let first_number = +prompt('Пожалуйста введите первое число!');
let second_number = +prompt('Пожалуйста введите второе число!');

if (isNaN(first_number) || isNaN(second_number)) {
  throw new Error('Некорректный ввод');
}

console.log(first_number.toString(second_number));
