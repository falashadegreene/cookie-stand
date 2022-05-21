'use strict';

let locationTable = document.getElementById('table')

let cookieList = document.getElementById('Seattle-total');

//console.log(cookieList);

// *** Window to cookie stand form ***
let cookieForm = document.getElementById('cookie-stand-form');

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
  let row1 = document.createElement('tr');
  locationTable.appendChild(row1);

  let tdElem = document.createElement('td');
  tdElem.textContent = this.location
  row1.appendChild (tdElem)


  for (let i = 0; i < this.cookiesarray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesarray[i];
    row1.appendChild(td);
    //console.log('total: ', this.totalcookies);
  };
  let totalElm = document.createElement('td');
  totalElm.textContent = this.totalcookies;
  row1.appendChild(totalElm);


}

function header() {
  let tableHead = document.createElement ('thead')
  locationTable.appendChild(tableHead);

  let row = document.createElement('tr')
  tableHead.appendChild(row);
  
  let tdElem = document.createElement('td');
  row.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    row.appendChild(td);

  }

  let total = document.createElement('td');
  total.textContent = 'Total';
  row.appendChild(total);
}

// *** tablefooter ***
function  tableFooter() {
  let footElem = document.createElement('tfoot');
   locationTable.appendChild(footElem);
   //console.log('is there a foot?')
   let newRow = document.createElement('tr');
   footElem.appendChild(newRow);

   let tdElem = document.createElement('td');
   tdElem.textContent = 'Totals';
   newRow.appendChild(tdElem);
 

  
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++){
    let hrTotal = 0;
    for (let j = 0; j < locationTotal.length; j++){
      hrTotal += locationTotal[j].cookiesarray[i];
      grandTotal += locationTotal[j].cookiesarray[i]; 
    }
    
    let dataCell = document.createElement('td');
    dataCell.textContent = `${hrTotal}`;
    newRow.appendChild(dataCell);
  }
    let totalCell = document.createElement('td');
    totalCell.textContent = grandTotal;
    newRow.appendChild(totalCell);

   
 }
 

tableFooter();
header();






// *** create callback function

function handleSubmit(event){
  event.preventDefault();
   

 let locationName = event.target.locationName.value;
 
 let cookiesMinimum = parseInt(event.target.cookiesMinimum.value);
 let cookiesMaximum = parseInt(event.target.cookiesMaximum.value);
 let cookiesAvg = parseFloat(event.target.cookiesAvg.value);
 console.log(locationName,cookiesMinimum,cookiesMaximum,cookiesAvg);
 let newLocation = new storeLocation(locationName, cookiesMinimum,cookiesMaximum,cookiesAvg);

 
  
 newLocation.render();

 


}

// *** event listner for cookie form ***

cookieForm.addEventListener('submit', handleSubmit);








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