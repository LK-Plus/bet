
function updateAnimButtons () {
    $('.mobile .style__RadioButton-sc-3ucvic-2,.mobile .style__MarketButton-sc-3h3jba-6').on('click', function() {
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '15'});
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '0'});
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '15'});
        $('#bottom-navigation > div:nth-child(4)').animate({bottom: '0'});
    });
}

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

document.addEventListener("load", function() {
    // Banner control
    const lang = JSON.parse(window.hrefLangRelations);
    document.querySelector('.sportsPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=sports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    document.querySelector('.sportsMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=msports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    document.querySelector('.cassinoPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=casino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    document.querySelector('.cassinoMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=mcasino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    // Page fix
    document.querySelector('#column2463').style = '';
    document.querySelector('.prema-100>div:first-child>div:first-child').style.top = '15em';
    document.querySelector('.promotion-filters').style['border-bottom'] = '1px solid #000!important';
    document.querySelector('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button').remove();
    document.querySelector('.prema>div:first-child>div:first-child').style.height = '1500px';
    document.querySelector('.prema>div:first-child>div:first-child').style.overflow = 'scroll';
    document.querySelector('.e-100>div:first-child>div:first-child').style.height = '250%';
    document.querySelector('.virtual-100>div:first-child>div:first-child').style.height = '250%';
    // Mobile nav fix
    if (document.querySelector('.gSnjmI:eq(2)').innerHTML !== 'Home') {
        document.querySelector('.eruTRg:eq(2) span svg,.eruTRg:eq(2) span img').remove();
        document.querySelector('.eruTRg:eq(2) span').prepend('<img src="https://bet-files.suprema.group/images/betslip.png" width="24px" height="24px">');
        //
    }
    // Footer
    document.querySelector('.footerbuttonup').addEventListener('click', function () {
        if (document.querySelector('.footer').style.height = '10px') {
            document.querySelector('.footer').style.height = '235px';
            document.querySelector('.footerbuttondown').style.visibility = 'visible';
            document.querySelector('.footerbuttonup').style.visibility = 'hidden';
            document.querySelector('.footercont').style.opacity = '1';
            document.querySelector('.footercont').style.visibility = 'visible';
        }
    });
    document.querySelector('.footerbuttondown').addEventListener('click', function () {
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
});
