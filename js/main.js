const close = document.querySelector('.header svg ');
close.addEventListener('click', closePromotion)

let body = document.body;
let newNav = document.createElement('nav')
let newUl = document.createElement('ul');
newUl.innerHTML = '';
let p = document.createElement('p')
let newNavParent = document.querySelector('.header')
let firstNavigation = document.querySelector('#nav-1');
let secondNavigation = document.querySelector('#nav-2');


let firstMenuElements = Array.from(secondNavigation.firstElementChild.children);
let secondMenuElements = Array.from(firstNavigation.firstElementChild.children);

addLiInUl(firstMenuElements);
addLiInUl(secondMenuElements)
newNav.append(newUl)
newNav.classList.add('special')
newNavParent.append(newNav)
window.addEventListener('resize', reacrResize);



function reacrResize() {
    if (window.matchMedia('(max-width: 800px)').matches) {
        if (burgerMenu.classList.contains('cross')) {
            body.classList.add('hidden')
        }
        else {
            body.classList.remove('hidden')
        }
        firstNavigation.classList.add('none')
        secondNavigation.classList.add('none')
        newNav.classList.remove('none')
        // 
    }
    else {
        // if (newNav.contains) {
        //     
        // }
        newNav.classList.add('none')
        firstNavigation.classList.remove('none')
        secondNavigation.classList.remove('none')
    }

}

function closePromotion() {
    document.querySelector('.header__promotion').classList.add('none')
    close.classList.add('none')
}



let burgerMenu = document.querySelector('.burger')
burgerMenu.addEventListener('click', closeOrOpen)
function closeOrOpen() {

    newNav.classList.toggle('open')
    burgerMenu.classList.toggle('cross')
    reacrResize()
}



function addLiInUl(arr) {
    arr.forEach((element) => newUl.append(element.cloneNode(true)))
}
reacrResize()