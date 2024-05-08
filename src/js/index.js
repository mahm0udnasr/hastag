const menu = document.getElementById("menu");
const navbar = document.getElementById("list-nav-mobile");
navbar.style.display = 'none';
menu.addEventListener("click", ()=> {
    if (navbar.style.display == 'none') {
        navbar.style.display = 'block'
    } else {
        navbar.style.display = 'none';
    }
})

window.addEventListener("scroll", ()=> {
    const stickyNav = document.querySelector("nav");
    stickyNav.classList.toggle("sticky", window.scrollY > 0);
})

// get all service box
let serviceBox = document.querySelectorAll(".service");
// onclick box
let msgOne,msgTwo;
msgOne = "خدمات الأعلانات الممولة";
msgTwo = "خدمات تصميم المواقع";
let id = 0;
serviceBox[0].onclick = ()=> {
            window.location.href = `./pages/services.html?id=${id+1}`;
        }
serviceBox[1].onclick = ()=> {
            window.location.href = `./pages/services.html?id=${id+2}`;
        }
serviceBox[2].onclick = ()=> {
            window.open(`https://wa.me/+201005055305/?text=${msgOne}`, '_blank');
        }
serviceBox[3].onclick = ()=> {
            window.location.href = `./pages/services.html?id=${id+4}`;
        }
serviceBox[4].onclick = ()=> {
            window.open(`https://wa.me/+201005055305/?text=${msgTwo}`, '_blank');
        }
serviceBox[5].onclick = ()=> {
            window.location.href = `./pages/services.html?id=${id+6}`;
        }