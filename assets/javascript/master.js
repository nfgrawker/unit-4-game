$(document).ready(function(){
var axe = {
  name:"Axe",
  hitpoints:520,
  attackpower:25,
  counter:45,
  order: ".one",
  image: "./assets/images/axebackground.jpg"
}
var razor = {
  name:"Razor",
  hitpoints:420,
  attackpower:30,
  counter:60,
  order:".two",
  image: "./assets/images/razorbackground.jpg"
}
var wraithking = {
  name:"Wraith King",
  hitpoints:580,
  attackpower:25,
  counter:73,
  order:".three",
  image: "./assets/images/wraithkingbackground.jpg"
}
var invoker = {
  name:"Invoker",
  hitpoints:520,
  attackpower:25,
  counter:59,
  order:".four",
  image: "./assets/images/invokerbackground.jpg"
}

var heroes = [axe, razor, wraithking, invoker]
var userhero = ""
var enemyheroes = []
var defeatedenemies = []
var firstexecute = false
var firstexecuteone = false
var currenttarget = ""
var myhp = 0
var currentenemyhp = 0
var myattack = 0
var currentenemyattack = 0

for (i in heroes){
  $("p"+heroes[i].order).text(heroes[i].hitpoints)
}

$(".clicker").on("click", function(){
  if (firstexecute == false){
    firstexecute = true
    var attribute = $(this).attr("hero")
    for (i in heroes){
      if (attribute == (heroes[i]).name){
        userhero = heroes[i]
        myhp = userhero.hitpoints
        myattack = userhero.attackpower
        $("body").css("background-image", "url("+userhero.image+")");
      }
      else{
        enemyheroes.push(heroes[i])
      }
    }
    $("p"+userhero.order).addClass("myhero")
    for (i in enemyheroes){
      $("div"+(enemyheroes[i]).order).prependTo(".available")
      $("div"+(enemyheroes[i]).order).addClass("enemy")
    }
    }
    else{
      console.log("already run")
    }
    $(".enemy").on("click",function(){
      console.log(firstexecuteone)
      if (firstexecuteone == false){
        firstexecuteone = true
        var current = $(this).attr("hero")
        for (i in enemyheroes){
          if (current == (enemyheroes[i]).name){
          currenttarget = enemyheroes[i]
          $("div"+(enemyheroes[i]).order).prependTo(".current")
          $("div"+(enemyheroes[i]).order).addClass("currentenemy")
          $("p"+(enemyheroes[i]).order).addClass("currentenemy")
        }
      }
      }
      else {
      }
      currentenemyhp = currenttarget.hitpoints
      currentenemyattack = currenttarget.counter
    })

  })
  $(".attackbutton").on("click",function(){
    myhp -= currentenemyattack
    currentenemyhp -= myattack
    myattack += 30
    $("p.myhero").text(myhp)
    $("p.currentenemy").text(currentenemyhp)
    console.log(currentenemyhp)
    if (currentenemyhp <= 0){
      firstexecuteone = false
      $("div"+currenttarget.order).remove()
      currentenemyattack = 0
      defeatedenemies.push(currenttarget)
    }
    if (myhp <= 0){

    }

  })
})
