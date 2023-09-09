console.log("paradigma funcional");

// funcion de primer orden
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// funcion de orden superior
function operation(fn, a, b) {
  console.log("operation");
  console.log(fn(a, b));
}
operation(sum, 1, 2);

// arrow function
operation((a, b) => a * b, 5, 5);
operation(
  (a, b) => {
    const c = a * b;
    // cuando tenemos llaves en una arrow function, debemos usar return
    return c + 1;
  },
  9,
  5
);

// forEach
const names = ["jose", "maria", "pedro", "ana"];
// foreach es inmutable
names.forEach((name) => console.log(name));
// en mayusculas
names.forEach((name) => console.log(name.toUpperCase()));

// metodo mutables
names.sort();
console.log(names);

// map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);

// reduce
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acu, number) => {
  return acu + number * 2;
}, 0);
console.log(total);
// en una sola linea
const total2 = numbers.reduce((acu, number) => acu + number * 2, 0);
console.log(total2);

// programacion orientada a objetos
// clases
class Drink {
  // constructor se ejecuta cuando se crea una instancia de la clase
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // metodo
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  info() {
    return `La bebida ${this.name} cuesta ${this.price}`;
  }
}

const drink = new Drink("Coca Cola", 10);
console.log(drink.getName());
console.log(drink.getPrice());
console.log(drink.info());

// funcional
function Drink2(name, price) {
    this.name = name;
    this.price = price;
    this.info = function() {
        return `La bebida ${this.name} cuesta ${this.price}`;
    }
}

const drink2 = new Drink2("Coca Cola", 10);
console.log(drink2.info());