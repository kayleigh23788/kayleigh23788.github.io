//버튼 0(products)을 누르면 
//1. 버튼 0이 주황색으로 하이라이트 되야 함
//2. 내용 0이 보여야 함

// 내가 짠거-------
// $('.tab-button').click(function() {
//     var tabBtn = $('.tab-button')
//     var tabContent = $('.tab-content')

//     for(var i=0; i<3;i++){
//         if($(this).html() == tabBtn.eq(i).html()){
//             tabBtn.eq(i).addClass('active');
//             tabContent.eq(i).addClass('show');
//         } else {
//             tabBtn.eq(i).removeClass('active');
//             tabContent.eq(i).removeClass('show');}

//     }
// })

var tabBtn = $('.tab-button')
var tabContent = $('.tab-content')
//1. 반복문으로 탭 만들기
// for(let i=0; i<($('.tab-button')).length;i++){
//     $('.tab-button').eq(i).click(function( ) {    
//         탭열기(i);          
//     });
// }

//2. 이벤트 리스너 
//이벤트 리스너를 각 요소에 다는게 아니라 상위 클라스에 하나만 단다 램사용 최소화

// $('.list').click(function(e) {
//     // 만약에 내가 실제 누른 요소가 버튼0이면 탭0째 열어주셈
//     //....
//     탭열기(e.target.dataset.id)
// })

// function 탭열기(숫자) {
//     tabBtn.removeClass('active');
//     tabContent.removeClass('show');    
//     tabBtn.eq(숫자).addClass('active');
//     tabContent.eq(숫자).addClass('show'); 
// }


//3. Jquery
//$(HTML요소).data('name', 'kim')
//$(HTML요소).data('name')
$('.list').click(function(e) {     //부모 리스트를 써줌으로써 메모리 아낌
    탭열기($(e.target).data("id"));
})

// $('.tab-button').click(function() {
//     // 만약에 내가 실제 누른 요소가 버튼0이면 탭0째 열어주셈
//     //....

//     console.log($(this));
//     탭열기($(this).data("id"));
// })

function 탭열기(숫자) {
    tabBtn.removeClass('active');
    tabContent.removeClass('show');    
    tabBtn.eq(숫자).addClass('active');
    tabContent.eq(숫자).addClass('show'); 
}
