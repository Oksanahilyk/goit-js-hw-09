!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body"),n=null;function o(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){n=setInterval(o,1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.8547f835.js.map