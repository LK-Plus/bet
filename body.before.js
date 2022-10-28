let cliqueBtnCpf = true;
function carregaCpf() {
    let cpf = '';
    $('#personal_id').on('keyup', function () {
        cpf = $('#personal_id').val().length;
        if (cpf == 14) {
            if (cliqueBtnCpf) {
                $('.v3-input-suffix .x-button--cancel').click();
                cliqueBtnCpf = false;
            }
        } else {
            cliqueBtnCpf = true;
        }
    });
}

function carregarimagemsuperodds() {
    //Imagem superodds
    // if (document.querySelector('.style__SBCol-sc-19dmv8n-0 .style__Coeficient-sc-3ucvic-1 span.v3-icon') && document.querySelector('.style__SBCol-sc-19dmv8n-0 .style__Coeficient-sc-3ucvic-1 span.v3-icon').innerHTML != '<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">') {
    //     $('.style__SBCol-sc-19dmv8n-0 .style__Coeficient-sc-3ucvic-1 span.v3-icon').html('<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">')    
    // }
    if (document.querySelector('.style__Coeficient-sc-3ucvic-1 span') && document.querySelector('.style__Coeficient-sc-3ucvic-1 span').innerHTML != '<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">') {
        $('.style__Coeficient-sc-3ucvic-1 span').html('<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">')
    }
}

function carregaEsportesLink() {
    location.href = 'https://www.supremabet.com/esportes/match/todayEvents';
}
function alteraLinkEsportes() {
    $("#navigation-3236 > nav > ul > li:nth-child(1) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");
    $("#navigation-3708 > nav > ul > li:nth-child(1) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");
    $("#navigation-3762 > nav > ul > li:nth-child(1) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");
    $("#navigation-3624 > nav > ul > li:nth-child(2) > a").attr("href", "https://www.supremabet.com/esportes/match/todayEvents");

    $(document).on("click", "#bottom-navigation > div:nth-child(2)", function () {
        setTimeout("carregaEsportesLink()", 100);
    });
}
setTimeout("alteraLinkEsportes()", 1000);

function animBetCount() {
    const elementFrame = document.querySelectorAll('.eruTRg')[2].querySelector('span');
    const keyframes = new KeyframeEffect(
        elementFrame,
        [
            { transform: 'translateX(0%)' },
            { transform: 'translateX(-20%)' },
            { transform: 'translateY(10%)' },
            { transform: 'translateX(-20%)' },
            { transform: 'translateY(-20%)' },
            { transform: 'translateY(10%)' },
            { transform: 'translateX(0%)' },
            { transform: 'translateY(0%)' }
        ],
        { duration: 1000, fill: 'forwards' }
    );
    const elementAnimation = new Animation(keyframes, document.timeline);
    elementAnimation.play();
}

function fixMobileMenu() {
    if (document.querySelector('.eruTRg')) {
        // if (document.querySelectorAll('.eruTRg')[3].innerText == 'Home') {
        //     document.querySelectorAll('.eruTRg')[3].remove()
        // }
        if (!document.querySelectorAll('.gSnjmI') || document.querySelectorAll('.gSnjmI')[2].innerHTML !== 'Home') {
            document.querySelectorAll('.eruTRg')[2].querySelector('span svg').innerHTML = '<image id="image0" width="100%" height="100%" x="0" y="0" href="https://bet-files.suprema.group/images/BETSLIP2.png"></image>';
        } else {
            if (document.querySelectorAll('.eruTRg')[2].querySelector('span div')) {
                document.querySelectorAll('.eruTRg')[2].querySelector('span div').remove();
            }
            document.querySelectorAll('.eruTRg')[2].querySelector('span svg').innerHTML = '<image id="image0" width="100%" height="100%" x="0" y="0" href="https://bet-files.suprema.group/images/home2.png"></image>';
            document.querySelectorAll('.eruTRg')[2].innerHTML = '<a href="https://www.supremabet.com/">' + document.querySelectorAll('.eruTRg')[2].innerHTML + '</a>';
        }
        document.querySelectorAll('.eruTRg')[2].querySelector('span svg').style.width = '1.4em';
        document.querySelectorAll('.eruTRg')[2].querySelector('span svg').style.height = '1.4em';
    }
}

