// CHUC NANG TU DONG THEM CAC SAN PHAM CON THONG QUA MANG - .PROD-LIST
// tao bien mang chua cac doi tuong san pham
let prodItemArr = [
    {
        "salePercent": "8",
        "imgLink": "tamhoncaothuong",
        "name": "Tâm Hồn Cao Thượng",
        "price": "50.600",
        "oldPrice": "55"
    },
    {
        "salePercent": "6",
        "imgLink": "trainghiemsucmanhhientai",
        "name": "Trải Nghiệm Sức Mạnh Hiện Tại",
        "price": "92.120",
        "oldPrice": "98"
    },
    {
        "salePercent": "7",
        "imgLink": "kiepnaotacungtimthay",
        "name": "Kiếp Nào Ta Cũng Tìm Thấy Nhau",
        "price": "79.050",
        "oldPrice": "85"
    },
    {
        "salePercent": "10",
        "imgLink": "trainghiemkhachhangxuatsac",
        "name": "Trải Nghiệm Khách Hàng Xuất Sắc",
        "price": "225.000",
        "oldPrice": "250"
    },
    {
        "salePercent": "2",
        "imgLink": "gieoniemtincuocsong",
        "name": "Gieo Niềm Tin Cuộc Sống",
        "price": "49.000",
        "oldPrice": "50"
    },
    {
        "salePercent": "5",
        "imgLink": "lamnguoithuvi",
        "name": "Làm Người Thú Vị",
        "price": "121.600",
        "oldPrice": "128"
    },
    {
        "salePercent": "3",
        "imgLink": "toitungnghimoithuse",
        "name": "Tôi Từng Nghĩ Mọi Thứ Sẽ Ổn Khi Trở Thành Người Lớn",
        "price": "93.120",
        "oldPrice": "96"
    },
    {
        "salePercent": "5",
        "imgLink": "tinhhoatrituedothai",
        "name": "Tinh Hoa Trí Tuệ Do Thái",
        "price": "93.100",
        "oldPrice": "98"
    },
    {
        "salePercent": "10",
        "imgLink": "taichinhdoanhnghiep",
        "name": "Tài Chính Doanh Nghiệp",
        "price": "593.100",
        "oldPrice": "659"
    },
    {
        "salePercent": "8",
        "imgLink": "nonggianlabannangtinh",
        "name": "Nóng Giận Là Bản Năng, Tĩnh Lặng Là Bãn Lĩnh",
        "price": "81.880",
        "oldPrice": "89"
    },
    {
        "salePercent": "6",
        "imgLink": "nghethuattuduyphanbien",
        "name": "Nghệ Thuật Tư Duy Phản Biện",
        "price": "121.260",
        "oldPrice": "129"
    },
    {
        "salePercent": "3",
        "imgLink": "matbiec",
        "name": "Mắt Biếc",
        "price": "106.700",
        "oldPrice": "110"
    },
    {
        "salePercent": "7",
        "imgLink": "cafecungtony",
        "name": "Cafe Cùng Tony",
        "price": "79.050",
        "oldPrice": "85"
    },
    {
        "salePercent": "2",
        "imgLink": "boconganhnho",
        "name": "Bồ Công Anh Nhỏ",
        "price": "69.620",
        "oldPrice": "69"
    },
    {
        "salePercent": "6",
        "imgLink": "haygoidungtentoi",
        "name": "Hãy Gọi Đúng Tên Tôi",
        "price": "54.520",
        "oldPrice": "58"
    },
    {
        "salePercent": "8",
        "imgLink": "lungchungcodon",
        "name": "Lưng Chừng Cô Đơn",
        "price": "79.120",
        "oldPrice": "86"
    },
    {
        "salePercent": "10",
        "imgLink": "thaydoicuocsongvoinhan",
        "name": "Thay Đổi Cuộc Sống Với Nhân Số Học",
        "price": "223.200",
        "oldPrice": "248"
    },
    {
        "salePercent": "4",
        "imgLink": "tuoitrehoangdai",
        "name": "Tuổi Trẻ Hoang Dại",
        "price": "91.200",
        "oldPrice": "95"
    },
    {
        "salePercent": "5",
        "imgLink": "nhungchuyentaumuahe",
        "name": "Những Chuyến Tàu Mùa Hè",
        "price": "83.600",
        "oldPrice": "88"
    },
    {
        "salePercent": "7",
        "imgLink": "suimlangvabaycuu",
        "name": "Sự Im Lặng Và Bầy Cừu",
        "price": "106.950",
        "oldPrice": "115"
    }
];



