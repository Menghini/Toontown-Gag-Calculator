// JavaScript source code

function Gag(name, max, damage) {
    this.name = name; //Gag's name.
    this.max = max; //Gag's max number of uses in a single round.
    this.number = 0; //The number of gags being used in the round.
    this.damage = damage;

    this.getName = function () {
        return this.name;
    }
    this.addOne = function () {
        if (this.number<this.max){
            this.number++;
        }
        return this.number;
    }
    this.removeOne = function () {
        if (this.number > 0) {
            this.number--;
        }
        return this.number;
    }
    this.getDamage = function () {
        return this.damage;
    }
    //This method allows me to see if there are too many gags. Which will not update the damage counter.
    this.isTooMany = function () {
        if(this.number<this.max)
            return 0;
        else
            return 1;
    }
    //Return the number of times this gag will be used.
    this.getNumberUsed = function () {
        return this.number;
    }
    this.reset = function () {
        this.number = 0;
        return 0;
    }

}
