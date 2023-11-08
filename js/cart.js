// LAY DANH SACH SAN PHAM TU LOCAL-STORAGE
// lay du lieu gio hang tu localStorage
let prodInCart = JSON.parse(localStorage.getItem('prodInCartStorage')); // tao mang gio hang

// CHUC NANG HIEN THI GIO HANG THEO KEY PROD IN CART STORAGE DA LUU TRONG LOCALSTORAGE
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// kiem tra xem co mang prodInCart trong local store hay chua
// localStorage.removeItem('prodInCartStorage');
if (localStorage.getItem('prodInCartStorage') === null) {
    // neu chua thi hien thi gio hang trong
    document.querySelector('.cart-empty').style.display = 'block';

} else {
    // neu roi thi hien thi chi tiet gio hang
    document.querySelector('.cart-detail').style.display = 'flex';
    // flex cung la mot dang hien thi, co hoi khac so voi block

    // lay phan tu chua cac san pham trong gio hang
    let cart = document.querySelector('ul.prod-list');
    // them cac phan tu con vao gio hang qua vong lap
    for (let i = 0; i < prodInCart.length; i++) {
        // tao prod item
        let prodItem = `
            <li class="prod-item">
                <div class="contain-img">
                    <img src="${prodInCart[i].imgLink}" alt="">
                </div>
                <div class="contain-inf">
                    <div class="prod-inf">
                        <span class="prod-name">
                            ${prodInCart[i].name} 
                        </span>
                        <div class="price">
                            <span>${prodInCart[i].price}</span> đ 
                        </div>
                        <div class="old-price">
                            <span>${prodInCart[i].oldPrice}</span> đ
                        </div>
                    </div>
                    <div class="quantity">
                        <div class="handling">
                            <span class="sub">
                                <i class="fas fa-minus"></i>
                            </span>
                            <input type="text" value="${prodInCart[i].quantity}" maxlength="3">
                            <span class="add">
                                <i class="fas fa-plus"></i>
                            </span>
                        </div>
                        <span class="warning">
                            <!-- nhac nho qua file js -->
                        </span>
                        <span class="cancel">
                            <i class="far fa-trash-alt"></i>
                        </span>
                    </div>
                </div>
            </li>
        `;
        // chen vao gio hang prod item vua tao
        cart.innerHTML += prodItem;
    }
};



// CHUC NANG TINH TONG SO TIEN CUA CAC SAN PHAM - .TOTAL
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
function calcTotalProdPrice(check) {
    // neu kiem tra dung thi tinh tong tien
    if (check === true) {
        // lay mang cac san pham
        let prodArr = document.querySelectorAll('.prod-item');

        // neu khong co san pham nao thi 
        if (prodArr.length === 0) {
            // hien thi gio hang trong
            document.querySelector('.cart-empty').style.display = 'block';
            // an chi tiet gio hang
            document.querySelector('.cart-detail').style.display = 'none';
            // xoa du lieu gio hang tai LocalStorage
            localStorage.removeItem('prodInCartStorage');
        }

        // tao bien tinh tong
        let totalProdPrice = 0;
        // tinh tong qua vong lap
        for (let i = 0; i < prodArr.length; i++) {
            // lay gia san pham
            let prodPrice = Number(prodArr[i].querySelector('.price span').innerText);
            // lay so luong san pham
            let prodQuantity = Number(prodArr[i].querySelector('.quantity input').value);
            // cong vao tong gia tien
            totalProdPrice = totalProdPrice + (prodPrice * prodQuantity);
        }

        // lam tron tong tien
        totalProdPrice = Math.round(totalProdPrice * 1000) / 1000;

        // lam tong tien co 3 chu so thap phan sau dau .
        totalProdPrice = totalProdPrice.toFixed(3);

        // hien thi tong tien 
        document.querySelector('.total .price').classList.remove('error');
        document.querySelector('.total .price').innerText = totalProdPrice + ' đ';

    } else if (check === false) { // kiem tra sai thi hien thi thong bao
        // hien thi loi 
        document.querySelector('.total .price').classList.add('error');
        document.querySelector('.total .price').innerText = 'Vui lòng nhập đúng số lượng của các sản phẩm !';
    }
}
// khi tai trang web thuc hien tinh tong
window.onload = function () {
    // goi ham tinh tong
    calcTotalProdPrice(true);
}



// CHUC NANG LUU TRU THONG TIN DANH SACH SAN PHAM VAO LOCAL STORAGE KHI CO THAY DOI- .PROD-LIST
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// thay doi so luong
function saveQuantityProdInCart(prodName, prodQuantity) {
    // check qua vong lap
    for (let i = 0; i < prodInCart.length; i++) {
        // neu ten trung thi thay doi thong tin
        if (prodInCart[i].name === prodName) {
            // doi thong tin so luong
            prodInCart[i].quantity = prodQuantity;
            // thoat vong lap
            break;
        }
    }

    // luu mang prodInCart vao localStorage
    localStorage.setItem('prodInCartStorage', JSON.stringify(prodInCart));
}
// xoa san pham
function deleteProdInCart(prodName) {// check qua vong lap
    for (let i = 0; i < prodInCart.length; i++) {
        // neu ten trung thi thay doi thong tin
        if (prodInCart[i].name === prodName) {
            // xoa san pham
            prodInCart.splice(i, 1);
            // thoat vong lap
            break;
        }
    }
    
    // luu mang prodInCart vao localStorage
    localStorage.setItem('prodInCartStorage', JSON.stringify(prodInCart));
}



