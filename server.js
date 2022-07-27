var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
        "<h1>vijay sales </h1>"
        +"<hr/>"
        +"<h3>smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptps</li>"
        +"<li>Mobiles</li>"
        +"<li>HOlographic devices</li>"
        +"<li>Smart watches</li>"
        +"<li>Gaming consoles/li>"
        +"</ol>"

    );
});
app.get("/aboutus",(req, res)=>{
    res.send(
        "<h1>vijay sales </h1>"
        +"<hr/>"
        +"<h3>Doing ordinary things extraordinary</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>chief Mentor: akshada more</li>"
        +"<li>Director: tushar gursale</li>"
        +"<li>subject matter expert: soniya more</li>"
        +"</ol>"

    );
});

var server=app.listen(9000);
console.log("vijay sales online shopping running on port no 9000");