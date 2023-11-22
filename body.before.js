
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
 
//Inicio função de murilo
class FormHandler {
    constructor(form) {
        this.form = form;
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('teste 1');
    }
}
class RegistrationFormHandler extends FormHandler {
    constructor(form) {
        super(form);
    }

handleFormSubmit(event) {
    super.handleFormSubmit(event);

        console.log('teste 2');
    }
}

const registrationForms = document.querySelectorAll('.entrance-form-bc');

registrationForms.forEach((form) => {
    new RegistrationFormHandler(form);
});

//inject


 document.addEventListener('DOMContentLoaded', function () {
    // function handleButtonClick() {
    //     let idUser = document.getElementById("personal_id");
    //     let nameUser = document.getElementById("first_name");
    //     let emailUser = document.getElementById("email");
    //     let phoneUser = document.getElementById("phone");
    //     let day = new Date();
    //     let dayUser = day.getDay();
    //     let timeUser = day.getHours();
    //     let minUser = day.getMinutes();
    //     let daysOfTheWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    //     let regionUser = Intl.DateTimeFormat().resolvedOptions().timeZone;

    //     if ("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             var latitude = position.coords.latitude;
    //             var longitude = position.coords.longitude;

    //             // Use uma API de geocodificação para obter informações da localização
    //             var apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    //             fetch(apiUrl)
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     var cidade = data.address.city || data.address.town || data.address.village || "Cidade não encontrada";
    //                     console.log("Cidade do usuário:", cidade);
    //                 })
    //                 .catch(error => {
    //                     console.error("Erro ao obter informações de localização:", error);
    //                 });
    //         });
    //     } else {
    //         console.error("Geolocalização não suportada neste navegador.");
    //     }

    //     let idValue = idUser.value;
    //     let nameValue = nameUser.value;
    //     let emailValue = emailUser.value;
    //     let phoneValue = phoneUser.value;
    //     console.log("id:", idValue);
    //     console.log("nome", nameValue);
    //     console.log("email", emailValue);
    //     console.log("email", phoneValue);
    //     console.log("Dia da semana:", daysOfTheWeek[dayUser]);
    //     console.log("Hora atual:", timeUser + ":" + minUser);
    //     console.log("Região do usuário:", regionUser);
    // }

    
});
let submitButton = document.querySelector('[data-testid="submit-btn"]');

if (submitButton) {
    submitButton.addEventListener('click', handleButtonClick);
} else {
    console.error('Elemento do botão não encontrado.');
}


