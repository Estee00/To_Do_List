const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var newList = ["Pray to God", "Sweep the house", "Wash dirty plates"];

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("myfile", {todaysDate: day, newListItems: newList});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    newList.unshift(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("listening on port 3000");
});