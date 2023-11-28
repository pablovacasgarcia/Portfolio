window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var title = document.querySelector('.title');
    var menuNav = document.querySelector('.menu__nav');
    var skillsBar = document.querySelectorAll('.skills--item--bar');
    var skillsLevel = document.querySelectorAll('.skills--item--level');
    var skills = document.querySelector('.skills');
    var aboutme = document.querySelector('.aboutme');
    var opinions = document.querySelector('.opinions');
    

    if (window.scrollY > 100) {
        header.style.backgroundColor = 'var(--headfoot-background)'
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'none'
        header.style.padding = '20px 0';
    }

    if (window.scrollY > skills.getBoundingClientRect().top+1900 && window.scrollY < opinions.getBoundingClientRect().top+2500) {
        i=0;
        skillsBar.forEach(bar => {
            bar.style.width=skillsLevel[i].textContent;
            bar.style.backgroundColor="green"
            i++;
        });
        
    } else {
        skillsBar.forEach(bar => {
            bar.style.width="0%"
            bar.style.backgroundColor="var(--text-color)"
        });
        
    }
});