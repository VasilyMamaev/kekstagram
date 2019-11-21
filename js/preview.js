'use strict';

(function() {

// заполнение большой картиинки первым элементом массива

var fragment = document.querySelector('.gallery-overlay');


var BigPictureRender = function (arrObj) {
    var patch = arrObj.comments[0]
    fragment.querySelector('.gallery-overlay-image').src = arrObj.url;
    fragment.querySelector('.likes-count').textContent = arrObj.likes;
    fragment.querySelector('.gallery-overlay-controls-comments').textContent = patch.message;
    fragment.classList.remove('hidden');

};

var close = document.querySelector('.gallery-overlay-close');

close.addEventListener('click', () => {
    fragment.classList.add('hidden')
})
close.addEventListener('keyup ', (evt) => {
    if (evt.keyCode === 27) {fragment.classList.add('hidden')}
    
})


var parent = document.querySelector('.pictures');




parent.addEventListener('click', evt => {
    console.log(evt.target.src)
    if (evt.target.src) {
        let picSrc = evt.target.attributes.src.nodeValue;
        let pic = document.picturesArr.filter(picture => picture.url === picSrc)
        BigPictureRender(pic[0]);
    }
    
    
})
// let pics = document.getElementsByClassName('picture')
// console.log(pics)
// pics.forEach(pic => {
//     pic.addEventListener('click', () => {
//         console.log(pic.firstElementChild.attributes.src)
//     })
// });
// console.log(pics[0].firstElementChild.attributes.src)


// window.pictures.array.

    // BigPictureRender(window.pictures[0]);

// parent.addEventListener('click', e => {
//     if (e.target.classList.contain('picture')) {
//        let picId = e.target.dataset.id
//        let pic = window.pictures.filter(picture=> picture.id === picId)
//        BigPictureRender(pic);
//     }
// })


})();
