let btns = document.querySelectorAll('.btn')

let appContainer = document.querySelectorAll('.app')
let cardContainer = document.querySelectorAll('.cardd')
let webContainer = document.querySelectorAll('.web')

let row = document.querySelector('.row')
let appcon = document.querySelector('.appcon')
let cardcon = document.querySelector('.cardcon')
let webcon = document.querySelector('.webcon')

let pages = [allPage, appPage, cardPage, webPage]

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener(`click`, pages[i])

}


function allPage() {
    removeActive();
    for (let i = 0; i < cardContainer.length; i++) {
        btns[0].classList.add('activeBtn');
        row.style.display='flex'
        appcon.style.display='none'
        webcon.style.display='none'
        cardcon.style.display='none'
            }
}
function appPage() {
    removeActive();
    for (let i = 0; i < cardContainer.length; i++) {
        btns[1].classList.add('activeBtn');
        appcon.style.display = `flex`;
        cardcon.style.display = `none`;
        webcon.style.display = `none`;
        row.style.display='none'
    }
};
function cardPage() {
    removeActive();
    for (let i = 0; i < cardContainer.length; i++) {
        btns[2].classList.add('activeBtn');
        cardcon.style.display = `flex`;
        appcon.style.display = `none`;
        webcon.style.display = `none`;
        row.style.display='none'

    }
};
function webPage() {
    removeActive();
    for (let i = 0; i < cardContainer.length; i++) {
        btns[3].classList.add('activeBtn');
        webcon.style.display=`flex`
        cardcon.style.display = `none`;
        appcon.style.display = `none`;
        row.style.display='none'

    }
};

function removeActive() {
    for (let i = 0; i < 4; i++) {
        btns[i].classList.remove('activeBtn')

    }
}

