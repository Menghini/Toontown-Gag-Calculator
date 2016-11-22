// JavaScript source code
/*function trashCan() {
    //document.getElementById("trashCan").setAttribute(")
    //element.setAttribute('url', 'images/TrashcanOpen.png');
    $("#trashCan").mouseover(function () {
        this.src = "assets/images/photo-2.jpg"
    }).mouseout(function () {
        this.src = "assets/images/photo-1.jpg"
    });
}*/

var deleteMode = 0; //The delete mode toggle. 0 is false.
var versionOfCog = 1;
//-----------Cog decelerations-----------
var cogsVersionOne = [];
var cogsVersionTwo = [];
for (i = 1; i <= 12; i++) {
    var tempCog = new Cog(i, 1);
    cogsVersionOne.push(tempCog);
};
for (i = 1; i <= 12; i++) {
    var tempCog = new Cog(i, 2);
    cogsVersionTwo.push(tempCog);
};
//-----------Gag decelerations-----------
//Toonup
var feather = new Gag("Feather", 4, 0);
var megaphone = new Gag("Megaphone", 4, 0);
var lipstick = new Gag("Lipstick", 4, 0);
var bambooCane = new Gag("Bamboo Cane", 4, 0);
var pixieDust = new Gag("Pixie Dust", 4, 0);
var jugglingBalls= new Gag("Juggling Balls", 4, 0);
var highDive = new Gag("High Dive", 4, 0);
//Trap
var bananaPeel = new Gag("Banana Peel", 1, 12);
var rake = new Gag("Rake", 1, 20);
var marbles = new Gag("Marbles", 1, 35);
var quickSand = new Gag("Quicksand", 1, 50);
var trapdoor = new Gag("Trapdoor", 1, 70);
var tnt = new Gag("TNT", 1, 180);
var railroad = new Gag("Railroad", 1, 195);
//Lure
var oneBill = new Gag("$1 Bill", 4, 0);
var smallMagnet = new Gag("Small Magnet", 4, 0);
var fiveBill = new Gag("$5 Bill", 4, 0);
var bigMagnet = new Gag("Big Magnet", 4, 0);
var tenBill = new Gag("$10 Bill", 4, 0);
var hypnoGoggles = new Gag("Hypno Goggles", 4, 0);
var presentation = new Gag("Presentation", 4, 0);
//Sound
var bikeHorn = new Gag("Bike Horn", 4, 4);
var whistle = new Gag("Whistle", 4, 7);
var bugle = new Gag("Bugle", 4, 11);
var aoogah = new Gag("Aoogah", 4, 16);
var elephantTrunk = new Gag("Elephant Trunk", 4, 21);
var foghorn = new Gag("Foghorn", 4, 50);
var operaSinger = new Gag("Opera Singer", 4, 90);
//Throw
var cupcake = new Gag("Cupcake", 4, 6);
var fruitPieSlice = new Gag("Fruit Pie Slice", 4, 10);
var creamPieSlice = new Gag("Cream Pie Slice", 4, 17);
var wholeFruitPie = new Gag("Whole Fruit Pie", 4, 27);
var wholeCreamPie = new Gag("Whole Cream Pie", 4, 40);
var birthdayCake = new Gag("Birthday Cake", 4, 100);
var weddingCake = new Gag("Wedding Cake", 4, 120);
//Squirt
var squirtingFlower = new Gag("Squirting Flower", 4, 4);
var glassOfWater = new Gag("Glass of Water", 4, 8);
var squirtGun = new Gag("Squirt Gun", 4, 12);
var seltzerBottle = new Gag("Seltzer Bottle", 4, 21);
var fireHose = new Gag("Fire Hose", 4, 30);
var stormCloud = new Gag("Storm Cloud", 4, 80);
var geyser = new Gag("Geyser", 4, 105);
//Drop
var flowerPot = new Gag("Flower Pot", 4, 10);
var sandbag = new Gag("Sandbag", 4, 18);
var anvil = new Gag("Anvil", 4, 30);
var bigWeight = new Gag("Big Weight", 4, 45);
var safe = new Gag("Safe", 4, 60);
var grandPiano = new Gag("Grand Piano", 4, 170);
var toontanic = new Gag("Toontanic", 4, 180);

