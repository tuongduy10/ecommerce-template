$(document).ready(function(){
    $('.nav__list-mobile-wrapper').css('height', $('.nav__mobile-list').outerHeight() - $('.nav__mobile-logo').outerHeight() - $('.nav__mobile-footer').outerHeight())
    $(window).scroll(function(){
        $('.header').addClass('sticky-header')
        $('.main').css('margin-top', $('.header').height())
    })
    $(window).resize(function(){
        $('.header').addClass('sticky-header')
        $('.main').css('margin-top', $('.header').height())
        $('.nav__list-mobile-wrapper').css('height', $('.nav__mobile-list').outerHeight() - $('.nav__mobile-logo').outerHeight() - $('.nav__mobile-footer').outerHeight())
    })
})

document.getElementById('nav__menubar-open').onclick = function () {
    openNavMobileList()
    closeSearchForm()
    $('body').css('overflow', 'hidden')
}
document.getElementById('nav__overlay').onclick = function () {
    closeNavMobileList()
    $('body').css('overflow', 'auto')
    $('.product__filter-dropdown-menu').removeClass('filter-open')
}
document.getElementById('nav__mobile-list-close').onclick = function () {
    closeNavMobileList()
    $('body').css('overflow', 'auto')
}

$(".header__mobile-searchicon").click(function () {
    if ($('.searchform__wrapper').hasClass('d-none')) {
        $('.searchform__wrapper').removeClass('d-none')
        $('.searchform__wrapper input').focus()
        $('.search__overlay').removeClass('d-none')
        $('.header__mobile-searchicon svg').addClass('icon-active')
        $('body').css('overflow', 'hidden')
    } else {
        closeSearchForm()
    }
    return false
})
$('.search__overlay').click(function () {
    closeSearchForm()
})


function closeSearchForm() {
    $('.searchform__wrapper').addClass('d-none')
    $('.searchform__wrapper input').focusout()
    $('.search__overlay').addClass('d-none')
    $('body').css('overflow', 'auto')
    $('.header__mobile-searchicon svg').removeClass('icon-active')
}
function closeNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-block', 'd-none')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-open', 'nav-close')
}
function openNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-none', 'd-block')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-close', 'nav-open')
}

// Select form handler
// $('.filter__button').click(function(){
//     // Open
//     if(!$('.product__filter-dropdown-menu').hasClass('open')){
//         $('.product__filter-dropdown-menu').addClass('open')
//         $(".svg-filter").addClass("svg-up");
//     }
//     // Close
//     else{
//         $('.product__filter-dropdown-menu').removeClass('open')
//         $(".svg-filter").removeClass("svg-up");
//     }
// })
$(".order__button").hover(
    function () {
        $(".order__item-dropdown_menu").addClass("open");
        $(".svg-order").addClass("svg-up");
    }, function () {
        $(".order__item-dropdown_menu").removeClass("open");
        $(".svg-order").removeClass("svg-up");
    }
);
$(".order__item-wrapper").click(function () {
    if (!$(".order__item-dropdown_menu").hasClass('open')) {
        $(".order__item-dropdown_menu").addClass("open");
        $(".svg-order").addClass("svg-up");
    } else {
        $(".order__item-dropdown_menu").removeClass("open");
        $(".svg-order").removeClass("svg-up");
    }
})

$(".order__item").click(function () {
    let text = $(this).text()
    $(".order__item").removeClass('d-none')
    $(".order__item-dropdown")
        .html(text +
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-down svg-order">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>`)
    $(this).addClass('d-none')
    // $(".order__item-dropdown_menu").removeClass('open')
})

$(".filter__title").click(function (e) {
    $('.filter__list').css('max-height','0')  
    $('.filter__title').children('svg').removeClass('svg-right')
    if($(this).siblings('.filter__list').height() == 0){
        $(this).siblings('.filter__list').css('max-height','calc(185px + (310 - 185) * ((100vw - 375px)/ (1920 - 375)))')  
        $(this).children('svg').addClass('svg-right')
    
    }
})
$('.filter__item-title').click(function(){
    $('.filter__items-mobile').css('max-height','0')
    $('.filter__item-title').children('svg').removeClass('svg-right')
    if($(this).siblings('.filter__items-mobile').height() == 0){
        $(this).siblings('.filter__items-mobile').css('max-height','calc(185px + (310 - 185) * ((100vw - 375px)/ (1920 - 375)))')
        $(this).children('svg').addClass('svg-right')
    }
})
$('.filter__button').click(function(){
    // open nav
    $('#nav__overlay').removeClass('d-none')
    $('#nav__overlay').addClass('d-block')
    // 
    $('.product__filter-dropdown-menu').addClass('filter-open')
    $('body').css('overflow','hidden')
})
$('.filter-close').click(function(){
    $('#nav__overlay').removeClass('d-block')
    $('#nav__overlay').addClass('d-none')
    $('body').css('overflow', 'auto')
    $('.product__filter-dropdown-menu').removeClass('filter-open')
})
$('.add-to-wishlist').hover(
    function(){
        $(this).attr('fill','true')
    },
    function(){
        $(this).attr('fill','none')
    }
)
$('.add-to-wishlist').click(function(){
    if($(this).hasClass('fill')) {
        $(this).removeClass('fill')
        return
    }
    $(this).addClass('fill')
})

$('.slider__item img').click(function(){
    let src = $(this).attr('src')
    $('.main__picture-inner img').attr('src',src)
})

$('.test').click(function() {
   $(".slider__list").animate({
        scrollTop:  0
   })
})