// chen them cac san pham vao danh sach
let prodList = document.querySelector('ul.prod-list'); // lay danh sach
// tao vong lap de chen
for(let i = 0; i < prodItemArr.length; i++){
    let prodItem = `
        <li class="prod-item">
            <span class="sale-percent">
                -${prodItemArr[i].salePercent}%
            </span>
            <a class="contain-img" href="#">
                <img src="./images/prod/books/${prodItemArr[i].imgLink}.png" alt="">
            </a>
            <span class="name">
                ${prodItemArr[i].name}
            </span>
            <div class="price">
                <span>${prodItemArr[i].price}</span>đ
            </div>
            <div class="old-price">
                <span>${prodItemArr[i].oldPrice}.000</span>đ
            </div>
            <div class="add-to-cart">
                THÊM VÀO&nbsp;
                <i class="fas fa-shopping-cart"></i>
            </div>
        </li>
    `;
    prodList.innerHTML += prodItem;
}
// END CHUC NANG TU DONG THEM CAC SAN PHAM CON THONG QUA MANG - .PROD-LIST



// CHUC NANG THEM CAC SAN PHAM VAO GIO HANG QUA LOCAL-STORAGE - .PROD-ITEM
let prodInCart = []; // tao mang cac san pham da duoc them vao gio hang

// kiem tra xem co mang prodInCart trong local store hay chua
if(localStorage.getItem('prodInCartStorage') !== null){
    // neu roi thi chuyen vao mang gio hang
    prodInCart = JSON.parse(localStorage.getItem('prodInCartStorage'));
};

let addToCartBtnArr = document.querySelectorAll('.prod-item .add-to-cart'); // lay mang cac nut theo vao gio

// them su kien lam thay doi mang prodInCart khi nhan vao cac nut them vao gio
for(let i = 0; i < addToCartBtnArr.length; i++){
    addToCartBtnArr[i].addEventListener('click', function(){
        // lay ten san pham
        let prodName = this.parentElement.querySelector('.name').innerText;

        // tao bien check xem san pham co trong gio hang hay chua
        let checkProdInCart = false; // mac dinh la chua

        // tao vong lap de check xem san pham co trong gio hang hay chua
        for(let i = 0; i < prodInCart.length; i++){
            if(prodInCart[i].name === prodName){
                // co roi thi tang so luong
                prodInCart[i].quantity++;
                // va gan bien check la true
                checkProdInCart = true;
                // sau do thoat vong lap
                break;
            }
        }

        // neu check la false => chua ton tai thi tao doi tuong san pham moi va cho vao mang prodInCart
        if(checkProdInCart === false){
            // tao doi tuong san pham 
            let prodObject = {
                // ten san pham
                name: this.parentElement.querySelector('.name').innerText,
    
                // link anh san pham
                imgLink: this.parentElement.querySelector('img').getAttribute('src'),
    
                // gia san pham
                price: this.parentElement.querySelector('.price span').innerText,
    
                // gia cu cua san pham
                oldPrice: this.parentElement.querySelector('.old-price span').innerText,
    
                // so luong san pham
                quantity: 1
            }
            
            // them san pham vao mang prodInCart
            prodInCart.push(prodObject);
        }
        // luu mang prodInCart vao localStorage
        localStorage.setItem('prodInCartStorage', JSON.stringify(prodInCart));
    })
}
// END CHUC NANG THEM CAC SAN PHAM VAO GIO HANG QUA LOCAL-STORAGE - .PROD-ITEM



