/* Your JS here. */
const header = document.querySelector('.nav-bar');

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled") 
    }
})