// CHUC NANG KIEM SOAT SO LUONG QUA INPUT CHO TUNG SAN PHAM - .PROD-LIST
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// lay mang cac phan tu chua cac yeu to xu ly so luong
let controlQuantityArr = document.querySelectorAll('.prod-item .quantity');

// tao vong lap de them su kien kiem soat so luong cho cac phan tu
for (let i = 0; i < controlQuantityArr.length; i++) {
    // them su kien input de nhac nho thong qua viec nhap cua nguoi dung
    controlQuantityArr[i].querySelector('input').addEventListener('input', function () {
        // lay phan tu de nhac nho nguoi dung neu co nhap sai
        let notification = this.parentElement.parentElement.querySelector('.warning');

        // xet truong hop nguoi dung nhap dung/sai
        if (Number(this.value) >= 1 && Number(this.value) <= 99) { // nhap dung
            notification.innerText = '';

            // goi ham tinh tong tien
            calcTotalProdPrice(true);

        } else { // nhap sai

            // nhac nho theo truong hop
            if (this.value === '') { // neu nguoi dung de trong
                // nhac nho
                notification.innerText = '* Vui lòng nhập số lượng sản phẩm !';

            } else if (/[^0-9]/.test(this.value)) { // neu nguoi dung nhap cac ky tu khac so thi
                // nhac nho
                notification.innerText = '* Số lượng sản phẩm phải là số !';

            } else if (Number(this.value) < 1 || Number(this.value) > 99) { // neu nguoi dung nhap qua pham vi 1 ~ 99
                // nhac nho
                notification.innerText = '* Phạm vi số lượng mua cho phép chỉ từ 1 đến 99';
            }

            // goi ham tinh tong tien
            calcTotalProdPrice(false);
        }
    })

    // them su kien change de tu dong chinh sua cho nguoi dung khi nhap sai
    controlQuantityArr[i].querySelector('input').addEventListener('change', function () {
        // tu dong chinh ve gia tri dung cho nguoi dung khi nhap sai
        if (
            Number(this.value) < 1 ||
            Number(this.value) > 99 ||
            isNaN(this.value)
        ) { // nhap sai
            if (Number(this.value) > 99) { // nhap lon hon 99
                this.value = 99;

            } else { // cac truong hop con lai
                this.value = 1;
            }
            // bo di nhac nho
            controlQuantityArr[i].querySelector('.warning').innerText = '';
        }

        // goi ham tinh tong tien
        calcTotalProdPrice(true);

        // lay ten san pham thay doi so luong
        let prodName = controlQuantityArr[i].parentElement.querySelector('.prod-name').innerText;
        // lay gia tri so luong
        let prodQuantity = Number(this.value);
        // goi ham luu thong tin so luong
        saveQuantityProdInCart(prodName, prodQuantity);
    })

    // them su kien click cho cac o + de tang so luong
    controlQuantityArr[i].querySelector('.add').addEventListener('click', function () {
        // lay o input
        let input = controlQuantityArr[i].querySelector('input');

        // tang gia tri cua o input them 1 khi thoa dieu kien
        if (Number(input.value) < 99) {
            input.value = Number(input.value) + 1;

            // goi ham tinh tong tien
            calcTotalProdPrice(true);

            // lay ten san pham thay doi so luong
            let prodName = controlQuantityArr[i].parentElement.querySelector('.prod-name').innerText;
            // lay gia tri so luong
            let prodQuantity = Number(input.value);
            // goi ham luu thong tin so luong
            saveQuantityProdInCart(prodName, prodQuantity);
        }
    })

    // them su kien click cho cac o - de giam so luong
    controlQuantityArr[i].querySelector('.sub').addEventListener('click', function () {
        // lay o input
        let input = controlQuantityArr[i].querySelector('input');

        // tang gia tri cua o input them 1 khi thoa dieu kien
        if (Number(input.value) > 1) {
            input.value = Number(input.value) - 1;

            // goi ham tinh tong tien
            calcTotalProdPrice(true);

            // lay ten san pham thay doi so luong
            let prodName = controlQuantityArr[i].parentElement.querySelector('.prod-name').innerText;
            // lay gia tri so luong
            let prodQuantity = Number(input.value);
            // goi ham luu thong tin so luong
            saveQuantityProdInCart(prodName, prodQuantity);
        }
    })

    // them su kien click vao hinh thung rac de bo san pham khoi gio hang
    controlQuantityArr[i].querySelector('.cancel').addEventListener('click', function () {
        // lay danh sach san pham tai gio hang
        let prodList = document.querySelector('ul.prod-list');

        // lay san pham can xoa
        let prod = controlQuantityArr[i].parentElement.parentElement;

        // lay ten san pham da xoa
        let prodName = prod.querySelector('.prod-name').innerText;
        // goi ham xoa thong tin san pham bi xoa khoi danh sach
        deleteProdInCart(prodName);

        // xoa san pham khoi gio hang
        prodList.removeChild(prod);

        // goi ham tinh tong tien
        calcTotalProdPrice(true);
    })
}