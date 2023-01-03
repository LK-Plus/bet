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

function close_promotion_home() {
    $('body .images_promotion_home').css('display','none')
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
//icone da copa mobile
waitForElm(".mobile .style__Menu-sc-18pd3lt-1 .dbqPJQ").then((elm) => {
    if (typeof(elm) != 'undefined' && elm != null){
        carregaMenuFixosMobile()
    }
}); 
//icone da copa desk
waitForElm(".style__MenuItem-sc-1uncf6a-4.dcVwvX > span.v3-icon.text-color").then((elm) => {
    if (typeof(elm) != 'undefined' && elm != null){
        carregaMenuFixosDesk()
        document.querySelector('#r1823 .style__Wrapper-sc-1uncf6a-1').addEventListener("DOMSubtreeModified", function () {
            waitForElm('.style__SBRow-sc-19dmv8n-1 .style__SBRow-sc-19dmv8n-1').then((elm) => {
                if (typeof(elm) != 'undefined' && elm != null){
                    carregarimagemsuperodds()
                }
            }); 
        });    
    }
}); 
//icone superodds
// waitForElm('.style__SBRow-sc-19dmv8n-1 .style__SBRow-sc-19dmv8n-1').then((elm) => {
//     if (typeof(elm) != 'undefined' && elm != null){
//         carregarimagemsuperodds()
//     }
// }); 

//     if (document.location.href === 'https://www.supremabet.com/esportes') {
//         document.location.href='/esportes/match/topLeague/World/2969'
//     }

// function carregaMenuFixosDesk(){
//     // //icone da copa desk
//     if($('#m3453') || $('#r1272')) {
//         $('.desktop .style__CarouselWrapper-sc-1on20i7-0').prepend(`<div class="style__MenuItem-sc-1uncf6a-4 faMrax" style="position: relative;" onclick="document.location.href='/esportes/match/topLeague/World/2969'"> <span class="v3-icon text-color" style="font-size: 32px; position: relative;"> <img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/copa.png?1668889893567" style=" width: 32px; height: 32px;"> </span> <span class="style__Name-sc-1uncf6a-3 bZJTtw">Copa do Mundo</span> </div>`)
//     }
// }

// function carregaMenuFixosMobile(){
//     // //icone da copa mobile
//     if($('#r1501') || $('#r1824')) {
//         $('.mobile .style__Menu-sc-18pd3lt-1').prepend(`<div class="style__MenuItem-sc-18pd3lt-2 fWnuHQ" onclick="document.location.href='/esportes/match/topLeague/World/2969'"> <div class="style__IconWrapper-sc-18pd3lt-4 Eeieh"> <img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/copa.png?1668889893567" style=" width: 24px; height: 24px;"> </div> <div class="style__MenuLabel-sc-18pd3lt-3 eaXTKo">Copa do Mundo</div> </div>`)
//     }
// }

/*
function carregaEsportesLink() {
    location.href = 'https://www.supremabet.com/esportes/match/todayEvents';
}
function alteraLinkEsportes() {
    $("#navigation-3236 > nav > ul > li:nth-child(1) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");
    $("#navigation-3708 > nav > ul > li:nth-child(1) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");
    $("#navigation-3762 > nav > ul > li:nth-child(1) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");
    $("#navigation-3624 > nav > ul > li:nth-child(2) > a").attr("href", "https://www.supremabet.com/esportes/match/topLeague");

    $(document).on("click", "#bottom-navigation > div:nth-child(2)", function () {
        setTimeout("carregaEsportesLink()", 100);
    });
}
setTimeout("alteraLinkEsportes()", 1000);
*/

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
    // Fix load files
    if (document.querySelectorAll('.v3-login-btn,.profileInfo__circleButton__icon').length === 0) {
        for (const element of document.querySelectorAll('script:empty[src*="widgets-x"]')) {
            const oldSrc = element.src;
            const t = +new Date();
            const newSrc = oldSrc.split('?')[0] + '?v=' + t;
            console.log(oldSrc, ' to ', newSrc);
            element.remove();
            document.querySelector('head').appendChild(document.createElement('script')).src = newSrc;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Fix CPF check
    setInterval(carregaCpf, 2000);
    // Modal info player
    if (document.querySelector('.loginDesk,.loginMobile')) {
        document.querySelector('body').addEventListener("DOMSubtreeModified", function () {
            if (document.querySelector('.accountModal')) {
                if (document.querySelector('.uploadInfo__sectionItem')) {
                    if (document.querySelector('.uploadInfo__sectionItem')) {
                        //alteração texto upload arquivos
                        if (document.querySelector('.uploadInfo__sectionItem').innerHTML != '<div class="uploadInfo__sectionItem"> <div>FOTO DOCUMENTO:</div> <div>• A foto deve ser tirada do documento original, com suas cores originais, não podendo ser em preto e branco;</div> <div>• Encaminhar fotos da frente e verso do documento;</div> <div>• O documento precisa estar dentro da validade;</div> <div>• Os dados deverão estar 100% legíveis;</div> <div>• O arquivo deve seguir o formato JPG, PNG, GIF ou PDF e não exceder 3 MB.</div> <br> <div>FOTO SELFIE:</div> <div>• Foto com o mesmo documento ao lado do rosto;</div> <div>• A selfie deve ser tirada em local claro e estar nítida.</div> <div>• O arquivo deve seguir o formato JPG, PNG, GIF ou PDF e não excede 3 MB.</div> <div></div> <br> <div><b>Obs 1: Os documentos possuem um prazo de até 48hr para aprovação.</b></div> <br> <div><b>Obs 2: Caso possua qualquer dúvida no processo, entre em contato com nosso suporte, clicando no menu “SUPORTE”, localizado no canto superior direito da página inicial.</b></div> </div>') {
                            document.querySelector('.uploadInfo__sectionItem').innerHTML = '<div class="uploadInfo__sectionItem"> <div>FOTO DOCUMENTO:</div> <div>• A foto deve ser tirada do documento original, com suas cores originais, não podendo ser em preto e branco;</div> <div>• Encaminhar fotos da frente e verso do documento;</div> <div>• O documento precisa estar dentro da validade;</div> <div>• Os dados deverão estar 100% legíveis;</div> <div>• O arquivo deve seguir o formato JPG, PNG, GIF ou PDF e não exceder 3 MB.</div> <br> <div>FOTO SELFIE:</div> <div>• Foto com o mesmo documento ao lado do rosto;</div> <div>• A selfie deve ser tirada em local claro e estar nítida.</div> <div>• O arquivo deve seguir o formato JPG, PNG, GIF ou PDF e não excede 3 MB.</div> <div></div> <br> <div><b>Obs 1: Os documentos possuem um prazo de até 48hr para aprovação.</b></div> <br> <div><b>Obs 2: Caso possua qualquer dúvida no processo, entre em contato com nosso suporte, clicando no menu “SUPORTE”, localizado no canto superior direito da página inicial.</b></div> </div>'
                        };
                    };
                };
                //botão e verificar documento para saque
                if ($('.style__Container-sc-102jdln-0 div .accountModal__contentWrapper--paddingTop .v3-col:nth-child(1)')) {
                    if ($('.style__Container-sc-102jdln-0 div .accountModal__contentWrapper--paddingTop .v3-col:nth-child(1)').html() == '<div class="style__Title-sc-102jdln-1 cxuFBU">Sacar dinheiro</div>' || !$('.userInfoAndBalance__info__checkedIcon')) {
                        $('.style__Container-sc-102jdln-0 div .accountModal__contentWrapper--paddingTop .v3-col:nth-child(1)').html('<div class="style__Title-sc-102jdln-1 cxuFBU">Sacar dinheiro</div><a href="https://www.supremabet.com/casino/slots/all?accounts=%2A&amp;settings=%2A&amp;documents=%2A" class="v3-btn v3-btn-primary v3-btn-lg x-button">Valide sua conta, clique aqui!</a>')
                    };
                };
                //Digisac em Mensagem
                if (document.location.href.match(/.*?accounts=%2A&messages=%2A/)) {
                    if (document.querySelector('.notificationMessage') == null) {
                        $('body').append('<div class="notificationMessage"> <div class="v3-btn-primary" style=" position: fixed; top: -300px; width: 33%; height: 8% !important; z-index: 1000; border: 1px solid var(--v3-black-6); margin: 1% 37% 0% 37%; border-radius: 4px; animation: displayNone 4s;"> <div style="margin:10px"><div class="accountModal__header__title">Aviso</div><div class="accMenu__item" style="margin: auto;display: flex;justify-content: center;">Para ser atendido mais rapidamente use o digisac logo abaixo!</div></div></div></div>')
                        document.getElementById('btn-webchat').click()
                    }
                } else {
                    if (document.querySelector('.notificationMessage')) {
                        document.querySelector('.notificationMessage').remove()
                        document.getElementById('btn-webchat').click()
                    }
                }
                // //foto de identidade
                if ($('.desktop').length != 0) {
                    if (document.querySelectorAll('.uploadInfo__secondSection .uploadInfo__sectionItem').length > 2 && document.querySelectorAll('.uploadInfo__secondSection .uploadInfo__sectionItem')[2].innerHTML != '<img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/identidade-final.png?1667603660447" style=" width: 250px; margin: 5px; "><img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/selfie-final.png?1667603641230" style=" width: 250px; margin: 5px; ">') {
                        document.querySelectorAll('.uploadInfo__secondSection .uploadInfo__sectionItem')[2].innerHTML = '<img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/identidade-final.png?1667603660447" style=" width: 250px; margin: 5px; "><img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/selfie-final.png?1667603641230" style=" width: 250px; margin: 5px; ">'
                    }
                } else {
                    if ($('.uploadInfo .uploadInfo__thirdSection').length == 0) {
                        $('.uploadInfo').append('<div class="uploadInfo__thirdSection"><div class="uploadInfo__sectionItem"><img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/identidade-final.png?1667603660447" style=" width: 250px; margin: 5px; "><img src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/selfie-final.png?1667603641230" style=" width: 250px; margin: 5px; "></div></div>')
                    }
                }

            };
        });
    };
    //fix header promotion
    if ($('.desktop #r1966').length == 1) {
        $('.desktop .header-row[data-id="1746"]').addClass("fixedElement");
    } else if (document.querySelector('.notificationMessage')) {
        $('.desktop .header-row[data-id="1746"]').removeClass("fixedElement");
    }

});

// // promotion home page com referencia
// if ($('.desktop #r1814').length == 1) {
//     $('body').append('<div style="top: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, 0.3); z-index: 10; width: 100%; height: 100%; display: flex; place-content: center; align-items: center;" class="images_promotion_home"><div style=" width: 30vw; display: flex; flex-wrap: wrap; flex-direction: row-reverse; "><button style=" border: 0px; color: RGB(255,255,255,0.7) !important; background: #803BBC; z-index: 1; cursor: pointer; position: fixed; margin: 5px; " class="v3-btn v3-btn-primary" onclick="close_promotion_home()">X</button><a href="https://www.supremabet.com/cabines-duplas"><img style=" margin: auto; width: 30vw; border-radius: 5px; cursor: pointer; " src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/popupaposte50.png?1667569588536"></a></div></div>')
// } else if ($('.mobile #r1780').length == 1) {
//     $('body').append('<div style="top: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, 0.3); z-index: 10; width: 100%; height: 100%; display: flex; place-content: center; align-items: center;" class="images_promotion_home"><div style="width: 96vw;display: flex;flex-wrap: wrap;flex-direction: row-reverse;"><button style=" border: 0px; color: RGB(255,255,255,0.7) !important; background: #803BBC; z-index: 1; cursor: pointer; position: fixed; margin: 5px; " class="v3-btn v3-btn-primary" onclick="close_promotion_home()">X</button><a href="https://www.supremabet.com/cabines-duplas"><img style="margin: auto;width: 100vw;border-radius: 5px;cursor: pointer;" src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/popupaposte50.png?1667569588536"></a></div></div>')
// }

// promotion home page
if ($('.desktop').length == 1) {
    waitForElm('#r2210').then((elm) => {
        if ($('.desktop #r2210').length == 1) {
            $('body').append('<div style="top: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, 0.3); z-index: 10; width: 100%; height: 100%; display: flex; place-content: center; align-items: center;" class="images_promotion_home"><div style=" width: 30vw; display: flex; flex-wrap: wrap; flex-direction: row-reverse; "><button style=" border: 0px; color: RGB(255,255,255,0.7) !important; background: #803BBC; z-index: 1; cursor: pointer; position: fixed; margin: 5px; " class="v3-btn v3-btn-primary" onclick="close_promotion_home()">X</button><img style=" margin: auto; width: 30vw; border-radius: 5px; cursor: pointer; " src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/popupatenc%CC%A7a%CC%83o-16727013433373.png?1672704209853"></a></div></div>')
        }
    });
} else {
        waitForElm('#r1780').then((elm) => {
        if ($('.mobile #r1780').length == 1) {
            $('body').append('<div style="top: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, 0.3); z-index: 10; width: 100%; height: 100%; display: flex; place-content: center; align-items: center;" class="images_promotion_home"><div style="width: 96vw;display: flex;flex-wrap: wrap;flex-direction: row-reverse;"><button style=" border: 0px; color: RGB(255,255,255,0.7) !important; background: #803BBC; z-index: 1; cursor: pointer; position: fixed; margin: 5px; " class="v3-btn v3-btn-primary" onclick="close_promotion_home()">X</button><img style="margin: auto;width: 100vw;border-radius: 5px;cursor: pointer;" src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/popupatenc%CC%A7a%CC%83o-16727013433373.png?1672704209853"></a></div></div>')
        }
    })
}
//Imagem superodds
function carregarimagemsuperodds() {
    if ($('.style__RadioButton-sc-3ucvic-2 span.v3-icon').html() != '<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">') {
        $('.style__RadioButton-sc-3ucvic-2 span.v3-icon').html('<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">')
    }
}
