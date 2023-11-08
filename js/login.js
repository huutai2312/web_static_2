// CHUC NANG CHUYEN DOI GIUA DANG NHAP VA DANG KY

// them su kien vao cac phan tu giup chuyen doi
document.querySelector(".login .label-list").addEventListener("click", changeForm);
document.querySelector(".login .register").addEventListener("click", changeForm);

function changeForm() {
    // chuyen doi label
    let labelChoosen = document.querySelector(".login .label-list-choosen").innerText;
    let label = document.querySelector(".login .label-list").innerText;
    document.querySelector(".login .label-list").innerText = labelChoosen;
    document.querySelector(".login .label-list-choosen").innerText = label;

    // chuyen doi form
    if (document.querySelector(".login .login-form").style.display == "block") {
        document.querySelector(".login .rgtr-form").style.display = "block";
        document.querySelector(".login .login-form").style.display = "none";
        // luu tru form ma nguoi dung dang mo
        sessionStorage.setItem('formStatus', 'register');

    } else {
        document.querySelector(".login .login-form").style.display = "block";
        document.querySelector(".login .rgtr-form").style.display = "none";
        // luu tru form ma nguoi dung dang mo
        sessionStorage.setItem('formStatus', 'login');
    }
}
// END CHUC NANG CHUYEN DOI GIUA DANG NHAP VA DANG KY



// CHUC NANG KIEM TRA FORM PHAN DANG NHAP
// ham check de chuyen doi trang thai nut Submit
function checkLoginForm() {
    // neu co mot cai sai thi khoa nut dang nhap
    if (ckLoginAccount === false || ckLoginPassword === false) {
        document.querySelector(".login-form button")
            .setAttribute("class", "not-allow-submit");
        document.querySelector(".login-form button")
            .setAttribute("type", "button");
    } else if (ckLoginAccount === true & ckLoginPassword === true) {
        // mo khoa nut khi nhap dung toan bo
        document.querySelector(".login-form button")
            .setAttribute("class", "allow-submit");
        document.querySelector(".login-form button")
            .setAttribute("type", "submit");
    }
}



// kiem tra ten dang nhap
const loginAccount = document.querySelector(".login-form #logAccount");
let ckLoginAccount = false;
// khai bao ham kiem tra ten dang nhap
function ckLoginAccountFunction() {
    let notification = loginAccount.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckLoginAccount = false;
    notification.style.color = 'var(--red)';
    loginAccount.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (loginAccount.value === "") {
        notification.innerHTML = '* Vui lòng nhập tài khoản của bạn!';

    } else if (/^\s/.test(loginAccount.value)) {
        notification.innerHTML = '* Tài khoản không được bắt đầu bằng dấu cách!';

    } else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckLoginAccount = true;
        notification.style.color = 'var(--secondary-color)';
        loginAccount.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkLoginForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("loginAccountValue", loginAccount.value);
}
// them su kien change cho input loginAccount
loginAccount.addEventListener("input", ckLoginAccountFunction);



// kiem tra mat khau dang nhap
const loginPassword = document.querySelector(".login-form #logPassword");
let ckLoginPassword = false;
// khai bao ham kiem tra mat khau dang nhap
function ckLoginPasswordFunction() {
    let notification = loginPassword.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckLoginPassword = false;
    notification.style.color = 'var(--red)';
    loginPassword.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (loginPassword.value === "") {
        notification.innerHTML = '* Vui lòng nhập mật khẩu của bạn!';

    } else if (loginPassword.value.length < 4 || loginPassword.value.length > 20) {
        notification.innerHTML = '* Vui lòng nhập mật khẩu từ 4 đến 20 ký tự!';

    } else if (/[^0-9a-zA-Z]/.test(loginPassword.value)) {
        notification.innerHTML = "* Mật khẩu chỉ bao gồm chữ cái không dấu và các số từ 0 đến 9";

    } else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // neu dung thi doi trang thai
        ckLoginPassword = true;
        notification.style.color = 'var(--secondary-color)';
        loginPassword.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkLoginForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("loginPasswordValue", loginPassword.value);
}
// them su kien change cho input loginPassword
loginPassword.addEventListener("input", ckLoginPasswordFunction);
// END CHUC NANG KIEM TRA FORM PHAN DANG NHAP



