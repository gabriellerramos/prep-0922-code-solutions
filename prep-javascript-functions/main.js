function addTwoNumbers(num1, num2) {
  var result = (num1 + num2);
  return result;
}
var sumTwoNumbers = addTwoNumbers(2, 2);
console.log('sumTwoNumbers:', sumTwoNumbers);

function convertHoursToMinutes(hours) {
  var result = (hours) * 60;
  return result;
}
var HoursToMinutes = convertHoursToMinutes(2);
console.log('HourstoMinutes:', HoursToMinutes);

function getGreeting(name) {
  var result = ('hello world');
  return result;
}
var greeting = getGreeting('Hello World');
console.log('greetings:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}
var productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('productDividedByFive:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}
var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCircleCircumference(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}
var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
var fullName = getFullName('Gabrielle', 'Ramos');
console.log('fullName:', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}
var getCube = cube(5);
console.log('cube:', getCube);
