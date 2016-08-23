     var brolyHP=200;
     var brolyattack=15;

     var diabloHP=250;
     var diabloattack=10;

     var sephirothHP=190;
     var sephirothattack=20;

     var danteHP=225;
     var danteattack= 18;




$(document).ready(function(){



  var brolyImg= "assets/images/broly.jpg";
  var diabloImg="assets/images/diablo.jpg";
  var danteImg="assets/images/diablo.jpg";
  var sephirothImg="assets/images/sephiroth.png";
  var characterSelected=[];
  var opponentSelected=[];



  var charSelect=$('.characterSelect');
  var palyer=$('.player');
  var characters=$('.character');
  var opponent= $('.userOpponent');




    function character (name, image, hp, ap, cap) {
      this.name=name;
      this.image=image;
      this.hp=hp;  //healthpoints
      this.ap=ap;  //attackpoints
      this.cap=cap; //counterattackpoints
    }

      broly= new character("Broly", brolyImg, 200, 10, 10 );
      diablo=new character("Diablo", diabloImg, 250, 15, 5);
      dante=new character("Dante", danteImg, 225, 18, 3);
      sephiroth=new character("Sephiroth", sephirothImg, 300, 5, 2); 


      $('.brolyCharacter').data("character", broly)
      $('.brolyCharacter').find('hp').append($(".brolyCharacter").data("character").hp)
      $('.brolyCharacter').find('.name').append($(".brolyCharacter").data("character").name)

      $('.danteCharacter').data("character", dante)
      $('.danteCharacter').find('hp').append($(".danteCharacter").data("character").hp)
      $('.danteCharacter').find('.name').append($(".danteCharacter").data("character").name)

      $('.diabloCharacter').data("character", diablo)
      $('.diabloCharacter').find('hp').append($(".diabloCharacter").data("character").hp)
      $('.diabloCharacter').find('.name').append($(".diabloCharacter").data("character").name)

      $('.sephirothCharacter').data("character", sephiroth)
      $('.sephirothCharacter').find('hp').append($(".sephirothCharacter").data("character").hp)
      $('.sephirothCharacter').find('.name').append($(".sephirothCharacter").data("character").name)



      $('.brolyhealthpoints').text(brolyHP, brolyImg);
      $('.diablohealthpoints').text(diabloHP, diabloImg);
      $('.sephirothhealthpoints').text(sephirothHP, sephirothImg);
      $('.dantehealthpoints').text(danteHP, danteImg);



      //image click to start selection
      $('.characterSelectionContainer').on("click", '.character', function(){

        console.log("character clicked")

        if (characterSelected == false) { //if the player has not chosen a character yet
          characterSelected=true;


             $(this).data("status", 'player') //assign this dom element to status of player

             //assign other elements of the status of opponent if they arnt the players choice
              for (var i=0; i< $('.character').length; i++) {
                  if($('.character').data("status") !='palyer'){
                  $('.character').data("status", 'userOpponent')

                 }
             }

        $('userOpponent').append($('.character'))  //send all characters to opponent section

        $('.userCharacter').prepend(this);  // clear all characters from character select
        $(this).addClass("player");   //send the chosen character to the deck to fight
        $('.selectcharacter').empty(); // add player class to chosen character

        //if player has chosen a chracter but not a challenger
      }else if (opponentSelected== false && characterSelected == true && (this).data('status')!='player') {
        opponentSelected=true;


        $(this).addClass("picked-oponent") //add opponent class to chosen opponent
        $('.userOpponent').append(this);  //send oponent to fight
      } else if (characterSelected == true && $(this).data('status')!='player' == 'player' ) {
        console.log("display me player")
      }
 



        
      })
    })









      // $('.characterSelectionContainer')

             // CHARACTER SELECT //

          // if ($('.broly').on('click', function()  {

          //     $('.userCharacter').replaceWith("\<div class=\"col-lg-2\">\
          //         <img class=\"characterSelectpic broly\" src=\"assets/images/broly.jpg\">\
          //         \<h4 \>Health Points: \<span class=\"brolyhealthpoints\"></span\>\
          //    </div> ");
          //     // $('broly')

          //   }))

           // if ($('.dante').on('click', function(){


           //  $('.userCharacter').replaceWith("\ <div class=\"col-lg-2\">\
           //        <img class=\"characterSelectpic dante\" src=\"assets/images/dante.jpg\">\
           //        \<h4 \>Health Points: <span class=\"dantehealthpoints\"></span\>\
           //   </div> ");

           // }));

           //  if ($('.diablo').on('click', function(){


           //  $('.userCharacter').replaceWith("\ <div class=\"col-lg-2\">\
           //        <img class=\"characterSelectpic diablo\" src=\"assets/images/diablo.jpg\">\
           //        \<h4 \>Health Points: <span class=\"diablohealthpoints\"></span\>\
           //   </div> ");

           // }));


           // if ($('.sephiroth').on('click', function(){


           //  $('.userCharacter').replaceWith("\ <div class=\"col-lg-2\">\
           //        <img class=\"characterSelectpic dante\" src=\"assets/images/sephiroth.png\">\
           //        \<h4 \>Health Points: <span class=\"sephirothhealthpoints\"></span\>\
           //   </div> ");

           // }));

           //  if ($('.dante').on('click', function() {

           //    $('.userOpponent').replaceWith("\<div class=\"col-lg-2\">\
           //        <img class=\"characterSelectpic dante\" src=\"assets/images/dante.jpg\">\
           //        \<h4 \>Health Points: \<span class=\"dantehealthpoints\"></span\>\<div>");

           //    }));


           //   $('.attackButton').on('click', function(){
              // var brolyhp=200;
              // var dantehp=180;

              // brolyattack=brolyattack+10
              // brolyHP=brolyHP-danteattack;
              // danteHP=brolyHP-brolyattack;
              // document.getElementById("attackdisplay").innerHTML=(danteHP);
              // console.log(brolyHP, danteHP);
              // document.getElementById("displaybox").innerHTML=(brolyHP);
              // if (danteHP == 0) {
                // document.getElementById("displaybox").innerHTML=("You have defeated your foe")
              //   alert("You have defeated your foe!");
              // }
              // document.getElementById("displaybox").innerHTML=(brolyHP.length);

            // })

          // })





              // userAttack= userAttack + 10;
              // var userCharacterhp=userCharacterhealth;
              // var opponentAttack=opponentAttackpower;
              // var opponentcharacterhp=opponentcharacterhealth;

              // var userCharacterhp=userCharacterhealth- opponentAttack;
              // var opponentcharacterhp=opponentcharacterhp- userAttack;






          //   })
          // })








