'use strict';

let cookieList = document.getElementById('Seattle-total');

console.log(cookieList);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// **** Objects Literals *****

let locationTotal = [];

// Constructor 
function storeLocation(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesarray = [];
  this.totalcookies = 0;

  locationTotal.push(this);
}

// *** Prototypes **
storeLocation.prototype.randomCustNumber = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}
storeLocation.prototype.cookiesperhour = function() {

  for (let i = 0; i < hours.length; i++) {
    let cookies = (Math.ceil(this.avg * this.randomCustNumber()));
    console.log('cookies', cookies);
    this.cookiesarray.push(cookies);
    this.totalcookies += cookies;
  }
}

storeLocation.prototype.render = function() {
  this.cookiesperhour();
  let storeName = document.createElement('h3');
  storeName.textContent = this.location;
  cookieList.appendChild(storeName);
  let ulElem = document.createElement('ul');
  cookieList.appendChild(ulElem);

  for (let i = 0; i < this.cookiesarray.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
    ulElem.appendChild(liElem);
    console.log('total: ', this.totalcookies);
  };
  let totalElm = document.createElement('li');
  totalElm.textContent = `total: ${this.totalcookies} cookies`;
  ulElem.appendChild(totalElm);

  // *** Table Render ***
  
  let tableElem = document.createElement('table');
  mainElem.appendChild(tableElem);

  let tableBodyElem = document.createElement('tbody');
  tableElem.appendChild(tableBodyElem);

  let row1 = document.createElement('tr');
  tableBodyElem.appendChild(row1);

  let tdElem = docuement.createElement('td');
  row1.textContent = '';
   

}

// initiated Locations 

new storeLocation('Seattle', 23, 65, 6.3);
new storeLocation('Tokyo', 3, 24, 1.2);
new storeLocation('Dubai', 11, 38, 3.7);
new storeLocation('Paris', 20, 38, 2.4);
new storeLocation('Lima', 2, 16, 4.6);


// Helper function

function renderTables() {
  for (let i = 0; i < locationTotal.length; i++) {
    locationTotal[i].render();
  }
}








renderTables();



// let Seattle = {
//   location: 'Seattle',
//   min: 23,
//   max: 65,
//   Avg: 6.3,
//   cookiesarray: [],
//   totalcookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesperhour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
//       this.cookiesarray.push(cookies);
//       this.totalcookies += cookies
//     }
//   },

//   render: function () {
//     this.cookiesperhour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location; 
//     cookieList.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieList.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesarray.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalcookies);
//     };
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalcookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// }

// Seattle.render();
// console.log(Seattle);



// // Tokyo location 

// let cookieListTwo = document.getElementById('Tokyo-total');

// console.log(cookieList);

// let hoursTwo = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// let Tokyo = {
//   location: 'Tokyo',
//   min: 3,
//   max: 24,
//   Avg: 1.2,
//   cookiesarray: [],
//   totalcookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesperhour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
//       this.cookiesarray.push(cookies);
//       this.totalcookies += cookies
//     }
//   },

//   render: function () {
//     this.cookiesperhour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location; 
//     cookieListTwo.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieListTwo.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesarray.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalcookies);
//     };
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalcookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// }

// Tokyo.render();
// console.log(Tokyo);



// // Dubai location 

// let cookieListThree = document.getElementById('Dubai-total');

// console.log(cookieListThree);

// let hoursThree = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// let Dubai = {
//   location: 'Dubai',
//   min: 11,
//   max: 38,
//   Avg: 3.7,
//   cookiesarray: [],
//   totalcookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesperhour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
//       this.cookiesarray.push(cookies);
//       this.totalcookies += cookies
//     }
//   },

//   render: function () {
//     this.cookiesperhour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location; 
//     cookieList.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieList.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesarray.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalcookies);
//     };
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalcookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// }


// Dubai.render();
// console.log(Dubai);


// // Paris 

// let cookieListFour = document.getElementById('Paris-total');

// console.log(cookieListFour);

// let hoursFour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']




// let Paris = {
//   location: 'Paris',
//   min: 20,
//   max: 38,
//   Avg: 2.3,
//   cookiesarray: [],
//   totalcookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesperhour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
//       this.cookiesarray.push(cookies);
//       this.totalcookies += cookies
//     }
//   },

//   render: function () {
//     this.cookiesperhour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location; 
//     cookieList.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieList.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesarray.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalcookies);
//     };
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalcookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// }

// Paris.render();
// console.log(Paris);


// // Lima 

// let cookieListFive = document.getElementById('Lima-total');

// console.log(cookieList);

// let hoursFive = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// let Lima = {
//   location: 'Lima',
//   min: 2,
//   max: 16,
//   Avg: 4.6,
//   cookiesarray: [],
//   totalcookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesperhour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
//       this.cookiesarray.push(cookies);
//       this.totalcookies += cookies
//     }
//   },

//   render: function () {
//     this.cookiesperhour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location; 
//     cookieList.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieList.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesarray.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalcookies);
//     };
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalcookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// }

// Lima.render();
// console.log(Lima);