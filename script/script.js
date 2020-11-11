"use strict";

const tabs = document.getElementsByClassName("tabs-title");
const content = document.getElementsByClassName("content");

function toggleHelp () {
    for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("active");
            }
        }

Array.from(tabs).forEach(element => {
    element.addEventListener("click", ev => {

        toggleHelp();
        ev.target.classList.toggle("active", true);
        
        const menuItem = Array.from(tabs).findIndex(menuItem => menuItem.classList.contains("active"));
        
        for (let i = 0; i < content.length; i++) {
            if (i === menuItem) {
                content[i].classList.toggle("shown", true);
            } else {
                content[i].classList.toggle("shown", false);
                content[i].classList.toggle("hidden", true)
            }
        }
    });
});