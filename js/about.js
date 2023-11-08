// CHUC NANG SLIDE SHOW CHO TOP-COMMENT
let commentIndex = 1; // xac dinh comment hien tai
// lay phan tu xac dinh vi tri comment vao mang
let commentDotIndex = document.querySelectorAll('.top-comment .index-dot'); // lay mang cac dau cham index
let commentArr = document.querySelectorAll('.contain-comment-slide article'); // lay comment vao mang

// cho slide dau tien hien thi
document.querySelector('.contain-comment-slide article.s1')
    .style.left = 0;
// an cac slide con lai
for(let i = 2; i <= commentArr.length; i++){
    document.querySelector(`.contain-comment-slide article.s${i}`)
        .style.left = '100%';
}

// ham hien thi vi tri anh qua index-dot
function commentIndexChange(){
    for(let i = 0; i < commentDotIndex.length; i++){
        if(i == (commentIndex - 1)){
            commentDotIndex[i].classList.add('choosen');
        } else {
            commentDotIndex[i].classList.remove('choosen');
        }
    }
}

// them, xu ly su kien chuyen toi slide tiep theo
document.querySelector('.top-comment .next').addEventListener('click', function () {
        // xu ly nextIndex theo do dai mang commentArr
        let nextCommentIndex = commentIndex + 1;
        if (nextCommentIndex > commentArr.length) {
            nextCommentIndex = 1;
        }
        // * nth:child chay bat dau tu 1 
        // xu ly hieu ung khi chuyen slide
        let nextSlide = document.querySelector(`.contain-comment-slide article.s${nextCommentIndex}`);
        nextSlide.style.cssText = `
            left: 100%;
            z-index: 0;
            animation: moveSlideIn 0.3s forwards;
        `; 
        let curSlide = document.querySelector(`.contain-comment-slide article.s${commentIndex}`);
        curSlide.style.cssText = `
            left: 0%;
            z-index: 0;
            animation: moveSlideOutLeft 0.3s forwards;
        `;  
        commentIndex = nextCommentIndex;
        // hien thi vi tri slide
        commentIndexChange();
});

// them, xu ly su kien quay lai slide phia truoc
document.querySelector('.top-comment .prev').addEventListener('click', function () {
        // xu ly prevIndex theo do dai mang commentArr
        let prevCommentIndex = commentIndex - 1;
        if (prevCommentIndex < 1) {
            prevCommentIndex = commentArr.length;
        }
        // * nth:child chay bat dau tu 1 
        // xu ly hieu ung khi chuyen slide
        let prevSlide = document.querySelector(`.contain-comment-slide article.s${prevCommentIndex}`);
        prevSlide.style.cssText = `
            left: -100%;
            animation: moveSlideIn 0.3s forwards;
        `; 
        let curSlide = document.querySelector(`.contain-comment-slide article.s${commentIndex}`);
        curSlide.style.cssText = `
            left: 0%;
            animation: moveSlideOutRight 0.3s forwards;
        `;  
        commentIndex = prevCommentIndex;
        // hien thi vi tri slide
        commentIndexChange();
});

// them su kien khi nhan vao index-dot se chuyen toi slide tuong ung
for(let i = 0; i < commentDotIndex.length; i++){
    commentDotIndex[i].addEventListener('click', function(){
        while (commentIndex != (i + 1)) {
            if (commentIndex < (i + 1)) {
                document.querySelector(".top-comment .next").click();
            } else if (commentIndex > (i + 1)){
                document.querySelector(".top-comment .prev").click();
            }
        }
        // neu i+1 = commentIndex thi khong chuyen anh
    })
}
// END CHUC NANG SLIDE SHOW CHO TOP-COMMENT