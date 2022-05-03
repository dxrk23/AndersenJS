let first_number = +prompt('Пожалуйста введите первое число!');
isValid(first_number);
let second_number = +prompt('Пожалуйста введите второе число!');
isValid(second_number);

function isValid(number) {
  if (isNaN(number)) {
    throw new Error('Некорректный ввод');
  }
}

console.log(
  `Ответ: ${first_number + second_number}, ${first_number / second_number}`
);
