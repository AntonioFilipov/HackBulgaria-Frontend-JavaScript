function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.fullName = function(){
    return this.name + " " + this.age;
}

var pesho = new Person("Pesho",12);
console.log(pesho.fullName());