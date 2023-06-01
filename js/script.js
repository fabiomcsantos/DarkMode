/* o querySelector é utilizado para selecionar qualquer tag do documento HTML */
const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
})