// CHUC NANG HIEN THI HOAC AN MAT KHAU
let showPassArr = document.querySelectorAll(".login .show-pass");
for (let i = 0; i < showPassArr.length; i++) {
    showPassArr[i].addEventListener("click", function () {
        if (this.innerHTML == 'Hiện <i class="fas fa-eye"></i>') {
            this.innerHTML = 'Ẩn <i class="fas fa-eye-slash"></i>';
            this.parentElement.querySelector("input").setAttribute("type", "text");
        } else {
            this.innerHTML = 'Hiện <i class="fas fa-eye"></i>';
            this.parentElement.querySelector("input").setAttribute("type", "password");
        }
    });
}
// END CHUC NANG HIEN THI HOAC AN MAT KHAU



// CHUC NANG KIEM TRA FORM DANG KY
// ham check de chuyen doi trang thai nut Submit
function checkRgtrForm() {
    // neu co mot cai sai thi khoa nut dang ky
    if (
        ckRgtrName == false || 
        ckRgtrEmail == false ||
        ckRgtrNumberPhone == false || 
        ckRgtrAddress == false ||
        ckRgtrAccount == false || 
        ckRgtrPassword == false ||
        ckRgtrReEnterPass == false
        ) 
    {
        document.querySelector(".rgtr-form button")
            .setAttribute("class", "not-allow-submit");
        document.querySelector(".rgtr-form button")
            .setAttribute("type", "button");
    } else if (
        ckRgtrName == true && 
        ckRgtrEmail == true &&
        ckRgtrNumberPhone == true && 
        ckRgtrAddress == true &&
        ckRgtrAccount == true && 
        ckRgtrPassword == true &&
        ckRgtrReEnterPass == true
        )
    {
        // mo khoa nut khi nhap dung toan bo
        document.querySelector(".rgtr-form button")
            .setAttribute("class", "allow-submit");
        document.querySelector(".rgtr-form button")
            .setAttribute("type", "submit");
    }
}



// kiem tra ten dang ky
const rgtrName = document.querySelector(".rgtr-form #name");
let ckRgtrName = false;
// khai bao ham kiem tra ten dang ky
function ckRgtrNameFunction() {
    let notification = rgtrName.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrName = false;
    notification.style.color = 'var(--red)';
    rgtrName.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrName.value === "") {
        notification.innerHTML = '* Vui lòng nhập họ tên của bạn!';

    } else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrName = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrName.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrNameValue", rgtrName.value);
}
// them su kien change cho input rgtrName
rgtrName.addEventListener("input", ckRgtrNameFunction);



// kiem tra email dang ky
const rgtrEmail = document.querySelector(".rgtr-form #email");
let ckRgtrEmail = false;
// khai bao ham kiem tra email dang ky
function ckRgtrEmailFunction() {
    let notification = rgtrEmail.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrEmail = false;
    notification.style.color = 'var(--red)';
    rgtrEmail.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrEmail.value === "") {
        notification.innerHTML = '* Vui lòng nhập email của bạn!';
 
    } else if (/^[0-9a-zA-Z]+@gmail.com$/.test(rgtrEmail.value) === false) {
        notification.innerHTML = '* Vui lòng nhập đúng định dạng email có đuôi @gmail.com';

    } else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrEmail = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrEmail.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrEmailValue", rgtrEmail.value);
}
// them su kien change cho input rgtrEmail
rgtrEmail.addEventListener("input", ckRgtrEmailFunction);



