
//Inicio Código pixel Kwai:
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.install=t():e.install=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"_esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this._spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};!function(e){var t=window;t.KwaiAnalyticsObject=e,t[e]=t[e]||[];var n=t[e];n.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];var o=function(e,t){e[t]=function(){var n=Array.from(arguments),o=r([t],n,!0);e.push(o)}};n.methods.forEach((function(e){o(n,e)})),n.instance=function(e){var t=n._i[e]||[];return n.methods.forEach((function(e){o(t,e)})),t},n.load=function(t,r){n._i=n._i||{},n._i[t]=[],n._i[t]._u="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js",n._t=n._t||{},n._t[t]=+new Date,n._o=n._o||{},n._o[t]=r||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js?sdkid="+t+"&lib="+e;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}}("kwaiq")}])}));
kwaiq.load('539337986623422557');
kwaiq.page();
//Fim Código pixel Kwai

//Inicio Código traqueamento saldo do jogador:
function geraConversaoDepo() {
    //ajustar essa parte do código para pegar o valor do saldo real e valor do bônus já removendo o " R$"
    const valorConta = $("div.nav-menu-container.header-user-nav > ul:nth-child(1) > li > a > div > span").text();
    const valorBonus = $("div.nav-menu-container.header-user-nav > ul:nth-child(2) > li > a > div > span").text();        
    
    if(valorConta > 0 || valorBonus > 0){        
      if(localStorage.getItem("compra") != "sim"){
        localStorage.setItem("compra", "sim");
        kwaiq.instance('539855887692472403').track('purchase');
      }
    }else{
      console.log("Nao consegui pegar valor conta: "+valorConta+" "+valorBonus);
    } 
}
kwaiq.instance('539855887692472403').track('contentView');
setTimeout(geraConversaoDepo(), 5000);
//Fim Código traqueamento saldo do jogador

//Inicio botao CPF check
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
//Fim botao CPF check

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
            };
        });
    };
});
 

