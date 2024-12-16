document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;