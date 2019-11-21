'use strict';

(function() {

// редактирование масштаба при загрузке изображения

var resizeMinus = document.querySelector('button.upload-resize-control:nth-child(1)');
var resizePlus = document.querySelector('button.upload-resize-control:nth-child(3)');
var resizeCounter = document.querySelector('input.upload-resize-control');
var image = document.querySelector('.effect-image-preview');

var MAX_COUNTER_VALUE = 100;
var MIN_COUNTER_VALUE = 25;
var STEP_COUNTER_VALUE = 25;


resizeMinus.addEventListener('mousedown', function () {
    if (parseInt(resizeCounter.value) > MIN_COUNTER_VALUE) {
    resizeCounter.value = (parseInt(resizeCounter.value) - STEP_COUNTER_VALUE) + '%';
    image.style.transform = `scale(${parseInt(resizeCounter.value) / 100})`;
    };
});

resizePlus.addEventListener('mousedown', function () {
    if (parseInt(resizeCounter.value) < MAX_COUNTER_VALUE) {
    resizeCounter.value = (parseInt(resizeCounter.value) + STEP_COUNTER_VALUE) + '%';
    image.style.transform = `scale(${parseInt(resizeCounter.value) / 100})`;
    };
});

})();