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
//Imagem superodds
// var imagesuperodds = 0;
// function carregarimagemsuperodds() {
//     if (document.querySelector('.style__SBCol-sc-19dmv8n-0 .style__Coeficient-sc-3ucvic-1 span.v3-icon') && imagesuperodds == 0) {
//         $('.style__SBCol-sc-19dmv8n-0 .style__Coeficient-sc-3ucvic-1 span.v3-icon').html('<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">')
//     }
//     if (document.querySelector('.style__Coeficient-sc-3ucvic-1 span') && imagesuperodds == 0) {
//         $('.style__Coeficient-sc-3ucvic-1 span').html('<img src="https://bet-files.suprema.group/images/SUPERODDS.png" style="width: 14px;height: 14px;min-width: 14px;min-height: 14px;">')
//     } else {
//         imagesuperodds = 0
//     }
// }

function close_promotion_home() {
    $('body .images_promotion_home').css('display','none')
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
    // carregarimagemsuperodds()
    // Banner control
    // const lang = JSON.parse(window.hrefLangRelations);
    // if (document.querySelector('.sportsPC div.slider-container')) {
    //     document.querySelector('.sportsPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=sports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    // }
    // if (document.querySelector('.sportsMobile div.slider-container')) {
    //     document.querySelector('.sportsMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=msports&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    // }
    // if (document.querySelector('.cassinoPC div.slider-container')) {
    //     document.querySelector('.cassinoPC div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=casino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    // }
    // if (document.querySelector('.cassinoMobile div.slider-container')) {
    //     document.querySelector('.cassinoMobile div.slider-container').innerHTML = `<iframe src="https://pokerbyte.com.br/bet/banner?t=mcasino&l=${lang.currentPrefix}" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`;
    // }
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
    //Imagem superodds
    // carregarimagemsuperodds()
    // if (document.querySelector('#r1823')) {
    //     document.querySelector('#r1823').addEventListener("DOMSubtreeModified", function () {
    //         setTimeout(carregarimagemsuperodds, 2000);
    //         imagesuperodds = 1;
    //     });
    // };

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
                if (document.location.href.match(/.*?accounts=%2A&messages=%2A/)) {
                    if (document.querySelector('.notificationMessage') == null) {
                        $('body').append('<div class="notificationMessage"> <div class="v3-btn-primary" style=" position: fixed; top: -300px; width: 33%; height: 8% !important; z-index: 1000; border: 1px solid var(--v3-black-6); margin: 1% 37% 0% 37%; border-radius: 4px; animation: displayNone 4s;"> <div style="margin:10px"><div class="accountModal__header__title">Aviso</div><div class="accMenu__item" style="margin: auto;display: flex;justify-content: center;">Para ser atendido mais rapidamente use o digisac logo abaixo!</div></div></div></div>')
                        // setInterval(() => {
                        //     document.querySelector('.notificationMessage').remove()                   
                        // }, 10000);
                        document.getElementById('btn-webchat').click()
                    }
                } else {
                    document.querySelector('.notificationMessage').remove()
                    document.getElementById('btn-webchat').click()
                }
            };
        });
    };
    // promotion home page
    if ($('.desktop')) {
        if($('#r1914')) {
            $('body').append('<div style="top: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, 0.3); z-index: 10; width: 100%; height: 100%; display: none; place-content: center; align-items: center;" class="images_promotion_home"><div style=" width: 30vw; display: flex; flex-wrap: wrap; flex-direction: row-reverse; "><button style=" z-index: 1; cursor: pointer; position: fixed; margin: 5px; " class="v3-btn v3-btn-primary" onclick="close_promotion_home()">X</button><img style=" margin: auto; width: 30vw; border-radius: 5px; cursor: pointer; " src="https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/media/popupaposte50.png?1667569588536"></div></div>')
        }
    }
    //fix header promotion
    if ($('.desktop #r1966').length == 1) {
        $('.desktop .header-row[data-id="1746"]').addClass("fixedElement");
    } else if (document.querySelector('.notificationMessage')) {
        $('.desktop .header-row[data-id="1746"]').removeClass("fixedElement");
    }

});