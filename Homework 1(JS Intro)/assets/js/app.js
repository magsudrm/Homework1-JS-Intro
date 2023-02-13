function DarkMode(){
    document.body.style.backgroundColor ="black";
    document.body.style.color ="white";
    var element=document.getElementById("demo");
}

var saat= new Date().getHours();
console.log(saat);
if(saat>=6 && saat<=12){
    document.body.style.backgroundColor ='grey'
    document.body.style.color ="white";
    alert("Good Morning")
}
if(saat>12 && saat<=18){
    document.body.style.backgroundColor ='yellow'
    alert("Good Afternoon")
}
if(saat>18 && saat<24){
    document.body.style.backgroundColor ='#72757A'
    document.body.style.color ="white";
    alert("Good Evening")
}
else{
    document.body.style.backgroundColor ='black'
    document.body.style.color ="white";
    alert("Good Night")
}

var radius=5;
var sahe= Math.PI*radius;
console.log(sahe);
