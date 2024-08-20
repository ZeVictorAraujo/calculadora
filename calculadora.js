const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calcular = (num1, operador, num2) => {
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
    default:
      return 'Operador inválido';
  }
};

const promptUser = () => {
  rl.question('Digite a operação: ', (resposta) => {
    const [num1, operador, num2] = resposta.split(' ');
    const resultado = calcular(parseFloat(num1), operador, parseFloat(num2));
    console.log(`Resultado: ${resultado}`);
    rl.close();
  });
};

promptUser();
