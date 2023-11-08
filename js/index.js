// CHUC NANG TAO SLIDE ANH CHO SECTION BANNER
let curIndex = 1; // xac dinh anh hien tai
// lay phan tu xac dinh vi tri anh vao mang
let dotIndex = document.getElementsByClassName("cur-index");
let srcImgArr = document.querySelectorAll(".banner img"); // lay anh vao mang
// cho anh dau tien hien thi
document.querySelector(".banner img:nth-child(" + 1 + ")")
    .style.left = 0;
// them, xu ly su kien chuyen toi anh tiep theo
document.querySelector(".banner .next")
    .addEventListener('click', function () {
        // xu ly nextIndex 1 --> 5
        let nextIndex = curIndex + 1;
        if (nextIndex > srcImgArr.length) {
            nextIndex = 1;
        }
        // * nth:child chay bat dau tu 1 
        // xu ly hieu ung khi chuyen anh
        document.querySelector(".banner img:nth-child(" + (nextIndex) + ")")
            .style.left = "100%";
        document.querySelector(".banner img:nth-child(" + (nextIndex) + ")")
            .setAttribute("class", "imgIn");
        document.querySelector(".banner img:nth-child(" + (curIndex) + ")")
            .style.left = 0;
        document.querySelector(".banner img:nth-child(" + (curIndex) + ")")
            .setAttribute("class", "imgOutLeft");
        // cap nhat curIndex
        curIndex = nextIndex;
        // hien thi vi tri anh
        indexChange();
    });
// end them, xu ly su kien chuyen toi anh tiep theo
// them, xu ly su kien quay lai anh phia truoc
document.querySelector(".banner .prev")
    .addEventListener('click', function () {
        // xu ly prevIndex 1 --> 5
        let prevIndex = curIndex - 1;
        if (prevIndex < 1) { // do dai mang nho nhat la 1
            prevIndex = srcImgArr.length;
        }
        // * nth:child chay bat dau tu 1
        // xu ly hieu ung khi chuyen anh
        document.querySelector(".banner img:nth-child(" + (prevIndex) + ")")
            .style.left = "-100%";
        document.querySelector(".banner img:nth-child(" + (prevIndex) + ")")
            .setAttribute("class", "imgIn");
        document.querySelector(".banner img:nth-child(" + (curIndex) + ")")
            .style.left = 0;
        document.querySelector(".banner img:nth-child(" + (curIndex) + ")")
            .setAttribute("class", "imgOutRight");
        // cap nhat curIndex
        curIndex = prevIndex;
        // hien thi vi tri anh
        indexChange();
    });
// end them, xu ly su kien quay lai anh phia truoc
// nhan vao dau cham chuyen den anh tuong ung
for (let i = 0; i < dotIndex.length; i++) {
    dotIndex[i].addEventListener("click", function () {
        while (curIndex != (i + 1)) {
            if (curIndex < (i + 1)) {
                document.querySelector(".banner .next").click();
            } else {
                document.querySelector(".banner .prev").click();
            }
        }
    });
}
// end nhan vao dau cham chuyen den anh tuong ung
// ham thay doi dau cham hien thi vi tri anh
function indexChange() {
    for (let i = 0; i < dotIndex.length; i++) {
        if (dotIndex[i].id == String(curIndex)) {
            dotIndex[i].style.opacity = 1;
        } else {
            dotIndex[i].style.opacity = 0.3;
        }
    }
}
// end ham thay doi dau cham hien thi vi tri anh 
// tu dong chuyen banner sau 7s
let autoSwitch = setInterval(
    function () {
        document.querySelector(".banner .next").click();
    },
    7000
);
// end tu dong chuyen banner sau 7s
// END CHUC NANG TAO SLIDE ANH CHO SECTION BANNER

// CHUC NANG DEM NGUOC THOI GIAN CUA FLASH SALE
// tao bien cho gio, phut, giay
let hour = 4; // dem nguoc mot dot sale la 4 tieng
let min = 0;
let sec = 0;
let countDown = setInterval(
    function () {
        // xu ly dem nguoc
        sec--;
        if (sec < 0) {
            sec = 59;
            min--;
            if (min < 0) {
                min = 59;
                hour--;
                if (hour == 0) {
                    hour = 4;
                    min = sec = 0; // dem nguoc mot dot sale la 4 tieng
                }
            }
        }
        // hien thi dem nguoc
        if (sec < 10) {
            document.querySelector(".count-down-cell > .sec").innerText = "0" + sec;
        } else {
            document.querySelector(".count-down-cell > .sec").innerText = sec;
        }
        if (min < 10) {
            document.querySelector(".count-down-cell > .min").innerText = "0" + min;
        } else {
            document.querySelector(".count-down-cell > .min").innerText = min;
        }
        document.querySelector(".count-down-cell > .hour").innerText = "0" + hour;
    },
    1000 // cu sau 1s se thay doi dem nguoc
);
// END CHUC NANG DEM NGUOC THOI GIAN CUA FLASH SALE

