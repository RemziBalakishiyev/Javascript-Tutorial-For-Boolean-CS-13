//Abstraction
// Encapsulation
// Inheritance
// Polymorhism
"use strict";
const Student = function (firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;
  //   this.calcAge = function () {
  //     return 2023 - this.birthDate;
  //   };
};

Student.prototype.calcAge = function () {
  return 2023 - this.birthDate;
};
const bruce = new Student("Bruce", "Wayne", 2000);
const walter = new Student("Walter", "White", 2004);
console.dir(bruce);

console.log(walter instanceof Student);
console.log(walter.calcAge());
console.log(walter.__proto__.__proto__.__proto__);
// console.dir(.__proto__);

// console.dir();
Array.prototype.unique = function () {
  return [...new Set(this)];
};

const x = [1, 2, 2, 2, 2, 4, 5].unique();
console.log(x);

//1 . new boş bir obyekt yaradır { }
//2.  this keyword həmin obyketə bərabər olur this={}
//3 . {} protottype baglanilir
//4 . hemin obyekti return edir

class Employee {
  constructor(id, name, salary) {
    this.name = name;
    this.salary = salary;
  }

  get calcInYearSalary() {
    return this.salary * 12;
  }
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.log("Name is not fullname");
    }
    return this._fullName;
  }

  set id(enteredId) {
    if (enteredId > 0) {
      this._id = enteredId;
    }
  }
}

const john = new Employee(-13, "John Wick", 2000);
john.id = -24;
console.log(john._id);

const userProto = {
  fullName() {
    return this.name + " " + this.surname;
  },

  init(name, surname) {
    this.name = name;
    this.surname = surname;
  },
};
console.log(Object.create(userProto));
const cersei = Object.create(userProto);
cersei.init("Cersei", "Lannister");
console.log(cersei.fullName());

const SuperUser = function (roleName, userName) {
  this.roleName = roleName;
  this.userName = userName;
};

SuperUser.prototype.ShowNameAndRole = function () {
  console.log(`${this.roleName} - ${this.userName}`);
};

const Admin = function (roleName, userName, department) {
  SuperUser.call(this, roleName, userName);
  this.department = department;
};

const HrUser = function (roleName, userName, salary) {
  SuperUser.call(roleName, userName);
  this.salary = salary;
};

Admin.prototype = Object.create(SuperUser.prototype);
// Admin.prototype = SuperUser.prototype;

const jamie = new Admin("Admin", "Jamie Lannister", "Lion Tim");
jamie.ShowNameAndRole();

