var tags = [];
var nestedTagsIndex = [];
function Page(text) {
    this.text = text;
}

Page.prototype.render = function() {
  return this.text;
}


function Paragraph(text) {
    Page.call(this, text);
}

Paragraph.prototype = Object.create(Page.prototype);
Paragraph.prototype.render = function() {
  return Page.prototype.render.call(this);
}

function Div(){
    Page.call(this, "<div>");
}

Div.prototype = Object.create(Page.prototype);
Div.prototype.render = function() {
  return Page.prototype.render.call(this);
}

Div.prototype.addChild = function(item){
    return item;
}

var page = new Page("<html>");
tags.push(page);
//console.log(page.render());

var paragraph = new Paragraph("<p>");
tags.push(paragraph);
//console.log(paragraph.render());

var div = new Div();
tags.push(div);
console.log(div);

//div.addChild(paragraph);
tags.push(div.addChild(paragraph));
nestedTagsIndex.push(tags.indexOf(div.addChild(paragraph)));
console.log(tags.indexOf(div.addChild(paragraph)));


//console.log(div.render());
for(var i = 0; i<tags.length;i++){
    //console.log(tags[i].text != "<html>");
    if (i in nestedTagsIndex)
    {
        console.log(tags[i].render());
    }
    else if (tags[i].text != "<html>"){
      console.log("  "+tags[i].render());
    }
    else{
      console.log(tags[i].render());
    }

}