//This function is to update the cog's damage
var updateCogDamage = function (damage) {
    //Are we talking about version 1?
    if (versionOfCog == 1) {
        for (i = 0; i < cogsVersionOne.length; i++) {
            cogsVersionOne[i].hurt(damage); //Damage the cogs.
        }
    }
    //Or are we talking about version 2?
    else {
        for (i = 0; i < cogsVersionTwo.length; i++) {
            cogsVersionTwo[i].hurt(damage); //Damage the cogs.
        }
    }
}
var damageUpdate = function () {
    var totalDamage = 0;
    var numberOfTrapGags = 0;
    var numberOfLureGags = 0;
    var numberOfSoundGags = 0;
    var numberOfThrowGags = 0;
    var numberOfSquirtGags = 0;
    var numberOfDropGags = 0;
    var isCogLured = 0;

    //Have to reset the cog's damages.
    for (i = 0; i < cogsVersionOne.length; i++) {
        cogsVersionOne[i].resetCogHealth();
    };
    for (i = 0; i < cogsVersionTwo.length; i++) {
        cogsVersionTwo[i].resetCogHealth();
    };
    
    //First we need to go through the lure track.

    //------Lure------
    //As long as one lure is selected, we can go ahead and assume the cog is lured.
    if (oneBill.getNumberUsed() > 0 || smallMagnet.getNumberUsed() > 0 || fiveBill.getNumberUsed() > 0
        || bigMagnet.getNumberUsed() > 0 || tenBill.getNumberUsed() > 0 || hypnoGoggles.getNumberUsed() > 0
        || presentation.getNumberUsed() > 0)
        isCogLured = true;

    //------Trap------
    //Second, we will go through the trap track.
    var trapDamage = 0;
    trapDamage += bananaPeel.getNumberUsed() * bananaPeel.getDamage() + rake.getNumberUsed() * rake.getDamage()
        + marbles.getNumberUsed() * marbles.getDamage() + quickSand.getNumberUsed() * quickSand.getDamage()
        + trapdoor.getNumberUsed() * trapdoor.getDamage() + tnt.getNumberUsed() * tnt.getDamage()
        + railroad.getNumberUsed() * railroad.getDamage();
    //Check to see if there are two traps set.
    numberOfTrapGags = bananaPeel.getNumberUsed() + rake.getNumberUsed() + marbles.getNumberUsed() + quickSand.getNumberUsed() 
        + trapdoor.getNumberUsed()  + tnt.getNumberUsed() + railroad.getNumberUsed();
    if (numberOfTrapGags > 1)
        trapDamage = 0;
    //We have to make sure that there is a lure!
    if (isCogLured && numberOfTrapGags > 0) {
        isCogLured = false;
        //There is no totalDamage modifiers to trap... so the totalDamage is just equal to the amount of trap totalDamage.
        totalDamage += trapDamage;
        updateCogDamage(trapDamage);
    }


    //------Sound------
    //Fourth, we use sound.
    var soundDamage = 0;
    var soundYellowDamage = 0;
    soundDamage += bikeHorn.getNumberUsed() * bikeHorn.getDamage() + whistle.getNumberUsed() * whistle.getDamage()
        + bugle.getNumberUsed() * bugle.getDamage() + aoogah.getNumberUsed() * aoogah.getDamage()
        + elephantTrunk.getNumberUsed() * elephantTrunk.getDamage() + foghorn.getNumberUsed() * foghorn.getDamage()
        + operaSinger.getNumberUsed() * operaSinger.getDamage();
    totalDamage += soundDamage;
    updateCogDamage(soundDamage);
    //If sound was used, lure is no longer in effect.
    numberOfSoundGags = bikeHorn.getNumberUsed() + whistle.getNumberUsed() + bugle.getNumberUsed() + aoogah.getNumberUsed()
        + elephantTrunk.getNumberUsed() + foghorn.getNumberUsed() + operaSinger.getNumberUsed();
    if (numberOfSoundGags > 0)
        isCogLured = false;
    //Add track totalDamage
    if (numberOfSoundGags > 1) {
        soundYellowDamage = soundDamage * .20;
        soundYellowDamage = Math.ceil(soundYellowDamage);
        totalDamage += soundYellowDamage;
        updateCogDamage(soundYellowDamage);
    }



    //------Throw------
    //Next, we use throw.
    var throwDamage = 0;
    var throwYellowDamage = 0; //Team bonus damage
    var throwOrangeDamage = 0; //Lure bonus damage
    throwDamage += cupcake.getNumberUsed() * cupcake.getDamage() + fruitPieSlice.getNumberUsed() * fruitPieSlice.getDamage()
        + creamPieSlice.getNumberUsed() * creamPieSlice.getDamage() + wholeFruitPie.getNumberUsed() * wholeFruitPie.getDamage()
        + wholeCreamPie.getNumberUsed() * wholeCreamPie.getDamage() + birthdayCake.getNumberUsed() * birthdayCake.getDamage()
        + weddingCake.getNumberUsed() * weddingCake.getDamage();
    totalDamage += throwDamage;
    updateCogDamage(throwDamage);
    //Was there multiple used?
    numberOfThrowGags = cupcake.getNumberUsed() + fruitPieSlice.getNumberUsed() + creamPieSlice.getNumberUsed() + wholeFruitPie.getNumberUsed()
        + wholeCreamPie.getNumberUsed() + birthdayCake.getNumberUsed() + weddingCake.getNumberUsed()
    if (numberOfThrowGags > 1) {
        throwYellowDamage = throwDamage * .20;
        throwYellowDamage = Math.ceil(throwYellowDamage);
        totalDamage += throwYellowDamage;
        updateCogDamage(throwYellowDamage);

    }
    //Was there lure?
    if (isCogLured && throwDamage > 0) {
        throwOrangeDamage = throwDamage * .50;
        throwOrangeDamage = Math.ceil(throwOrangeDamage);
        totalDamage += throwOrangeDamage;
        updateCogDamage(throwOrangeDamage);
        isCogLured = false;
    }

    //------Squirt------
    var squirtDamage = 0;
    var squirtYellowDamage = 0; //Team bonus damage
    var squirtOrangeDamage = 0; //Lure bonus damage
    squirtDamage += squirtingFlower.getNumberUsed() * squirtingFlower.getDamage() + glassOfWater.getNumberUsed() * glassOfWater.getDamage()
        + squirtGun.getNumberUsed() * squirtGun.getDamage() + seltzerBottle.getNumberUsed() * seltzerBottle.getDamage()
        + fireHose.getNumberUsed() * fireHose.getDamage() + stormCloud.getNumberUsed() * stormCloud.getDamage()
        + geyser.getNumberUsed() * geyser.getDamage();
    totalDamage += squirtDamage;
    updateCogDamage(squirtDamage);
    //Was there multiple used?
    numberOfSquirtGags = squirtingFlower.getNumberUsed() + glassOfWater.getNumberUsed() + squirtGun.getNumberUsed()  + seltzerBottle.getNumberUsed()
        + fireHose.getNumberUsed()  + stormCloud.getNumberUsed() + geyser.getNumberUsed();
    if (numberOfSquirtGags > 1) {
        squirtYellowDamage = squirtDamage * .20;
        squirtYellowDamage = Math.ceil(squirtYellowDamage);
        totalDamage += squirtYellowDamage;
        updateCogDamage(squirtYellowDamage);
    }
    //Was there lure?
    if (isCogLured && squirtDamage > 0) {
        squirtOrangeDamage = squirtDamage * .50;
        squirtOrangeDamage = Math.ceil(squirtOrangeDamage);
        totalDamage += squirtOrangeDamage;
        updateCogDamage(squirtOrangeDamage);
        isCogLured = false;
    }

    //------Drop------
    var dropDamage = 0;
    var dropYellowDamage = 0; //Team bonus damage
    dropDamage += flowerPot.getNumberUsed() * flowerPot.getDamage() + sandbag.getNumberUsed() * sandbag.getDamage()
        + anvil.getNumberUsed() * anvil.getDamage() + bigWeight.getNumberUsed() * bigWeight.getDamage()
        + safe.getNumberUsed() * safe.getDamage() + grandPiano.getNumberUsed() * grandPiano.getDamage()
        + toontanic.getNumberUsed() * toontanic.getDamage();
    //Was there lure.. because they are going to miss if there is...
    if (isCogLured) {
        dropDamage = 0;
    }
    totalDamage += dropDamage;
    updateCogDamage(dropDamage);
    //Was there multiple used?
    numberOfDropGags = flowerPot.getNumberUsed() + sandbag.getNumberUsed() + anvil.getNumberUsed()+ bigWeight.getNumberUsed() 
        + safe.getNumberUsed() + grandPiano.getNumberUsed() + toontanic.getNumberUsed() * toontanic.getNumberUsed();
    if (numberOfDropGags > 1) {
        dropYellowDamage = dropDamage * .20;
        dropYellowDamage = Math.ceil(dropYellowDamage);
        totalDamage += dropYellowDamage;
        updateCogDamage(dropYellowDamage);
    }
    //We need to call a function inside the angular ng-controller. This is horrible.. but I'm doing it anyway.
    var scp = angular.element('[ng-controller="AppCtrl"]').scope();
    scp.updateCogs(totalDamage);
    //We need to update the total damage counter.
    return "Total Damage: " + totalDamage; 
}
$(function () {
    //For when the trash can is hovered upon.
    $('img.trashCan').hover(sourceSwap, sourceSwap);
    //For when the trash can is clicked.
    $('img.trashCan').click(function () {
        toggleDeleteMode();
    });
    $('img.trashCan').click(sourceSwap2, sourceSwap2);

    $('.versionTwoCogs').click(function () {
        $("#totalDamage").html(damageUpdate());
    });
    $('.md-dialog-content').click(function () {
        alert("test");
    });
    //-----Toonup-----
    $('#featherGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#featherGagContainer").html(changeGagCounter(feather.addOne()));
        }
        else {
            $("#featherGagContainer").html(changeGagCounter(feather.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#megaphoneGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#megaphoneGagContainer").html(changeGagCounter(megaphone.addOne()));
        }
        else {
            $("#megaphoneGagContainer").html(changeGagCounter(megaphone.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#lipstickGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#lipstickGagContainer").html(changeGagCounter(lipstick.addOne()));
        }
        else {
            $("#lipstickGagContainer").html(changeGagCounter(lipstick.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#bambooCaneGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#bambooCaneGagContainer").html(changeGagCounter(bambooCane.addOne()));
        }
        else {
            $("#bambooCaneGagContainer").html(changeGagCounter(bambooCane.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#pixieDustGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#pixieDustGagContainer").html(changeGagCounter(pixieDust.addOne()));
        }
        else {
            $("#pixieDustGagContainer").html(changeGagCounter(pixieDust.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#jugglingBallsGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#jugglingBallsGagContainer").html(changeGagCounter(jugglingBalls.addOne()));
        }
        else {
            $("#jugglingBallsGagContainer").html(changeGagCounter(jugglingBalls.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#highDiveGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#highDiveGagContainer").html(changeGagCounter(highDive.addOne()));
        }
        else {
            $("#highDiveGagContainer").html(changeGagCounter(highDive.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    //-----Trap-----
    $('#bananaPeelGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#bananaPeelGagContainer").html(changeGagCounter(bananaPeel.addOne()));
        }
        else {
            $("#bananaPeelGagContainer").html(changeGagCounter(bananaPeel.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#rakeGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#rakeGagContainer").html(changeGagCounter(rake.addOne()));
        }
        else {
            $("#rakeGagContainer").html(changeGagCounter(rake.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#marblesGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#marblesGagContainer").html(changeGagCounter(marbles.addOne()));
        }
        else {
            $("#marblesGagContainer").html(changeGagCounter(marbles.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#quickSandGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#quickSandGagContainer").html(changeGagCounter(quickSand.addOne()));
        }
        else {
            $("#quickSandGagContainer").html(changeGagCounter(quickSand.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#trapdoorGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#trapdoorGagContainer").html(changeGagCounter(trapdoor.addOne()));
        }
        else {
            $("#trapdoorGagContainer").html(changeGagCounter(trapdoor.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#tntGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#tntGagContainer").html(changeGagCounter(tnt.addOne()));
        }
        else {
            $("#tntGagContainer").html(changeGagCounter(tnt.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#railroadGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#railroadGagContainer").html(changeGagCounter(railroad.addOne()));
        }
        else {
            $("#railroadGagContainer").html(changeGagCounter(railroad.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    //-----Lure-----
    $('#oneBillGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#oneBillGagContainer").html(changeGagCounter(oneBill.addOne()));
        }
        else {
            $("#oneBillGagContainer").html(changeGagCounter(oneBill.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#smallMagnetGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#smallMagnetGagContainer").html(changeGagCounter(smallMagnet.addOne()));
        }
        else {
            $("#smallMagnetGagContainer").html(changeGagCounter(smallMagnet.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#fiveBillGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#fiveBillGagContainer").html(changeGagCounter(fiveBill.addOne()));
        }
        else {
            $("#fiveBillGagContainer").html(changeGagCounter(fiveBill.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#bigMagnetGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#bigMagnetGagContainer").html(changeGagCounter(bigMagnet.addOne()));
        }
        else {
            $("#bigMagnetGagContainer").html(changeGagCounter(bigMagnet.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#tenBillGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#tenBillGagContainer").html(changeGagCounter(tenBill.addOne()));
        }
        else {
            $("#tenBillGagContainer").html(changeGagCounter(tenBill.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#hypnoGogglesGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#hypnoGogglesGagContainer").html(changeGagCounter(hypnoGoggles.addOne()));
        }
        else {
            $("#hypnoGogglesGagContainer").html(changeGagCounter(hypnoGoggles.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#presentationGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#presentationGagContainer").html(changeGagCounter(presentation.addOne()));
        }
        else {
            $("#presentationGagContainer").html(changeGagCounter(presentation.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    //-----Sound-----
    $('#bikeHornGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#bikeHornGagContainer").html(changeGagCounter(bikeHorn.addOne()));
        }
        else {
            $("#bikeHornGagContainer").html(changeGagCounter(bikeHorn.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#whistleGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#whistleGagContainer").html(changeGagCounter(whistle.addOne()));
        }
        else {
            $("#whistleGagContainer").html(changeGagCounter(whistle.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#bugleGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#bugleGagContainer").html(changeGagCounter(bugle.addOne()));
        }
        else {
            $("#bugleGagContainer").html(changeGagCounter(bugle.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#aoogahGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#aoogahGagContainer").html(changeGagCounter(aoogah.addOne()));
        }
        else {
            $("#aoogahGagContainer").html(changeGagCounter(aoogah.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#elephantTrunkGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#elephantTrunkGagContainer").html(changeGagCounter(elephantTrunk.addOne()));
        }
        else {
            $("#elephantTrunkGagContainer").html(changeGagCounter(elephantTrunk.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#foghornGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#foghornGagContainer").html(changeGagCounter(foghorn.addOne()));
        }
        else {
            $("#foghornGagContainer").html(changeGagCounter(foghorn.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#operaSingerGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#operaSingerGagContainer").html(changeGagCounter(operaSinger.addOne()));
        }
        else {
            $("#operaSingerGagContainer").html(changeGagCounter(operaSinger.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    //-----Throw-----
    $('#cupcakeGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#cupcakeGagContainer").html(changeGagCounter(cupcake.addOne()));
        }
        else {
            $("#cupcakeGagContainer").html(changeGagCounter(cupcake.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#fruitPieSliceGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#fruitPieSliceGagContainer").html(changeGagCounter(fruitPieSlice.addOne()));
        }
        else {
            $("#fruitPieSliceGagContainer").html(changeGagCounter(fruitPieSlice.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#creamPieSliceGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#creamPieSliceGagContainer").html(changeGagCounter(creamPieSlice.addOne()));
        }
        else {
            $("#creamPieSliceGagContainer").html(changeGagCounter(creamPieSlice.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#wholeFruitPieGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#wholeFruitPieGagContainer").html(changeGagCounter(wholeFruitPie.addOne()));
        }
        else {
            $("#wholeFruitPieGagContainer").html(changeGagCounter(wholeFruitPie.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#wholeCreamPieGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#wholeCreamPieGagContainer").html(changeGagCounter(wholeCreamPie.addOne()));
        }
        else {
            $("#wholeCreamPieGagContainer").html(changeGagCounter(wholeCreamPie.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#birthdayCakeGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#birthdayCakeGagContainer").html(changeGagCounter(birthdayCake.addOne()));
        }
        else {
            $("#birthdayCakeGagContainer").html(changeGagCounter(birthdayCake.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#weddingCakeGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#weddingCakeGagContainer").html(changeGagCounter(weddingCake.addOne()));
        }
        else {
            $("#weddingCakeGagContainer").html(changeGagCounter(weddingCake.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    //-----Squirt-----
    $('#squirtingFlowerGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#squirtingFlowerGagContainer").html(changeGagCounter(squirtingFlower.addOne()));
        }
        else {
            $("#squirtingFlowerGagContainer").html(changeGagCounter(squirtingFlower.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#glassOfWaterGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#glassOfWaterGagContainer").html(changeGagCounter(glassOfWater.addOne()));
        }
        else {
            $("#glassOfWaterGagContainer").html(changeGagCounter(glassOfWater.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#squirtGunGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#squirtGunGagContainer").html(changeGagCounter(squirtGun.addOne()));
        }
        else {
            $("#squirtGunGagContainer").html(changeGagCounter(squirtGun.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#seltzerBottlePieGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#seltzerBottlePieGagContainer").html(changeGagCounter(seltzerBottle.addOne()));
        }
        else {
            $("#seltzerBottlePieGagContainer").html(changeGagCounter(seltzerBottle.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#fireHosePieGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#fireHosePieGagContainer").html(changeGagCounter(fireHose.addOne()));
        }
        else {
            $("#fireHosePieGagContainer").html(changeGagCounter(fireHose.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#stormCloudGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#stormCloudGagContainer").html(changeGagCounter(stormCloud.addOne()));
        }
        else {
            $("#stormCloudGagContainer").html(changeGagCounter(stormCloud.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#geyserGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#geyserGagContainer").html(changeGagCounter(geyser.addOne()));
        }
        else {
            $("#geyserGagContainer").html(changeGagCounter(geyser.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    //-----Drop-----
    $('#flowerPotGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#flowerPotGagContainer").html(changeGagCounter(flowerPot.addOne()));
        }
        else {
            $("#flowerPotGagContainer").html(changeGagCounter(flowerPot.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#sandbagGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#sandbagGagContainer").html(changeGagCounter(sandbag.addOne()));
        }
        else {
            $("#sandbagGagContainer").html(changeGagCounter(sandbag.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#anvilGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#anvilGagContainer").html(changeGagCounter(anvil.addOne()));
        }
        else {
            $("#anvilGagContainer").html(changeGagCounter(anvil.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#bigWeightPieGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#bigWeightPieGagContainer").html(changeGagCounter(bigWeight.addOne()));
        }
        else {
            $("#bigWeightPieGagContainer").html(changeGagCounter(bigWeight.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#safeGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#safeGagContainer").html(changeGagCounter(safe.addOne()));
        }
        else {
            $("#safeGagContainer").html(changeGagCounter(safe.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#grandPianoGagContainer').click(function () {
        if (deleteMode == 0) {
            $("#grandPianoGagContainer").html(changeGagCounter(grandPiano.addOne()));
        }
        else {
            $("#grandPianoGagContainer").html(changeGagCounter(grandPiano.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
    $('#toontanicContainer').click(function () {
        if (deleteMode == 0) {
            $("#toontanicContainer").html(changeGagCounter(toontanic.addOne()));
        }
        else {
            $("#toontanicContainer").html(changeGagCounter(toontanic.removeOne()));
        }
        $("#totalDamage").html(damageUpdate());
    });
});
//This is the angular part
(function () {
    angular.module('MyApp', ['ngMaterial', 'ngMessages'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('blue-grey')
          .accentPalette('red');
    })
    .controller('AppCtrl', function ($scope, $mdDialog, $mdMedia) {
        

        //This function changes the version of the cog.
        $scope.changeVersionOfCog = function () {
            versionOfCog *= -1;
            $("#totalDamage").html(damageUpdate());

        };
        //This function is for the "Check Carry Over Damage" button.
        //It returns true if the cog is version 1. And false if cog is version 2.
        $scope.checkVersionOfCog = function () {
            if (versionOfCog == 1)
                return true;
            else
                return false;
        };
        //TODO: What does the two functions below do?
        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }
        $scope.checkCarryOverDamage = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
        };
        $scope.showCarryOverDamageDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                contentElement: '#carryOverDamage',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        $scope.showDamageAnalysisDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                contentElement: '#damageAnalysis',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        $scope.showSosCardsDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                contentElement: '#sosCards',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        $scope.showAboutDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                contentElement: '#about',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        //This function resets the board.
        $scope.resetBoard = function () {
            $("#featherGagContainer").html(changeGagCounter(feather.reset()));
            $("#megaphoneGagContainer").html(changeGagCounter(megaphone.reset()));
            $("#lipstickGagContainer").html(changeGagCounter(lipstick.reset()));
            $("#bambooCaneGagContainer").html(changeGagCounter(bambooCane.reset()));
            $("#pixieDustGagContainer").html(changeGagCounter(pixieDust.reset()));
            $("#jugglingBallsGagContainer").html(changeGagCounter(jugglingBalls.reset()));
            $("#highDiveGagContainer").html(changeGagCounter(highDive.reset()));
            $("#bananaPeelGagContainer").html(changeGagCounter(bananaPeel.reset()));
            $("#rakeGagContainer").html(changeGagCounter(rake.reset()));
            $("#marblesGagContainer").html(changeGagCounter(marbles.reset()));
            $("#quickSandGagContainer").html(changeGagCounter(quickSand.reset()));
            $("#trapdoorGagContainer").html(changeGagCounter(trapdoor.reset()));
            $("#tntGagContainer").html(changeGagCounter(tnt.reset()));
            $("#railroadGagContainer").html(changeGagCounter(railroad.reset()));
            $("#oneBillGagContainer").html(changeGagCounter(oneBill.reset()));
            $("#smallMagnetGagContainer").html(changeGagCounter(smallMagnet.reset()));
            $("#fiveBillGagContainer").html(changeGagCounter(fiveBill.reset()));
            $("#bigMagnetGagContainer").html(changeGagCounter(bigMagnet.reset()));
            $("#tenBillGagContainer").html(changeGagCounter(tenBill.reset()));
            $("#hypnoGogglesGagContainer").html(changeGagCounter(hypnoGoggles.reset()));
            $("#presentationGagContainer").html(changeGagCounter(presentation.reset()));
            $("#bikeHornGagContainer").html(changeGagCounter(bikeHorn.reset()));
            $("#whistleGagContainer").html(changeGagCounter(whistle.reset()));
            $("#bugleGagContainer").html(changeGagCounter(bugle.reset()));
            $("#aoogahGagContainer").html(changeGagCounter(aoogah.reset()));
            $("#elephantTrunkGagContainer").html(changeGagCounter(elephantTrunk.reset()));
            $("#foghornGagContainer").html(changeGagCounter(foghorn.reset()));
            $("#operaSingerGagContainer").html(changeGagCounter(operaSinger.reset()));
            $("#cupcakeGagContainer").html(changeGagCounter(cupcake.reset()));
            $("#fruitPieSliceGagContainer").html(changeGagCounter(fruitPieSlice.reset()));
            $("#creamPieSliceGagContainer").html(changeGagCounter(creamPieSlice.reset()));
            $("#wholeFruitPieGagContainer").html(changeGagCounter(wholeFruitPie.reset()));
            $("#wholeCreamPieGagContainer").html(changeGagCounter(wholeCreamPie.reset()));
            $("#birthdayCakeGagContainer").html(changeGagCounter(birthdayCake.reset()));
            $("#weddingCakeGagContainer").html(changeGagCounter(weddingCake.reset()));
            $("#squirtingFlowerGagContainer").html(changeGagCounter(squirtingFlower.reset()));
            $("#glassOfWaterGagContainer").html(changeGagCounter(glassOfWater.reset()));
            $("#squirtGunGagContainer").html(changeGagCounter(squirtGun.reset()));
            $("#seltzerBottlePieGagContainer").html(changeGagCounter(seltzerBottle.reset()));
            $("#fireHosePieGagContainer").html(changeGagCounter(fireHose.reset()));
            $("#stormCloudGagContainer").html(changeGagCounter(stormCloud.reset()));
            $("#geyserGagContainer").html(changeGagCounter(geyser.reset()));
            $("#flowerPotGagContainer").html(changeGagCounter(flowerPot.reset()));
            $("#sandbagGagContainer").html(changeGagCounter(sandbag.reset()));
            $("#anvilGagContainer").html(changeGagCounter(anvil.reset()));
            $("#bigWeightPieGagContainer").html(changeGagCounter(bigWeight.reset()));
            $("#safeGagContainer").html(changeGagCounter(safe.reset()));
            $("#grandPianoGagContainer").html(changeGagCounter(grandPiano.reset()));
            $("#toontanicContainer").html(changeGagCounter(toontanic.reset()));
            $("#totalDamage").html(damageUpdate());
        };
        //Updates the cog checkboxes.
        $scope.updateCogs = function (damage) {
            $scope.data = {};
            $scope.safeApply(); //Have to apply the changes since we updated it outside of Angular.
            /*//-----------Cog decelerations-----------
            var cogs = [];
            for (i = 1; i <= 12; i++) {
                var tempCog = new Cog(i);
                cogs.push(tempCog);
            };
            
            //Need to update which cogs are dead
            for (i = 0; i < cogs.length; i++) {
                /*if (i == 0) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c1 = $scope.checkDeathOfVersionOne(i, damage);
                    }
                }
                if (i == 1) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c2 = true;
                    }
                }
                if (i == 2) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c3 = true;
                    }
                }
                if (i == 3) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c4 = true;
                    }
                }
                if (i == 4) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c5 = true;
                    }
                }
                if (i == 5) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c6 = true;
                    }
                }
                if (i == 6) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c7 = true;
                    }
                }
                if (i == 7) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c8 = true;
                    }
                }
                if (i == 8) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c9 = true;
                    }
                }
                if (i == 9) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c10 = true;
                    }
                }
                if (i == 10) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c11 = true;
                    }
                }
                if (i == 11) {
                    if (cogs[i].isCogDead(damage) == 1) {
                        $scope.data.c12 = true;
                    }
                }
                
            }*/
            //Have to make sure the versionOfCog toggle is always correct.
            if (versionOfCog == -1) {
                $scope.data.cogVersion = true;
            }
            else {
                $scope.data.cogVersion = false;
            }
            if (versionOfCog == 1) {
                $scope.data.c1 = cogsVersionOne[0].isVersionOneDead();
                $scope.data.c2 = cogsVersionOne[1].isVersionOneDead();
                $scope.data.c3 = cogsVersionOne[2].isVersionOneDead();
                $scope.data.c4 = cogsVersionOne[3].isVersionOneDead();
                $scope.data.c5 = cogsVersionOne[4].isVersionOneDead();
                $scope.data.c6 = cogsVersionOne[5].isVersionOneDead();
                $scope.data.c7 = cogsVersionOne[6].isVersionOneDead();
                $scope.data.c8 = cogsVersionOne[7].isVersionOneDead();
                $scope.data.c9 = cogsVersionOne[8].isVersionOneDead();
                $scope.data.c10 = cogsVersionOne[9].isVersionOneDead();
                $scope.data.c11 = cogsVersionOne[10].isVersionOneDead();
                $scope.data.c12 = cogsVersionOne[11].isVersionOneDead();
            }
            else if (versionOfCog == -1) {
                $scope.data.c1 = cogsVersionTwo[0].isVersionTwoDead();
                $scope.data.c2 = cogsVersionTwo[1].isVersionTwoDead();
                $scope.data.c3 = cogsVersionTwo[2].isVersionTwoDead();
                $scope.data.c4 = cogsVersionTwo[3].isVersionTwoDead();
                $scope.data.c5 = cogsVersionTwo[4].isVersionTwoDead();
                $scope.data.c6 = cogsVersionTwo[5].isVersionTwoDead();
                $scope.data.c7 = cogsVersionTwo[6].isVersionTwoDead();
                $scope.data.c8 = cogsVersionTwo[7].isVersionTwoDead();
                $scope.data.c9 = cogsVersionTwo[8].isVersionTwoDead();
                $scope.data.c10 = cogsVersionTwo[9].isVersionTwoDead();
                $scope.data.c11 = cogsVersionTwo[10].isVersionTwoDead();
                $scope.data.c12 = cogsVersionTwo[11].isVersionTwoDead();

                //TODO: Finish adding the layers for each cog.
                $(".level1FirstLayer").html(cogsVersionTwo[0].getHealthLayer1());
                $(".level1SecondLayer").html(cogsVersionTwo[0].getHealthLayer2());

                $(".level2FirstLayer").html(cogsVersionTwo[1].getHealthLayer1());
                $(".level2SecondLayer").html(cogsVersionTwo[1].getHealthLayer2());

                $(".level3FirstLayer").html(cogsVersionTwo[2].getHealthLayer1());
                $(".level3SecondLayer").html(cogsVersionTwo[2].getHealthLayer2());

                $(".level4FirstLayer").html(cogsVersionTwo[3].getHealthLayer1());
                $(".level4SecondLayer").html(cogsVersionTwo[3].getHealthLayer2());

                $(".level5FirstLayer").html(cogsVersionTwo[4].getHealthLayer1());
                $(".level5SecondLayer").html(cogsVersionTwo[4].getHealthLayer2());

                $(".level6FirstLayer").html(cogsVersionTwo[5].getHealthLayer1());
                $(".level6SecondLayer").html(cogsVersionTwo[5].getHealthLayer2());

                $(".level7FirstLayer").html(cogsVersionTwo[6].getHealthLayer1());
                $(".level7SecondLayer").html(cogsVersionTwo[6].getHealthLayer2());

                $(".level8FirstLayer").html(cogsVersionTwo[7].getHealthLayer1());
                $(".level8SecondLayer").html(cogsVersionTwo[7].getHealthLayer2());

                $(".level9FirstLayer").html(cogsVersionTwo[8].getHealthLayer1());
                $(".level9SecondLayer").html(cogsVersionTwo[8].getHealthLayer2());

                $(".level10FirstLayer").html(cogsVersionTwo[9].getHealthLayer1());
                $(".level10SecondLayer").html(cogsVersionTwo[9].getHealthLayer2());

                $(".level11FirstLayer").html(cogsVersionTwo[10].getHealthLayer1());
                $(".level11SecondLayer").html(cogsVersionTwo[10].getHealthLayer2());

                $(".level12FirstLayer").html(cogsVersionTwo[11].getHealthLayer1());
                $(".level12SecondLayer").html(cogsVersionTwo[11].getHealthLayer2());

            }
                    
            $scope.safeApply(); //Have to apply the changes since we updated it outside of Angular.
        };
        //Checks the indeterminate Cogs
        $scope.checkindeterminateCogs = function (cogLevel) {
            //If this is versionOne... just return false.
            if (versionOfCog == 1) {
                return (0 == 1); //0 is not equal to one.
            }
            //If not... they are version two and we need to check to see if version one is dead.. but only if version two isn't dead.
            return (cogsVersionTwo[cogLevel - 1].isVersionOneDead() && !cogsVersionTwo[cogLevel - 1].isVersionTwoDead());
        }
        //Check to see if 2.0 version of cog is dead.
        $scope.didVersionCogTwoDie= function(cogLevel){
            return (versionOfCog == -1)
        };
        //This function is to check if we are already in angular or not. If we are, apply is not needed.
        $scope.safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn && (typeof (fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    });
})();
var changeGagCounter = function(num){
    return "<div id=\"gagCounter\">"+num+"</div>"
}
//Trash can swap picture function.
var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
var sourceSwap2 = function () {
    var $this = $(this);
    var newSource = $this.data('done-src');
    $this.data('done-src', $this.attr('src'));
    $this.attr('src', newSource);
}
function toggleDeleteMode() {
    var gagBlue = "#0071bc";
    var gagRed = "#9e1717";
    var currentColor;
    if (deleteMode==1)
    {
        deleteMode = 0; //Make sure to disable deleteMode!
        //Set all the gags to have a blue background
        currentColor = gagBlue;
    }
    else
    {
        deleteMode = 1; //Have to make sure we enable deleteMode!
        //Set all the gags to have a red background
        currentColor = gagRed;
    }
    //Set all the gags to have the right color.
    $("#featherGagContainer").css("background-color", currentColor);
    $("#megaphoneGagContainer").css("background-color", currentColor);
    $("#lipstickGagContainer").css("background-color", currentColor);
    $("#bambooCaneGagContainer").css("background-color", currentColor);
    $("#pixieDustGagContainer").css("background-color", currentColor);
    $("#jugglingBallsGagContainer").css("background-color", currentColor);
    $("#highDiveGagContainer").css("background-color", currentColor);

    $("#bananaPeelGagContainer").css("background-color", currentColor);
    $("#rakeGagContainer").css("background-color", currentColor);
    $("#marblesGagContainer").css("background-color", currentColor);
    $("#quickSandGagContainer").css("background-color", currentColor);
    $("#trapdoorGagContainer").css("background-color", currentColor);
    $("#tntGagContainer").css("background-color", currentColor);
    $("#railroadGagContainer").css("background-color", currentColor);

    $("#oneBillGagContainer").css("background-color", currentColor);
    $("#smallMagnetGagContainer").css("background-color", currentColor);
    $("#fiveBillGagContainer").css("background-color", currentColor);
    $("#bigMagnetGagContainer").css("background-color", currentColor);
    $("#tenBillGagContainer").css("background-color", currentColor);
    $("#hypnoGogglesGagContainer").css("background-color", currentColor);
    $("#presentationGagContainer").css("background-color", currentColor);

    $("#bikeHornGagContainer").css("background-color", currentColor);
    $("#whistleGagContainer").css("background-color", currentColor);
    $("#bugleGagContainer").css("background-color", currentColor);
    $("#aoogahGagContainer").css("background-color", currentColor);
    $("#elephantTrunkGagContainer").css("background-color", currentColor);
    $("#foghornGagContainer").css("background-color", currentColor);
    $("#operaSingerGagContainer").css("background-color", currentColor);

    $("#cupcakeGagContainer").css("background-color", currentColor);
    $("#fruitPieSliceGagContainer").css("background-color", currentColor);
    $("#creamPieSliceGagContainer").css("background-color", currentColor);
    $("#wholeFruitPieGagContainer").css("background-color", currentColor);
    $("#wholeCreamPieGagContainer").css("background-color", currentColor);
    $("#birthdayCakeGagContainer").css("background-color", currentColor);
    $("#weddingCakeGagContainer").css("background-color", currentColor);

    $("#squirtingFlowerGagContainer").css("background-color", currentColor);
    $("#glassOfWaterGagContainer").css("background-color", currentColor);
    $("#squirtGunGagContainer").css("background-color", currentColor);
    $("#seltzerBottlePieGagContainer").css("background-color", currentColor);
    $("#fireHosePieGagContainer").css("background-color", currentColor);
    $("#stormCloudGagContainer").css("background-color", currentColor);
    $("#geyserGagContainer").css("background-color", currentColor);

    $("#flowerPotGagContainer").css("background-color", currentColor);
    $("#sandbagGagContainer").css("background-color", currentColor);
    $("#anvilGagContainer").css("background-color", currentColor);
    $("#bigWeightPieGagContainer").css("background-color", currentColor);
    $("#safeGagContainer").css("background-color", currentColor);
    $("#grandPianoGagContainer").css("background-color", currentColor);
    $("#toontanicContainer").css("background-color", currentColor);
    
}