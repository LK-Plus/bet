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

function animBetCount() {
    const elementFrame = document.querySelectorAll('.eruTRg')[2].querySelector('span');
    const keyframes = new KeyframeEffect(
        elementFrame,
        [
            { transform: 'translateY(0%)' },
            { transform: 'translateY(-20%)' },
            { transform: 'translateY(10%)' },
            { transform: 'translateY(-20%)' },
            { transform: 'translateY(0%)' }
        ],
        { duration: 1000, fill: 'forwards' }
    );
    const elementAnimation = new Animation(keyframes, document.timeline);
    elementAnimation.play();
}

function fixBetCount() {
    if (document.querySelectorAll('.eruTRg') && document.querySelectorAll('button[class*=style__RadioButton-sc],button[class*=style__MarketButton-sc]')) {
        const totalBet = [...document.querySelectorAll('button[class*=style__RadioButton-sc],button[class*=style__MarketButton-sc]')].filter(e => e.attributes[0].nodeValue.match(/jujKAS|edOIQa|lprjrX/g)).length;
        document.querySelectorAll('.eruTRg')[2].querySelector('span div').innerText = totalBet;
    }
}

function fixMobileMenu() {
    if (document.querySelector('.eruTRg')) {
        if (!document.querySelectorAll('.gSnjmI') || document.querySelectorAll('.gSnjmI')[2].innerHTML !== 'Home') {
            document.querySelectorAll('.eruTRg')[2].querySelector('span svg, span img').remove();
            document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML = '<img src="https://bet-files.suprema.group/images/betslip.png" width="24px" height="24px">'
                + document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML;
        } else {
            document.querySelectorAll('.eruTRg')[2].querySelector('span div').remove();
            document.querySelectorAll('.eruTRg')[2].querySelector('span svg, span img').remove();
            document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML = '<img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/home.png" width="24px" height="24px">'
                + document.querySelectorAll('.eruTRg')[2].querySelector('span').innerHTML;
            document.querySelectorAll('.eruTRg')[2].innerHTML = '<a href="https://www.supremabet.com/">' 
                + document.querySelectorAll('.eruTRg')[2].innerHTML + '</a>';
        }
    }
}

document.addEventListener('readystatechange', (event) => {
    // Banner control
    const lang = JSON.parse(window.hrefLangRelations);
    if (document.querySelector('.sportsPC div.slider-container')) {
        document.querySelector('.sportsPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=sports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    }
    if (document.querySelector('.sportsMobile div.slider-container')) {
        document.querySelector('.sportsMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=msports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    }
    if (document.querySelector('.cassinoPC div.slider-container')) {
        document.querySelector('.cassinoPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=casino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    }
    if (document.querySelector('.cassinoMobile div.slider-container')) {
        document.querySelector('.cassinoMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=mcasino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    }
    // Page fix
    if (document.querySelector('#column2463')) {
        document.querySelector('#column2463').style = '';
    }
    if (document.querySelector('.prema-100>div:first-child>div:first-child')) {
        document.querySelector('.prema-100>div:first-child>div:first-child').style.top = '15em';
    }
    if (document.querySelector('.promotion-filters')) {
        document.querySelector('.promotion-filters').style['border-bottom'] = '1px solid #000!important';
    }
    if (document.querySelector('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button')) {
        document.querySelector('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button').remove();
    }
    if (document.querySelector('.prema>div:first-child>div:first-child')) {
        document.querySelector('.prema>div:first-child>div:first-child').style.height = '1500px';
        document.querySelector('.prema>div:first-child>div:first-child').style.overflow = 'scroll';
        document.querySelector('.e-100>div:first-child>div:first-child').style.height = '250%';
    }
    if (document.querySelector('.virtual-100>div:first-child>div:first-child')) {
        document.querySelector('.virtual-100>div:first-child>div:first-child').style.height = '250%';
    }
    // Footer
    if (document.querySelector('.footerbuttonup')) {
        document.querySelector('.footerbuttonup').addEventListener('click', function() {
            if (document.querySelector('.footer').style.height = '10px') {
                document.querySelector('.footer').style.height = '235px';
                document.querySelector('.footerbuttondown').style.visibility = 'visible';
                document.querySelector('.footerbuttonup').style.visibility = 'hidden';
                document.querySelector('.footercont').style.opacity = '1';
                document.querySelector('.footercont').style.visibility = 'visible';
            }
        });
    }
    if (document.querySelector('.footerbuttondown')) {
        document.querySelector('.footerbuttondown').addEventListener('click', function() {
            if (document.querySelector('.footer').style.height = '235px') {
                document.querySelector('.footer').style.height = '10px';
                document.querySelector('.footerbuttondown').style.visibility = 'hidden';
                document.querySelector('.footerbuttonup').style.visibility = 'visible';
                document.querySelector('.footercont').style.opacity = '0';
                document.querySelector('.footercont').style.visibility = 'hidden';
            }
        });
    }
    if (document.querySelector('.footer')) {
        document.querySelector('.footer').style.height = '10px';
    }
    // Fix login currency
    if (document.querySelector('.loginDesk,.loginMobile')) {
        document.querySelector('.loginDesk,.loginMobile').addEventListener("DOMSubtreeModified", function() {
            if (document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span') && document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span')[1] && document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span')[1].innerHTML == '&nbsp;R$')
                document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span')[1].innerHTML = '&nbsp;BO';
        });
    }
    // Mobile fixes
    if (document.querySelector('.mobile')) {
        // Mobile nav fix
        fixMobileMenu();
        setTimeout(fixMobileMenu,2000);
        // Fix Bet Counter
        if (document.querySelectorAll('button[class*=style__RadioButton-sc],button[class*=style__MarketButton-sc]')) {
            setInterval(function() {
                [...document.querySelectorAll('button[class*=style__RadioButton-sc],button[class*=style__MarketButton-sc]')].map(e => e.addEventListener('click', function(){
                    setInterval(fixBetCount, 100);
                    animBetCount();
                }));
            }, 2000);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Fix esportes page
    if(document.querySelector("#r1823")){
        setTimeout("clickTop()",500);
    } else if(document.querySelector("#r1824")){
        setTimeout("clickTop()",500);
    }
    // Fix CPF check
    setInterval('carregaCpf()', 2000);
});
