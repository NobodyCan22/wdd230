document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("update").innerHTML = new Date(document.lastModified)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let dayOfWeek = days[d.getDay()];
let day = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

 fullDate = (dayOfWeek+", "+day+" "+month+" "+year)

document.getElementById("date").innerHTML = fullDate;

(function() {

    'use strict';
  
    document.querySelector('.material-design-hamburger__icon').addEventListener(
      'click',
      function() {      
        var child;
        
        document.body.classList.toggle('background--blur');
        this.parentNode.nextElementSibling.classList.toggle('menu--on');
  
        child = this.childNodes[1].classList;
  
        if (child.contains('material-design-hamburger__icon--to-arrow')) {
          child.remove('material-design-hamburger__icon--to-arrow');
          child.add('material-design-hamburger__icon--from-arrow');
        } else {
          child.remove('material-design-hamburger__icon--from-arrow');
          child.add('material-design-hamburger__icon--to-arrow');
        }
  
      });
  
  })();