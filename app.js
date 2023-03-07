//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var items = ["jdcn","jcwdnu","jcn"];
var workitems = [];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
//  res.send("Hello");
var today = new Date();
//var currentday = today.getDay();

/*if(currentday === 6 || currentday === 0){
//  res.write("<h1> Yay its weekend</h1>");
day = "weekend";
}
else{
  // res.write("<p1>it is not the weekend !</p1>")
  // res.write("<h1> boo i have to work</h1>")
  // res.send();
  day = "weekday";
}*/


// switch (currentday) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   default:
//   console.log("error: current day is equal to :" + currentday);
// }
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
var day = today.toLocaleDateString("en-US", options);


res.render("list", {listtitle: day, newlistitems: items });
});

app.post("/", function(req,res){
  console.log(req.body);
  let item = req.body.newitem;
  //console.log(item);
  // res.render("list", {newlistitem: item });
  if(req.body.list=="Work"){
    workitems.push(item);
    res.redirect("/work")
  }
  else{
  items.push(item);
  res.redirect("/");
}

})

app.get("/work", function(req,res){
  res.render("list", {listtitle: "Work List", newlistitems: workitems });
})
// app.post("/work", function(req,res){
//   let item = req.body.newitem;
//   workitems.push(item);
//   res.redirect("/work")
// })

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
