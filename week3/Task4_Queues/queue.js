var queue = (function() {
  var array = [];

  return {
    "push": function(item) {
      array.push(item);
    },
    "pop": function(){
        return array.shift();
    },
    "isEmpty": function(){
        return array.length===0;
    }
  }


}());

console.log(queue.isEmpty());
queue.push(1);
console.log(queue.pop());
queue.push(2);
queue.push(3);
console.log(queue.isEmpty());
console.log(queue);
