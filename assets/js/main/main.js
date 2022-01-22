document.getElementById('nav__menubar-open').onclick = function () {
    openNavMobileList()
}
document.getElementById('nav__overlay').onclick = function () {
    closeNavMobileList()
}
document.getElementById('nav__mobile-list-close').onclick = function () {
    closeNavMobileList()
}

$(".header__mobile-searchicon").click(function () {
    openNavMobileList()
    $("#search-input").focus()
    return false
})

function closeNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-block', 'd-none')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-open', 'nav-close')
}
function openNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-none', 'd-block')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-close', 'nav-open')

}

// Select form handler
$(".order__item-wrapper").hover(
    function () {
        $(".order__item-dropdown_menu").addClass("open");
        $(".svg-order").addClass("svg-up");
    }, function () {
        $(".order__item-dropdown_menu").removeClass("open");
        $(".svg-order").removeClass("svg-up");
    }
);
$(".order__item-wrapper").click(function () {
    $(".order__item-dropdown_menu").addClass("open");
    $(".svg-order").addClass("svg-up");
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
    $(".order__item-dropdown_menu").removeClass('open')
})

$(".test").click(function(e){
    if(!$('.filter__inner').hasClass('d-none')){
        $('.filter__inner').addClass('d-none')
    }else{
        $(".test ~ .filter__inner").removeClass('d-none')
    }
})
