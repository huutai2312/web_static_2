// Tao canvas cho Thien Ha Book
let ctx = document.querySelector("header canvas").getContext("2d");
ctx.font = "bolder 39px Arial";
let grd = ctx.createRadialGradient(137.5, 21, 0, 137.5, 21, 137.5);
grd.addColorStop(0, 'white');
grd.addColorStop(0.5, '#b4aee8');
grd.addColorStop(1, 'white');
ctx.fillStyle = grd;
ctx.fillText("Thanh Hà Book", 0, 35);
// ve canvas theo responsive
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.strokeText("Thanh Hà Book", 0, 35);
// end Tao canvas cho Thien Ha Book

// An hien search bar cho trang web co width > 1024px
if (window.matchMedia("(min-width: 1025px)").matches) {
    document.querySelector(".search-area>.fas").addEventListener('click', function () {
        if (document.querySelector(".search-area>input").style.display == 'block') {
            document.querySelector(".search-area>input").style.display = 'none';
            this.className = "fas fa-search";
        } else {
            document.querySelector(".search-area>input").style.display = 'block';
            this.className = "fas fa-times";
            document.querySelector(".search-area>input").focus();
        }
    });
}
// end An hien search bar

// An hien menu cho trang web co width < 1024px
if (window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelector(".menu>.fas").addEventListener('click', function () {
        document.querySelector(".header-bar>.menu-board").style.display = 'block';
    });
    document.querySelector(".exit-menu>.fas")
        .addEventListener('click', function () {
            document.querySelector(".header-bar>.menu-board").style.display = 'none';
        });
    document.querySelector(".menu-board>.menu-board-right")
        .addEventListener('click', function () {
            document.querySelector(".header-bar>.menu-board").style.display = 'none';
        });
}
// end An hien menu cho trang web co width < 1024px
// Tu dong chuyen len dau trang qua btn
window.addEventListener("scroll", function () {
    if (this.scrollY >= this.innerHeight) {
        document.querySelector("#to-top").style.display = "block";
    } else {
        document.querySelector("#to-top").style.display = "none";
    }
});
document.getElementById("to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    document.getElementById("ad").style.display = "block";
});
document.getElementById("ad").addEventListener("click", function () {
    this.style.display = "none";
});
// end Tu dong chuyen len dau trang qua btn