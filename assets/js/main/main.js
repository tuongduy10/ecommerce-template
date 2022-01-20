document.getElementById('nav__menubar-open').onclick = function () {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-none', 'd-block')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-close', 'nav-open')
}
document.getElementById('nav__overlay').onclick = function () {
    closeNavMobileList()
}
document.getElementById('nav__mobile-list-close').onclick = function () {
    closeNavMobileList()
}
function closeNavMobileList() {
    document.getElementById('nav__overlay').className = document.getElementById('nav__overlay').className.replace('d-block', 'd-none')
    document.getElementById('nav__mobile-list-open').className = document.getElementById('nav__mobile-list-open').className.replace('nav-open', 'nav-close')
}


$(".order__item-wrapper").hover(
    function () {
        $(".order__item-dropdown_menu").addClass("open");
        $(".svg-order").addClass("svg-up");
    }, function () {
        $(".order__item-dropdown_menu").removeClass("open");
        $(".svg-order").removeClass("svg-up");
    }
);
$(".order__item-wrapper").focus(function () {
    $(".order__item-dropdown_menu").addClass("open");
    $(".svg-order").addClass("svg-up");
})