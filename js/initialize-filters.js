'use strict';

(function () {

    var image = document.querySelector('.effect-image-preview');
    // вызов поля редактирования изображения при его загрузке

    var uploadOverlay = document.querySelector('.upload-overlay');
    var uploadFileLabel = document.querySelector('.upload-file');
    var uploadFileInput = document.querySelector('#upload-file');
    var uploadOverlayClose = document.querySelector('#upload-cancel');
    var effectBar = document.querySelector('.upload-effect-level');

    effectBar.classList.add('hidden');

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

    var filterStyleOriginal = document.querySelector('label.upload-effect-label:nth-child(3)');
    var filterStyleChrom = document.querySelector('label.upload-effect-label:nth-child(5)');
    var filterStyleSepia = document.querySelector('label.upload-effect-label:nth-child(7)');
    var filterStyleMarvin = document.querySelector('label.upload-effect-label:nth-child(9)');
    var filterStyleFobos = document.querySelector('label.upload-effect-label:nth-child(11)');
    var filterStyleSwelter = document.querySelector('label.upload-effect-label:nth-child(13)');

    var effect = 0;
    var effectValue = 100;

    var starPos = function () {
        uploadEffectActiveLine.style.width = effectValue + '%';
        uploadEffectPin.style.left = uploadEffectLine.offsetWidth + 'px';
        getEffect(effectValue);
    };

    filterStyleOriginal.addEventListener('click', function () {
        effect = 0;
        image.style.filter = 'inherit';
        effectBar.classList.add('hidden');
    });

    filterStyleChrom.addEventListener('click', function () {
        effect = 'chrome';
        effectBar.classList.remove('hidden');
        starPos();
    });

    filterStyleSepia.addEventListener('click', function () {
        effect = 'sepia';
        effectBar.classList.remove('hidden');
        starPos();
    });

    filterStyleMarvin.addEventListener('click', function () {
        effect = 'marvin';
        effectBar.classList.remove('hidden');
        starPos();
    });

    filterStyleFobos.addEventListener('click', function () {
        effect = 'fobos';
        effectBar.classList.remove('hidden');
        starPos();
    });

    filterStyleSwelter.addEventListener('click', function () {
        effect = 'swelter';
        effectBar.classList.remove('hidden');
        starPos();
    });

    var getEffect = function (val) {
        if (effect == 0) {
            image.style.filter = 'inherit';
        } else if (effect === 'chrome') {
            image.style.filter = `grayscale(${val / 100})`;
        } else if (effect === 'sepia') {
            image.style.filter = `sepia(${val / 100})`;
        } else if (effect === 'marvin') {
            image.style.filter = `invert(${val}%)`;
        } else if (effect === 'fobos') {
            image.style.filter = `blur(${val / 100 * 3}px)`;
        } else if (effect === 'swelter') {
            image.style.filter = `brightness(${val / 100 * 3})`;
        }
    };

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
            getEffect(PinPercentPos);
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

})();