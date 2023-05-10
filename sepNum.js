function separarNumeros(array, opcao) {
  var numerosImpares = [];
  var numerosPares = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    } else {
      numerosImpares.push(array[i]);
    }
  }

  if (opcao === 1) {
    return numerosImpares;
  } else if (opcao === 2) {
    return numerosPares;
  } else if (opcao === 3) {
    return {
      impares: numerosImpares,
      pares: numerosPares,
    };
  } else {
    return "Opção Inválida!";
  }
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var opcao = 3;
var resultado = separarNumeros(numeros, opcao);
console.log(resultado);

module.exports = separarNumeros;
