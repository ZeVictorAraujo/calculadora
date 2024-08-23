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
        calcular();
    });
};




calcular();
