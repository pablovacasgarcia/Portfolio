window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var title = document.querySelector('.title');
    var menuNav = document.querySelector('.menu__nav');
    var skillsBar = document.querySelectorAll('.skills--item--bar');
    var skills = document.querySelector('.skills');
    var aboutme = document.querySelector('.aboutme');
    var opinions = document.querySelector('.opinions');
    

    if (window.scrollY > header.style.width+200) {
        header.style.backgroundColor = '#333'
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'none'
        header.style.padding = '20px 0';
    }

    if (window.scrollY > skills.getBoundingClientRect().top+1300 && window.scrollY < opinions.getBoundingClientRect().top+1800) {
        skillsBar.forEach(bar => {
            bar.style.width="100%"
        });
        
    } else {
        skillsBar.forEach(bar => {
            bar.style.width="0%"
        });
        
    }
});