//example of dependency injection in JS. Passing an object through a function
var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson(person)
{
  console.log(person);
}

var john = new Person('John', 'Doe');
logPerson(john);
