function Person(first, last){
    this.getFirst = function(){
        return first;
    }

    this.getLast = function(){
        return last;
    }
}

Person.prototype.fullName = function(){
    return this.getFirst() + " " + this.getLast();
}

var p1 = new Person("Ivan", "Ivanov");
console.log(p1.getFirst());
console.log(p1.getLast());
console.log(p1.fullName());