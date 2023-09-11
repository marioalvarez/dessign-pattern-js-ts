console.log("TypeScript is working!");
// npm install -g typescript ts-node

// clase
class Drink {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  info(): string {
    return this.name;
  }
}

const drink = new Drink("Coffee");
console.log(drink.info());

//interface
interface Product {
  price: number;
  getPrice(): string;
}

// herencia
class Beer extends Drink implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string {
    return "$ " + this.price;
  }

  info(): string {
    return super.info() + " " + this.alcohol;
  }
}
// implementacion de interfaz
class Snack implements Product {
  private name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return "El precio es: $ " + this.price;
  }
}

const beer = new Beer("Mahou", 5, 10);
console.log(beer.info());

const products: Product[] = [
  new Beer("Mahou", 5, 10),
  new Snack("Papas", 5),
  new Beer("Coron", 5, 10),
];


function getPrices(items :Product[]) {
  return items.map((item) => item.getPrice());
}

console.log(getPrices(products));