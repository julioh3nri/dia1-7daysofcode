// ** Resumo **
// No Js, comparação entre variáveis pode gerar resultados inesperados devido a conversão implícita de tipos. Isso ocorre pois a linguagem permite comparar valores de tipos diferentes. Como por exemplo, valores booleans e strings. Podemos usar operadores como == (2 iguais) para fazer a conversão automática, ou === (3 iguais) para comparar tanto o valor quando o tipo.

console.log(false == '0'); // true
console.log(null == undefined); // true
console.log(" \t\r\n" == 0); // true
console.log(' ' == 0); // true

// O Js tenta transformar valores antes de compara-los. Para evitar isso, é melhor usar === (3 iguais) para verificar tanto o valor quanto o tipo.

// Desafio Resolvido:

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm === stringUm) {
  console.log('As variáveis numeroUm e stringUm têm o mesmo valor e mesmo tipo');
} else if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo');
}

if (numeroDez === stringDez) {
  console.log('As variáveis numeroDez e stringDez têm o mesmo valor e mesmo tipo');
} else if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
}


// Adicionei um else if para destacar onde os valores são iguais, mas os tipos diferentes (==)
// === -> comparações verificam os valores são exatamente iguais, considerando também o tipo