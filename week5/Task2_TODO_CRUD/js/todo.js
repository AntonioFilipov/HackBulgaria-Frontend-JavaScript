// on document ready
$( document ).ready(function(){
    // init stuff here

    $("input#addButton").click(function(){
        var inputText = $("input#addBox").val();
        TodoApp.addTask(inputText);
        TodoApp.displayList();

        // $(TodoApp.finishTask()).click(function(){
        //     $(this).remove();
        // });
    });


    $("input#deleteButton").click(function(){
        TodoApp.displayList();
    });

});

