function soma(){
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    const resultado = num1  + num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}   

function subtrai(){
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    const resultado = num1 - num2
    document.getElementById('resultado').innerText = `Resultado:  ${resultado}`;
}   

function multiplica() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = `Resultado:  ${resultado}`;
}

function divide() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    if (num2 === 0) {
         document.getElementById('resultado').innerText ="Erro: Divisão por zero não é permitida.";
         
    }else {
        const resultado  = num1/num2;
        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    }
}


function potencia(){
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = Math.pow(num1, num2);
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`
}

function raizQuadrada() {
     const num1 = parseFloat(document.getElementById('numero1').value);
    if (num1 < 0) {
        document.getElementById('resultado').innerText = "Erro: Não é possível calcular a raiz de um número negativo.";
    }
else { const resultado = Math.sqrt(num1);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;

}}