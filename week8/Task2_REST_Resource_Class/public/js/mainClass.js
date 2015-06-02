function Resource (url){
    this.url = url;
}
Resource.prototype.create(name, email){
    $.ajax({
        "method": "post",
        "url": "http://localhost:3000/api/students",
        "data": {
            "id": studentsResult.length,
            "name": name,
            "email": email
        },
        "dataType": "json"
    }).done(function (result) {
        displayResults();
        $("#name").val("");
        $("#email").val("");
    })
    
}