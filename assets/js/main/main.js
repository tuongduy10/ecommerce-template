$(document).ready(function(){
    $(window).scroll(function(){
        $('.header').addClass('sticky-header')
        $('.main').css('margin-top', $('.header').height())
    })
    $(window).resize(function(){
        $('.header').addClass('sticky-header')
        $('.main').css('margin-top', $('.header').height())
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

$(".test").click(function (e) {
    // Show
    if ($(this).siblings().hasClass('d-none')) {
        $(this).siblings().removeClass('d-none')
        $(this).children('svg').addClass('svg-right')
    } 
    // Hide
    else {
        $(this).siblings().addClass('d-none')
        $(this).children('svg').removeClass('svg-right')
    }
})
