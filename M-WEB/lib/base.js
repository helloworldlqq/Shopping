/**
 * Created by Administrator on 2017/8/24 0024.
 */


//       二级菜单展开
$('.item > a').each(function () {

    this.addEventListener("touchstart",function(event){
        $(this).siblings().slideToggle();
        $(this).parent().addClass('auto-height')
        if($(this).children('i').hasClass('icon-htbarrowright02')){


            $(this).children('i').removeClass('icon-htbarrowright02').addClass('icon-down');

            // $(this).children('i').css("-webkit-transform":"rotate("-180"deg)");



            $(this).css('color','#a48156');
        }else {


            $(this).children('i').removeClass('icon-down').addClass('icon-htbarrowright02');


            $(this).css('color','#333')
        }
    })
})

//菜单显示
   document.getElementById('show-menu').addEventListener("click",function(event){

    if($('#show-menu').hasClass('icon-icon-menu')){
        $('.menu-content').css({'left':'0px','-webkit-transition':'all 0.5s'});
        $('#show-menu').removeClass('icon-icon-menu').addClass('icon-close');
        $('html').addClass('no-scroll');

    }else {
        $('.menu-content').css({'left':'-100%','-webkit-transition':'all 0.5s'});
        $('#show-menu').removeClass('icon-close').addClass('icon-icon-menu');
        $('html').removeClass('no-scroll');
    }
})

$('.menu-content').css('min-height',document.documentElement.clientHeight-document.getElementById('header-box').clientHeight);




