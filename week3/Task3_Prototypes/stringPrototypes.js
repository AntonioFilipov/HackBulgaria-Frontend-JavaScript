String.prototype.capitalize = function(){
    return this[0].toUpperCase()+this.slice(1,this.length);
}

String.prototype.isBlank = function(){
    if(this.length === 0){
        return true;
    }
    for(var i=0; i<this.length;i++){
        if(this[i] !== " "){
            return false;
        }
    }
    return true;
}

String.prototype.words = function(){
    var splitted = this.split(" ");
    var result = [];
    for(var i = 0; i<splitted.length;i++){
        if(splitted[i] !== ""){
            result.push(splitted[i]);
        }
    }
    return result;
    }

//TODO .format()

console.log("javaScript".capitalize());
console.log("".isBlank());
console.log(" ".isBlank());
console.log(" sad".isBlank());
console.log("This is    a   very   clever   sentence!".words());