var TodoApp = (function() {
  // private vars
  var tasks = [];
  var index = 0;

  // store the reference with the jQuery selectors here
  var refs = {
    addTask: "input#addTask",
    container: "#container"
  }

  var addTask = function(taskName) {
    // add to tasks
    tasks.push(
      {
        "name":taskName,
        "id":index,
        "finished":false
      });
    index+=1;
  };

  var finishTask = function(id) {
    // update task
    for(var i=0; i<tasks.length;i++) {
      if(tasks[i].id === id){
        tasks[i].finished = true;
        break;
      }
    }
    displayList();
  };


  var displayList = function() {
    // clear the contents
    // loop through the tasks
    // append each task
    var ulItemsList = $("div#container > ul.items-list");
    ulItemsList.empty();

    tasks.forEach(function(task){
      var taskId = task.id;
      var liListItem = $("<li></li>").attr('id', "list-item"+taskId);
      var chkFinishTask = $("<input type='checkbox' class='task'>");

      chkFinishTask.click(function(){
        finishTask(taskId);
        console.log(taskId);
      });

      liListItem.append(chkFinishTask);//.attr("id", "task"+tasks[i].id));

      if (task.finished === true){
        //liListItem.addClass("finished");
        chkFinishTask.attr("checked","checked");
        liListItem.append($("<strike><span class='taskExplanation'></span></strike>").text(task.name));
      }else{
        liListItem.append($("<span class='taskExplanation'></span>").text(task.name));
      }
      
      ulItemsList.append(liListItem);

    });
  }

  // public api
  return {
    addTask: addTask,
    finishTask: finishTask,
    displayList: displayList
  };
})();

// access via
