const form = document.getElementById('form-contato');
const campos = form.querySelectorAll('.campo');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  let isValid = true;

  campos.forEach(campo => {
    const input = campo.querySelector('input, textarea');
    const spanErro = campo.querySelector('.erro');

    if (!input.value) {
      input.classList.add('invalid');
      spanErro.textContent = 'Campo obrigatório';
      isValid = false;
    } else {
      input.classList.remove('invalid');
      spanErro.textContent = '';
    }
  });

  if (isValid) {
    
    console.log('Formulário válido! Enviando dados...');
  }
});