// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const hello = document.querySelectorAll(".animat");
window.addEventListener("scroll", checkboxs)
checkboxs();
function checkboxs() {
    const bottom = window.innerHeight / 5 * 3
    hello.forEach(element => {
        const boxtop = element.getBoundingClientRect().top
        if (boxtop < bottom) {
            element.classList.add("show")
        }
        else {
            element.classList.remove("show")
        }
    });
}