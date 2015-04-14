// on document ready
$( document ).ready(function(){
    // init stuff here
    var divContainer = $("div#container");
    var ulItemsList = $("<ul></ul>").addClass("items-list");

    divContainer.append(ulItemsList);
    $("input#addButton").click(function(){
        var inputText = $("input#addBox").val();
        var liListItem = $("<li></li>").addClass("list-item");
        liListItem.append($("<input type='checkbox' class='task'>"));
        liListItem.append($("<p class='taskExplanation' style = 'display:inline'></p>").text(inputText));
        ulItemsList.append(liListItem);

        $(liListItem).click(function(){
            $(this).remove();
        });
    });




});

