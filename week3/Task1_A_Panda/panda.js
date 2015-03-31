function Panda (name, sex){
    this.name = name;
    if(sex !== "male" || sex !== "female"){
        throw {
            "name":"ArgumentEXception",
            "message":"Invalid sex!"
        }
    }
    this.sex = sex;
    this.weight = 20;
    this.isLazy = false;
}

Panda.prototype.toString = function(){
    return this.name+" is a "+this.sex+" panda which weights "+this.weight+" kg";
}

Panda.prototype.isMale = function(){
    return this.sex === "male";
}

Panda.prototype.isFemale = function(){
    return this.sex === "female";
}

Panda.prototype.eat = function(bamboo){
    this.weight+=bamboo/2;
    if(this.weight>80 && !this.isLazy){
        this.name = "Lazy Panda " + this.name;
        this.isLazy = true;
    }
}

Panda.prototype.mate = function(panda){
    var newPanda = new Panda();
    var chance = Math.floor(Math.random() * 1);
    if (chance === 0){
        newPanda.sex = "male";
        newPanda.name = this.name + " " + panda.name;
    }
    else{
        newPanda.sex = "female";
        newPanda.name = panda.name + " " + this.name;
    }
    newPanda.weight = (this.weight + panda.weight)/2;
    return newPanda;
}

var ivo = new Panda("Ivo","male");
console.log(ivo.toString());
var ivanka = new Panda("Ivanka", "female");
ivo.weight = 20;
ivanka.weight = 20;
console.log(ivanka.toString());
// ivo.eat(80);
// console.log(ivo.weight);
// ivo.eat(60);
// console.log(ivo.toString());
var ivan = ivo.mate(ivanka);
console.log(ivan.toString());

