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
var firstexecuteone = false
var currenttarget = ""

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



        }
      }

      }
      else {

      }
      console.log(currenttarget)
    })

})
// $('.current').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
//     $('#List.nav-link li.active').removeClass("active");
//     GetTarget(e);
//     $(this).addClass('active');
//     $(this).removeClass("not-active");
// });
})
