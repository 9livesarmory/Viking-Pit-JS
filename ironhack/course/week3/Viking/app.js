
var Viking = function(name, health, strength){
		this.name=name;
		this.health=health;
		this.strength=strength;
};

Viking.prototype.attack = function (target){
	target.health=(target.health-this.strength);
	return console.log (target.name + " is hit and has their health reduced to: " + target.health);
};

Viking.prototype.warcry = function(){
	console.log("For Valhalla!");
};


var viking1 = new Viking("Bjorn", 200, 50);
var viking2 = new Viking("Lagertha", 300, 25);
var viking3 = new Viking("Ragnar", 150, 35);
var viking4 = new Viking("Rollo", 400, 50);
var viking5 = new Viking("Floki", 200, 20);


// --------------------------------------------------------

var Saxon = function(health,strength) {
		this.health=health;
		this.strength=strength; 
}

Saxon.prototype.attack = function (target){
	return target.health=target.health-this.strength;
};


var saxon1 = new Saxon(25,5);
var saxon2 = new Saxon(20,10);
var saxon3 = new Saxon(20,15);
var saxon4 = new Saxon(15,20);



// --------------------------------------------------------


function Pit(vikingx,vikingy){
	var maxturns=5;

	while (vikingx.health > 0 && vikingy.health > 0 && maxturns > 0){
		vikingx.attack(vikingy);
		vikingy.attack(vikingx);
	}
};


Pit(viking1, viking2);


