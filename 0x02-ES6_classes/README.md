0x02. ES6 classes
=================

 This repo is included in Specializations - Web Stack programming ― Back-end Course of Holberton School. We will cover the `classes in JS.`

![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/4VooQNTVO56N29V5Thn8bw "explain to anyone"), **without the help of Google**:

*   How to define a Class
*   How to add methods to a class
*   Why and how to add a static method to a class
*   How to extend a class from another
*   Metaprogramming and symbols

Resources
---------

**Read or watch**:

*   [Classes](https://intranet.hbtn.io/rltoken/uG2JX6kLxDa-51RPA2WGFA "Classes")
*   [Metaprogramming](https://intranet.hbtn.io/rltoken/abF17Z3CueKFyVDHoRyqig "Metaprogramming")

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    

### Install Jest, Babel, and ESLint

in your project directory:

*   Install Jest using: `npm install --save-dev jest`
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
*   Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`

```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

Tasks
-----

### 0\. You used to attend a place like this at some point

Implement a class named `ClassRoom`:

*   Prototype: `export default class ClassRoom`
*   It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

    bob@dylan:~$ cat 0-main.js
    import ClassRoom from "./0-classroom.js";
    
    const room = new ClassRoom(10);
    console.log(room._maxStudentsSize)
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 0-main.js 
    10
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [0-classroom.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/0-classroom.js)

### 1\. Let's make some classrooms

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

    bob@dylan:~$ cat 1-main.js
    import initializeRooms from './1-make_classrooms.js';
    
    console.log(initializeRooms());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 1-main.js 
    [
      ClassRoom { _maxStudentsSize: 19 },
      ClassRoom { _maxStudentsSize: 20 },
      ClassRoom { _maxStudentsSize: 34 }
    ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [1-make_classrooms.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/1-make_classrooms.js)

### 2\. A Course, Getters, and Setters

Implement a class named `HolbertonCourse`:

*   Constructor attributes:
    *   `name` (String)
    *   `length` (Number)
    *   `students` (array of Strings)
*   Make sure to verify the type of attributes during object creation
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   Implement a getter and setter for each attribute.

    bob@dylan:~$ cat 2-main.js
    import HolbertonCourse from "./2-hbtn_course.js";
    
    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
    console.log(c1.name);
    c1.name = "Python 101";
    console.log(c1);
    
    try {
        c1.name = 12;
    } 
    catch(err) {
        console.log(err);
    }
    
    try {
        const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
    }
    catch(err) {
        console.log(err);
    }
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 2-main.js 
    ES6
    HolbertonCourse {
      _name: 'Python 101',
      _length: 1,
      _students: [ 'Bob', 'Jane' ]
    }
    TypeError: Name must be a string
        ...
    TypeError: Length must be a number
        ...
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [2-hbtn_course.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/2-hbtn_course.js)

### 3\. Methods, static methods, computed methods names..... MONEY

Implement a class named `Currency`:

*   \- Constructor attributes:
    *   `code` (String)
    *   `name` (String)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   Implement a getter and setter for each attribute.
*   Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

    bob@dylan:~$ cat 3-main.js
    import Currency from "./3-currency.js";
    
    const dollar = new Currency('$', 'Dollars');
    console.log(dollar.displayFullCurrency());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 3-main.js 
    Dollars ($)
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [3-currency.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/3-currency.js)

### 4\. Pricing

Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

*   Constructor attributes:
    *   `amount` (Number)
    *   `currency` (Currency)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   Implement a getter and setter for each attribute.
*   Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
*   Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

    bob@dylan:~$ cat 4-main.js
    import Pricing from './4-pricing.js';
    import Currency from './3-currency.js';
    
    const p = new Pricing(100, new Currency("EUR", "Euro"))
    console.log(p);
    console.log(p.displayFullPrice());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 4-main.js 
    Pricing {
      _amount: 100,
      _currency: Currency { _code: 'EUR', _name: 'Euro' }
    }
    100 Euro (EUR)
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [4-pricing.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/4-pricing.js)

### 5\. A Building

Implement a class named `Building`:

*   Constructor attributes:
    *   `sqft` (Number)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   Implement a getter for each attribute.
*   Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
    *   If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

    bob@dylan:~$ cat 5-main.js
    import Building from './5-building.js';
    
    const b = new Building(100);
    console.log(b);
    
    class TestBuilding extends Building {}
    
    try {
        new TestBuilding(200)
    }
    catch(err) {
        console.log(err);
    }
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 5-main.js 
    Building { _sqft: 100 }
    Error: Class extending Building must override evacuationWarningMessage
        ...
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [5-building.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/5-building.js)

### 6\. Inheritance

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

*   Constructor attributes:
    *   `sqft` (Number) (must be assigned to the parent class `Building`)
    *   `floors` (Number)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   Implement a getter for each attribute.
*   Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

    bob@dylan:~$ cat 6-main.js
    import SkyHighBuilding from './6-sky_high.js';
    
    const building = new SkyHighBuilding(140, 60);
    console.log(building.sqft);
    console.log(building.floors);
    console.log(building.evacuationWarningMessage());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 6-main.js 
    140
    60
    Evacuate slowly the 60 floors
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [6-sky_high.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/6-sky_high.js)

### 7\. Airport

Implement a class named `Airport`:

*   Constructor attributes:
    *   `name` (String)
    *   `code` (String)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   The default string description of the class should return the airport `code` (example below).

    bob@dylan:~$ cat 7-main.js
    import Airport from "./7-airport.js";
    
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    console.log(airportSF);
    console.log(airportSF.toString());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 7-main.js 
    Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
    [object SFO]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [7-airport.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/7-airport.js)

### 8\. Primitive - Holberton Class

Implement a class named `HolbertonClass`:

*   Constructor attributes:
    *   `size` (Number)
    *   `location` (String)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   When the class is cast into a `Number`, it should return the size.
*   When the class is cast into a `String`, it should return the location.

    bob@dylan:~$ cat 8-main.js
    import HolbertonClass from "./8-hbtn_class.js";
    
    const hc = new HolbertonClass(12, "Mezzanine")
    console.log(Number(hc));
    console.log(String(hc));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 8-main.js 
    12
    Mezzanine
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [8-hbtn_class.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/8-hbtn_class.js)

### 9\. Hoisting

Fix this code and make it work.


````
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
````

Result:

    bob@dylan:~$ cat 9-main.js
    import listOfStudents from "./9-hoisting.js";
    
    console.log(listOfStudents);
    
    const listPrinted = listOfStudents.map(
        student => student.fullStudentDescription
    );
    
    console.log(listPrinted)
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 9-main.js
    [
      StudentHolberton {
        _firstName: 'Guillaume',
        _lastName: 'Salva',
        _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
      },
      StudentHolberton {
        _firstName: 'John',
        _lastName: 'Doe',
        _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
      },
      StudentHolberton {
        _firstName: 'Albert',
        _lastName: 'Clinton',
        _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
      },
      StudentHolberton {
        _firstName: 'Donald',
        _lastName: 'Bush',
        _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
      },
      StudentHolberton {
        _firstName: 'Jason',
        _lastName: 'Sandler',
        _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
      }
    ]
    [
      'Guillaume Salva - 2020 - San Francisco',
      'John Doe - 2020 - San Francisco',
      'Albert Clinton - 2019 - San Francisco',
      'Donald Bush - 2019 - San Francisco',
      'Jason Sandler - 2019 - San Francisco'
    ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [9-hoisting.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/9-hoisting.js)

### 10\. Vroom

Implement a class named `Car`:

*   Constructor attributes:
    *   `brand` (String)
    *   `motor` (String)
    *   `color` (String)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   Add a method named `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6

    bob@dylan:~$ cat 10-main.js
    import Car from "./10-car.js";
    
    class TestCar extends Car {}
    
    const tc1 = new TestCar("Nissan", "Turbo", "Pink");
    const tc2 = tc1.cloneCar();
    
    console.log(tc1);
    console.log(tc1 instanceof TestCar);
    
    console.log(tc2);
    console.log(tc2 instanceof TestCar);
    
    console.log(tc1 == tc2);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 10-main.js
    TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
    true
    TestCar { _brand: undefined, _motor: undefined, _color: undefined }
    true
    false
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [10-car.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/10-car.js)

### 11\. EVCar

Import `Car` from `10-car.js`.

Implement a class named `EVCar` that extends the `Car` class:

*   Constructor attributes:
    *   `brand` (String)
    *   `motor` (String)
    *   `color` (String)
    *   `range` (String)
*   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
*   For privacy reasons, when `cloneCar` is called on a EVCar object, the object returned should be an instance of `Car` instead of `EVCar`.

    bob@dylan:~$ cat 100-main.js
    import EVCar from './100-evcar.js';
    
    const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
    console.log(ec1);
    
    const ec2 = ec1.cloneCar();
    console.log(ec2);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 100-main.js
    EVCar {
      _brand: 'Tesla',
      _motor: 'Turbo',
      _color: 'Red',
      _range: '250'
    }
    Car { _brand: undefined, _motor: undefined, _color: undefined }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x02-ES6_classes`
*   File: [100-evcar.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x02-ES6_classes/100-evcar.js)

## Credits

## Author(s):blue_book:

Work is owned and maintained by:
* Imanol Asolo <[3848](mailto:3848@holbertonschool.com)> [![M](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/25px-Octicons-mark-github.svg.png)](https://github.com/Imanolasolo) [![M](https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/25px-Twitter_Bird.svg.png)](https://twitter.com/jjusturi) [![M](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/25px-LinkedIn_logo_initials.png)](https://www.linkedin.com/in/imanol-asolo-5ba9b42a/)


## Acknowledgments :mega: 

### **`Holberton School`** (*providing guidance*)
This program was written as part of the curriculum for Holberton School.
Holberton School is a campus-based full-stack software engineering program
that prepares students for careers in the tech industry using project-based
peer learning. For more information, visit [this link](https://www.holbertonschool.com/).
<p align="center">
	<img src="https://assets.website-files.com/6105315644a26f77912a1ada/610540e8b4cd6969794fe673_Holberton_School_logo-04-04.svg" alt="This is a secret;)">
</p>
