// Desafio 10
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */
function techList(techs, name) {
  let array = [];

  if (techs.length === 0) {
    return 'Vazio!';
  }

  for (let value of techs) {
    array.push({
      tech: value,
      name,
    });
  }

  return array.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }

    return -1;
  });
}

// console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numbers) {
  let stringPhone = '';
  let numberRepeat = 0;

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        numberRepeat += 1;
      }
    }

    if (numberRepeat > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    numberRepeat = 0;

    if (i === 0) {
      stringPhone = `(${numbers[i]}`;
    } else if (i === 1) {
      stringPhone += `${numbers[i]})`;
    } else if (i === 2) {
      stringPhone += ` ${numbers[i]}`;
    } else if (i === 6) {
      stringPhone += `${numbers[i]}-`;
    } else {
      stringPhone += numbers[i];
    }
  }

  return stringPhone;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }

  return false;
}

// console.log(triangleCheck(10, 13, 2));

// Desafio 13
/** Source: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript */
function hydrate(string) {
  let numbersDrinks = string.match(/\d+/g).map(Number);
  let numbersGlassOfWater = 0;

  for (let i = 0; i < numbersDrinks.length; i += 1) {
    numbersGlassOfWater += numbersDrinks[i];
  }
  if (numbersGlassOfWater === 1) {
    return `${numbersGlassOfWater} copo de água`;
  }

  return `${numbersGlassOfWater} copos de água`;
}

// console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
