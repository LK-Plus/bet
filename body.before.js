
let cliqueBtnCpf = true;
function carregaCpf() {
    let cpf = '';
    $('#personal_id').on('keyup', function() {
        cpf = $('#personal_id').val().length;
        if (cpf==14){
            if (cliqueBtnCpf) {
                $('.v3-input-suffix .x-button--cancel').click();
                cliqueBtnCpf = false;
            }
        } else {
            cliqueBtnCpf = true;
        }
    });
}
setInterval('carregaCpf()', 2000);

function updateAnimButtons () {
    document.querySelector('.mobile .style__RadioButton-sc-3ucvic-2,.mobile .style__MarketButton-sc-3h3jba-6').addEventListener('click', function() {
        document.querySelectorAll('#bottom-navigation > div:nth-child')[4].animate({bottom: '15'});
        document.querySelectorAll('#bottom-navigation > div:nth-child')[4].animate({bottom: '0'});
        document.querySelectorAll('#bottom-navigation > div:nth-child')[4].animate({bottom: '15'});
        document.querySelectorAll('#bottom-navigation > div:nth-child')[4].animate({bottom: '0'});
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
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(3)').click()",500);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(3)').click()",1000);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(3)').click()",1500);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(3)').click()",2000);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(3)').click()",2500);
    setTimeout("$('.style__MenuItem-sc-18pd3lt-2:nth-child(3)').click()",3000);
}

function fixMobileMenu() {
    if (document.querySelector('.eruTRg')) {
        if (!document.querySelectorAll('.gSnjmI') || document.querySelectorAll('.gSnjmI')[2].innerHTML !== 'Home') {
            document.querySelectorAll('.eruTRg')[2].querySelector('span svg, span img').remove();
            document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML = '<img src="https://bet-files.suprema.group/images/betslip.png" width="24px" height="24px">'
                + document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML;
        } else {
            document.querySelectorAll('.eruTRg')[2].querySelector('span svg, span img').remove();
            document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML = '<img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/home.png" width="24px" height="24px">'
                + document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML;
        }
    }
}

if (document.querySelector(".loginDesk") || document.querySelector(".loginMobile"))
    document.querySelector(".v3-modal-root").addEventListener("DOMSubtreeModified", function () {
        if (document.querySelector('.kzuCEF') && document.querySelectorAll('.kzuCEF span')[1].innerHTML == '&nbsp;R$')
            document.querySelectorAll('.kzuCEF span')[1].innerHTML = '&nbsp;BO';
    });

document.addEventListener('DOMContentLoaded', function () {
    //verificando se está na página de esportes
    if(document.querySelector("#r1823")){
        setTimeout("clickTop()",500);
    } else if(document.querySelector("#r1824")){
        setTimeout("clickTop()",500);
    }
});

document.addEventListener('readystatechange', (event) => {
    // Banner control
    const lang = JSON.parse(window.hrefLangRelations);
    if (document.querySelector('.sportsPC div.slider-container'))
        document.querySelector('.sportsPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=sports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    if (document.querySelector('.sportsMobile div.slider-container'))
        document.querySelector('.sportsMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=msports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    if (document.querySelector('.cassinoPC div.slider-container'))
        document.querySelector('.cassinoPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=casino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    if (document.querySelector('.cassinoMobile div.slider-container'))
        document.querySelector('.cassinoMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=mcasino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    // Page fix
    if (document.querySelector('#column2463'))
        document.querySelector('#column2463').style = '';
    if (document.querySelector('.prema-100>div:first-child>div:first-child'))
        document.querySelector('.prema-100>div:first-child>div:first-child').style.top = '15em';
    if (document.querySelector('.promotion-filters'))
        document.querySelector('.promotion-filters').style['border-bottom'] = '1px solid #000!important';
    if (document.querySelector('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button'))
        document.querySelector('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button').remove();
    if (document.querySelector('.prema>div:first-child>div:first-child')) {
        document.querySelector('.prema>div:first-child>div:first-child').style.height = '1500px';
        document.querySelector('.prema>div:first-child>div:first-child').style.overflow = 'scroll';
        document.querySelector('.e-100>div:first-child>div:first-child').style.height = '250%';
    }
    if (document.querySelector('.virtual-100>div:first-child>div:first-child'))
        document.querySelector('.virtual-100>div:first-child>div:first-child').style.height = '250%';
    // Mobile nav fix
    fixMobileMenu();
    setTimeout(fixMobileMenu,2000);
    // Trocar cifrao
    // Footer
    if (document.querySelector('.footerbuttonup'))
        document.querySelector('.footerbuttonup').addEventListener('click', function () {
            if (document.querySelector('.footer').style.height = '10px') {
                document.querySelector('.footer').style.height = '235px';
                document.querySelector('.footerbuttondown').style.visibility = 'visible';
                document.querySelector('.footerbuttonup').style.visibility = 'hidden';
                document.querySelector('.footercont').style.opacity = '1';
                document.querySelector('.footercont').style.visibility = 'visible';
            }
        });
    if (document.querySelector('.footerbuttondown'))
        document.querySelector('.footerbuttondown').addEventListener('click', function () {
            if (document.querySelector('.footer').style.height = '235px') {
                document.querySelector('.footer').style.height = '10px';
                document.querySelector('.footerbuttondown').style.visibility = 'hidden';
                document.querySelector('.footerbuttonup').style.visibility = 'visible';
                document.querySelector('.footercont').style.opacity = '0';
                document.querySelector('.footercont').style.visibility = 'hidden';
            }
        });
    if (document.querySelector('.footer'))
        document.querySelector('.footer').style.height = '10px';
});
