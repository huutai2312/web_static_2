// CHUC NANG LAY VI TRI CUA NGUOI DUNG - .STEP-1
let showPosInf = document.querySelector('.pos'); // lay phan tu hien thi thong tin

// ham hien ra thong tin ve vi tri nguoi dung
function showPosition(position) { 
    showPosInf.innerHTML = 
        "Tọa độ của bạn là: <br>" +
        "Vĩ độ:&nbsp;" + position.coords.latitude + "<br>" +
        "Kinh độ:&nbsp;" + position.coords.longitude;
    // an hoac hien thi cac phan tu can thiet
    document.querySelector('.get-pos').style.display = 'none';
    document.querySelector('.confirm').style.display = 'block';
}

// ham thong bao loi neu xay ra khi nguoi dung muon lay vi tri
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            showPosInf.innerHTML = "Người sử dụng từ chối cho xác định vị trí.";
            break;
        case error.POSITION_UNAVAILABLE:
            showPosInf.innerHTML = "Thông tin vị trí không có sẵn.";
            break;
        case error.TIMEOUT:
            showPosInf.innerHTML = "Yêu cầu vị trí người dùng vượt quá thời gian quy định.";
            break;
        case error.UNKNOWN_ERROR:
            showPosInf.innerHTML = "Một lỗi xảy ra không rõ nguyên nhân.";
            break;
    }
}

// them su kien khi nguoi dung nhan vao nut lay vi tri
document.querySelector('.get-pos').addEventListener('click', function () {
    // an hoac hien thi cac phan tu can thiet
    document.querySelector('.pos').style.display = 'block';
    showPosInf.innerHTML = "Đang thực hiện lấy vị trí của bạn ...";
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else{
        showPosInf.innerHTML = "Geolocation không được hỗ trợ bởi trình duyệt này.";
    }
})

// them su kien vao nut xac nhan vi tri de nguoi dung qua buoc 2
document.querySelector('.step-1 .confirm').addEventListener('click', function(){
    document.querySelector('.step-1').style.display = 'none';
    document.querySelector('.step-2').style.display = 'block';
})
// END CHUC NANG LAY VI TRI CUA NGUOI DUNG - .STEP-1



// CHUC NANG TAO VA DAO VI TRI HINH XEP NGAU NHIEN - .STEP-2
// lay cac phan tu chua puzzle
let containPuzzleArr = document.querySelectorAll('.contain-puzzle');

// tao mang chua cac puzzle
let puzzleArr = [];
for(let i = 0; i < containPuzzleArr.length; i++){
    puzzleArr[i] = {
        id: (i + 1),
        puzzle: `<img src="./images/mini_game/puzzle/p (${i+1}).png" alt="" draggable="true" id="puzzle-${i+1}"></img>`
    };
}

// dat mang vao vi tri chua puzzle de sap xep
for(let i = 0; i < containPuzzleArr.length; i++){
    containPuzzleArr[i].innerHTML = puzzleArr[i].puzzle;
}

// sap xep mang ngau nhien khi nhan nut bat dau
document.querySelector('.start').addEventListener('click', function(){
    // sap xep ngau nhien
    let sort = true;
    while(sort){
        puzzleArr.sort(function(){
            return 0.5 - Math.random();
        });
        for(let i = 0; i < containPuzzleArr.length; i++){
            if((i + 1) == puzzleArr[i].id){
                break; // neu co hinh anh nao o dung vi tri thi tien hanh dao mang ngau nhien lai
            }
            if( i == (containPuzzleArr.length - 1)){
                sort = false; // neu i chay duoc toi cuoi mang => ok
            }
        }
    }

    // dat lai cac phan tu da dao vao .contain-puzzle
    for(let i = 0; i < containPuzzleArr.length; i++){
        containPuzzleArr[i].innerHTML = puzzleArr[i].puzzle;
    }
});
// END CHUC NANG TAO VA DAO VI TRI HINH XEP NGAU NHIEN - .STEP-2



