'use strict';

(function () {

    URL = 'https://js.dump.academy/kekstagram/data';

    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        document.picturesArr = xhr.response;

        document.onSuccess(xhr.response);

        var filters = document.querySelector('.filters');
        filters.classList.remove('hidden');
    })


    xhr.open('GET', URL);

    xhr.send();


})();