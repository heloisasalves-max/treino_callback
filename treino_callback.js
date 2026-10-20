
// 1. Função de saudação
function saudacao() {
  console.log("Olá! Bem-vindo ao Back-End com Node.js!");
}

// 2. Função mestra que recebe a callback
function executar(callback) {
  console.log("Iniciando processo...");
  callback(); // Executa a função recebida por argumento
}

// 3. Chamando a função mestra passando 'saudacao' por referência (sem parênteses)
executar(saudacao);


// Exercicio 2
// 1. Função que calcula o dobro e passa o resultado para a callback
function calcularDobro(numero, callbackResultado) {
  const valorDobrado = numero * 2;
  callbackResultado(valorDobrado);
}

// 2. Função de retorno que formata e exibe o valor
function imprimirFormatado(valor) {
  console.log("[RESULTADO]: O valor calculated é " + valor);
}

// 3. Teste com o número 25
calcularDobro(25, imprimirFormatado);



//Exercicio 3
// 1. Função mestra que executa a operação desejada
function operar(a, b, operacaoCallback) {
  return operacaoCallback(a, b);
}

// 2. Funções de operação
function somar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

// 3. Testando as diferentes operações com os mesmos valores
const resultadoSoma = operar(10, 4, somar);
const resultadoMultiplicacao = operar(10, 4, multiplicar);

console.log("Resultado da Soma:", resultadoSoma);
console.log("Resultado da Multiplicação:", resultadoMultiplicacao);




//Exercicio 4
// 1. Função que processa o texto usando a callback informada
function processarTexto(texto, callbackModificadora) {
  callbackModificadora(texto);
}

// 2. Chamada com Arrow Function inline como callback
processarTexto("senai valinhos", (t) => console.log(t.toUpperCase()));



//Exercicio 5
// 1. Função assíncrona simulando download
function simularDownload(nomeArquivo, callbackConclusao) {
  // 2. Mensagem inicial
  console.log(`Iniciando download de ${nomeArquivo}...`);

  // 3. Temporizador de 1.5 segundos
  setTimeout(() => {
    callbackConclusao();
  }, 1500);
}

// 4. Teste da função
simularDownload("dados_clientes.csv", () => {
  console.log("✅ Download finalizado com sucesso no disco!");
});
