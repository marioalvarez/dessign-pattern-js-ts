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
class Beer extends Drink{
    private alcohol: number;

    constructor(name: string, alcohol: number){
        super(name);
        this.alcohol = alcohol;
    }

    info(): string {
        return super.info() + " " + this.alcohol;
      }
}

const beer = new Beer("Mahou", 5);
console.log(beer.info());