// CHUC NANG KIEM TRA CHECK BOX - .SELECT-BAR
// lay mang check box the loai va muc gia
let catCboxArr = document.querySelectorAll('#cat .select-item input');
let priceCboxArr = document.querySelectorAll('#price .select-item input');
// them su kien click vao cac check box the loai
// phan tu mang so 0 la lua chon tat ca
catCboxArr[0].addEventListener('click', function () {
    // tao vong lap de bo chon cac phan tu khong phai tat ca
    for (let i = 1; i < catCboxArr.length; i++) {
        if (catCboxArr[i].checked == true) {
            catCboxArr[i].click(); // true click thanh false
        }
    }
    if (catCboxArr[0].checked == false) {
        catCboxArr[0].checked = true; // tranh nguoi dung bo chon tat ca
    }
});
for (let i = 1; i < catCboxArr.length; i++) {
    catCboxArr[i].addEventListener('click', function () {
        let countCheck = 0;
        for (let i = 1; i < catCboxArr.length; i++) {
            if (catCboxArr[i].checked == true) {
                countCheck++;
            }
        }
        // neu chon tat ca the loai thi chuyen qua o tat ca
        // neu khong chon the loai nao thi cung chuyen qua o tat ca
        if (countCheck == 0 || countCheck == (catCboxArr.length - 1)) {
            catCboxArr[0].click();
        } else { // neu co chon thi bo chon checkbox tat ca
            catCboxArr[0].checked = false;
            catCboxArr[0].disabled = false; // cho phep nguoi dung chon o tat ca
        }
    });
}
// them su kien click vao cac check box muc gia
// phan tu mang so 0 la lua chon tat ca
priceCboxArr[0].addEventListener('click', function () {
    // tao vong lap de bo chon cac phan tu khong phai tat ca
    for (let i = 1; i < priceCboxArr.length; i++) {
        if (priceCboxArr[i].checked == true) {
            priceCboxArr[i].click(); // true click thanh false
        }
    }
    if (priceCboxArr[0].checked == false) {
        priceCboxArr[0].checked = true; // tranh nguoi dung bo chon tat ca
    }
});
for (let i = 1; i < priceCboxArr.length; i++) {
    priceCboxArr[i].addEventListener('click', function () {
        let countCheck = 0;
        for (let i = 1; i < priceCboxArr.length; i++) {
            if (priceCboxArr[i].checked == true) {
                countCheck++;
            }
        }
        // neu chon tat ca the loai thi chuyen qua o tat ca
        // neu khong chon the loai nao thi cung chuyen qua o tat ca
        if (countCheck == 0 || countCheck == (priceCboxArr.length - 1)) {
            priceCboxArr[0].click();
        } else { // neu co chon thi bo chon checkbox tat ca
            priceCboxArr[0].checked = false;
            priceCboxArr[0].disabled = false; // cho phep nguoi dung chon o tat ca
        }
    });
}
// END CHUC NANG KIEM TRA CHECK BOX - .SELECT-BAR

// CHUC NANG DANH SACH LUA CHON SAP XEP - .FILTER-SORT
// an hien danh sach lua chon thong qua click
document.querySelector('.filter-sort').addEventListener('click', function () {
    let filterSortList = document.querySelector('.filter-sort-list');
    if (filterSortList.style.display == 'none') {
        filterSortList.style.display = 'block';
    } else {
        filterSortList.style.display = 'none';
    }
});
// lay mang cac phan tu de chon loai sap xep
let sortArr = document.querySelectorAll('.filter-sort-list li');
for (let i = 0; i < sortArr.length; i++) {
    // khi click vao phan tu thi se thay doi .filter-sort-choosen theo cai duoc chon
    sortArr[i].addEventListener('click', function () {
        let filterSortChoosen = document.querySelector('.filter-sort-choosen');
        filterSortChoosen.innerText = sortArr[i].innerText;
        filterSortChoosen.setAttribute('value', sortArr[i].getAttribute('value'));
        document.querySelector('.filter-sort').click(); // an danh sach sau khi chon xong
    });
}
// END CHUC NANG DANH SACH LUA CHON SAP XEP - .FILTER-SORT

