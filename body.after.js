
var submitButton = document.querySelector('[data-testid="submit-btn"]');
var inputElement = document.getElementById("personal_id");

if (submitButton) {
  submitButton.addEventListener('click', function() {
    var valor = inputElement.value;
    console.log("Valor do Personal ID:", valor);
  });
} else {
  console.error('Elemento não encontrado.');
}
