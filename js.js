
function insert(tecla) {

    let digito = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText += tecla;

}

function apagarConta() {

    let apagado = document.getElementById('resultado').innerText = '';
    return apagado;
}


function apagarUltimoNumero() {

    let ultimoNumero = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = ultimoNumero.substring(0, ultimoNumero.length -1);
}

function fazerContas() {

    let conta = document.getElementById('resultado').innerText;

    if (conta) {
        document.getElementById('resultado').innerText = eval(conta);
    } else {}
}