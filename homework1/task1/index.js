const FIRST_NUMBER = +prompt('Пожалуйста введите первое число!');
const SECOND_NUMBER = +prompt('Пожалуйста введите второе число!');

if (isNaN(FIRST_NUMBER) || isNaN(SECOND_NUMBER)) {
  throw new Error('Некорректный ввод');
}

console.log(FIRST_NUMBER.toString(SECOND_NUMBER));
