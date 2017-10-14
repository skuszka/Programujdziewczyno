'use strict';    
document.addEventListener('DOMContentLoaded', function() {
var dropDown = document.querySelector('.dropdown'); 
var forDropDown = document.querySelector('.for-dropdown'); 
    
      forDropDown.addEventListener('mouseover', function() {
    dropDown.style.display = 'block';
  }); 

  forDropDown.addEventListener('mouseout', function() {
    dropDown.style.display = 'none';
  });
    
  //  show.dropdown
  //  hide    
    });