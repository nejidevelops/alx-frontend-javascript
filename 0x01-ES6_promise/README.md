0x01. ES6 Promises
==================

This repo is included in Specializations - Web Stack programming ― Back-end Course of Holberton School. We will cover the `ES6 Promises.`

![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/BfWObK_GUHmcMY8W381B_A "explain to anyone"), **without the help of Google**:

*   Promises (how, why, and what)
*   How to use the `then`, `resolve`, `catch` methods
*   How to use every method of the Promise object
*   Throw / Try
*   The await operator
*   How to use an `async` function

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
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
*   Install ESLint using: `npm install --save-dev eslint`

Files
-----

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
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
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

### `utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
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

### 0\. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype `function getResponseFromAPI()`

    bob@dylan:~$ cat 0-main.js
    import getResponseFromAPI from "./0-promise.js";
    
    const response = getResponseFromAPI();
    console.log(response instanceof Promise);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 0-main.js 
    true
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [0-promise.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/0-promise.js)

### 1\. Don't make a promise...if you know you can't keep it

Using the prototype below, return a `promise`. The parameter is a `boolean`.

    getFullResponseFromAPI(success)
    

When the argument is:

*   `true`
    *   resolve the promise by passing an object with 2 attributes:
        *   `status`: `200`
        *   `body`: `'Success'`
*   `false`
    *   reject the promise with an error object with the message `The fake API is not working currently`

Try testing it out for yourself

    bob@dylan:~$ cat 1-main.js
    import getFullResponseFromAPI from './1-promise';
    
    console.log(getFullResponseFromAPI(true));
    console.log(getFullResponseFromAPI(false));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 1-main.js 
    Promise { { status: 200, body: 'Success' } }
    Promise {
      <rejected> Error: The fake API is not working currently
        ...
        ...
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [1-promise.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/1-promise.js)


### 2\. Catch me if you can!

Using the function prototype below

    function handleResponseFromAPI(promise)
    

Append three handlers to the function:

*   When the Promise resolves, return an object with the following attributes
    *   `status`: `200`
    *   `body`: `success`
*   When the Promise rejects, return an empty `Error` object
*   For every resolution, log `Got a response from the API` to the console

    bob@dylan:~$ cat 2-main.js
    import handleResponseFromAPI from "./2-then";
    
    const promise = Promise.resolve();
    handleResponseFromAPI(promise);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 2-main.js 
    Got a response from the API
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [2-then.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/2-then.js)

### 3\. Handle multiple successful promises

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

    function handleProfileSignup()
    

In the event of an error, log `Signup system offline` to the console

    bob@dylan:~$ cat 3-main.js
    import handleProfileSignup from "./3-all";
    
    handleProfileSignup();
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 3-main.js 
    photo-profile-1 Guillaume Salva
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [3-all.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/3-all.js)

### 4\. Simple promise

Using the following prototype

    function signUpUser(firstName, lastName) {
    }
    

That returns a resolved promise with this object:

    {
      firstName: value,
      lastName: value,
    }
    

    bob@dylan:~$ cat 4-main.js
    import signUpUser from "./4-user-promise";
    
    console.log(signUpUser("Bob", "Dylan"));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 4-main.js 
    Promise { { firstName: 'Bob', lastName: 'Dylan' } }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [4-user-promise.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/4-user-promise.js)

### 5\. Reject the promises

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

    export default function uploadPhoto(filename) {
    
    }
    

    bob@dylan:~$ cat 5-main.js
    import uploadPhoto from './5-photo-reject';
    
    console.log(uploadPhoto('guillaume.jpg'));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 5-main.js 
    Promise {
      <rejected> Error: guillaume.jpg cannot be processed
      ..
        ..
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [5-photo-reject.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/5-photo-reject.js)

### 6\. Handle multiple promises

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

    [
        {
          status: status_of_the_promise,
          value: value or error returned by the Promise
        },
        ...
      ]
    

    bob@dylan:~$ cat 6-main.js
    import handleProfileSignup from './6-final-user';
    
    console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 6-main.js 
    Promise { <pending> }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [6-final-user.js]([undefined](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/6-final-user.js)

### 7\. Load balancer

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

    export default function loadBalancer(chinaDownload, USDownload) {
    
    }
    

    bob@dylan:~$ cat 7-main.js
    import loadBalancer from "./7-load_balancer";
    
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';
    
    const promiseUK = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, ukSuccess);
    });
    
    const promiseUKSlow = new Promise(function(resolve, reject) {
        setTimeout(resolve, 400, ukSuccess);
    });
    
    const promiseFR = new Promise(function(resolve, reject) {
        setTimeout(resolve, 200, frSuccess);
    });
    
    const test = async () => {
        console.log(await loadBalancer(promiseUK, promiseFR));
        console.log(await loadBalancer(promiseUKSlow, promiseFR));
    }
    
    test();
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 7-main.js 
    Downloading from UK is faster
    Downloading from FR is faster
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [7-load_balancer.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/7-load_balancer.js)

### 8\. Throw error / try catch

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.

    export default function divideFunction(numerator, denominator) {
    
    }
    

    bob@dylan:~$ cat 8-main.js
    import divideFunction from './8-try';
    
    console.log(divideFunction(10, 2));
    console.log(divideFunction(10, 0));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 8-main.js 
    5
    ..../8-try.js:15
      throw Error('cannot divide by 0');
      ^
    .....
    
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [8-try.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/8-try.js)

### 9\. Throw an error

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

Example:

    [
      1000,
      'Guardrail was processed',
    ]
    

    bob@dylan:~$ cat 9-main.js
    import guardrail from './9-try';
    import divideFunction from './8-try';
    
    console.log(guardrail(() => { return divideFunction(10, 2)}));
    console.log(guardrail(() => { return divideFunction(10, 0)}));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 9-main.js 
    [ 5, 'Guardrail was processed' ]
    [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [9-try.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/9-try.js)

### 10\. Await / Async

Import `uploadPhoto` and `createUser` from `utils.js`

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:

    {
      photo: response_from_uploadPhoto_function,
      user: response_from_createUser_function,
    }
    

If one of the async function fails, return an empty object. Example:

    {
      photo: null,
      user: null,
    }
    

    bob@dylan:~$ cat 100-main.js
    import asyncUploadUser from "./100-await";
    
    const test = async () => {
        const value = await asyncUploadUser();
        console.log(value);
    };
    
    test();
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 100-main.js 
    {
      photo: { status: 200, body: 'photo-profile-1' },
      user: { firstName: 'Guillaume', lastName: 'Salva' }
    }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-backend-javascript`
*   Directory: `0x01-ES6_promise`
*   File: [100-await.js](https://github.com/Imanolasolo/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/100-await.js)

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
