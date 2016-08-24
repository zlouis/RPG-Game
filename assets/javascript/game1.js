
var brolyHP = 200;
var brolyattack = 15;
var diabloHP = 250;
var diabloattack = 10;
var sephirothHP = 190;
var sephirothattack = 20;
var danteHP = 225;
var danteattack = 18;
        var brolyImg = "assets/images/broly.gif";
        var diabloImg = "assets/images/diablo.gif";
        var danteImg = "assets/images/dante.gif";
        var sephirothImg = "assets/images/sephiroth.gif";
        var characterSelected=[];
        var opponentSelected=[];
        var charSelect = $('.characterSelect');
        var player = $('.player');
        var characters = $('.character');
        var opponent = $('.userOpponent');



$(document).ready(function() {



        var brolyImg = "assets/images/broly.gif";
        var diabloImg = "assets/images/diablo.gif";
        var danteImg = "assets/images/diablo.gif";
        var sephirothImg = "assets/images/sephiroth.gif";
        var characterSelected=[];
        var opponentSelected = [];
        var turn = 1;



        var currentOpponent= $('opponentSelection')
        var charSelect = $('.characterSelect');
        var palyer = $('.player');
        var characters = $('.character');
        var opponent = $('.userOpponent');

        function character(name, image, hp, ap, cap) {
            this.name = name;
            this.image = image;
            this.hp = hp; 
            this.ap = ap; 
            this.cap = cap; 
        }


        broly = new character("Broly", brolyImg, 200, 10, 10);
        diablo = new character("Diablo", diabloImg, 250, 15, 5);
        dante = new character("Dante", danteImg, 225, 18, 3);
        sephiroth = new character("Sephiroth", sephirothImg, 300, 5, 2);


        $('.brolyCharacter').data("character", broly)
        $('.brolyCharacter').find('.hp').append($(".brolyCharacter").data( "character").hp)
        $('.brolyCharacter').find('.name').append($(".brolyCharacter").data( "character").name)


        $('.danteCharacter').data("character", dante)
        $('.danteCharacter').find('.hp').append($(".danteCharacter").data(  "character").hp)
        $('.danteCharacter').find('.name').append($(".danteCharacter").data( "character").name)


        $('.diabloCharacter').data("character", diablo)
        $('.diabloCharacter').find('.hp').append($(".diabloCharacter").data("character").hp)
        $('.diabloCharacter').find('.name').append($(".diabloCharacter").data("character").name)


        $('.sephirothCharacter').data("character", sephiroth)
        $('.sephirothCharacter').find('.hp').append($(".sephirothCharacter").data("character").hp)
        $('.sephirothCharacter').find('.name').append($(".sephirothCharacter").data("character").name)


        // $('.brolyhealthpoints').text(brolyHP, brolyImg);
        // $('.diablohealthpoints').text(diabloHP, diabloImg);
        // $('.sephirothhealthpoints').text(sephirothHP, sephirothImg);
        // $('.dantehealthpoints').text(danteHP, danteImg);


        //image click to start selection
        $('.characterSelectionContainer div').on("click", '.character', function() {

                console.log("character ok")

                if (characterSelected == false) { //if the player has not chosen a character 
                    characterSelected = true;


                    $(this).data("status", 'player') //assign  status of player
                        //assign status of opponent if not players choice
                    for (var i = 0; i < $('.character').length; i++) {
                        if ($('.character').data("status") != 'player') {
                            $('.character').data("status", 'opponentSelection')
                        }
                    }
                    $('.opponentSelection').append($('.character')) //send all characters to opponent section
                    $('.userCharacter').prepend(this); // clear all characters from character select
                    $(this).addClass("player"); //send the chosen character to the deck to fight
                    $('.selectcharacter').empty();   // add player class to chosen character 
                    console.log("here2")
                


                                    //if player has chosen a chracter but not a challenger
                } else if (opponentSelected == true && characterSelected == true && $(this).data("status") != 'player') 
                { opponentSelected = true;
                    console.log("display me player2")


                    $(this).addClass("picked-opponent") //add opponent class to chosen opponent
                    $('.userOpponent').append(this); //send oponent to fight
                } else if (characterSelected == true && $(this).data( 'status') != 'player' == 'player') {
                    console.log("display me playe3r")
                }



     $('.attackButton').on('click', function(){
      


    var playerAttack=$('.player').data('character').ap* turn;
    console.log($('.player').data('character').ap)
    var opponentAttack = $('.picked-opponent').data('character').cap;

    $('.picked-opponent').data('character').hp -=playerAttack;
    console.log("Opponent hp: " + $('.picked-opponent').data('character').hp);

    $('.player').data('character').hp -= opponentAttack;
    console.log("player hp: " + $('.player').data('character').hp);
   
    })

                    


        
                opponentSelectionPick();
    

            })

    })

function opponentSelectionPick () {
    $(document).on('click', '.opponentSelection', function () {

        
     if (characterSelected==true && opponentSeleced==false)
        ($('.broly').on('click', function()  {
        $(this).data("status", 'picked-opponent');
        $(this).addClass('.fighterpicked');
        $(this).data('character')
        $('.userOpponent').append(this);
        $('.userCharacter').replaceWith("\<div class=\"col-lg-2\">\
            <img class=\"characterSelectpic broly\" src=\"assets/images/broly.gif\">\
            \<h4 \>Health Points: \<span class=\"brolyhealthpoints\"></span\>\ </div> ");

      }));
    if ($('.dante').on('click', function(){
        $(this).data("status", 'picked-opponent', 'character');
        $(this).addClass('.fighterpicked');
        $(this).data('character')
        $('.userOpponent').append(this);
        $('.userOpponent').replaceWith("\<div class=\"col-lg-2\">\
        <img class=\"characterSelectpic dante\" src=\"assets/images/dante.gif\">\
       \<h4 \>Health Points: \<span class=\"dantehealthpoints\"></span\>\<div>");
    }));
     if ($('.diablo').on('click', function(){
        $(this).data("status", 'picked-opponent');
        $(this).addClass('.fighterpicked');
        $(this).data('character')
        $('.userOpponent').append(this);
        $('.userOpponent').replaceWith("\ <div class=\"col-lg-2\">\
           <img class=\"characterSelectpic diablo\" src=\"assets/images/diablo.gif\">\
           \<h4 \>Health Points: <span class=\"diablohealthpoints\"></span\>\</div> ");
    }));
    if ($('.sephiroth').on('click', function(){
        $(this).data("status", 'picked-opponent');
        $(this).addClass('.fighterpicked');
        $('.userOpponent').append(this);
        $(this).data('character')
        $('.userOpponent').replaceWith("\ <div class=\"col-lg-2\">\
           <img class=\"characterSelectpic dante\" src=\"assets/images/sephiroth.gif\">\
           \<h4 \>Health Points: <span class=\"sephirothhealthpoints\"></span\>\</div> ");
    }));

    })
}



    // var buttonCharSelect = function(char) {
    //     characterSelected=true;
    //     character.data("status", 'player')


    //         for (var i = 0; i < $('.character').length; i++){
    //         if ($('.character').data("status") != 'player'){
    //             $('.character').data("status", 'challenger')
    //         }
    //     }

    //     $('.opponentSelection').append($('.character'))

    // }


    // $('.danteCharacter').on("click", function() {
    //     buttonCharSelect()
    // })





    // THIS IS TESTING SECTION////////////////////////////////////////////
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