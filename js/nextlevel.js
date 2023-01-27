$(function(){
    // 메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        // 무한반복
        loop:true,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    $("a").click(function(e){
        e.preventDefault();  
    });

    
    // 탭메뉴
    // 모든 탭 내용 숨김
    $(".tab_con > div").hide();
    //첫번째 탭내용만 보임
    $(".tab_con > div:first").show();

    $(".tab_title ul li:first").click(function(){
        $(".tab_title ul li:first").addClass("active");
        $(".tab_title ul li:last").removeClass("active");
        $(".tab_con > div:first").show();
        $(".tab_con > div:last").hide();
    });

    $(".tab_title ul li:last").click(function(){
        $(".tab_title ul li:first").removeClass("active");
        $(".tab_title ul li:last").addClass("active");
        $(".tab_con > div:first").hide();
        $(".tab_con > div:last").show();
    });

    var swiper2 = new Swiper(".new_product", {
        // 무한반복
        loop:true,
        pagination: {
            el: ".new_product .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.new_product .swiper-button-next',
            prevEl: '.new_product .swiper-button-prev',
        },
        breakpoints: {
            481: {
                slidesPerView: 1, //브라우저가 480보다 클 때
                spaceBetween: 0,
            },
            768: {
                slidesPerView:2, //브라우저가 768보다 클 때
                spaceBetween:50,
            },
            1281: {
                slidesPerView:4,   //브라우저가 1280보다 클 때
                spaceBetween:20,
            },
        },
    });

    var swiper3 = new Swiper(".best_product", {
        // 무한반복
        loop:true,
        pagination: {
        el: ".best_product .swiper-pagination",
        clickable: true,
        },
        navigation: {
            nextEl: '.best_product .swiper-button-next',
            prevEl: '.best_product .swiper-button-prev',
        },
        breakpoints: {
            481: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView:2,
                spaceBetween:50,
            },
            1281: {
                slidesPerView:4,
                spaceBetween:10,
            },
        },
    });

    // 이벤트 슬라이드

    var swiper4 = new Swiper(".eventslide", {
        loop:true,  //반복
        navigation: {
            nextEl: '.eventslide .swiper-button-next',
            prevEl: '.eventslide .swiper-button-prev',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            481: {
                slidesPerView: 1.5,
                spaceBetween: 40,
            },
            768: {
                slidesPerView:2.5,
                spaceBetween:40,
            },
            1281: {
                slidesPerView:3,
                spaceBetween:60,
            },
        },
    });




    // 모바일에서만 실행
    if($(window).width() <=1024){

    // 햄버거 메뉴 클릭하면 팝업 메뉴가 왼쪽에서 나타남
    $(".menu").click(function(){
        $(".popup_menu").animate({"left":0});
        // 윈도우 화면 스크롤 막음
        $("html,body").css('overflow-y','hidden')
    });
    
    // 팝업 메뉴의 닫기 버튼을 클릭하면 팝업 메뉴가 왼쪽으로 들어감
    $(".close_btn").click(function(){
        $(".popup_menu").animate({"left":"-110vw"});
        // 윈도우의 화면 스크롤 활성화
        $("html,body").css('overflow-y','visible')
    });
    // 팝업 메뉴의 아코디언 메뉴
    var poppup_nav =$(".popup_menu .popup_nav nav > ul > li > a");
    poppup_nav.click(function(){
        if ($(this).attr('class')!= "active"){
        poppup_nav.next().slideUp();
        poppup_nav.removeClass("active");
            $(this).next().slideDown();
            $(this).addClass('active');
        }else {
            $(this).next().slideUp();
            $(this).removeClass('active');
        }
        
    });    
    
    }else{
        //pc면 실행
        $("header nav .sub").hide();
        $("header nav > ul > li > a").hover(function(){
            $("header nav .sub").stop().slideDown();
            $("header nav .sub").css("z-index",11);
            $(this).next().css("z-index",20);
        });
        $("header nav").mouseleave(function(){
            $("header nav .sub").stop().slideUp();
        });

    };
    
    //pc 버전에서만 fullpage 실행
    if($(window).width()>=1281){
        $('#fullpage').fullpage();
    }


});