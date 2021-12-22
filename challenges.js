// Desafio 1
function compareTrue(ofLegalAge, drivingLicense) {
  if (ofLegalAge === true && drivingLicense === true) {
    return true;
  }

  return false;
}

// console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// console.log(calcArea(51, 1));

// Desafio 3
/** Source: https://blog.betrybe.com/javascript/javascript-split/ */
function splitSentence(string) {
  let arrayString = string.split(/[\s,]+/);
  return arrayString;
}

// console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let stringArray = `${array[array.length - 1]}, ${array[0]}`;

  return stringArray;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);

  return points;
}

// console.log(footballPoints(2, 1));

// Desafio 6
function highestCount(numbers) {
  let numberRepeated = 0;
  let biggestNumber = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (biggestNumber < numbers[i]) {
      biggestNumber = numbers[i];
      numberRepeated = 0;
    }

    if (biggestNumber === numbers[i]) {
      numberRepeated += 1;
    }
  }

  return numberRepeated;
}

// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat2 < distCat1) {
    return 'cat2';
  } if (distCat2 === distCat1) {
    return 'os gatos trombam e o rato foge';
  }
}

// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbers) {
  let arrayResult = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (numbers[i] % 5 === 0) {
      arrayResult.push('buzz');
    } else if (numbers[i] % 3 === 0) {
      arrayResult.push('fizz');
    } else {
      arrayResult.push('bug!');
    }
  }

  return arrayResult;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
/** Source: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176 */
function encode(stringEncode) {
  stringEncode = stringEncode.replace(/a/g, 1);

  stringEncode = stringEncode.replace(/e/g, 2);
  stringEncode = stringEncode.replace(/i/g, 3);
  stringEncode = stringEncode.replace(/o/g, 4);
  stringEncode = stringEncode.replace(/u/g, 5);

  return stringEncode;
}

// console.log(encode('This is an encoding test.'));

function decode(stringDecode) {
  stringDecode = stringDecode.replace(/1/g, 'a');

  stringDecode = stringDecode.replace(/2/g, 'e');
  stringDecode = stringDecode.replace(/3/g, 'i');
  stringDecode = stringDecode.replace(/4/g, 'o');
  stringDecode = stringDecode.replace(/5/g, 'u');

  return stringDecode;
}

// console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
