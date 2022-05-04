const FIRST_NUMBER = +prompt('Пожалуйста введите первое число!');
isValid(FIRST_NUMBER);
const SECOND_NUMBER = +prompt('Пожалуйста введите второе число!');
isValid(SECOND_NUMBER);

function isValid(number) {
  if (isNaN(number)) {
    throw new Error('Некорректный ввод');
  }
}

console.log(
  `Ответ: ${FIRST_NUMBER + SECOND_NUMBER}, ${FIRST_NUMBER / SECOND_NUMBER}`
);
