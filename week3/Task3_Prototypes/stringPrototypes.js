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
String.prototype.format = function(dict) {
  var result = this;

  if(typeof(dict) === "object") {
    Object.keys(dict).forEach(function(key) {
      result = result.replace("{" + key + "}", dict[key]);
    });
    return result;
  }

  var args = [];
  var n = arguments.length;
  var i = 0;

  for(i; i < n; i+=1) {
    args.push(arguments[i]);
  }

  var result = this;

  args.forEach(function(arg) {
    result = result.replace("{}", arg);
  });

  return result;
}

console.log("javaScript".capitalize());
console.log("".isBlank());
console.log(" ".isBlank());
console.log(" sad".isBlank());
console.log("This is    a   very   clever   sentence!".words());

var result = "Hi, my name is {}. Nice to meet you {}".format("Toni", "Good sir!");
console.log(result);