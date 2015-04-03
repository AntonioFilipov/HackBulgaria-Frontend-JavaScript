var queue = (function() {
  var array = [];

  return {
    "push": function(item) {
      array.push(item);
    },
    "pop": function(){
        var poped = array[0];
        array.splice(0,1);
        return poped;
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
console.log(queue.pop());
queue.push(3);
console.log(queue.isEmpty());
console.log(queue.pop());