// CHUC NANG THEM XOA TAG LOC THEO: - .FILTER-TAG-LIST
// da lay mang cac check box tai dong 3,4
// them su kien cho tat ca checkbox the loai
for (let i = 1; i < catCboxArr.length; i++) {
    // khi click vao checkbox se them hoac xoa tag tuong ung
    catCboxArr[i].addEventListener('click', function () {
        // lay tieu de cua cac check box
        let innerText = catCboxArr[i].parentElement.querySelector('label').innerText;
        // them tag tuong ung khi checkbox duoc check
        if (catCboxArr[i].checked == true) {
            let newTag = document.createElement('span');
            newTag.classList.add('filter-by');
            newTag.innerHTML = innerText + '<i class="fas fa-times-circle"></i>';
            // khi click vao tag se xoa tag dong thoi bo chon checkbox
            newTag.addEventListener('click', function () {
                document.querySelector('.filter-tag-list').removeChild(this);
                catCboxArr[i].click(); // click de bo check
            });
            document.querySelector('.filter-tag-list').appendChild(newTag);
        }
        // xoa tag tuong ung khi checkbox da bi bo check
        else if (catCboxArr[i].checked == false) {
            // lay mang tag hien tai
            let tagArr = document.querySelectorAll('.filter-tag-list .filter-by');
            // xoa qua vong lap
            for (let y = 0; y < tagArr.length; y++) {
                if (innerText == tagArr[y].innerText) {
                    document.querySelector('.filter-tag-list').removeChild(tagArr[y]);
                    break; // thoat vong lap khi da hoan thanh
                }
            }
        }
        // an hien dong chu tat ca
        // lay mang tag hien tai
        let tagArr = document.querySelectorAll('.filter-tag-list .filter-by');
        // neu khong co tag nao thi hien dong chu tat ca
        if (tagArr.length == 0) {
            document.querySelector('.filter-tag-list .filter-by-all').style.display = 'block';
        }
        // neu co tag thi an dong chu tat ca
        else if (tagArr.length > 0) {
            document.querySelector('.filter-tag-list .filter-by-all').style.display = 'none';
        }
    });
}
// them su kien cho tat ca checkbox muc gia
for (let i = 1; i < priceCboxArr.length; i++) {
    // khi click vao checkbox se them hoac xoa tag tuong ung
    priceCboxArr[i].addEventListener('click', function () {
        let innerText = priceCboxArr[i].parentElement.querySelector('label').innerText;
        // them tag tuong ung khi checkbox duoc check
        if (priceCboxArr[i].checked == true) {
            let newTag = document.createElement('span');
            newTag.classList.add('filter-by');
            newTag.innerHTML = innerText + '<i class="fas fa-times-circle"></i>';
            // khi click vao tag se xoa tag dong thoi bo chon checkbox
            newTag.addEventListener('click', function () {
                document.querySelector('.filter-tag-list').removeChild(this);
                priceCboxArr[i].click(); // click de bo check
            });
            document.querySelector('.filter-tag-list').appendChild(newTag);
        }
        // xoa tag tuong ung khi checkbox da bi bo check
        else if (priceCboxArr[i].checked == false) {
            // lay mang tag hien tai
            let tagArr = document.querySelectorAll('.filter-tag-list .filter-by');
            // xoa qua vong lap
            for (let y = 0; y < tagArr.length; y++) {
                if (innerText == tagArr[y].innerText) {
                    document.querySelector('.filter-tag-list').removeChild(tagArr[y]);
                    break; // thoat vong lap khi da hoan thanh
                }
            }
        }
        // an hien dong chu tat ca
        // lay mang tag hien tai
        let tagArr = document.querySelectorAll('.filter-tag-list .filter-by');
        // neu khong co tag nao thi hien dong chu tat ca
        if (tagArr.length == 0) {
            document.querySelector('.filter-tag-list .filter-by-all').style.display = 'block';
        }
        // neu co tag thi an dong chu tat ca
        else if (tagArr.length > 0) {
            document.querySelector('.filter-tag-list .filter-by-all').style.display = 'none';
        }
    });
}
// tiep tuc neu chon tat ca ~
// END CHUC NANG THEM XOA TAG LOC THEO: - .FILTER-TAG-LIST

// CHUC NANG DONG MO SIDE-BAR KHI MAN HINH <= 1024PX - ASIDE
document.querySelector('.close-aside').addEventListener('click', function () {
    document.querySelector('aside').style.display = 'none';
});
document.querySelector('.aside-cover').addEventListener('click', function () {
    document.querySelector('aside').style.display = 'none';
});
document.querySelector('.filter-btn').addEventListener('click', function () {
    document.querySelector('aside').style.display = 'block';
});
// END CHUC NANG DONG MO SIDE-BAR KHI MAN HINH <= 1024PX - ASIDE