// CHUC NANG KEO THA CHO CAC PUZZLE .PUZZLE-CONTAINER - .STEP-2
document.querySelector('.start').addEventListener('click', function(){
    for(let i = 0; i < containPuzzleArr.length; i++){
        containPuzzleArr[i].querySelector('img').addEventListener('dragstart', function(event){
            // lay id cua phan tu duoc keo
            event.dataTransfer.setData('drag-puzzle', event.target.id);
            // kiem tra xem hinh co xep dung hay khong
            checkPuzzle();
        })
        containPuzzleArr[i].addEventListener('drop', function(event){
            // bo di mac dinh cua phan tu duoc tha
            event.preventDefault();

            // lay id cua phan tu duoc keo
            let data = event.dataTransfer.getData('drag-puzzle');
            // lay phan tu duoc keo
            let dragPuzzle = document.getElementById(data);
            
            // dao vi tri sau khi keo tha puzzle
            dragPuzzle.parentElement.replaceChild(containPuzzleArr[i].querySelector('img'), dragPuzzle);
            containPuzzleArr[i].appendChild(dragPuzzle); // do viec drop da lam mat phan tu con cua containPuzzleArr[i]

            // kiem tra xem hinh co xep dung hay khong
            checkPuzzle();
        })
        containPuzzleArr[i].addEventListener('dragover', function(event){
            // bo di mac dinh cua phan tu duoc keo    
            event.preventDefault();
        })
    }
})
// ham kiem tra xem hinh duoc xep co dung hay khong
function checkPuzzle(){
    let check = true;
    for(let i = 0; i < containPuzzleArr.length; i++){
        if(containPuzzleArr[i].querySelector('img').id.localeCompare(`puzzle-${i+1}`) != 0){
            check = false;
            break;
        }
    }
    if( check == true){
        // ngung dong ho dem nguoc
        clearInterval(countDown);

        // hien thi thong bao thang
        document.querySelector('.notification .content span').innerHTML = `
            CHÚC MỪNG BẠN <br> 
            DANH SÁCH <br> 
            TRÚNG THƯỞNG <br>
            SẼ SỚM CÓ THÔI !

        `
        document.querySelector('.notification').style.display = 'flex';

        // khoi dong nut qua buoc 3 va them su kien chuyen qua buoc 3 vao nut
        document.querySelector('.step-2 .not-allow-next').setAttribute('class', 'next');
        document.querySelector('.step-2 .next').addEventListener('click', function(){
            document.querySelector('.step-2').style.display = 'none';
            document.querySelector('.step-3').style.display = 'block';

        })
    }
}
// END CHUC NANG KEO THA CHO CAC PUZZLE .PUZZLE-CONTAINER - .STEP-2



// THEM CAC CHUC NANG DEM THOI GIAN, VO HIEU NUT BAT DAU, BAT NHAC NEN KHI NHAN NUT BAT DAU
let countDown; // de counDown ben ngoai thuan tien co viec set va clear Interval

document.querySelector('.start').addEventListener('click', function() {
    let startBtn = document.querySelector('.start'); // lay nut start
    // vo hieu hoa button khi tro choi bat dau
    startBtn.setAttribute('class', 'not-allow-start');
    startBtn.setAttribute('disabled', '');
    
    // dem nguoc thoi gian
    // tao bien cho gio, phut, giay
    let min = 1;
    let sec = 30;
    countDown = setInterval( 
        function () {
            // xu ly dem nguoc
            sec--;
            if (sec < 0) {
                sec = 59;
                min--;
                if (min < 0) {
                    // het thoi gian thi khoi dong lai nut 
                    startBtn.setAttribute('class', 'start');
                    startBtn.removeAttribute('disabled');
                    // dat lai thoi gian cho nguoi dung xem
                    min = 1;
                    sec = 30;
                    clearInterval(countDown);
                    // hien thi thong bao thua
                    document.querySelector('.notification .content span').innerHTML = `
                        THUA KEO NÀY <br>
                        TA BÀY KEO KHÁC <br>
                        BẠN NHÉ !

                    `
                    document.querySelector('.notification').style.display = 'flex';
                }
            }
            // hien thi dem nguoc
            if (sec < 10) {
                document.querySelector(".count-down-cell > .sec").innerHTML = "0" + sec;
            } else {
                document.querySelector(".count-down-cell > .sec").innerHTML = sec;
            }
            if (min < 10) {
                document.querySelector(".count-down-cell > .min").innerHTML = "0" + min;
            } else {
                document.querySelector(".count-down-cell > .min").innerHTML = min;
            }
        },
        1000 // cu sau 1s se thay doi dem nguoc
    );
});
// END THEM CAC CHUC NANG DEM THOI GIAN, VO HIEU NUT BAT DAU KHI NHAN NUT BAT DAU



// CHUC NANG DONG THONG BAO SAU KHI KET THUC TRO CHOI
document.querySelector('.notification').addEventListener('click',function(){
    this.style.display = 'none';
})
// END CHUC NANG DONG THONG BAO SAU KHI KET THUC TRO CHOI