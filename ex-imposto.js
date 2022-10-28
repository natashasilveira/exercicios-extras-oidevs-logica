/*
  Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/
let valorFinal = somaImposto(50, 50);

console.log(`Valor Final: ${valorFinal}`);

function somaImposto (custo, taxaImposto) {
  return custo + (custo * (taxaImposto/100));
}