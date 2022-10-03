
var Gabrielle = {
  firstName: 'Gabrielle',
  lastName: 'Ramos',
  hobby: 'baking'
};

var fullName = Gabrielle.firstName + '' + Gabrielle.lastName;

console.log("The person's name is:", fullName + '.');
Gabrielle.job = 'student';
console.log("The person's job is:" + Gabrielle.job + '.');

Gabrielle.previousJob = 'sales';
console.log("The person's previous job is: " + Gabrielle.previousJob + '.');
console.log('The complete person object: ', Gabrielle);
