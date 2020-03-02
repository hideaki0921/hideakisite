$(function(){

    //オープニング
    setTimeout(function(){
        $('.start p').fadeIn(1600);
    },500); 
	setTimeout(function(){
		$('.start').fadeOut(500);
    },2500); 

    //ヘッダーメニュー
    $('#top-btn').click(function(){
$('html, body').animate({'scrollTop':0},500);
    });
    $('header a').click(function(){
var id=$(this).attr('href');
var position=$(id).offset().top;
$('html, body').animate({'scrollTop':position},500);
    });

    //コード一覧
    $('.e-code').click(function(){
        $('.e-finger,.e-finger-name').fadeToggle();
    });
    $('.f-code').click(function(){
        $('.f-finger,.f-finger-name,.f-finger2,.f-finger2-name').fadeToggle();
    });
    $('.g-code').click(function(){
        $('.g-finger,.g-finger-name,.g-finger2,.g-finger2-name').fadeToggle();
    });
    $('.a-code').click(function(){
        $('.a-finger,.a-finger-name,.a-finger2,.a-finger2-name').fadeToggle();
    });
    $('.b-code').click(function(){
        $('.b-finger,.b-finger-name,.b-finger2,.b-finger2-name').fadeToggle();
    });
    $('.c-code').click(function(){
        $('.c-finger,.c-finger-name,.c-finger2,.c-finger2-name').fadeToggle();
    });
    $('.d-code').click(function(){
        $('.d-finger,.d-finger-name,.d-finger2,.d-finger2-name').fadeToggle();
    });
    $('.cs-code').click(function(){
        $('.cs-finger,.cs-finger-name,.cs-finger2,.cs-finger2-name').fadeToggle();
    });
    $('.cf-code').click(function(){
        $('.cf-finger,.cf-finger-name,.cf-finger2,.cf-finger2-name').fadeToggle();
    });

    $('.btnHamburger').on('click', function(){　//.btnHamburgerがクリックされた時の処理
        $(this).toggleClass('is-active');　//.is-activeを付ける・外す
      });
        

});