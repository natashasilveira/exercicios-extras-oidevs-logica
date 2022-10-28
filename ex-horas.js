/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  A entrada é dada em dois inteiros. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

const prompt = require("prompt-sync")();

let hora;
let minuto;
let periodo = "AM";

do {
  hora = parseInt(prompt("Digite a hora: "));
  if (hora < 0 || hora > 23) {
    // hora = parseInt(prompt("Hora inválida. Digite uma hora válida: "));
    console.log("Valor inválido!");
  }
} while(hora < 0 || hora > 23);

do {
  minuto = parseInt(prompt("Digite os minutos: "));
  if (minuto < 0 || minuto > 59) {
    console.log("Valor inválido");
  }
  if (minuto < 10 && minuto > -1) {
    minuto = "0" + minuto;
  }
} while (minuto < 0 || minuto > 59);

if (hora === 0 || hora > 11){
  if (hora > 11){ 
    periodo = "PM"
  }
  hora = converterHora(hora);
}

imprimirHora();

function converterHora(hora, periodo) {
  if (hora === 0) {
    return 12;
  } else {
    return hora - 12;
  }
}

function imprimirHora() {
  console.log(`Horário: ${hora}:${minuto} ${periodo}`);
}