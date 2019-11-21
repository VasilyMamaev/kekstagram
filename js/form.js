'use strict';

(function () {

var userHashtagInput = document.querySelector('.upload-form-hashtags');

userHashtagInput.addEventListener('invalid', function(evt) {
    if (userHashtagInput.validity.patternMismatch){
 userHashtagInput.setCustomValidity('хэштеги должны отделяться пробелом')
    }
})

}) ();