document.addEventListener('readystatechange', (event) => {
    //Imagem superodds
    carregarimagemsuperodds()
    
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
        document.querySelector('.footerbuttonup').addEventListener('click', function () {
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
        document.querySelector('.footerbuttondown').addEventListener('click', function () {
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
        document.querySelector('.loginDesk,.loginMobile').addEventListener("DOMSubtreeModified", function () {
            if (document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span') && document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span')[1] && document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span')[1].innerHTML == '&nbsp;R$') {
                document.querySelectorAll('.style__Bonus-sc-1nhmslw-8 span')[1].innerHTML = '&nbsp;BO';
            }
        });
    }
    // Mobile fixes
    if (document.querySelector('.mobile')) {
        // Mobile nav fix
        fixMobileMenu();
        setTimeout(fixMobileMenu, 2000);
        // Fix Bet Counter
        if (document.querySelectorAll('button[class*=style__RadioButton-sc],button[class*=style__MarketButton-sc]')) {
            setInterval(function () {
                [...document.querySelectorAll('button[class*=style__RadioButton-sc],button[class*=style__MarketButton-sc],span[class*=style__CloseIcon-sc-1994fuq-1]')].map(e => e.addEventListener('click', animBetCount));
            }, 2000);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Fix CPF check
    setInterval(carregaCpf, 2000);

    if (document.querySelector('#r1823')) {
        document.querySelector('#r1823').addEventListener("DOMSubtreeModified", function () {
            setInterval(carregarimagemsuperodds,3000)
        });
    };

    // Modal info player
    if (document.querySelector('.loginDesk,.loginMobile')) {
        document.querySelector('body').addEventListener("DOMSubtreeModified", function () {
            if (document.querySelector('.accountModal')) {
                if (document.querySelector('.uploadInfo__sectionItem')) {
                    if (document.querySelector('.uploadInfo__sectionItem')) {
                        //alteração texto upload arquivos
                        if (document.querySelector('.uploadInfo__sectionItem').innerHTML == '<div>• A foto deve ser tirada do documento original, não é permitido fazer qualquer montagem de foto digital.</div><div>• A selfie deve ser tirada em local claro e estar nítida.</div><div>• A imagem do documento, dados pessoais, assinatura, selo e outras informações devem ser claramente legíveis. • Se necessário, a empresa poderá solicitar a apresentação de outros documentos. ***Obs: Caso haja qualquer dúvida no processo, entre em contato com nosso suporte, clicando no menu SUPORTE, na parte superior direita do site.</div> ') {
                            document.querySelector('.uploadInfo__sectionItem').innerHTML = '<div>• A foto deve ser tirada do documento original, não é permitido fazer qualquer montagem de foto digital.</div><div>• A selfie deve ser tirada em local claro e estar nítida.</div><div>• A imagem do documento, dados pessoais, assinatura, selo e outras informações devem ser claramente legíveis.</div><div>• Se necessário, a empresa poderá solicitar a apresentação de outros documentos.</div><div><b>Obs: Caso haja qualquer dúvida no processo, entre em contato com nosso suporte, clicando no menu SUPORTE, na parte superior direita do site.</b></div>'
                        };
                    };
                };
                // remoção de convidar um amigo
                if (document.querySelector('.accMenu .accMenu__item:nth-child(2)')) {
                    if (document.querySelector('.accMenu .accMenu__item:nth-child(2)').innerText == 'Indicar um amigo') {
                        $('.accMenu .accMenu__item:nth-child(2)').addClass("hideAll");
                    };
                };
                //botão e verificar documento para saque
                if ($('.style__Container-sc-102jdln-0 div .accountModal__contentWrapper--paddingTop .v3-col:nth-child(1)')) {
                    if ($('.style__Container-sc-102jdln-0 div .accountModal__contentWrapper--paddingTop .v3-col:nth-child(1)').html() == '<div class="style__Title-sc-102jdln-1 cxuFBU">Sacar dinheiro</div>' || !$('.userInfoAndBalance__info__checkedIcon')) {
                        $('.style__Container-sc-102jdln-0 div .accountModal__contentWrapper--paddingTop .v3-col:nth-child(1)').html('<div class="style__Title-sc-102jdln-1 cxuFBU">Sacar dinheiro</div><a href="https://www.supremabet.com/casino/slots/all?accounts=%2A&amp;settings=%2A&amp;documents=%2A" class="v3-btn v3-btn-primary v3-btn-lg x-button">Valide sua conta, clique aqui!</a>')
                    };
                };
                //Digisac em Mensagem
                if ($('.accountModal__container .accountModal__header')) {
                    if ($('.accountModal__container .accountModal__header').text() == 'Mensagens') {

                    }
                }
            };
        });
    };
    //fix header promotion
    if ($('.desktop #r1966').length == 1) {
        $('.desktop .header-row[data-id="1746"]').addClass("fixedElement");
    } else {
        $('.desktop .header-row[data-id="1746"]').removeClass("fixedElement");
    }
});


//alteração texto upload arquivos
{/* <div class="accountModal__header__title">Mensagens</div>
<div class="custom-html-container">
<button id="btn-webchat">Suporte</button>
    </div>
<span class="v3-icon accountModal__header__close"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><defs><clipPath><rect width="1em" height="1em" transform="translate(971 2389)"></rect></clipPath></defs><g transform="translate(-971 -2389)"><path d="M20.5,23.124l-8.834,8.834a1.852,1.852,0,1,1-2.618-2.619L17.887,20.5,9.053,11.671a1.851,1.851,0,1,1,2.618-2.618L20.5,17.887l8.834-8.834a1.852,1.852,0,1,1,2.619,2.618L23.124,20.5l8.834,8.834a1.852,1.852,0,1,1-2.619,2.619Z" transform="translate(962.495 2380.495)"></path></g></svg></span>'


$('.accountModal__container .accountModal__header').html('<div class="accountModal__header__title">Mensagens</div><button id="btn-webchat">Suporte</button> <script> window._digisac = { id: "ac2d57a6-f77d-45ee-b26b-408c08afaabc", payload: { visibleButton: false } };<span class="v3-icon accountModal__header__close"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><defs><clipPath><rect width="1em" height="1em" transform="translate(971 2389)"></rect></clipPath></defs><g transform="translate(-971 -2389)"><path d="M20.5,23.124l-8.834,8.834a1.852,1.852,0,1,1-2.618-2.619L17.887,20.5,9.053,11.671a1.851,1.851,0,1,1,2.618-2.618L20.5,17.887l8.834-8.834a1.852,1.852,0,1,1,2.619,2.618L23.124,20.5l8.834,8.834a1.852,1.852,0,1,1-2.619,2.619Z" transform="translate(962.495 2380.495)"></path></g></svg></span>') */}