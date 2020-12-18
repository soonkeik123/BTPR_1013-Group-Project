$(document).ready(function(){
    var user = {};
    $("#form").submit(function(event){
        user.firstname = $("#first").val();
        user.secondname = $("#second").val();
        //call out object
        console.log(user);
        //declare event
        user.song=function(){
            alert("favourite song is Gurengu");
        }
        //call event
        user.song();

        //direct insert the data
        //function Person
        function Person(age,sex){
            //this will change according to function
            this.age=age;
            this.sex=sex;
        }

        //call the variable y
        var y = new Person(15, "male");
        console.log(y);
    })
});