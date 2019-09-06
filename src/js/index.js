"use strict";

$(document).ready(function () {
    var bannerSwiper = new Swiper('.swiper-banner');
    var longtripSwiper = new Swiper('.swiper-longtrip', {
        navigation: {
            nextEl: '.longtrip-button-next',
            prevEl: '.longtrip-button-prev',
        },
    });
});