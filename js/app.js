'use strict';

let cookieList = document.getElementById('Seattle-total');

console.log(cookieList);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


let Seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  Avg: 6.3,
  cookiesarray: [],
  totalcookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesperhour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesarray.push(cookies);
      this.totalcookies += cookies
    }
  },

  render: function () {
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
  }
}

Seattle.render();
console.log(Seattle);



// Tokyo location 

let cookieListTwo = document.getElementById('Tokyo-total');

console.log(cookieList);

let hoursTwo = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let Tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  Avg: 1.2,
  cookiesarray: [],
  totalcookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesperhour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesarray.push(cookies);
      this.totalcookies += cookies
    }
  },

  render: function () {
    this.cookiesperhour();
    let storeName = document.createElement('h3');
    storeName.textContent = this.location; 
    cookieListTwo.appendChild(storeName);
    let ulElem = document.createElement('ul');
    cookieListTwo.appendChild(ulElem);

    for (let i = 0; i < this.cookiesarray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesarray[i] + ' cookies';
      ulElem.appendChild(liElem);
      console.log('total: ', this.totalcookies);
    };
    let totalElm = document.createElement('li');
    totalElm.textContent = `total: ${this.totalcookies} cookies`;
    ulElem.appendChild(totalElm);
  }
}

Tokyo.render();
console.log(Tokyo);



// Dubai location 

let cookieListThree = document.getElementById('Dubai-total');

console.log(cookieListThree);

let hoursThree = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let Dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  Avg: 3.7,
  cookiesarray: [],
  totalcookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesperhour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesarray.push(cookies);
      this.totalcookies += cookies
    }
  },

  render: function () {
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
  }
}


Dubai.render();
console.log(Dubai);


// Paris 

let cookieListFour = document.getElementById('Paris-total');

console.log(cookieListFour);

let hoursFour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']




let Paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  Avg: 2.3,
  cookiesarray: [],
  totalcookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesperhour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesarray.push(cookies);
      this.totalcookies += cookies
    }
  },

  render: function () {
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
  }
}

Paris.render();
console.log(Paris);


// Lima 

let cookieListFive = document.getElementById('Lima-total');

console.log(cookieList);

let hoursFive = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let Lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  Avg: 4.6,
  cookiesarray: [],
  totalcookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesperhour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesarray.push(cookies);
      this.totalcookies += cookies
    }
  },

  render: function () {
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
  }
}

Lima.render();
console.log(Lima);