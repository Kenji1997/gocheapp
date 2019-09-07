"use strict";

var configDatePicker = {
    enableTime: true,
    "plugins": [new confirmDatePlugin({})]
}

$(document).ready(function () {
    // slide init
    var bannerSwiper = new Swiper('.swiper-banner');
    var longtripSwiper = new Swiper('.swiper-longtrip', {
        navigation: {
            nextEl: '.longtrip-button-next',
            prevEl: '.longtrip-button-prev',
        },
    });

    // date picker
    flatpickr("#datePicker-01", configDatePicker);

    // menu effect
    $("#trigger-menu-mobile").on('click', function (e) {
        $(".menu-01__wrapper").toggleClass('show');
        $(this).toggleClass('active');
    });

    //main form effect
    $('.taxiType .item').on('click', function (e) {
        $('#mainForm .taxiType .item').removeClass('active')
        // });
        $(this).addClass('active')
    })
});

$(document).on('click', function (e) {

    // if (!trigger.is(event.target) && !mainMenuWrapper.is(event.target) && mainMenuWrapper.has(event.target).length === 0) {
    //     mainMenuWrapper.removeClass('show');
    // }

    if ( !$('#trigger-menu-mobile').is(e.target) && !$('#trigger-menu-mobile').has(e.target).length && !$('.menu-wrapper').is(e.target)) {
        $(".menu-01__wrapper").removeClass('show');
        $('#trigger-menu-mobile').removeClass('active');
    }
})