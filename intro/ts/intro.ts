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

// herencia

