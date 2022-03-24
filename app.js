/*
Create a casino class that takes a name as input to its constructor.
Add another field called timesPlayed that has a default value of 0.
Create a method called playGame(betAmount) that checks if Math.random() is less than or equal to 0.5. If true, console.log that the name of the casino wins. If false, say the player wins the bet amount.
When the player plays, increment the timesPlayed by one. Then, if the player wins, change the amount they won to equal: betAmount * (this.timesPlayed + 1)


Bonus:
Add an isFakeCoin field to your class and always have the casino win every time when isFakeCoin is set to true.

Extra Bonus:
Add another function called rollDie(d) that console.logs what you get when you roll a die that has "d" sides. NOTE: We used Google to find this equation when we designed the curriculum. Don't be afraid to search!

*/

class Casino {
    constructor(name,isFakeCoin) {
        this.name = name
        this.timesPlayed = 0
        this.isFakeCoin = isFakeCoin
    }
    playGame(betAmount){
        if (Math.random() <= .5 && this.isFakeCoin === true) {
            console.log(`${this.name} wins`)
        }
        else {
            betAmount = betAmount * this.timesPlayed++
            console.log(`Player wins ${betAmount}`)
        }
        this.timesPlayed++
    }
    rollDie(d){ 
        let rollResult = Math.round(Math.random() * d)
        console.log(`You rolled ${rollResult} with a die that has ${d} sides.`)
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino",false);
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);
myCasino.rollDie(10);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino",true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
myCasino.rollDie(18);


const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.playGame(6);
myExtraBonusCasino.playGame(20);
myExtraBonusCasino.playGame(100);
myCasino.rollDie(20);