//inject
$(document).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if(isMobile) {
        // $('.accountModal--mobile').append(`
        //     <div class="container">
        //         <div class="content">
        //             <section class="neon-block clickable" data-number="3">
        //                 <div class="block">
        //                     <span class="rainbow"></span>
        //                     <h4>primeiro depósito</h4>
        //                     <p class="paragraph">R$<span>3</span></p>
        //                     <figure class="container-bau">
        //                         <img src="images/bau-de-tesouro.png" alt="">
        //                     </figure>
        //                     <figure class="container-img">
        //                         <img src="images/p-logo.svg" alt="">
        //                     </figure>
        //                 </div>
        //             </section>
        //             <section class="neon-block clickable" data-number="5">
        //                 <div class="block">
        //                     <span class="rainbow"></span>
        //                     <h4>primeiro depósito</h4>
        //                     <p class="paragraph">R$<span>5</span></p>
        //                     <figure class="container-bau">
        //                         <img src="images/bau-de-tesouro.png" alt="">
        //                     </figure>
        //                     <figure class="container-img">
        //                         <img src="images/p-logo.svg" alt="">
        //                     </figure>
        //                 </div>
        //             </section>
        //         </div>

        //         <div class="content">
        //             <section class="neon-block clickable" data-number="10">
        //                 <div class="block">
        //                 <span class="rainbow"></span>
        //                     <span class="rainbow"></span>
        //                         <h4>primeiro depósito</h4>
        //                     <p class="paragraph">R$<span>10</span></p>
        //                     <figure class="container-bau">
        //                         <img src="images/bau-de-tesouro.png" alt="">
        //                     </figure>
        //                     <figure class="container-img">
        //                         <img src="images/p-logo.svg" alt="">
        //                     </figure>
        //                 </div>
        //             </section>

        //             <section class="neon-block clickable" data-number="20">
        //                 <div class="block">
        //                     <span class="rainbow"></span>
        //                         <h4>primeiro depósito</h4>
        //                     <p class="paragraph">R$<span>20</span></p>
        //                     <figure class="container-bau">
        //                         <img src="images/bau-de-tesouro.png" alt="">
        //                     </figure>
        //                     <figure class="container-img">
        //                         <img src="images/p-logo.svg" alt="">
        //                     </figure>
        //                 </div>
        //             </section>

        //         </div>

        //         <div class="content">
        //             <section class="neon-block clickable" data-number="50">
        //                 <div class="block">
        //                     <span class="rainbow"></span>
        //                         <h4>primeiro depósito</h4>
        //                     <p class="paragraph">R$<span>50</span></p>
        //                     <figure class="container-bau">
        //                         <img src="images/bau-de-tesouro.png" alt="">
        //                     </figure>
        //                     <figure class="container-img">
        //                         <img src="images/p-logo.svg" alt="">
        //                     </figure>
        //                 </div>
        //             </section>
        //             <section class="neon-block clickable" data-number="100">
        //                 <div class="block">
        //                 <span class="rainbow"></span>
        //                     <span class="rainbow"></span>
        //                     <h4>primeiro depósito</h4>
        //                     <p class="paragraph">R$<span>100</span></p>
        //                     <figure class="container-bau">
        //                         <img src="images/bau-de-tesouro.png" alt="">
        //                     </figure>
        //                     <figure class="container-img">
        //                         <img src="images/p-logo.svg" alt="">
        //                     </figure>
        //                 </div>
        //             </section>
        //         </div>
        //     </div>
            
        // `);
        console.log('teste')
    }

    $(document).on('click', 'button[data-testid="submit-btn"]', function(e) {
        let personalIdValue = $('#personal_id').val();
        let firstNameValue = $('#first_name').val();
        let emailValue = $('#email').val();
        let passwordValue = $('#password').val();
        let promoCodeValue = $('#promo_code').val();
        let phoneValue = $('#phone').val();
        
        if(!personalIdValue == '' && !firstNameValue == '' && !emailValue == '' && !phoneValue == '') {
            if (window.matchMedia("(min-width: 768px)").matches) {
                setTimeout(() => { 
                    $('body').append(`${
                        `<div id="modalOverlay"></div>
                            <div id="modalContainer">
                                <div class="header-modal">
                                    <span class="closeButton" onclick="closeModal()">&times;</span>
                                    <figure class="img-container">'
                                        <img src=${"https://static.springbuilder.site/fs/userFiles-v2/supremabet-18749749/images/logo.png?v=1672840620"} alt="">
                                    </figure>
                                </div>
                                <div class="modal-body">
                                    <div class="content-modal">
                                    
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <div class="promo-content">
                                        <a class="btn" href=${"https://www.supremabet.com/promocoes"}>PROMOÇÕES</a>
                                        <a class="btn" href=${"https://www.supremabet.com/?accounts=%2A&bonuses=%2A&bonus=%2A&bonusType=2"}>ATIVE SEU BÔNUS</a>
                                    </div>
                                    <div class="depo-content">
                                        <a class="btn" href=${"https://www.supremabet.com/?accounts=%2A&wallet=%2A&deposit=%2A"}>DEPOSITAR AGORA</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    }`);
    
                    $('.header-modal').css({
                        'padding' : '20px'
                    });
    
                    $('#modalOverlay').css({
                        'display': 'none',
                        'position': 'fixed',
                        'top': '0',
                        'left': '0',
                        'width': '100%',
                        'height': '100%',
                        'background-color': 'rgba(0, 0, 0, 0.5)',
                        'z-index' : '9998'
                    });
    
                    $('#modalContainer').css({
                        'display': 'none',
                        'position': 'fixed',
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)',
                        'background-color': '#333333',
                        'border-radius': '5px',
                        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)',
                        'z-index' : '9999'
                    });
    
                    $('.closeButton').css({
                        'position': 'absolute',
                        'top': '10px',
                        'right': '10px',
                        'cursor': 'pointer',
                    });
    
                    $('.img-container').css({
                        'width': '150px'
                    });
    
                    $('.img-container img').css({
                        'width': '100%'
                    });
    
                    $('.modal-content').css({
                        'background-color': '#333333',
                        'border-radius': '15px'
                    });
    
                    $('.modal-body').css({
                        'display': 'flex',
                        'flex-direction': 'column',
                        'justify-content': 'space-between',
                        'align-items': 'center',
                        'height': '650px',
                        'background-image': 'url(https://bet-files.suprema.group/images/bg-modal.png)',
                        'background-position': 'center center',
                        'background-repeat': 'no-repeat',
                        'background-size': 'cover',
                        'width': '553px',
                        'margin-bottom': '2em'
                    });
    
                    $('.games-img').css({
                        'width': '495px',
                        'position': 'relative',
                        'bottom': '1.1em'
                    });
    
                    $('.games-img img').css({
                        'width': '100%'
                    });
    
                    $('.title').css({
                        'text-align': 'center',
                        'position': 'relative',
                        'bottom': '5.5em',
                        'color': '#fff',
                        'font-weight': '600'
                    });
    
                    $('.content-modal').css({
                        'text-align': 'center',
                        'color': '#fff',
                        'padding': '.8em',
                        'position': 'relative',
                        'bottom': '6em',
                        'height': '650px',
                    });
    
                    $('.content-modal p').css({
                        'font-size': '18px',
                        'font-weight': '700'
                    });
    
                    $('.modal-footer').css({
                        'display': '-ms-flexbox',
                        'display': 'flex',
                        '-ms-flex-align': 'center',
                        'align-items': 'center',
                        '-ms-flex-pack': 'end',
                        'justify-content': 'center',
                        'padding': '1rem',
                        'border-top': '1px solid #dee2e6',
                        'border-bottom-right-radius': '0.3rem',
                        'border-bottom-left-radius': '0.3rem',
                        'flex-direction': 'column',
                        'gap': '1em'
                    });
    
                    $('.depo-content').css({
                        'width': '100%'
                    });
    
                    $('.promo-content').css({
                        'display': 'flex',
                        'width': '100%',
                        'gap': '1em'
                    });
    
                    $('a.btn').css({
                        'background': '#41c12a',
                        'padding': '0.5em',
                        'border-radius': '5px',
                        'width': '100%',
                        'text-align': 'center',
                        'font-weight': '700',
                        'color': '#fff'
                    });
    
                    $('a.btn:hover').css({
                        'background': '#59e740',
                        'color': '#dcdcdc'
                    });
    
                    $('#modalOverlay, #modalContainer').fadeIn();
                }, 5000);
        
            }
        }else {
            window.location.href = 'https://www.supremabet.com/?accounts=%2A&wallet=%2A&deposit-methods=%2A';
        }
        // let currentDate = new Date();
        // let dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        // let hours = currentDate.getHours();
        // let minutes = currentDate.getMinutes();

        // if ("geolocation" in navigator) {
        //     navigator.geolocation.getCurrentPosition(function (position) {
        //         let latitude = position.coords.latitude;
        //         let longitude = position.coords.longitude;

        //         let apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        //         $.ajax({
        //             url: apiUrl,
        //             method: "GET",
        //             dataType: "json",
        //             success: function(data) {
        //                 let city = data.address.city || data.address.town || data.address.village || "Cidade não encontrada";

        //                 $.ajax({
        //                     url: 'sua-api-url-aqui',
        //                     method: 'POST',
        //                     data: {
        //                         personalId: personalIdValue,
        //                         firstName: firstNameValue,
        //                         email: emailValue,
        //                         password: passwordValue,
        //                         promoCode: promoCodeValue,
        //                         phone: phoneValue,
        //                         currentDate: currentDate,
        //                         dayOfWeek: dayOfWeek,
        //                         hours: hours,
        //                         minutes: minutes,
        //                         city: city
        //                     },
        //                     success: function(response) {
        //                         console.log('Dados enviados com sucesso:', response);
        //                     },
        //                     error: function(error) {
        //                         console.error('Erro ao enviar dados:', error);
        //                     }
        //                 });
        //             },
        //             error: function(error) {
        //                 console.error("Erro ao obter informações de localização:", error);
        //             }
        //         });
        //     });
        // } else {
        //     console.error("Geolocalização não suportada neste navegador.");
        // }
    });
});

//  function closeModal() {
//     $('#modalOverlay, #modalContainer').fadeOut();
// }




