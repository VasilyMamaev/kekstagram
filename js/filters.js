'use strict';

(function () {

    var recomendedBtn = document.querySelector('label.filters-item:nth-child(2)');
    var popularBtn = document.querySelector('label.filters-item:nth-child(4)');
    var discussingBtn = document.querySelector('label.filters-item:nth-child(6)');
    var randomBtn = document.querySelector('label.filters-item:nth-child(8)');

    var picturesContainer = document.querySelector('.pictures');

    function removeElements() {
        while (picturesContainer.firstChild) {
            picturesContainer.removeChild(picturesContainer.firstChild);
        };
    };

    popularBtn.addEventListener('click', function () {
        removeElements();
        //развернуть массив и отрисовать
        var newPicturesArr = document.picturesArr.map(function (index) {
            return document.picturesArr.unshift(newPicturesArr[index]);
        })


        document.onSuccess(newPicturesArr);
        console.log(newPicturesArr)
        console.log(document.picturesArr)
    })




})();