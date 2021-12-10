// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile, menuOpen, removeClasses } from "./functions.js";

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetEl = e.target;
    const searchInput = document.querySelector(".search-form");
    

    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetEl.classList.contains("menu__arrow")) {
        const parentItem = targetEl.closest(".menu__item");
        parentItem.classList.toggle("_hover");
      }
      if (!targetEl.closest(".menu__item")) {
        const itemsWithHover = document.querySelectorAll("._hover");
        if (itemsWithHover) {
          removeClasses(itemsWithHover, "_hover");
        }
      }

      if (targetEl.classList.contains("search-form__icon")) {
        searchInput.classList.toggle("_active");
      } else if (!targetEl.closest(".search-form")) {
        searchInput.classList.remove("_active");
      }
    }
  }

  // BURGER MENU
    if (window.innerWidth < 768 && isMobile.any()) {
        const menuBurger = document.querySelector(".icon-menu")
        const menu = document.querySelector('.menu__body')

        menuBurger.addEventListener('click',() => {
            menu.classList.toggle("_active")
        })
    } 
};
