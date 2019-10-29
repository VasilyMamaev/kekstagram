'use strict';

// исходные данные для генераци масива объектов фотографий

var DATA_PICTURE = {
    COUNT_PHOTOS: 25,
    MIN_LIKES: 15,
    MAX_LIKES: 200,
    COMMENTS: [
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают.',
        'Как можно было поймать такой неудачный момент?!'
    ],
    DESCRIPTIONS: ['Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!']
};

// функция случайного числа в диапозоне
var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

// функция случайного значения из массива
var getRandomElement = function (arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

// функция, возвращающая массив объектов описывающих фотографии
var generateNotes = function () {
    var pictures = [];
    for (var i = 1; i <= 25; i++) {
        pictures.push({
            url: 'photos/' + i + '.jpg',
            likes: getRandomNumber(DATA_PICTURE.MIN_LIKES, DATA_PICTURE.MAX_LIKES),
            comments: getRandomElement(DATA_PICTURE.COMMENTS),
            description: getRandomElement(DATA_PICTURE.DESCRIPTIONS)
        });
    }
    return pictures;
};

var pictures = generateNotes();

console.log(pictures);

// создание эелементов разметки

var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');

var picturesContainer = document.querySelector('.pictures');

var renderPicture = function (arr) {
        var element = pictureTemplate.cloneNode(true);
    
        element.querySelector('img').src = arr.url;

        return element;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length; i++) {
    fragment.appendChild(renderPicture(pictures[i]));
};

picturesContainer.appendChild(fragment);

// удаление хидена большой картинки

document.querySelector('.gallery-overlay').classList.remove('hidden');

// заполнение большой картиинки первым элементом массива

var BigPictureRender = function (arr) {
    var fragment = document.querySelector('.gallery-overlay');
    fragment.querySelector('.gallery-overlay-image').src = arr.url;
    fragment.querySelector('.likes-count').textContent = arr.likes;
    fragment.querySelector('.gallery-overlay-controls-comments').textContent = arr.comments;
    
};

BigPictureRender(pictures[0]);












