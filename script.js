document.write(10);//Number litrals
document.write("<br/>");//To add line -break
document.write("Hello world");//String Literals
//Learning varialbels in javascript
//using var keyworld
var first_name ="Christopher";
console.log(first_name);//this name will reflect in the conse
document.write(first_name);
//using let keyword 
let age = 25;
console.log(age);
//usin a const keyword 
const isStudent = true;
console.log(isStudent);//true will be outputted on the console
///datatypes in javascript
//int , string , double ,.bool ,.arrays and objects and so many others in including numbers 
 //String
 let greetings = "Hello world";
 console.log(greetings);
 //numbers
 let year= 2024;
 console.log(year);
 //boolean
 //arrayss
 let fruits = ["Mango","Pineappls","Avoccando","Orangesa","apples"];
 for(i= 0 ;i < fruits.length; i++){
    document.write(fruits+" <br/>"  );
 }
 //learning objects in javascripts
 let person = {
    firstName :"christopher",
    lastName : "Bundi",
    age : 30
 };
 //functions in javascript 
 function add(a,b){
    return a +b;

 }
 document.write(add(34,56));
 console.log(add(34,756));
 const subsract = function(a,b){
    return a -b;
 }
 document.write("<br/>");
 document.write(subsract(5,67));
 console(subsract(3485,343));
 //arrow fuctions 
 const MUILTPLY = (a,b) => a* b;
 document.write(MUILTPLY)

