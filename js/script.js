// reviewsSwiper //

let reviewsSwiper = new Swiper('.reviews__review', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    loop: true,
});

let reviewImgs = document.getElementsByClassName('reviews__img');
let mainReviewPhoto = document.getElementsByClassName('reviews__main-img')[0];
let arrPhotosSrc = [];
arrPhotosSrc.push(mainReviewPhoto.getAttribute('src'));

for (let reviewImg of reviewImgs) {
    arrPhotosSrc.push(reviewImg.getAttribute('src'));
}

reviewsSwiper.on('slideChange', function () {

    let numCurrentSlide = reviewsSwiper.activeIndex;

    let clickedPhotoSrc = arrPhotosSrc[numCurrentSlide - 1];
    let photoImg;

    for (let i = 0; i < reviewImgs.length; i++) {
        if (reviewImgs[i].getAttribute('src') == clickedPhotoSrc) {
            photoImg = reviewImgs[i];
        }
    }

    mainReviewPhoto.classList.add('reviews__photo--zoom');
    photoImg.classList.add('reviews__photo--zoom');
    let removeZoom = () => {
        mainReviewPhoto.classList.remove('reviews__photo--zoom');
        photoImg.classList.remove('reviews__photo--zoom');
    }
    setTimeout(removeZoom, 1000);

    let changePhoto = () => {
        let mainPhotoSrc = mainReviewPhoto.getAttribute('src');
        mainReviewPhoto.setAttribute('src', clickedPhotoSrc);
        photoImg.setAttribute('src', mainPhotoSrc);
    }
    setTimeout(changePhoto, 500);

});


let reviewsCircle = document.querySelector('.reviews__circle');

reviewsCircle.addEventListener('click', function (event) {
    if (event.target.closest('.reviews__img')) {
        let photoSrc = event.target.getAttribute('src');
        let photoSrcIndex = arrPhotosSrc.indexOf(photoSrc) + 1;
        reviewsSwiper.slideTo(photoSrcIndex);
    }
});