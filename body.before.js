$(document).ready(function () {
    $('.prema-100>div:first-child>div:first-child').css('top', '15em')
    setTimeout(function () {
        $('.prema>div:first-child>div:first-child').css('height', '1500px', 'overflow', 'scroll ');
        $('.e-100>div:first-child>div:first-child').css('height', '250%');
        $('.virtual-100>div:first-child>div:first-child').css('height', '250%');
        $('#column2463').removeAttr("style");
        $('.eruTRg:eq(2) span svg').remove();
        $('.eruTRg:eq(2) span').prepend('<img src="https://bet-files.suprema.group/images/betslip.png" width="24px" height="24px">');
        $('.mobile .eruTRg').on('click', function () {
            $('.close-widgets-container').addClass('hidden');
            setTimeout(function () {
                $('.mobile .cetaLz').on('click', function () {
                    $('.close-widgets-container').removeClass('hidden');
                });
            }, 1000);
        });
    }, 3000);
    $('.promotion-filters').css('border-bottom', '1px solid #000!important');
    $('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button').remove();
    $('#column2463').removeAttr("style");
    $('.sportsPC div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=sports&l=${window.language}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.sportsMobile div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=msports&l=${window.language}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.cassinoPC div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=casino&l=${window.language}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.cassinoMobile div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=mcasino&l=${window.language}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
});

document.querySelector(".footerbuttonup").onclick = function () {
    expand()
};
document.querySelector(".footerbuttondown").onclick = function () {
    shrink()
};
document.querySelector(".footer").style.height = "10px";

function expand() {
    if (document.querySelector(".footer").style.height = "10px") {
        document.querySelector(".footer").style.height = "235px";
        document.querySelector(".footerbuttondown").style.visibility = "visible";
        document.querySelector(".footerbuttonup").style.visibility = "hidden";
        document.querySelector(".footercont").style.opacity = "1";
        document.querySelector(".footercont").style.visibility = "visible";
    }
}

function shrink() {
    if (document.querySelector(".footer").style.height = "235px") {
        document.querySelector(".footer").style.height = "10px";
        document.querySelector(".footerbuttondown").style.visibility = "hidden";
        document.querySelector(".footerbuttonup").style.visibility = "visible";
        document.querySelector(".footercont").style.opacity = "0";
        document.querySelector(".footercont").style.visibility = "hidden";
    }
}

$(window).on("load resize scroll", function(){
    var acao;
    var $t = $(this);
    var ww = $t.width();
    var scroll = $t.scrollTop();
    
    
    if ( (ww <= 1024 && scroll)) {
        $('body').removeClass('.desktop');
        $('body').addClass('.mobile');
    }

 });