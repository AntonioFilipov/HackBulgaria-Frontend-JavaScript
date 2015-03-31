Array.prototype.head = function(){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    return this[0];
}

Array.prototype.tail = function(){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    return this.splice(1,this.length);
}

Array.prototype.last = function(){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    return this[this.length-1];
}

Array.prototype.range = function(start, end){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    else if(start > end){
    throw {
            "name":"ArgumentException",
            "message":"start > end"
            }
    }
    else if(start < 0 || end > this.length-1){
        throw {
            "name":"IndexOutOfRangeException",
            "message":"Index out of range!"
        }
    }
    return this.splice(start,end);
}

Array.prototype.sum = function(){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    var sum = 0;
    for(var i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

Array.prototype.product = function(){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    var p = 1;
    for(var i=0;i<this.length;i++){
        p*=this[i];
    }
    return p;
}

Array.prototype.compact = function(){
    var falsyValues = [false,0,"",null,undefined,NaN];
    var result = [];
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    var flag = 0;
    for(var i=0;i<this.length;i++){
        flag = 0;
        for(var j = 0; j<falsyValues.length;j++){
            if(this[i] === falsyValues[j]){
                flag = 1;
                break;
            }
        }
        if(flag === 0){
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.take = function(item){
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    return this.splice(0,item);
}

Array.prototype.drop = function(item){7
    var array = [];
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    array = this.splice(item, this.length);
    return array;
}

Array.prototype.dedup = function(item){7
    var array = [];
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }

    for(var i = 0; i<this.length;i++){
        if(array.indexOf(this[i]) != -1){
            continue;
        }
        array.push(this[i]);
    }
    return array;
}

Array.prototype.sample = function(item){7
    var array = [];
    if(this.length === 0){
        throw {
            "name":"ArgumentException",
            "message":"Empty array!"
        }
    }
    var index = Math.floor(Math.random() * this.length-1);
    return this[index];
}
var array = [1,1,1,1,2,3,4,5,4,5,5,6,7];
var falsyExample = [false, true, 0, "", null, 5, undefined, NaN, "JavaScript"];
console.log(array.head());
//console.log(array.tail());
console.log(array.last());
//console.log(array.range(1,4));
console.log(array.sum());
console.log(array.product());
//console.log(falsyExample.compact());
//console.log(array.take(100));
//console.log(array.drop(100));
//console.log(array.dedup());
console.log(array.sample());
