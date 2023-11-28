window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var skillsBar = document.querySelectorAll('.skills--item--bar');
    var skillsLevel = document.querySelectorAll('.skills--item--level');
    var skills = document.querySelector('.skills');
    var opinions = document.querySelector('.opinions');
    var navList = document.querySelector('.menu__nav__list');
    

    if (window.scrollY > 100) {
        header.style.backgroundColor = 'var(--headfoot-background)';
        if (this.screen.width<1000){
            navList.style.backgroundColor = 'var(--headfoot-background)'
        } else {
            header.style.padding = '10px 0';
        }
    } else {
        header.style.background = 'none'
        navList.style.background = 'none'
        header.style.padding = '20px 0';
    }

    var observer = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting === true){
            i=0;
            skillsBar.forEach(bar => {
                bar.style.width=skillsLevel[i].textContent;
                bar.style.backgroundColor="green"
                i++;
            });
        }else {
            skillsBar.forEach(bar => {
                bar.style.width="0%"
                bar.style.backgroundColor="var(--text-color)"
            });
            
        }
            
    }, { threshold: [0] });

    observer.observe(skills);

});