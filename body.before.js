
function clickTop() {
    /* Desktop */
    setTimeout("$('.style__MenuItem-sc-1uncf6a-4:nth-child(1)').click()",500);
    setTimeout("$('.style__MenuItem-sc-1uncf6a-4:nth-child(1)').click()",1000);
    setTimeout("$('.style__MenuItem-sc-1uncf6a-4:nth-child(1)').click()",1500);
    setTimeout("$('.style__MenuItem-sc-1uncf6a-4:nth-child(1)').click()",2000);
    setTimeout("$('.style__MenuItem-sc-1uncf6a-4:nth-child(1)').click()",2500);
    setTimeout("$('.style__MenuItem-sc-1uncf6a-4:nth-child(1)').click()",3000);
    /* Mobile */
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(2)').click()",500);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(2)').click()",1000);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(2)').click()",1500);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(2)').click()",2000);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(2)').click()",2500);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(2)').click()",3000);
}

document.addEventListener("DOMContentLoaded", function() {
    //verificando se está na página de esportes
    if($("#r1823").length > 0){		
        setTimeout("clickTop()",500);		
    } else if($("#r1824").length > 0){		
        setTimeout("clickTop()",500);		
    }
});

$(document).ready(function () {
    $('.prema-100>div:first-child>div:first-child').css('top', '15em');
    setTimeout(function () {
        $('.prema>div:first-child>div:first-child').css('height', '1500px', 'overflow', 'scroll ');
        $('.e-100>div:first-child>div:first-child').css('height', '250%');
        $('.virtual-100>div:first-child>div:first-child').css('height', '250%');
        $('#column2463').removeAttr("style");
    }, 3000);
    setTimeout(function () {
        if ($('.gSnjmI:eq(2)').html() !== 'Home') {
            $('.eruTRg:eq(2) span svg').remove();
            $('.eruTRg:eq(2) span').prepend('<img src="https://bet-files.suprema.group/images/betslip.png" width="24px" height="24px">');
        }
        $('.mobile .eruTRg').on('click', function () {
            $('.close-widgets-container').addClass('hidden');
            setTimeout(function () {
                $('.mobile .cetaLz').on('click', function () {
                    $('.close-widgets-container').removeClass('hidden');
                });
            }, 1000);
        });
    }, 2000);
    $('.promotion-filters').css('border-bottom', '1px solid #000!important');
    $('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button').remove();
    $('#column2463').removeAttr('style');
    const lang = JSON.parse(window.hrefLangRelations);
    $('.sportsPC div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=sports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.sportsMobile div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=msports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.cassinoPC div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=casino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.cassinoMobile div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner?t=mcasino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
    $('.footerbuttonup').on('click', function () {
        if (document.querySelector('.footer').style.height = '10px') {
            document.querySelector('.footer').style.height = '235px';
            document.querySelector('.footerbuttondown').style.visibility = 'visible';
            document.querySelector('.footerbuttonup').style.visibility = 'hidden';
            document.querySelector('.footercont').style.opacity = '1';
            document.querySelector('.footercont').style.visibility = 'visible';
        }
    });
    $('.footerbuttondown').on('click', function () {
        if (document.querySelector('.footer').style.height = '235px') {
            document.querySelector('.footer').style.height = '10px';
            document.querySelector('.footerbuttondown').style.visibility = 'hidden';
            document.querySelector('.footerbuttonup').style.visibility = 'visible';
            document.querySelector('.footercont').style.opacity = '0';
            document.querySelector('.footercont').style.visibility = 'hidden';
        }
    });
    if (document.querySelector('.footer')) {
        document.querySelector('.footer').style.height = '10px';
    }
    $('.mobile .style__EventsWrapper-sc-1ww46zm-0 div div').bind("DOMSubtreeModified", function() {
        updateAnimButtons();
    });
});

function updateAnimButtons () {
    $('.mobile .style__RadioButton-sc-3ucvic-2,.mobile .style__MarketButton-sc-3h3jba-6').on('click', function() {
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '15'});
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '0'});
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '15'});
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '0'});
    });
}