// kiem tra dien thoai dang ky
const rgtrNumberPhone = document.querySelector(".rgtr-form #phone");
let ckRgtrNumberPhone = false;
// khai bao ham kiem tra dien thoai dang ky
function ckRgtrNumberPhoneFunction() {
    let notification = rgtrNumberPhone.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrNumberPhone = false;
    notification.style.color = 'var(--red)';
    rgtrNumberPhone.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrNumberPhone.value === "") {
        notification.innerHTML = '* Vui lòng nhập số điện thoại của bạn!';

    } else if (/[^0-9]/.test(rgtrNumberPhone.value)) {
        notification.innerHTML = '* Vui lòng nhập đúng định dạng số điện thoại!';

    } else if (rgtrNumberPhone.value.length < 10 || rgtrNumberPhone.value.length > 11) {
        notification.innerHTML = '* Vui lòng nhập số điện thoại từ 10 đến 11 số!';

    } else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrNumberPhone = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrNumberPhone.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrNumberPhoneValue", rgtrNumberPhone.value);
}
// them su kien change cho input rgtrNumberPhone
rgtrNumberPhone.addEventListener("input", ckRgtrNumberPhoneFunction);



// kiem tra dia chi dang ky
const rgtrAddress = document.querySelector(".rgtr-form #address");
let ckRgtrAddress = false;
// khai bao ham kiem tra dia chi dang ky
function ckRgtrAddressFunction() {
    let notification = rgtrAddress.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrAddress = false;
    notification.style.color = 'var(--red)';
    rgtrAddress.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrAddress.value === "") {
        notification.innerHTML = '* Vui lòng nhập địa chỉ của bạn!';

    } else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrAddress = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrAddress.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrAddressValue", rgtrAddress.value);
}
// them su kien change cho input rgtrAddress
rgtrAddress.addEventListener("input", ckRgtrAddressFunction);



// kiem tra tai khoan dang ky
const rgtrAccount = document.querySelector(".rgtr-form #account");
let ckRgtrAccount = false;
// khai bao ham kiem tra tai khoan dang ky
function ckRgtrAccountFunction() {
    let notification = rgtrAccount.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrAccount = false;
    notification.style.color = 'var(--red)';
    rgtrAccount.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrAccount.value === "") {
        notification.innerHTML = '* Vui lòng nhập tên đăng nhập của bạn!';

    } else if (rgtrAccount.value.length < 4 || rgtrAccount.value.length > 20) {
        notification.innerHTML = '* Vui lòng nhập tên đăng nhập từ 4 đến 20 ký tự!';

    } else if (/[^0-9a-zA-Z]/.test(rgtrAccount.value)) {
        notification.innerHTML = '* Tên đăng nhập chỉ bao gồm chữ cái không dấu và các số từ 0 đến 9';

    }
    else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrAccount = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrAccount.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrAccountValue", rgtrAccount.value);
}
// them su kien change cho input rgtrAccount
rgtrAccount.addEventListener("input", ckRgtrAccountFunction);



// kiem tra mat khau dang ky
const rgtrPassword = document.querySelector(".rgtr-form #password");
let ckRgtrPassword = false;
// khai bao ham kiem tra mat khau dang ky
function ckRgtrPasswordFunction() {
    let notification = rgtrPassword.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrPassword = false;
    notification.style.color = 'var(--red)';
    rgtrPassword.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrPassword.value === "") {
        notification.innerHTML = '* Vui lòng nhập mật khẩu của bạn!';

    } else if (rgtrPassword.value.length < 4 || rgtrPassword.value.length > 20){
        notification.innerHTML = '* Vui lòng nhập mật khẩu từ 4 đến 20 ký tự!';

    } else if (/[^0-9a-zA-Z]/.test(this.value)){
        notification.innerHTML = '* Mật khẩu chỉ bao gồm chữ cái không dấu và các số từ 0 đến 9!';

    }
    else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrPassword = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrPassword.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrPasswordValue", rgtrPassword.value);
}
// them su kien change cho input rgtrPassword
rgtrPassword.addEventListener("input", ckRgtrPasswordFunction);



