'use strict';



(function() {
// исходные данные для генераци масива объектов фотографий

// var DATA_PICTURE = {
//     COUNT_PHOTOS: 25,
//     MIN_LIKES: 15,
//     MAX_LIKES: 200,
//     COMMENTS: [
//         'Всё отлично!',
//         'В целом всё неплохо. Но не всё.',
//         'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//         'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//         'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//         'Лица у людей на фотке перекошены, как будто их избивают.',
//         'Как можно было поймать такой неудачный момент?!'
//     ],
//     DESCRIPTIONS: ['Тестим новую камеру!',
//         'Затусили с друзьями на море',
//         'Как же круто тут кормят',
//         'Отдыхаем...',
//         'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
//         'Вот это тачка!'
//     ]
// };

// // функция случайного числа в диапозоне
// var getRandomNumber = function (min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// };

// // функция случайного значения из массива
// var getRandomElement = function (arr) {
//     var randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// };

// // функция, возвращающая массив объектов описывающих фотографии
// window.pictures = [];
// var generateNotes = function () {
//     for (var i = 1; i <= 25; i++) {
//         window.pictures.push({
//             url: 'photos/' + i + '.jpg',
//             likes: getRandomNumber(DATA_PICTURE.MIN_LIKES, DATA_PICTURE.MAX_LIKES),
//             comments: getRandomElement(DATA_PICTURE.COMMENTS),
//             description: getRandomElement(DATA_PICTURE.DESCRIPTIONS),
        
//         });
//     }
//     return window.pictures;
// };


// window.pictures = generateNotes();


// создание эелементов разметки

var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');

var picturesContainer = document.querySelector('.pictures');

document.onSuccess = function (picturesArr) {

var renderPicture = function (arrObj) {
    var element = pictureTemplate.cloneNode(true);
    element.querySelector('img').src = arrObj.url;
    element.setAttribute('data-id' , arrObj.id);

    return element;
};

var fragment = document.createDocumentFragment();
var newArr = []

// picturesArr.forEach(element => {
//     fragment.appendChild(renderPicture(element)
// });

for (var i = 0; i < picturesArr.length; i++) {
    var newArrElem = {...picturesArr[i], id: i}
    fragment.appendChild(renderPicture(newArrElem));
    document.arrOfPics = newArr.push(newArrElem)
    // console.log(newArrElem)

};

picturesContainer.appendChild(fragment);
};
})();