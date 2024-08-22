const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculadora = (num1, operador, num2) => {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error, divisão por zero não permitida.";
            }
            return num1 / num2;
        case '^':
            return Math.pow(num1, num2);
        default:
            return "Operador inválido";
    }
};

const calcular = () => {
    rl.question('Digite a operação (exemplo: 3 + 4): ', (resposta) => {
        const [num1, operador, num2] = resposta.split(' ');
        const resultado = calculadora(parseFloat(num1), operador, parseFloat(num2));
        console.log(`Resultado: ${resultado}`);
        interface(); // Volta ao menu principal após o cálculo
    });
};

const verificaResultado = (esperado, real, mensagem) => {
    if (esperado === real) {
        console.log(`OK: ${mensagem} passou.`);
    } else {
        console.log(`ERRO: ${mensagem} falhou. Esperado ${esperado}, valor obtido ${real}`);
    }
};

const testesUnitarios = () => {
    verificaResultado(3, calculadora(1, '+', 2), "Testando soma");
    verificaResultado(1, calculadora(3, '-', 2), "Testando subtração");
    verificaResultado(6, calculadora(2, '*', 3), "Testando multiplicação");
    verificaResultado(2, calculadora(6, '/', 3), "Testando divisão");
    verificaResultado(8, calculadora(2, '^', 3), "Testando potenciação");
};

const interface = () => {
    console.log("1 - Calcular");
    console.log("2 - Teste Unitário");
    rl.question('Digite a opção: ', (op) => {
        if (op === '1') {
            calcular();
        } else if (op === '2') {
            testesUnitarios();
            interface();
        } else {
            console.log("Opção inválida. Tente novamente.");
            interface();
        }
    });2
};

interface();
