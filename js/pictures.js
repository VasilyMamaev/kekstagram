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
        'Вот это тачка!'
    ]
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


// заполнение большой картиинки первым элементом массива

var BigPictureRender = function (arr) {
    var fragment = document.querySelector('.gallery-overlay');
    fragment.querySelector('.gallery-overlay-image').src = arr.url;
    fragment.querySelector('.likes-count').textContent = arr.likes;
    fragment.querySelector('.gallery-overlay-controls-comments').textContent = arr.comments;

};

BigPictureRender(pictures[0]);

// вызов поля редактирования изображения при его загрузке

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFileLabel = document.querySelector('.upload-file');
var uploadFileInput = document.querySelector('#upload-file');
var uploadOverlayClose = document.querySelector('#upload-cancel');

uploadFileLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        uploadFileInput.focus;
    }
});

uploadFileInput.addEventListener('change', function () {
    uploadOverlay.classList.remove('hidden');
});

uploadOverlayClose.addEventListener('click', function () {
    uploadOverlay.classList.add('hidden');
    uploadFileInput.value = ' ';
});

// оживление ползунка при заргузке фото

var uploadEffectPin = document.querySelector('.upload-effect-level-pin');
var uploadEffectLine = document.querySelector('.upload-effect-level-line');
var uploadEffectActiveLine = document.querySelector('.upload-effect-level-val');

uploadEffectPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoord = evt.clientX;

    var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        var maxValue = uploadEffectLine.offsetWidth;

        var shift = startCoord - moveEvt.clientX;

        startCoord = moveEvt.clientX;

        var PinPercentPos = (uploadEffectPin.offsetLeft - shift) / maxValue * 100;

        if (uploadEffectPin.offsetLeft - shift < 0) {
            document.removeEventListener('mousemove', onMouseMove);
        } else if (uploadEffectPin.offsetLeft - shift >= maxValue) {
            document.removeEventListener('mousemove', onMouseMove);
        };

        uploadEffectActiveLine.style.width = PinPercentPos + '%';
        uploadEffectPin.style.left = (uploadEffectPin.offsetLeft - shift) + 'px';
    };

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// редактирование масштаба при загрузке изображения

var resizeMinus = document.querySelector('button.upload-resize-control:nth-child(1)');
var resizePlus = document.querySelector('button.upload-resize-control:nth-child(3)');
var resizeCounter = document.querySelector('input.upload-resize-control');
var image = document.querySelector('.effect-image-preview');

var MAX_COUNTER_VALUE = 100;
var MIN_COUNTER_VALUE = 25;
var STEP_COUNTER_VALUE = 25;


resizeMinus.addEventListener('mousedown', function () {
    if (parseInt(resizeCounter.value) > 25) {
    resizeCounter.value = (parseInt(resizeCounter.value) - STEP_COUNTER_VALUE) + '%';
    image.style.transform = `scale(${parseInt(resizeCounter.value) / 100})`;
    };
});

resizePlus.addEventListener('mousedown', function () {
    if (parseInt(resizeCounter.value) < 100) {
    resizeCounter.value = (parseInt(resizeCounter.value) + STEP_COUNTER_VALUE) + '%';
    image.style.transform = `scale(${parseInt(resizeCounter.value) / 100})`;
    };
});