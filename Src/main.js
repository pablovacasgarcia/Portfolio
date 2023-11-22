window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var title = document.querySelector('.title__name');
    var menuNav = document.querySelector('.menu__nav');

    if (window.scrollY > 200) {
        header.style.position = 'fixed';
        header.style.padding = '10px 0';
        title.style.float = 'left';
        menuNav.style.float = 'right';
    } else {
        header.style.position = 'relative';
        header.style.padding = '20px 0';
        title.style.float = 'none';
        menuNav.style.float = 'none';
    }
});