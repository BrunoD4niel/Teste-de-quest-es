/*Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

// VARIAVEIS 
const INDICE = 13;
let soma = 0; 
let k = 0;

// LAÇO DE REPETIÇÃO PARA SOMAR
while (k < INDICE) {
    k = k + 1;
    soma = soma + k;
}

// IMPRIMIR SOMA
console.log(soma);

/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13,
21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
se o número informado pertence ou não a sequência. */

// INFORME O NÚMERO
const numeroInformado = 0;

// A FUNÇÃO "pertenceAFibonacci" CALCULA O PRÓXIMO NÚMERO DA SEQUÊNCIA
function pertenceAFibonacci(numero) {
    let a = 0;
    let b = 1;
    let proximo;

    if (numero === a || numero === b) {
        return true;
    }

    proximo = a + b;
    
    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    return false;
}

// VERIFICAR SE PERTENCE OU NÃO A SEQUÊNCIA DE FIBONACCI
if (pertenceAFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence a sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence a sequência de Fibonacci.`);
}

/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */

// FATURAMENTO MENSAL

const faturamentoMensal = {
    "faturamento_diario": [
      {"dia": 1, "valor": 200},
      {"dia": 2, "valor": 234},
      {"dia": 3, "valor": 320},
      {"dia": 4, "valor": 381},
      {"dia": 5, "valor": 248},
      {"dia": 6, "valor": 0},
      {"dia": 7, "valor": 0},
      {"dia": 8, "valor": 500},
      {"dia": 9, "valor": 683},
      {"dia": 10, "valor": 0}
    ]
};
  
// FILTRAR DIAS COM FATURAMENTO
const faturamentos = faturamentoMensal.faturamento_diario
.filter(dia => dia.valor > 0)
.map(dia => dia.valor);

// CALCULAR O MENOR E MAIOR FATURAMENTO
const menorFaturamento = Math.min(...faturamentos);
const maiorFaturamento = Math.max(...faturamentos);

// CALCULAR A MÉDIA MENSAL
const mediaMensal = faturamentos.reduce((acc, valor) => acc + valor, 0) / faturamentos.length;

// CONTAR OS DIAS EM QUE O FATURAMENTO FOI SUPERIOR A MÉDIA MENSAL
const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);

/* Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

// VALORES DE FATURAMENTO
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// CALCULAR O FATURAMENTO TOTAL
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// CALCULAR O PERCENTUAL DE CADA ESTADO
const percentuaisPorEstado = {};

for (const estado in faturamentoPorEstado) {
    percentuaisPorEstado[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
}

// IMPRIMIR OS PERCENTUAIS
for (const estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
}

/* Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

// VARIAVEIS
const stringOriginal = "arara";
const stringInvertida = inverterString(stringOriginal);

// FUNÇÃO PARA INVERTER STRING
function inverterString(str) {
    let stringInvertida = '';

    // LAÇO PARA PERCORRER DE TRÁS PRA FRENTE
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// IMPRESSÃO DAS STRINGS
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);


  
