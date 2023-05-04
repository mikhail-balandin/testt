window.onscroll = function showHeader() {
    var header = document.querySelector('.header__nav');
    if(window.pageYOffset > 400) {
        header.classList.add('header__nav-fixed');
    } else{
        header.classList.remove('header__nav-fixed');
    }
}