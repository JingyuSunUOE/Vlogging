"use strict"
window.addEventListener('DOMContentLoaded', function () {
    console.log("dom content is ready");
    let menu = document.querySelector('#menu');
    console.log(menu);
    menu.addEventListener('click', function (ev) {
        ev.preventDefault;
        let nav = document.querySelector('nav.sitenav');
        console.log(nav);
        if (nav.classList.contains('presentonpage')) {
            nav.classList.remove('presentonpage');
        } else {
            nav.classList.add('presentonpage');
        }

    });
});