// kiem tra nhap lai mat khau dang ky
const rgtrReEnterPass = document.querySelector(".rgtr-form #reEnterPass");
let ckRgtrReEnterPass = false;
// khai bao ham kiem tra nhap lai mat khau dang ky
function ckRgtrReEnterPassFunction() {
    let notification = rgtrReEnterPass.parentElement.querySelector('.notification'); // lay noi chua thong bao

    // dat trang thai mac dinh la false
    ckRgtrReEnterPass = false;
    notification.style.color = 'var(--red)';
    rgtrReEnterPass.style.borderColor = 'var(--red)';

    // kiem tra gia tri
    if (rgtrReEnterPass.value === "") {
        notification.innerHTML = '* Vui lòng nhập lại mật khẩu của bạn!';

    } else if (rgtrReEnterPass.value !== rgtrPassword.value) {
        notification.innerHTML = '* Vui lòng nhập lại đúng mật khẩu của bạn!';

    }
    else {
        notification.innerHTML = '<i class="fas fa-check"></i>';
        // dung thi doi trang thai
        ckRgtrReEnterPass = true;
        notification.style.color = 'var(--secondary-color)';
        rgtrReEnterPass.style.borderColor = 'var(--secondary-color)';
    }

    // goi ham check de chuyen doi trang thai nut
    checkRgtrForm();

    // luu tru du lieu vao bo nho session
    sessionStorage.setItem("rgtrReEnterPassValue", rgtrReEnterPass.value);
}
// them su kien change cho input rgtrReEnterPass
rgtrReEnterPass.addEventListener("input", ckRgtrReEnterPassFunction);
// END CHUC NANG KIEM TRA FORM DANG KY



// KIEM TRA, TU DONG DIEN FORM KHI NGUOI DUNG NHAN TAI LAI, HOAC TU TRANG KHAC QUA
window.onload = function () {
    // GIU DUNG TRANG THAI FORM
    if(sessionStorage.getItem('formStatus') === 'register'){
        document.querySelector(".login .label-list").click();
    }

    // PHAN DANG NHAP
    // neu ton tai ten dang nhap da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('loginAccountValue') !== null) {
        loginAccount.value = sessionStorage.getItem('loginAccountValue');
        ckLoginAccountFunction();
    }
    // neu ton tai mat khau dang nhap da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('loginPasswordValue') !== null) {
        loginPassword.value = sessionStorage.getItem('loginPasswordValue');
        ckLoginPasswordFunction();
    }

    // PHAN DANG KY
    // neu ton tai ten dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrNameValue') !== null) {
        rgtrName.value = sessionStorage.getItem('rgtrNameValue');
        ckRgtrNameFunction();
    }
    // neu ton tai email dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrEmailValue') !== null) {
        rgtrEmail.value = sessionStorage.getItem('rgtrEmailValue');
        ckRgtrEmailFunction();
    }
    // neu ton tai so dien thoai dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrNumberPhoneValue') !== null) {
        rgtrNumberPhone.value = sessionStorage.getItem('rgtrNumberPhoneValue');
        ckRgtrNumberPhoneFunction();
    }
    // neu ton tai dia chi dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrAddressValue') !== null) {
        rgtrAddress.value = sessionStorage.getItem('rgtrAddressValue');
        ckRgtrAddressFunction();
    }
    // neu ton tai tai khoan dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrAccountValue') !== null) {
        rgtrAccount.value = sessionStorage.getItem('rgtrAccountValue');
        ckRgtrAccountFunction();
    }
    // neu ton tai mat khau dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrPasswordValue') !== null) {
        rgtrPassword.value = sessionStorage.getItem('rgtrPasswordValue');
        ckRgtrPasswordFunction();
    }
    // neu ton tai ten dang ky da nhap thi tu dong dien va kiem tra
    if (sessionStorage.getItem('rgtrReEnterPassValue') !== null) {
        rgtrReEnterPass.value = sessionStorage.getItem('rgtrReEnterPassValue');
        ckRgtrReEnterPassFunction();
    }
}
// END KIEM TRA, TU DONG DIEN FORM KHI NGUOI DUNG NHAN TAI LAI, HOAC TU TRANG KHAC QUA
