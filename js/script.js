$(document).ready(function(){

    // 모바일헤더 메뉴창 메뉴a. 아코디언 메뉴 제어
    var status = 'off';
    $('.menu-li-title').on("click", function(){

        if(status == 'off'){
             $(this).siblings('.submenu').stop().slideDown(500);
            $(this).find('.icon-add').attr('src','images/icons-minus-bold.png');
            status = 'on';
        }else if(status == 'on'){
            $(this).siblings('.submenu').stop().slideUp(500);
            $(this).find('.icon-add').attr('src','images/icons-add-bold.png');

            status = 'off';
        }
    });

    
    // 메뉴 패널창 관리
    $('.menu-pannel').hide();
    $('.menu-icon').click(function(){
        $('.menu-pannel').show();
    });
    $('.menu-pannel .close-icon').click(function(){
        $('.menu-pannel').hide();
    });

    //pc헤더 메뉴 제어
    $('.submenu').hide();
    $('.main-header.pc .menu>li').mouseover(function(){  
        $('.menu-bg').stop().slideDown(500);     
        $(this).find('.submenu').stop().slideDown(500);
        $('.box.search-pc').hide();
    }).mouseout(function(){
        $('.menu-bg').stop().slideUp(500);
        $(this).find('.submenu').stop().slideUp(500);
        
    });

    //예약페이지 제어
    $('.reservation-m .close-light-icon').click(function(){
        $('.reservation-m').hide();
    });

    // 검색창 제어
    $('.box.search').hide();
    $('.header-menu .search-icon').mouseover(function(){
        $('.box.search').stop().slideDown(500);
    }).mouseout(function(){
        $('.box.search').stop().slideUp(500);
    });


    $('.box.search-pc').hide();
    $('.nav.menu-2 .icons>.search-icon').click(function(){
        $('.box.search-pc').stop().slideDown(500);
    });

    $('.box.search').scroll(function(){
        $(this).hide();
    });
    $('.box.search-pc').scroll(function(){
        $(this).hide();
    });




    // 헤더창 조절
    // $('.main-header.pc').hide();
   $(window).resize(function() {
        if($(window).width() < 1080) { 
            $('.main-header-box').show();
            $('.main-header.pc').hide();
        }else if($(window).width() >= 1080){
            $('.main-header-box').hide();		
            $('.main-header.pc').show().css('display','flex');
        }else if($(window).width() >= 1920){
            $('.reservation-m').hide();
            $('.main-header.pc').show();
        };
    });


    //디지털 미술관 네비게이션
    $('.navigation .before-icon').click(function(){
        $('.content-container.digital').css('transform','translateX(100%)');
    });
    $('.navigation .next-icon').click(function(){
        $('.content-container.digital').css('transform','translateX(-100%)');
    });


    //네비게이션 아이콘 변경
    // $('.navigation .before-icon').mouseover(function(){
    //     $(this).css('background-color','#222');
    //     $(this).find('img').attr('src','images/icons-navigate-before-w.png');
    // }).mouseout(function(){
    //     $(this).css('background-color');
    //     $(this).find('img').attr('src','images/icons-navigate-before.png');
    // });
    // $('.navigation .next-icon').mouseover(function(){
    //     $(this).css('background-color','#222');
    //     $(this).find('img').attr('src','images/icons-navigate-next-w.png');
    // }).mouseout(function(){
    //     $(this).css('background-color',);
    //     $(this).find('img').attr('src','images/icons-navigate-next.png');
    // });

    

    // $('.menu-pannel').css('transform','translateX(100%)');
    // $('.menu-icon').click(function(){
    //     $('.menu-pannel').css('transform','translateX(0%)');
    // });
    

    // $('.menu-pannel .close-icon').click(function(){
    //     $('.menu-pannel').css('transform','translateX(100%)');
    // });

    // $('.menu-pannel .search-icon').click(function(){
    //     $('.menu-pannel').css('transform','translateX(-100%)');
    // });

    
});