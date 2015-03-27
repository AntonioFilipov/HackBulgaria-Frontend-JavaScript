var prompt = require('prompt');
var strformat = require('strformat');
var jf = require('jsonfile');
var util = require('util');
require('console.table');

function add()
{
    prompt.get(['id', 'name', 'email'], function (err, result) {
                    collection.push({"id":result.id, "name":result.name, "email":result.email});
                    promptCommand();
                    });
}

function list()
{
    console.table('Table', collection);
    promptCommand();
}

function get()
{
    var choosenAttrubute;
    prompt.get(['attribute'], function (err, result) {
        switch(result.attribute){
            case "id": prompt.get(['id'], function (err, resultId) {
                for(var i=0; i< collection.length; i++)
                {
                    if(resultId.id === collection[i].id)
                    {
                        console.table('Table', collection[i]);
                        //console.log(strformat('id:{0}  name:{1}  email:{2}',collection[i].id, collection[i].name, collection[i].email));
                    }
                }
            }); break;
            case "name": prompt.get(['name'], function (err, resultName) {
                for(var i=0; i< collection.length; i++)
                {
                    if(resultName.name === collection[i].name)
                    {
                        console.table('Table', collection[i]);
                        //console.log(strformat('id:{0}  name:{1}  email:{2}',collection[i].id, collection[i].name, collection[i].email));
                    }
                }

            }); break;
            case "email":  prompt.get(['email'], function (err, resultEmail) {
                for(var i=0; i< collection.length; i++)
                {
                    if(resultEmail.email === collection[i].email)
                    {
                        console.table('Table', collection[i]);
                        //console.log(strformat('id:{0}  name:{1}  email:{2}',collection[i].id, collection[i].name, collection[i].email));
                    }
                }

            }); break;
            default:  console.log("Incorect command"); promptCommand(); break;
        }
        
    });
}

function save()
{
    var file = 'data/users.json';
    jf.writeFileSync(file, collection);
}

function load()
{
    var file = 'data/users.json';
    collection = jf.readFileSync(file);
    promptCommand();
}

function remove()
{
    prompt.get(['id'], function (err, result) {
                for(var i=0; i<collection.length; i++){
                    if (collection[i].id === result.id){
                        collection.splice(i,1);
                        break;
                    }
                }
                promptCommand();
                });
}


function promptCommand(){
    prompt.get(['command'], function (err, result) {
        switch(result.command){
            case "list": list(); break;
            case "add": add(); break;
            case "get": get(); break;
            case "save": save(); break;
            case "load": load(); break;
            case "remove": remove(); break;
            case "quit":  console.log("See you later"); break;
            default:  console.log("Incorect command"); promptCommand(); break;
        }
});

}
console.log("Commands:");
console.log("list - lists all users:");
console.log("add - add an user:");
console.log("get - list an user :");
console.log("save - save collection of users to json:");
console.log("load - load collection of users to json:");
console.log("remove - remove user by id");
console.log("quit");

var collection = [{}];
prompt.start();
promptCommand();
