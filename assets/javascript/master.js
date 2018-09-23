$(document).ready(function(){
var axe = {
  name:"Axe",
  hitpoints:520,
  attackpower:25,
  counter:25,
  order: ".one"
}
var razor = {
  name:"Razor",
  hitpoints:420,
  attackpower:30,
  counter:30,
  order:".two"
}
var wraithking = {
  name:"Wraith King",
  hitpoints:580,
  attackpower:25,
  counter:25,
  order:".three"
}
var invoker = {
  name:"Invoker",
  hitpoints:520,
  attackpower:25,
  counter:25,
  order:".four"
}

var heroes = [axe, razor, wraithking, invoker]
var userhero = ""
var enemyheroes = []

$(".clicker").on("click", function(){
  var attribute = $(this).attr("hero")
  for (i in heroes){
    if (attribute == (heroes[i]).name){
      userhero = (heroes[i]).name
    }
    else{
      enemyheroes.push(heroes[i])
    }
  }
  for (i in enemyheroes){
    $((enemyheroes[i]).order).prependTo(".available")
  }
})
})
