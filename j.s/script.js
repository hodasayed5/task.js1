
var allproud = document.querySelectorAll(".list1 li")
var cardtitle =document.querySelector("li .card-title")
var proudact = document.querySelector(".proudact-contant")
var showprice = document.querySelector(".showprice")
var pri = document.querySelector(".pri")
var x = 0
allproud.forEach(function(item){
  item.onclick=function(){
  proudact.innerHTML += item.textContent + " , "; 
  x += parseInt(cardtitle.getAttribute("price"))      
  showprice.onclick=function(){
  pri.innerHTML=x;
}
}        
}
)















// var allproud = document.querySelectorAll("li")
// var cardtitle =document.querySelectorAll("li .card-title")
// var proudact = document.querySelector(".proudact-contant")
// var btn =document.querySelectorAll(".list1 li .btn")
// // var sasabig = document.querySelector(".sasabig")
// // var sasa = document.querySelector(".sasa")
// var totalprice = 0




// allproud.forEach(function(item){
//     cardtitle.forEach(function(hoda){

//     item.onclick = function(){
//        console.log( totalprice += parseInt(hoda.getAttribute("price")));
//     // totalprice += parseInt(hoda.getAttribute("price"))
// proudact.innerHTML += item.textContent + " , ";       
// // console.log(totalprice)
//     } 
//     // sasabig.onclick(function(){
//     //     sasa.innerHTML = totalprice
//     //     })
//     })

// })

//     // console.log(totalprice)

