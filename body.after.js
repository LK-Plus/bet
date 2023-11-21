
// document.addEventListener('DOMContentLoaded', function () {
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

// var submitButton = document.querySelector('[data-testid="submit-btn"]');

// if (submitButton) {
//     submitButton.addEventListener('click', handleButtonClick);
// } else {
//     console.error('Elemento do botão não encontrado.');
// }
// });

document.addEventListener('DOMContentLoaded', function () {
    function handleButtonClick() {
        // Código a ser executado quando o botão principal for clicado

        // Encontrar o elemento do outro botão
        var outroBotao = document.querySelector('[data-testid="submit-btn"]'); // Substitua 'v3-register-btn' pelo ID real do outro botão

        // Verificar se o elemento foi encontrado antes de prosseguir
        if (outroBotao) {
            // Código para manipular o elemento do outro botão
            console.log('Elemento do outro botão:', outroBotao);
        } else {
            console.error('Elemento do outro botão não encontrado.');
        }
    }

    var submitButton = document.getElementById('v3-register-btn');

    if (submitButton) {
        submitButton.addEventListener('click', handleButtonClick);
    } else {
        console.error('Elemento do botão não encontrado.');
    }
});
