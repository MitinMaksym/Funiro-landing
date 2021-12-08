// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
 import { isMobile,removeClasses } from "./functions.js";

window.onload = function(){
    document.addEventListener('click', documentActions)

    function documentActions(e){
        const targetEl = e.target

        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetEl.classList.contains('menu__arrow')) {
                const parentItem = targetEl.closest('.menu__item')
                parentItem.classList.toggle('_hover')
            }
        if(!targetEl.closest('.menu__item')) {
            const itemsWithHover = document.querySelectorAll("._hover")
            if (itemsWithHover) {
                removeClasses(itemsWithHover, '_hover')
            }
        } 
            
        }
    }
}


