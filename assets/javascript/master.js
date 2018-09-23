$(document).ready(function(){
var axe = {
  name:"Axe",
  hitpoints:520,
  attackpower:25,
  counter:25,
  order: ".one",
  image: "./assets/images/axebackground.jpg"
}
var razor = {
  name:"Razor",
  hitpoints:420,
  attackpower:30,
  counter:30,
  order:".two",
  image: "./assets/images/razorbackground.jpg"
}
var wraithking = {
  name:"Wraith King",
  hitpoints:580,
  attackpower:25,
  counter:25,
  order:".three",
  image: "./assets/images/wraithkingbackground.jpg"
}
var invoker = {
  name:"Invoker",
  hitpoints:520,
  attackpower:25,
  counter:25,
  order:".four",
  image: "./assets/images/invokerbackground.jpg"
}

var heroes = [axe, razor, wraithking, invoker]
var userhero = ""
var enemyheroes = []
var firstexecute = false
var firstexecute1 = false
var currentlyattacking = ""

$(".clicker").on("click", function(){
  if (firstexecute == false){
    firstexecute = true
    var attribute = $(this).attr("hero")
    for (i in heroes){
      if (attribute == (heroes[i]).name){
        userhero = heroes[i]
        console.log(userhero)
        $("body").css("background-image", "url("+userhero.image+")");
      }
      else{
        enemyheroes.push(heroes[i])
      }
    }

    for (i in enemyheroes){
      $("div"+(enemyheroes[i]).order).prependTo(".available")
      $("div"+(enemyheroes[i]).order).addClass("enemy")
    }
    }
    else{
      console.log("already run")
    }
})
$(".enemy").on("click",function(){
  if (firstexecute1 == false){
    firstexecute1 = true
    var current = $(this).attr("hero")
    for (i in enemyheroes){
      if (attribute == (enemyheroes[i]).name){
      currentlyattacking = enemyheroes[i]
    console.log(currentlyattacking.order)
    }
  }
}
})
})
