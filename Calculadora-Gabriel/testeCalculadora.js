document.body.innerHTML = `
    <input type="number" id="numero1">
    <input type="number" id="numero2">
    <div id="resultado"></div>
`;

function Somar() {
    document.getElementById('numero1').value = 5;
    document.getElementById('numero2').value = 3;
    soma();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Resultado: 8") {
        console.log("Soma passou!");
    } else {
        console.error("Soma falhou: esperado 'Resultado: 8', mas foi '" + resultado + "'");
    }
}

function Subtrair() {
    document.getElementById('numero1').value = 5;
    document.getElementById('numero2').value = 3;
    subtrai();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Resultado: 2") {
        console.log("Subtração passou!");
    } else {
        console.error("Subtração falhou: esperado 'Resultado: 2', mas foi '" + resultado + "'");
    }
}

function Multiplicar() {
    document.getElementById('numero1').value = 5;
    document.getElementById('numero2').value = 3;
    multiplica();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Resultado: 15") {
        console.log("Multiplicação passou!");
    } else {
        console.error("Multiplicação falhou: esperado 'Resultado: 15', mas foi '" + resultado + "'");
    }
}

function Dividir() {
    document.getElementById('numero1').value = 6;
    document.getElementById('numero2').value = 3;
    divide();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Resultado: 2") {
        console.log("Divisão passou!");
    } else {
        console.error("Divisão falhou: esperado 'Resultado: 2', mas foi '" + resultado + "'");
    }
}

function DividirPorZero() {
    document.getElementById('numero1').value = 6;
    document.getElementById('numero2').value = 0;
    divide();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Erro: Divisão por zero não é permitida.") {
        console.log("Divisão por zero bloqueada!");
    } else {
        console.error("Teste de divisão por zero não bloqueada', resultado: '" + resultado + "'");
    }
}

function Potencia() {
    document.getElementById('numero1').value = 2;
    document.getElementById('numero2').value = 3;
    potencia();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Resultado: 8") {
        console.log("Potencia passou!");
    } else {
        console.error("Potencia falhou: esperado 'Resultado: 8', mas foi '" + resultado + "'");
    }
}

function RaizQuadrada() {
    document.getElementById('numero1').value = 9;
    raizQuadrada();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Resultado: 3") {
        console.log("Raiz Quadrada passou!");
    } else {
        console.error("Raiz Quadrada falhou: esperado 'Resultado: 3', mas foi '" + resultado + "'");
    }
}

function RaizQuadradaNegativa() {
    document.getElementById('numero1').value = -9;
    raizQuadrada();
    const resultado = document.getElementById('resultado').innerText;
    if (resultado === "Erro: Não é possível calcular a raiz de um número negativo.") {
        console.log("Teste de Raiz quadrada negativa bloqueada!");
    } else {
        console.error("Raiz quadrada negativa não bloqueada', resultado: '" + resultado + "'");
    }
}

Somar();
Subtrair();
Multiplicar();
Dividir();
DividirPorZero();
Potencia();
RaizQuadrada();
RaizQuadradaNegativa();
