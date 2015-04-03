var bus = (function() {
  var eventTable = {};

  function on(eventName, callback) {
    if (typeof(eventTable[eventName]) === "undefined"){
      eventTable[eventName] = [];
    }
    eventTable[eventName].push(callback);
  }

  function remove(eventName){
    if(typeof(eventTable[eventName]) !== "undefined"){
        delete eventTable[eventName];
    }
    else{
      console.log("no such key!");
    }
  }

  function trigger(eventName){
    var events = eventTable[eventName] || [];
    events.forEach(functio(callback)){
      callback();
    });
  }

  return {
    "on": on,
    "remove":remove,
    "trigger":trigger
    }

  }
}());