// CHUC NANG SCROLL NGANG CHO THANH SAN PHAM FLASH SALE
// dat cac chi so scroll
let scrollLeft = 0;
let scrollLeftMax = document.querySelector(".prod-bar").scrollWidth -
    document.querySelector(".prod-bar").offsetWidth;

// lay chieu dai cho mot san pham
let prodWidth = 248; // thiet bi pc lon hon 1024px
if (window.matchMedia('(max-width: 740px)').matches) {
    prodWidth = 165; // mobile
} else if (window.matchMedia('(max-width: 1024px)').matches) {
    prodWidth = 215; // tablet
} 

// lay gia tri cho moi lan scroll
let eachScroll = prodWidth; // mac dinh se chi scroll qua 1 san pham
let prodBarWidth = document.querySelector(".prod-bar").offsetWidth; // lay chieu dai thanh prod-bar
// neu chieu dai thanh chua lon hon chieu dai san pham nhieu hon 2 lan 
// se chinh lai gia tri cho moi lan scroll
if ((prodBarWidth / prodWidth) >= 2) {
    if ((prodBarWidth % prodWidth) === 0) {
        eachScroll = (Math.floor(prodBarWidth / prodWidth) - 1) * prodWidth;
    } else {
        eachScroll = Math.floor(prodBarWidth / prodWidth) * prodWidth;
    }  
}

// lay lai cac gia tri can thiet khi nguoi dung thay doi chieu dai thiet bi
window.addEventListener('resize', function () {
    // dat cac chi so scroll
    scrollLeftMax = document.querySelector(".prod-bar").scrollWidth -
        document.querySelector(".prod-bar").offsetWidth;

    // lay chieu dai cho mot san pham
    prodWidth = 248; // thiet bi pc lon hon 1024px
    if (window.matchMedia('(max-width: 740px)').matches) {
        prodWidth = 165; // mobile
    } else if (window.matchMedia('(max-width: 1024px)').matches) {
        prodWidth = 215; // tablet
    } 

    // lay gia tri cho moi lan scroll
    eachScroll = prodWidth; // mac dinh se chi scroll qua 1 san pham
    prodBarWidth = document.querySelector(".prod-bar").offsetWidth; // lay chieu dai thanh prod-bar
    // neu chieu dai thanh chua lon hon chieu dai san pham nhieu hon 2 lan 
    // se chinh lai gia tri cho moi lan scroll
    if ((prodBarWidth / prodWidth) >= 2) {
        if ((prodBarWidth % prodWidth) === 0) {
            eachScroll = (Math.floor(prodBarWidth / prodWidth) - 1) * prodWidth;
        } else {
            eachScroll = Math.floor(prodBarWidth / prodWidth) * prodWidth;
        }  
    }
});
// khi nguoi dung nhan se scroll theo gia tri cua eachScroll

document.querySelector(".flash-sale .to-right").addEventListener("click", function () {
    document.querySelector(".prod-bar").scrollBy({
        top: 0,
        left: eachScroll,
        behavior: 'smooth'
    });
    scrollLeft += eachScroll;
    showHideBtn();
});
document.querySelector(".flash-sale .to-left").addEventListener("click", function () {
    document.querySelector(".prod-bar").scrollBy({
        top: 0,
        left: -eachScroll,
        behavior: 'smooth'
    });
    scrollLeft -= eachScroll;
    showHideBtn();
});
// an hien nut next, prev tran thanh flash sale
function showHideBtn() {
    if (scrollLeft <= 0) {
        document.querySelector('.to-left').style.display = 'none';
        scrollLeft = 0;
    } else {
        document.querySelector('.to-left').style.display = 'block';
    }
    if (scrollLeft >= scrollLeftMax) {
        document.querySelector('.to-right').style.display = 'none';
        scrollLeft = scrollLeftMax;
    } else {
        document.querySelector('.to-right').style.display = 'block';
    }
    // alert(document.querySelector(".prod-bar").offsetWidth);
    // alert(prodWidth);
    // alert(eachScroll);
}
// END CHUC NANG SCROLL NGANG CHO THANH SAN PHAM FLASH SALE

// CHUC NANG XEM THONG TIN CHI TIET CUA SAN PHAM TOP KHI MAN HINH > 1024 PX
if (window.matchMedia("(min-width: 1025px)").matches) {
    let prodArr = document.querySelectorAll(".top-prod .cont-prod");
    let prodDetailArr = document.querySelectorAll(".top-prod .prod-detail .cont-detail");
    prodDetailArr[0].style.display = "block";
    for (let i = 0; i < prodArr.length; i++) {
        prodArr[i].addEventListener("mouseenter", function () {
            for (let y = 0; y < prodDetailArr.length; y++) {
                prodDetailArr[y].style.display = "none";
            }
            prodDetailArr[i].style.display = "block";
        });
    }
}
// END CHUC NANG XEM THONG TIN CHI TIET CUA SAN PHAM TOP KHI MAN HINH > 1024 PX