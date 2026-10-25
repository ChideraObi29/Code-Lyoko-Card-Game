//FOR THE PLAYER
class Player {
    contructor(health) {
        this.health = health;
    }
}

let player = new Player(100); //PLAYER OBJECT

//FOR THE ENEMY
class Xana {
    constructor(health) {
        this.health = health;
    }
}

let xana = new Xana(100); //ENEMY OBJECT

//FOR THE CARDS
class Card {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

//CREATING CARDS
const card1 = new Card("Card 1", 10);
const card2 = new Card("Card 2", 20);
const card3 = new Card("Card 3", 30);
const card4 = new Card("Card 4", 40);
const card5 = new Card("Card 5", 50);
const card5 = new Card("Card 6", 60);
const card7 = new Card("Card 7", 70);
const card8 = new Card("Card 8", 80);
const card9 = new Card("Card 9", 90);
const card10 = new Card("Card 10", 100);

