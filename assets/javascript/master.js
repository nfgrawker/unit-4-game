$(document).ready(function(){
var axe = {
  name:"Axe",
  hitpoints:580,
  attackpower:60,
  counter:35,
  order: ".one",
  image: "./assets/images/axebackground.jpg",
  deathsound : new Audio("./assets/sounds/axedeath.mp3"),
  picksound : new Audio("./assets/sounds/axepick.mp3")
}
var razor = {
  name:"Razor",
  hitpoints:410,
  attackpower:70,
  counter:99,
  order:".two",
  image: "./assets/images/razorbackground.jpg",
  deathsound : new Audio("./assets/sounds/razordeath.mp3"),
  picksound : new Audio("./assets/sounds/razorpick.mp3")
}
var wraithking = {
  name:"Wraith King",
  hitpoints:580,
  attackpower:55,
  counter:35,
  order:".three",
  image: "./assets/images/wraithkingbackground.jpg",
  deathsound : new Audio("./assets/sounds/wraithkingdeath.mp3"),
  picksound : new Audio("./assets/sounds/wraithkingpick.mp3")
}
var invoker = {
  name:"Invoker",
  hitpoints:520,
  attackpower:70,
  counter:80,
  order:".four",
  image: "./assets/images/invokerbackground.jpg",
  deathsound : new Audio("./assets/sounds/invokerdeath.mp3"),
  picksound : new Audio("./assets/sounds/invokerpick.mp3")
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
var attack = true
var attackroundincrease = 0

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
        userhero.picksound.play()
        myhp = userhero.hitpoints
        myattack = userhero.attackpower
        $("body").css("background-image", "url("+userhero.image+")");
        $("h2.mychar").text("Your Hero!")
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
          currenttarget.picksound.play()
          $(".textcard").empty()
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
    if (attack == true && currenttarget != ""){
    myhp -= currentenemyattack
    $(".textcard").prepend("<p>You have been attacked for "+currentenemyattack+"!</p>")
    currentenemyhp -= myattack
    $(".textcard").prepend("<p>You have attacked "+currenttarget.name+" for "+myattack+"!</p>")
    attackroundincrease = (Math.round(Math.random()*60))
    $(".textcard").prepend("<p>Your attack increases by "+attackroundincrease+"!</p>")
    myattack += attackroundincrease
    $("p.myhero").text(myhp)
    $("p.currentenemy").text(currentenemyhp)
    console.log(currentenemyhp)
    if (currentenemyhp <= 0 && currenttarget != ""){
      firstexecuteone = false
      $("div"+currenttarget.order).remove()
      currentenemyattack = 0
      defeatedenemies.push(currenttarget)
      currenttarget.deathsound.play()
      $(".textcard").prepend("<p class = 'flash'><strong>You have defeated "+currenttarget.name+"!</strong></p>")
      currenttarget = ""
    }
    if (myhp <= 0){
      var loser = $("<div>")
      loser.text("You have lost!")
      loser.addClass("loser")
      $("body").prepend(loser)
      attack = false
      console.log("loser")
      $(".textcard").prepend("<p>You have been defeated!</p>")
    }
    if (defeatedenemies.length == enemyheroes.length && myhp > 0) {
      var winner = $("<div>")
      winner.text("You have won!")
      winner.addClass("winner")
      $("body").prepend(winner)
    }
    else{
      return 0
    }
  }
  else {
    return 0
  }
  })
})
