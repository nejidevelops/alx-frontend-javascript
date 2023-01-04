"use strict";
exports.__esModule = true;
exports.StudentClass = void 0;
// Creating a teacher and a director
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
// returns the first letter of the firstName and the full lastName
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
// Task 4 Writing a class
exports.StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () { return 'Currently working'; };
    StudentClass.prototype.displayName = function () { return this.firstName; };
    return StudentClass;
}());
