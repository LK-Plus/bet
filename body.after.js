
document.querySelector('script').setAttribute('defer', 'true');

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

//     // Obter a localização do usuário
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

//                     let userData = {
//                         id: idUser.value,
//                         name: nameUser.value,
//                         email: emailUser.value,
//                         phone: phoneUser.value,
//                         dayOfWeek: daysOfTheWeek[dayUser],
//                         currentTime: timeUser + ":" + minUser,
//                         region: regionUser,
//                         location: cidade 
//                     };

//                     fetch("SUA_URL_API", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(userData),
//                     })
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log("Resposta da API:", data);
//                         })
//                         .catch(error => {
//                             console.error("Erro ao enviar dados para a API:", error);
//                         });
//                 })
//                 .catch(error => {
//                     console.error("Erro ao obter informações de localização:", error);
//                 });
//         });
//     } else {
//         console.error("Geolocalização não suportada neste navegador.");
//     }
// }

// var submitButton = document.querySelector('[data-testid="submit-btn"]');

// if (submitButton) {
//     submitButton.addEventListener('click', handleButtonClick);
// } else {
//     console.error('Elemento do botão não encontrado.');
// }


$(document).ready(function() {

    $('.buttons1663789491022').on('click', function() {
        console.log('teste')
        // let day = new Date();
        // let dayUser = day.getDay();
        // let timeUser = day.getHours();
        // let minUser = day.getMinutes();
        // let daysOfTheWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        // let regionUser = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // if ("geolocation" in navigator) {
        //     navigator.geolocation.getCurrentPosition(function (position) {
        //         var latitude = position.coords.latitude;
        //         var longitude = position.coords.longitude;

        //         // Use uma API de geocodificação para obter informações da localização
        //         var apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        //         $.ajax({
        //             url: apiUrl,
        //             method: "GET",
        //             dataType: "json",
        //             success: function(data) {
        //                 var cidade = data.address.city || data.address.town || data.address.village || "Cidade não encontrada";
        //                 console.log("Cidade do usuário:", cidade);
        //             },
        //             error: function(error) {
        //                 console.error("Erro ao obter informações de localização:", error);
        //             }
        //         });
        //     });
        // } else {
        //     console.error("Geolocalização não suportada neste navegador.");
        // }

        // console.log("id:", $("#personal_id").val());
        // console.log("nome", $("#first_name").val());
        // console.log("email", $("#email").val());
        // console.log("phone", $("#phone").val());
        // console.log("Dia da semana:", daysOfTheWeek[dayUser]);
        // console.log("Hora atual:", timeUser + ":" + minUser);
        // console.log("Região do usuário:", regionUser);
    });
});

