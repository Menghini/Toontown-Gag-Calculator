// JavaScript source code

function Cog(level, version) {
    this.level = level;
    this.maxHealth = (this.level + 1) * (this.level + 2);
    if (this.level == 12) {
        this.maxHealth = 200;
    }
    this.health = this.maxHealth;
    this.bonusHealth = 0; //This is a cog's second health for version 2.
    this.version = version;
    this.carryOverDamage = 0; //This is used to determine how much carry over damage there is if there is a second version.
    //If the cog is version 2... we better set the bonus health.
    if (this.version == 2) {
        this.bonusHealth = this.maxHealth;
    }
    //Checks to see if the cog is dead. Returns 1 if true. Return 0 if not.
    this.isCogDead = function (damage) {
        if(damage >= this.health){
            return 1;
        }
        else{
            return 0;
        }
    }
    //Checks to see if the cog is dead (version one). Returns true if so. Returns false if not.
    this.isVersionOneDead = function () {
        return (this.health <= 0);
    }
    //Checks to see if the cog is dead (version two). Returns true if so. Returns false if not.
    this.isVersionTwoDead = function () {
        return (this.bonusHealth <= 0);
    }
    //This is what we use when we damage the cog.
    this.hurt = function (damage) {
        //Is the first version still alive?
        if (this.health > 0) {
            this.health = this.health - damage; //Take away damage from the health.
        }
        //If not, then we have to take out the damage of the second one... thus, the carry over damage.
        else {
            this.bonusHealth = this.bonusHealth - damage; //Take away damage from the health.
            this.carryOverDamage = this.carryOverDamage + damage; //Every is carry over at this point.
        }
    }
    this.getHealthLayer1 = function () {
        if (this.health > 0) {
            return this.maxHealth-this.health+" Damage Done ("+ this.health + " HP Remaining)";
        }
        else {
            return this.maxHealth - this.health + " Damage Done (DESTROYED)";;
        }
        
    }
    this.getHealthLayer2 = function () {
        if (this.bonusHealth > 0) {
            return this.maxHealth - this.bonusHealth + " Damage Done (" + this.bonusHealth + " HP Remaining)";
        }
        else {
            return this.maxHealth - this.bonusHealth + " Damage Done (DESTROYED)";;
        }
    }
    this.resetCogHealth = function () {
        this.health = this.maxHealth;
        this.carryOverDamage = 0;
        if (this.version == 2) {
            this.bonusHealth = this.maxHealth;
        }
    }

}
