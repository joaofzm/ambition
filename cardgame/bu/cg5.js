//#region genneral variables, hp and mana bars, damage and mana functions
let muted = 0;

let cpuRoundDone = 0;
let cpuCardsAttacking;

let currentRound = 0;
let lastHandSlotClicked;
let lastFieldSlotClicked;
let attackTarget;
let cpuTarget = 6;

let playerDisabled = 1;

let playerMonster1AlreadyAttacked = 0;
let playerMonster2AlreadyAttacked = 0;
let playerMonster3AlreadyAttacked = 0;
let playerMonster4AlreadyAttacked = 0;
let playerMonster5AlreadyAttacked = 0;

let stringCardId;
let getBgImage; 
let stringCardId2;
let getBgImage2; 

let playerHand = [];
let alreadyDraw = [];
let alreadyDrawOpponent = 0;

let cardInHandRightNow = [];
let cardOnFieldRightNow1;
let cardOnFieldRightNow2;
let cardOnFieldRightNow3;
let cardOnFieldRightNow4;
let cardOnFieldRightNow5;

let playerCardSlot1Occupied = 0;
let playerCardSlot2Occupied = 0;
let playerCardSlot3Occupied = 0;
let playerCardSlot4Occupied = 0;
let playerCardSlot5Occupied = 0;
let opponentCardSlot1Occupied = 0;
let opponentCardSlot2Occupied = 0;
let opponentCardSlot3Occupied = 0;
let opponentCardSlot4Occupied = 0;
let opponentCardSlot5Occupied = 0;

let enoughMana = 1;
let nameOfLastClickedCard;
let currentCpuRound = 1;
let cpuWonCoinToss = 0;
let started = 0;

let nextSummonAttack = 0;
let nextSummonDefense = 0;
let currentPlayerMonsterSlot1Attack = 0;
let currentPlayerMonsterSlot2Attack = 0;
let currentPlayerMonsterSlot3Attack = 0;
let currentPlayerMonsterSlot4Attack = 0;
let currentPlayerMonsterSlot5Attack = 0;
let currentOpponentMonsterSlot1Attack = 0;
let currentOpponentMonsterSlot2Attack = 0;
let currentOpponentMonsterSlot3Attack = 0;
let currentOpponentMonsterSlot4Attack = 0;
let currentOpponentMonsterSlot5Attack = 0;
let currentPlayerMonsterSlot1Defense = 0;
let currentPlayerMonsterSlot2Defense = 0;
let currentPlayerMonsterSlot3Defense = 0;
let currentPlayerMonsterSlot4Defense = 0;
let currentPlayerMonsterSlot5Defense = 0;
let currentOpponentMonsterSlot1Defense = 0;
let currentOpponentMonsterSlot2Defense = 0;
let currentOpponentMonsterSlot3Defense = 0;
let currentOpponentMonsterSlot4Defense = 0;
let currentOpponentMonsterSlot5Defense = 0;

document.getElementById("passRoundButton").innerHTML = "Pass round";
document.getElementById("attackButton").innerHTML = "Attack";

let hpPlayer = 100;
let manaPlayer = 1;

let hpOpponent = 100;
let manaOpponent = 1;

let cardsRemainingPlayer = 20;
let cardsRemainingOpponent = 20;
//#endregion

//#region damage anda mana
function damagePlayer(damage){
    hpPlayer -= damage;
    document.getElementById("hpPlayer").innerHTML=+ hpPlayer;
};

function damageOpponent(damage){
    hpOpponent -= damage;
    document.getElementById("hpOpponent").innerHTML=hpOpponent;
};

function useManaPlayer(mana){
    manaPlayer -= mana;
    document.getElementById("manaPlayer").innerHTML=+ manaPlayer;
};

function useManaOpponent(mana){
    manaOpponent -= mana;
    document.getElementById("manaOpponent").innerHTML=+ manaOpponent;
};
//#endregion

//#region magnifying glasses for hand
 document.getElementById("playerHand1").addEventListener("click", function() {
    if(cardInHandRightNow[0]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand1).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand2").addEventListener("click", function() {
    if(cardInHandRightNow[1]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand2).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand3").addEventListener("click", function() {
    if(cardInHandRightNow[2]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand3).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand4").addEventListener("click", function() {
    if(cardInHandRightNow[3]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand4).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand5").addEventListener("click", function() {
    if(cardInHandRightNow[4]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand5).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand6").addEventListener("click", function() {
    if(cardInHandRightNow[5]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand6).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand7").addEventListener("click", function() {
    if(cardInHandRightNow[6]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand7).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand8").addEventListener("click", function() {
    if(cardInHandRightNow[7]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand8).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand9").addEventListener("click", function() {
    if(cardInHandRightNow[8]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand9).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand10").addEventListener("click", function() {
    if(cardInHandRightNow[9]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand10).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

  document.getElementById("playerHand11").addEventListener("click", function() {
    if(cardInHandRightNow[10]==undefined){
        return}
    const getBgImage = window.getComputedStyle(playerHand11).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });


//#endregion

//#region magnifying glasses for field
//player
document.getElementById("playerMonsterSlot1").addEventListener("click", function() {
    if(playerCardSlot1Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(playerMonsterSlot1).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

document.getElementById("playerMonsterSlot2").addEventListener("click", function() {
    if(playerCardSlot2Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(playerMonsterSlot2).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

document.getElementById("playerMonsterSlot3").addEventListener("click", function() {
    if(playerCardSlot3Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(playerMonsterSlot3).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });
  
document.getElementById("playerMonsterSlot4").addEventListener("click", function() {
    if(playerCardSlot4Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(playerMonsterSlot4).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

document.getElementById("playerMonsterSlot5").addEventListener("click", function() {
    if(playerCardSlot5Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(playerMonsterSlot5).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });
  
  //opponent
  document.getElementById("opponentMonsterSlot1").addEventListener("click", function() {
    if(opponentCardSlot1Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(opponentMonsterSlot1).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

document.getElementById("opponentMonsterSlot2").addEventListener("click", function() {
    if(opponentCardSlot2Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(opponentMonsterSlot2).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

document.getElementById("opponentMonsterSlot3").addEventListener("click", function() {
    if(opponentCardSlot3Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(opponentMonsterSlot3).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });
  
document.getElementById("opponentMonsterSlot4").addEventListener("click", function() {
    if(opponentCardSlot4Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(opponentMonsterSlot4).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  });

document.getElementById("opponentMonsterSlot5").addEventListener("click", function() {
    if(opponentCardSlot5Occupied==0){
        return}
    const getBgImage = window.getComputedStyle(opponentMonsterSlot5).getPropertyValue("background-image");
    document.getElementById("screen").style.backgroundImage = getBgImage;
  }); 

 


//#endregion

//#region name of clicked card field
function resetBordersField(){
  document.getElementById("playerMonsterSlot1").style.border = "1px solid rgb(255, 255, 255)";
  document.getElementById("playerMonsterSlot2").style.border = "1px solid rgb(255, 255, 255)";
  document.getElementById("playerMonsterSlot3").style.border = "1px solid rgb(255, 255, 255)";
  document.getElementById("playerMonsterSlot4").style.border = "1px solid rgb(255, 255, 255)";
  document.getElementById("playerMonsterSlot5").style.border = "1px solid rgb(255, 255, 255";
}

document.getElementById("playerMonsterSlot1").addEventListener("click", function() {
    if(playerCardSlot1Occupied==0){
        return}
  resetBordersField();
  document.getElementById("clickedCardField").innerHTML = cardOnFieldRightNow1;
  document.getElementById("clickedCard").innerHTML = "";
  document.getElementById("playerMonsterSlot1").style.border = "4px solid rgb(255, 0, 0)";
  lastFieldSlotClicked = 1;
  });

document.getElementById("playerMonsterSlot2").addEventListener("click", function() {
    if(playerCardSlot2Occupied==0){
        return}
  resetBordersField();
  document.getElementById("clickedCardField").innerHTML = cardOnFieldRightNow2;
  document.getElementById("clickedCard").innerHTML = "";
  document.getElementById("playerMonsterSlot2").style.border = "4px solid rgb(255, 0, 0)";
  lastFieldSlotClicked = 2;
  });

document.getElementById("playerMonsterSlot3").addEventListener("click", function() {
    if(playerCardSlot3Occupied==0){
        return}
        resetBordersField();
  document.getElementById("clickedCardField").innerHTML = cardOnFieldRightNow3;
  document.getElementById("clickedCard").innerHTML = "";
  document.getElementById("playerMonsterSlot3").style.border = "4px solid rgb(255, 0, 0)";
  lastFieldSlotClicked = 3;
  });

document.getElementById("playerMonsterSlot4").addEventListener("click", function() {
    if(playerCardSlot4Occupied==0){
        return}
  resetBordersField();
  document.getElementById("clickedCardField").innerHTML = cardOnFieldRightNow4;
  document.getElementById("clickedCard").innerHTML = "";
  document.getElementById("playerMonsterSlot4").style.border = "4px solid rgb(255, 0, 0)";
  lastFieldSlotClicked = 4;
  });

document.getElementById("playerMonsterSlot5").addEventListener("click", function() {
    if(playerCardSlot5Occupied==0){
        return}
  resetBordersField();
  document.getElementById("clickedCardField").innerHTML = cardOnFieldRightNow5;
  document.getElementById("clickedCard").innerHTML = "";
  document.getElementById("playerMonsterSlot5").style.border = "4px solid rgb(255, 0, 0)";
  lastFieldSlotClicked = 5;
  });
//#endregion

//#region name of clicked card hand
  document.getElementById("playerHand1").addEventListener("click", function() {
    if(cardInHandRightNow[0]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[0];
  nameOfLastClickedCard = cardInHandRightNow[0];
  lastHandSlotClicked = 1;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand2").addEventListener("click", function() {
    if(cardInHandRightNow[1]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[1];
  nameOfLastClickedCard = cardInHandRightNow[1];
  lastHandSlotClicked = 2;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand3").addEventListener("click", function() {
    if(cardInHandRightNow[2]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[2];
  nameOfLastClickedCard = cardInHandRightNow[2];
  lastHandSlotClicked = 3;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand4").addEventListener("click", function() {
    if(cardInHandRightNow[3]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[3];
  nameOfLastClickedCard = cardInHandRightNow[3];
  lastHandSlotClicked = 4;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand5").addEventListener("click", function() {
    if(cardInHandRightNow[4]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[4];
  nameOfLastClickedCard = cardInHandRightNow[4];
  lastHandSlotClicked = 5;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand6").addEventListener("click", function() {
    if(cardInHandRightNow[5]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[5];
  nameOfLastClickedCard = cardInHandRightNow[5];
  lastHandSlotClicked = 6;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand7").addEventListener("click", function() {
    if(cardInHandRightNow[6]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[6];
  nameOfLastClickedCard = cardInHandRightNow[6];
  lastHandSlotClicked = 7;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand8").addEventListener("click", function() {
    if(cardInHandRightNow[7]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[7];
  nameOfLastClickedCard = cardInHandRightNow[7];
  lastHandSlotClicked = 8;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand9").addEventListener("click", function() {
    if(cardInHandRightNow[8]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[8];
  nameOfLastClickedCard = cardInHandRightNow[8];
  lastHandSlotClicked = 9;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand10").addEventListener("click", function() {
    if(cardInHandRightNow[9]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[9];
  nameOfLastClickedCard = cardInHandRightNow[9];
  lastHandSlotClicked = 10;
  document.getElementById("clickedCardField").innerHTML = "";
  });

  document.getElementById("playerHand11").addEventListener("click", function() {
    if(cardInHandRightNow[10]==undefined){
        return}
  document.getElementById("clickedCard").innerHTML = cardInHandRightNow[10];
  nameOfLastClickedCard = cardInHandRightNow[10];
  lastHandSlotClicked = 11;
  document.getElementById("clickedCardField").innerHTML = "";
  });
//#endregion

//#region playcard

function checkWhatcardToCheck(){
    if (nameOfLastClickedCard=="3 Meter Titan") {
      check3Meter();

    }else if (nameOfLastClickedCard=="8 Meter Titan") {
      check8Meter();

    }else if (nameOfLastClickedCard=="8 Meter Titan") {
      check8Meter();

    }else if (nameOfLastClickedCard=="15 Meter Titan") {
      check15Meter();

    }else if (nameOfLastClickedCard=="Female Titan") {
      checkFemale();

    }else if (nameOfLastClickedCard=="Attack Titan") {
      checkAttack();

    }else if (nameOfLastClickedCard=="Armored Titan") {
      checkArmored();

    }else if (nameOfLastClickedCard=="Colossal Titan") {
      checkColossal();

    }else if (nameOfLastClickedCard=="Beast Titan") {
      checkBeast();

    }else if (nameOfLastClickedCard=="Cristalyze") {
      checkCristalyze();

    }else if (nameOfLastClickedCard=="Serum") {
      checkSerum();
    }
}

function playCardPart1(){
  playerHand.splice(lastHandSlotClicked-1, 1);
  cardInHandRightNow.splice(lastHandSlotClicked-1, 1);
  lastHandSlotClicked=0;
  document.getElementById("clickedCard").innerHTML = "";
  refreshHand();
}

function playCard(){
if (playerDisabled==0){

  checkWhatcardToCheck();
  if (enoughMana==0){
    alert("Not Enough Mana!")
    return;
  } 

  if(nameOfLastClickedCard=="Cristalyze"){
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerSpellSlot").style.backgroundImage = getBgImage;
    setTimeout(()=>document.getElementById("playerSpellSlot").style.backgroundImage = "", 3000);
      if (playerCardSlot1Occupied==1){
        currentPlayerMonsterSlot1Attack += 5;
        currentPlayerMonsterSlot1Defense += 5;
        document.getElementById("playerMonster1Attack").innerHTML = currentPlayerMonsterSlot1Attack;
        document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
      }
      if (playerCardSlot2Occupied==1){
        currentPlayerMonsterSlot2Attack += 5;
        currentPlayerMonsterSlot2Defense += 5;
        document.getElementById("playerMonster2Attack").innerHTML = currentPlayerMonsterSlot2Attack;
        document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
      }
      if (playerCardSlot3Occupied==1){
        currentPlayerMonsterSlot3Attack += 5;
        currentPlayerMonsterSlot3Defense += 5;
        document.getElementById("playerMonster3Attack").innerHTML = currentPlayerMonsterSlot3Attack;
        document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
      }
      if (playerCardSlot4Occupied==1){
        currentPlayerMonsterSlot4Attack += 5;
        currentPlayerMonsterSlot4Defense += 5;
        document.getElementById("playerMonster4Attack").innerHTML = currentPlayerMonsterSlot4Attack;
        document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
      }
      if (playerCardSlot5Occupied==1){
        currentPlayerMonsterSlot5Attack += 5;
        currentPlayerMonsterSlot5Defense += 5;
        document.getElementById("playerMonster5Attack").innerHTML = currentPlayerMonsterSlot5Attack;
        document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
      }
    playCardPart1();
    nameOfLastClickedCard=undefined;
  
  }else if (nameOfLastClickedCard=="Serum") {
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerSpellSlot").style.backgroundImage = getBgImage;
    setTimeout(()=>document.getElementById("playerSpellSlot").style.backgroundImage = "", 3000);
      if (opponentCardSlot1Occupied==1){
        currentOpponentMonsterSlot1Attack -= 5;
        currentOpponentMonsterSlot1Defense -= 5;
          if(currentOpponentMonsterSlot1Defense<=0){
            document.getElementById("opponentMonsterSlot1").style.backgroundImage = "";
            document.getElementById("opponentMonster1Attack").innerHTML = "";
            document.getElementById("opponentMonster1Defense").innerHTML = "";
            opponentCardSlot1Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster1Attack").innerHTML = currentOpponentMonsterSlot1Defense;
            document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense;
          }
      }
      if (opponentCardSlot2Occupied==1){
        currentOpponentMonsterSlot2Attack -= 5;
        currentOpponentMonsterSlot2Defense -= 5;
            if(currentOpponentMonsterSlot2Defense<=0){
              document.getElementById("opponentMonsterSlot2").style.backgroundImage = "";
              document.getElementById("opponentMonster2Attack").innerHTML = "";
              document.getElementById("opponentMonster2Defense").innerHTML = "";
              opponentCardSlot2Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster2Attack").innerHTML = currentOpponentMonsterSlot2Defense;
              document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense;
            }
      }
      if (opponentCardSlot3Occupied==1){
        currentOpponentMonsterSlot3Attack -= 5;
        currentOpponentMonsterSlot3Defense -= 5;
            if(currentOpponentMonsterSlot3Defense<=0){
              document.getElementById("opponentMonsterSlot3").style.backgroundImage = "";
              document.getElementById("opponentMonster3Attack").innerHTML = "";
              document.getElementById("opponentMonster3Defense").innerHTML = "";
              opponentCardSlot3Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster3Attack").innerHTML = currentOpponentMonsterSlot3Defense;
              document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense;
            }
      }
      if (opponentCardSlot4Occupied==1){
        currentOpponentMonsterSlot4Attack -= 5;
        currentOpponentMonsterSlot4Defense -= 5;
            if(currentOpponentMonsterSlot4Defense<=0){
              document.getElementById("opponentMonsterSlot4").style.backgroundImage = "";
              document.getElementById("opponentMonster4Attack").innerHTML = "";
              document.getElementById("opponentMonster4Defense").innerHTML = "";
              opponentCardSlot4Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster4Attack").innerHTML = currentOpponentMonsterSlot4Defense;
              document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense;
            }
      }
      if (opponentCardSlot5Occupied==1){
        currentOpponentMonsterSlot5Attack -= 5;
        currentOpponentMonsterSlot5Defense -= 5;
            if(currentOpponentMonsterSlot5Defense<=0){
              document.getElementById("opponentMonsterSlot5").style.backgroundImage = "";
              document.getElementById("opponentMonster5Attack").innerHTML = "";
              document.getElementById("opponentMonster5Defense").innerHTML = "";
              opponentCardSlot5Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster5Attack").innerHTML = currentOpponentMonsterSlot5Defense;
              document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense;
            }
      }
     
    playCardPart1();
    nameOfLastClickedCard=undefined;
  
  }else if (playerCardSlot1Occupied==0) {
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerMonsterSlot1").style.backgroundImage = getBgImage;
    playerCardSlot1Occupied=1;
    cardOnFieldRightNow1= nameOfLastClickedCard;
    currentPlayerMonsterSlot1Attack = nextSummonAttack;
    currentPlayerMonsterSlot1Defense = nextSummonDefense;
    document.getElementById("playerMonster1Attack").innerHTML = currentPlayerMonsterSlot1Attack;
    document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
    playCardPart1();
    nameOfLastClickedCard=undefined;

  }else if (playerCardSlot2Occupied==0) {
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerMonsterSlot2").style.backgroundImage = getBgImage;
    playerCardSlot2Occupied=1;
    cardOnFieldRightNow2= nameOfLastClickedCard;
    currentPlayerMonsterSlot2Attack = nextSummonAttack;
    currentPlayerMonsterSlot2Defense = nextSummonDefense;
    document.getElementById("playerMonster2Attack").innerHTML = currentPlayerMonsterSlot2Attack;
    document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
    playCardPart1();
    nameOfLastClickedCard=undefined;

  }else if (playerCardSlot3Occupied==0) {
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerMonsterSlot3").style.backgroundImage = getBgImage;
    playerCardSlot3Occupied=1;
    cardOnFieldRightNow3= nameOfLastClickedCard;
    currentPlayerMonsterSlot3Attack = nextSummonAttack;
    currentPlayerMonsterSlot3Defense = nextSummonDefense;
    document.getElementById("playerMonster3Attack").innerHTML = currentPlayerMonsterSlot3Attack;
    document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
    playCardPart1();
    nameOfLastClickedCard=undefined;

  }else if (playerCardSlot4Occupied==0) {
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerMonsterSlot4").style.backgroundImage = getBgImage;
    playerCardSlot4Occupied=1;
    cardOnFieldRightNow4= nameOfLastClickedCard;
    currentPlayerMonsterSlot4Attack = nextSummonAttack;
    currentPlayerMonsterSlot4Defense = nextSummonDefense;
    document.getElementById("playerMonster4Attack").innerHTML = currentPlayerMonsterSlot4Attack;
    document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
    playCardPart1();
    nameOfLastClickedCard=undefined;

  }else if (playerCardSlot5Occupied==0) {
    const getBgImage = window.getComputedStyle(eval("playerHand"+lastHandSlotClicked)).getPropertyValue("background-image");
    document.getElementById("playerMonsterSlot5").style.backgroundImage = getBgImage;
    playerCardSlot5Occupied=1;
    cardOnFieldRightNow5= nameOfLastClickedCard;
    currentPlayerMonsterSlot5Attack = nextSummonAttack;
    currentPlayerMonsterSlot5Defense = nextSummonDefense;
    document.getElementById("playerMonster5Attack").innerHTML = currentPlayerMonsterSlot5Attack;
    document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
    playCardPart1();
    nameOfLastClickedCard=undefined;

  }else if (playerCardSlot1Occupied==1 && playerCardSlot2Occupied==1 && playerCardSlot3Occupied==1 && playerCardSlot4Occupied==1 && playerCardSlot5Occupied==1){
    alert("You can only control 5 monsters!!");
  }
}
} 
//#endregion

//#region each card check
function check3Meter(){
  if (manaPlayer<1){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 1
  nextSummonAttack = 2;
  nextSummonDefense = 1;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function check8Meter(){
  if (manaPlayer<2){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 2
  nextSummonAttack = 4;
  nextSummonDefense = 3;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function check15Meter(){
  if (manaPlayer<4){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 4
  nextSummonAttack = 8;
  nextSummonDefense = 6;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkFemale(){
  if (manaPlayer<5){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 5
  nextSummonAttack = 15;
  nextSummonDefense = 15;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkAttack(){
  if (manaPlayer<6){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 6
  nextSummonAttack = 20;
  nextSummonDefense = 20;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkArmored(){
  if (manaPlayer<6){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 6
  nextSummonAttack = 15;
  nextSummonDefense = 30;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkColossal(){
  if (manaPlayer<8){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 8
  nextSummonAttack = 25;
  nextSummonDefense = 25;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkBeast(){
  if (manaPlayer<6){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 6
  nextSummonAttack = 20;
  nextSummonDefense = 20;}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkCristalyze(){
  if (manaPlayer<3){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 3}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}

function checkSerum(){
  if (manaPlayer<4){
  enoughMana=0; 
  }else{
  enoughMana=1;
  manaPlayer -= 4}
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
}
//#endregion

//#region coinToss functions
function coinTossA(){
  document.getElementById("coin").style.opacity = "1";
  setTimeout(()=>document.getElementById("coin").style.transition = "all 5s ease", 2000);
  setTimeout(()=>document.getElementById("coin").style.transform = "rotateX(3600deg)", 2000);
  setTimeout(()=>document.getElementById("coin").style.opacity = "0", 8000);

  setTimeout(()=>document.getElementById("youGoFirst").style.opacity = 1, 5000);
  setTimeout(()=>document.getElementById("youGoFirst").style.opacity = 0, 8000);
}

function coinTossB(){
  document.getElementById("coin").style.opacity = "1";
  setTimeout(()=>document.getElementById("coin").style.transition = "all 5s ease", 2000);
  setTimeout(()=>document.getElementById("coin").style.transform = "rotateX(3600deg)", 2000);
  setTimeout(()=>document.getElementById("coin").style.opacity = "0", 8000);

  const coinAUrl = window.getComputedStyle(front).getPropertyValue("background-image");
  const coinBUrl = window.getComputedStyle(back).getPropertyValue("background-image");
  setTimeout(()=>document.getElementById("front").style.backgroundImage = coinBUrl, 3000);
  setTimeout(()=>document.getElementById("back").style.backgroundImage = coinAUrl, 3000);

  
  setTimeout(()=>document.getElementById("youGoSecond").style.opacity = 1, 5000);
  setTimeout(()=>document.getElementById("youGoSecond").style.opacity = 0, 8000);
 }

//#endregion

//#region card objects
function Card(name, attack, defense, manaCost, art){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.manaCost = manaCost;
    this.art = art;
}

let card0 = new Card("sleeve", 0, 0, 0, "file:///C:/Users/joao/Desktop/cg/art/final/sleeve.png")

let card1 = new Card("3 Meter Titan", 2, 1, 1, "file:///C:/Users/joao/Desktop/cg/art/final/3%20meter%201.jpg");
let card2 = new Card("3 Meter Titan", 2, 1, 1, "file:///C:/Users/joao/Desktop/cg/art/final/3%20meter%202.jpg");
let card3 = new Card("3 Meter Titan", 2, 1, 1, "file:///C:/Users/joao/Desktop/cg/art/final/3%20meter%203.jpg");
let card4 = new Card("8 Meter Titan", 4, 3, 2, "file:///C:/Users/joao/Desktop/cg/art/final/8%20meter%201.jpg");
let card5 = new Card("8 Meter Titan", 4, 3, 2, "file:///C:/Users/joao/Desktop/cg/art/final/8%20meter%202.jpg");
let card6 = new Card("8 Meter Titan", 4, 3, 2, "file:///C:/Users/joao/Desktop/cg/art/final/8%20meter%203.jpg");
let card7 = new Card("15 Meter Titan", 8, 6, 4, "file:///C:/Users/joao/Desktop/cg/art/final/15%20meter%201.jpg");
let card8 = new Card("15 Meter Titan", 8, 6, 4, "file:///C:/Users/joao/Desktop/cg/art/final/15%20meter%202.jpg");
let card9 = new Card("15 Meter Titan", 8, 6, 4, "file:///C:/Users/joao/Desktop/cg/art/final/15%20meter%203.jpg");

let card10 = new Card("Female Titan", 15, 15, 5, "file:///C:/Users/joao/Desktop/cg/art/final/female.jpg");
let card11 = new Card("Attack Titan", 20, 20, 6, "file:///C:/Users/joao/Desktop/cg/art/final/attack.jpg");
let card12 = new Card("Armored Titan", 15, 30, 6, "file:///C:/Users/joao/Desktop/cg/art/final/armored.jpg");
let card13 = new Card("Colossal Titan", 25, 25, 8, "file:///C:/Users/joao/Desktop/cg/art/final/colossal.jpg");
let card14 = new Card("Beast Titan", 20, 20, 6, "file:///C:/Users/joao/Desktop/cg/art/final/beast.jpg");

let card15 = new Card("Cristalyze", 0, 0, 3, "file:///C:/Users/joao/Desktop/cg/art/final/Cristalyze%201.jpg");
let card16 = new Card("Cristalyze", 0, 0, 3, "file:///C:/Users/joao/Desktop/cg/art/final/Cristalyze%202.jpg");
let card17 = new Card("Cristalyze", 0, 0, 3, "file:///C:/Users/joao/Desktop/cg/art/final/Cristalyze%203.jpg");
let card18 = new Card("Serum", 0, 0, 4, "file:///C:/Users/joao/Desktop/cg/art/final/Serum%201.jpg");
let card19 = new Card("Serum", 0, 0, 4, "file:///C:/Users/joao/Desktop/cg/art/final/Serum%202.jpg");
let card20 = new Card("Serum", 0, 0, 4, "file:///C:/Users/joao/Desktop/cg/art/final/Serum%203.jpg");

let card21 = new Card("Rumbling", 0, 0, 4, "file:///C:/Users/joao/Desktop/cg/art/final/rumbling.jpg");

let card22 = new Card("Mute", 0, 0, 4, "file:///C:/Users/joao/Desktop/cg/art/final/mute.png");
let card23 = new Card("Unmute", 0, 0, 4, "file:///C:/Users/joao/Desktop/cg/art/final/unmute.png");


//#endregion

//#region pass round function
function ifAliveDiabled0(){
  if(hpPlayer>=0){
    playerDisabled=0;
  }
}


function roundAlert(){
  setTimeout(()=>document.getElementById("roundAlert").style.opacity = "1", 0);
  document.getElementById("roundAlert").innerHTML= "Round: "+currentRound;
  setTimeout(()=>document.getElementById("roundAlert").style.opacity = "0", 3000);
};

function startPassRound(){
  currentRound++
  document.getElementById("currentRound").innerHTML="Round: "+currentRound;
  roundAlert()
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
  document.getElementById("manaOpponent").innerHTML=manaOpponent;
}

function passRoundFirstRound(){
  cpuTurn1();
  currentRound++
  setTimeout(()=> manaPlayer = manaPlayer + currentRound, 6000);
  setTimeout(()=> manaOpponent = manaOpponent + currentRound, 6000);
  setTimeout(()=>document.getElementById("currentRound").innerHTML="Round: "+currentRound, 6000);
  setTimeout(()=>roundAlert(), 6000);
  setTimeout(()=>document.getElementById("manaPlayer").innerHTML=manaPlayer, 6000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 6000);
  setTimeout(()=>drawCardPlayer(), 7000);
}

function passRound(){

cpuRoundDone = 0;

  if (playerDisabled==0){
  playerDisabled=1;
  resetTarget();
  resetBordersField();
  lastFieldSlotClicked = 0;
  document.getElementById("clickedCardField").innerHTML = "";

    currentRound++
    manaPlayer = manaPlayer + currentRound;
    manaOpponent = manaOpponent + currentRound;
    document.getElementById("currentRound").innerHTML="Round: "+currentRound;
    roundAlert()
    document.getElementById("manaPlayer").innerHTML=manaPlayer;
    document.getElementById("manaOpponent").innerHTML=manaOpponent;
    if (currentCpuRound==1){
      cpuTurn1();
    } else if (currentCpuRound==2){
      cpuTurn2()
    } else if (currentCpuRound==3){
      cpuTurn3()
    } else if (currentCpuRound==4){
      cpuTurn4()
    } else if (currentCpuRound==5){
      cpuTurn5()
    } else if (currentCpuRound==6){
      cpuTurn6()
    } else if (currentCpuRound==7){
      cpuTurn7()
    } else if (currentCpuRound==8){
      cpuTurn8()
    } else if (currentCpuRound==9){
      cpuTurn9();
      return;
    }

      playerMonster1AlreadyAttacked=0;
      playerMonster2AlreadyAttacked=0;
      playerMonster3AlreadyAttacked=0;
      playerMonster4AlreadyAttacked=0;
      playerMonster5AlreadyAttacked=0;

    if (cpuCardsAttacking==0){
    setTimeout(()=>roundBackToPlayer(), 9000);
    } else if (cpuCardsAttacking==1){
      setTimeout(()=>roundBackToPlayer(), 11000);
    } else if (cpuCardsAttacking==2){
      setTimeout(()=>roundBackToPlayer(), 13000);
    } else if (cpuCardsAttacking==3 || cpuCardsAttacking==4 || cpuCardsAttacking==5){
      setTimeout(()=>roundBackToPlayer(), 15000);
  }
 }
}

function roundBackToPlayer(){
  currentRound++;
  manaPlayer = manaPlayer + currentRound;
  manaOpponent = manaOpponent + currentRound;
  document.getElementById("currentRound").innerHTML="Round: "+currentRound;
  document.getElementById("manaPlayer").innerHTML=manaPlayer;
  document.getElementById("manaOpponent").innerHTML=manaOpponent;
  roundAlert();
  resetTarget();
  resetBordersField();
  drawCardPlayer();
  ifAliveDiabled0();
}
//#endregion

//#region cpu turns

function findWeakestCard(){
  let possibleTarget0 = 5000;
  let possibleTarget1;
  let possibleTarget2;
  let possibleTarget3;
  let possibleTarget4;
  let possibleTarget5;

    if (playerCardSlot1Occupied==1){
      possibleTarget1=currentPlayerMonsterSlot1Defense
    } else {possibleTarget1=10000}

    if (playerCardSlot2Occupied==1){
      possibleTarget2=currentPlayerMonsterSlot2Defense
    }  else {possibleTarget2=10000}

    if (playerCardSlot3Occupied==1){
      possibleTarget3=currentPlayerMonsterSlot3Defense
    }  else {possibleTarget3=10000}

    if (playerCardSlot4Occupied==1){
      possibleTarget4=currentPlayerMonsterSlot4Defense
    }  else {possibleTarget4=10000}

    if (playerCardSlot5Occupied==1){
      possibleTarget5=currentPlayerMonsterSlot5Defense
    }  else {possibleTarget5=10000}

    lowestDefense = Math.min(possibleTarget0, possibleTarget1, possibleTarget2, possibleTarget3, possibleTarget4, possibleTarget5);

    if(lowestDefense==currentPlayerMonsterSlot1Defense){
      cpuTarget = 1;
    } else if (lowestDefense==currentPlayerMonsterSlot2Defense){
      cpuTarget = 2;
    } else if (lowestDefense==currentPlayerMonsterSlot3Defense){
      cpuTarget = 3;
    } else if (lowestDefense==currentPlayerMonsterSlot4Defense){
      cpuTarget = 4;
    } else if (lowestDefense==currentPlayerMonsterSlot5Defense){
      cpuTarget = 5;
    } else {cpuTarget=0}
}

function summonOpponent(){
if(opponentCardSlot1Occupied==0){
  setTimeout(()=>document.getElementById("opponentMonsterSlot1").style.backgroundImage = getBgImage, 2000);
  opponentCardSlot1Occupied=1;
  currentOpponentMonsterSlot1Attack = nextSummonAttack;
  currentOpponentMonsterSlot1Defense = nextSummonDefense;
  setTimeout(()=>document.getElementById("opponentMonster1Attack").innerHTML = currentOpponentMonsterSlot1Attack, 2000);
  setTimeout(()=>document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);

  } else if (opponentCardSlot2Occupied==0){
  setTimeout(()=>document.getElementById("opponentMonsterSlot2").style.backgroundImage = getBgImage, 2000);
  opponentCardSlot2Occupied=1;
  currentOpponentMonsterSlot2Attack = nextSummonAttack;
  currentOpponentMonsterSlot2Defense = nextSummonDefense;
  setTimeout(()=>document.getElementById("opponentMonster2Attack").innerHTML = currentOpponentMonsterSlot2Attack, 2000);
  setTimeout(()=>document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);

  } else if (opponentCardSlot3Occupied==0){
    setTimeout(()=>document.getElementById("opponentMonsterSlot3").style.backgroundImage = getBgImage, 2000);
    opponentCardSlot3Occupied=1;
    currentOpponentMonsterSlot3Attack = nextSummonAttack;
    currentOpponentMonsterSlot3Defense = nextSummonDefense;
    setTimeout(()=>document.getElementById("opponentMonster3Attack").innerHTML = currentOpponentMonsterSlot3Attack, 2000);
    setTimeout(()=>document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense, 2000);
    setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  
  } else if (opponentCardSlot4Occupied==0){
    setTimeout(()=>document.getElementById("opponentMonsterSlot4").style.backgroundImage = getBgImage, 2000);
    opponentCardSlot4Occupied=1;
    currentOpponentMonsterSlot4Attack = nextSummonAttack;
    currentOpponentMonsterSlot4Defense = nextSummonDefense;
    setTimeout(()=>document.getElementById("opponentMonster4Attack").innerHTML = currentOpponentMonsterSlot4Attack, 2000);
    setTimeout(()=>document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense, 2000);
    setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  
  } else if (opponentCardSlot5Occupied==0){
    setTimeout(()=>document.getElementById("opponentMonsterSlot5").style.backgroundImage = getBgImage, 2000);
    opponentCardSlot5Occupied=1;
    currentOpponentMonsterSlot5Attack = nextSummonAttack;
    currentOpponentMonsterSlot5Defense = nextSummonDefense;
    setTimeout(()=>document.getElementById("opponentMonster5Attack").innerHTML = currentOpponentMonsterSlot5Attack, 2000);
    setTimeout(()=>document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense, 2000);
    setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  }
}

function cpuAttack(){
setTimeout(()=>cpu1Attack(), 0);
setTimeout(()=>cpu2Attack(), 2000);
setTimeout(()=>cpu3Attack(), 4000);
setTimeout(()=>cpu4Attack(), 6000);
setTimeout(()=>cpu5Attack(), 8000);
}

function cpu1Attack(){
  findWeakestCard();
  if (opponentCardSlot1Occupied == 1){
  document.getElementById("opponentMonsterSlot1").style.border = "4px solid rgb(255, 0, 0)";

      if (cpuTarget==1){
      document.getElementById("playerMonsterSlot1Attacked").style.opacity = "1";
      attackPlayerCardSlot1Animation();
      currentPlayerMonsterSlot1Defense -= currentOpponentMonsterSlot1Attack;
      if(currentPlayerMonsterSlot1Defense<=0){
        document.getElementById("playerMonsterSlot1").style.backgroundImage = "";
        document.getElementById("playerMonster1Attack").innerHTML = "";
        document.getElementById("playerMonster1Defense").innerHTML = "";
        playerCardSlot1Occupied = 0;
        resetTarget();
      } else {
        document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
      }

    } else if (cpuTarget==2){
      document.getElementById("playerMonsterSlot2Attacked").style.opacity = "1";
      attackPlayerCardSlot2Animation()
      currentPlayerMonsterSlot2Defense -= currentOpponentMonsterSlot1Attack;
      if(currentPlayerMonsterSlot2Defense<=0){
        document.getElementById("playerMonsterSlot2").style.backgroundImage = "";
        document.getElementById("playerMonster2Attack").innerHTML = "";
        document.getElementById("playerMonster2Defense").innerHTML = "";
        playerCardSlot2Occupied = 0;
        resetTarget();   
      } else {
      document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
      }

    } else if (cpuTarget==3){
      document.getElementById("playerMonsterSlot3Attacked").style.opacity = "1";
      attackPlayerCardSlot3Animation()
      currentPlayerMonsterSlot3Defense -= currentOpponentMonsterSlot1Attack;
      if(currentPlayerMonsterSlot3Defense<=0){
        document.getElementById("playerMonsterSlot3").style.backgroundImage = "";
        document.getElementById("playerMonster3Attack").innerHTML = "";
        document.getElementById("playerMonster3Defense").innerHTML = "";
        playerCardSlot3Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
      }


    } else if (cpuTarget==4){
      document.getElementById("playerMonsterSlot4Attacked").style.opacity = "1";
      attackPlayerCardSlot4Animation()
      currentPlayerMonsterSlot4Defense -= currentOpponentMonsterSlot1Attack;
      if(currentPlayerMonsterSlot4Defense<=0){
        document.getElementById("playerMonsterSlot4").style.backgroundImage = "";
        document.getElementById("playerMonster4Attack").innerHTML = "";
        document.getElementById("playerMonster4Defense").innerHTML = "";
        playerCardSlot4Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
      }


    } else if (cpuTarget==5){
      document.getElementById("playerMonsterSlot5Attacked").style.opacity = "1";
      attackPlayerCardSlot5Animation()
      currentPlayerMonsterSlot5Defense -= currentOpponentMonsterSlot1Attack;
      if(currentPlayerMonsterSlot5Defense<=0){
        document.getElementById("playerMonsterSlot5").style.backgroundImage = "";
        document.getElementById("playerMonster5Attack").innerHTML = "";
        document.getElementById("playerMonster5Defense").innerHTML = "";
        playerCardSlot5Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
      }

    } else if (cpuTarget==0){
      playerDirectAttackAnimation();
      hpPlayer -= currentOpponentMonsterSlot1Attack;
      document.getElementById("hpPlayer").innerHTML = hpPlayer;
      }
    }
if (hpPlayer <= 0){
  playerDisabled=1;
  youLose();
}
setTimeout(()=>document.getElementById("opponentMonsterSlot1").style.border = "1px solid rgb(255, 255, 255)",1000);
}

function cpu2Attack(){
  findWeakestCard();
  if (opponentCardSlot2Occupied == 1){
  document.getElementById("opponentMonsterSlot2").style.border = "4px solid rgb(255, 0, 0)";

      if (cpuTarget==1){
      document.getElementById("playerMonsterSlot1Attacked").style.opacity = "1";
      attackPlayerCardSlot1Animation();
      currentPlayerMonsterSlot1Defense -= currentOpponentMonsterSlot2Attack;
      if(currentPlayerMonsterSlot1Defense<=0){
        document.getElementById("playerMonsterSlot1").style.backgroundImage = "";
        document.getElementById("playerMonster1Attack").innerHTML = "";
        document.getElementById("playerMonster1Defense").innerHTML = "";
        playerCardSlot1Occupied = 0;
        resetTarget();
      } else {
        document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
      }

    } else if (cpuTarget==2){
      document.getElementById("playerMonsterSlot2Attacked").style.opacity = "1";
      attackPlayerCardSlot2Animation()
      currentPlayerMonsterSlot2Defense -= currentOpponentMonsterSlot2Attack;
      if(currentPlayerMonsterSlot2Defense<=0){
        document.getElementById("playerMonsterSlot2").style.backgroundImage = "";
        document.getElementById("playerMonster2Attack").innerHTML = "";
        document.getElementById("playerMonster2Defense").innerHTML = "";
        playerCardSlot2Occupied = 0;
        resetTarget();   
      } else {
      document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
      }

    } else if (cpuTarget==3){
      document.getElementById("playerMonsterSlot3Attacked").style.opacity = "1";
      attackPlayerCardSlot3Animation()
      currentPlayerMonsterSlot3Defense -= currentOpponentMonsterSlot2Attack;
      if(currentPlayerMonsterSlot3Defense<=0){
        document.getElementById("playerMonsterSlot3").style.backgroundImage = "";
        document.getElementById("playerMonster3Attack").innerHTML = "";
        document.getElementById("playerMonster3Defense").innerHTML = "";
        playerCardSlot3Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
      }


    } else if (cpuTarget==4){
      document.getElementById("playerMonsterSlot4Attacked").style.opacity = "1";
      attackPlayerCardSlot4Animation()
      currentPlayerMonsterSlot4Defense -= currentOpponentMonsterSlot2Attack;
      if(currentPlayerMonsterSlot4Defense<=0){
        document.getElementById("playerMonsterSlot4").style.backgroundImage = "";
        document.getElementById("playerMonster4Attack").innerHTML = "";
        document.getElementById("playerMonster4Defense").innerHTML = "";
        playerCardSlot4Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
      }


    } else if (cpuTarget==5){
      document.getElementById("playerMonsterSlot5Attacked").style.opacity = "1";
      attackPlayerCardSlot5Animation()
      currentPlayerMonsterSlot5Defense -= currentOpponentMonsterSlot2Attack;
      if(currentPlayerMonsterSlot5Defense<=0){
        document.getElementById("playerMonsterSlot5").style.backgroundImage = "";
        document.getElementById("playerMonster5Attack").innerHTML = "";
        document.getElementById("playerMonster5Defense").innerHTML = "";
        playerCardSlot5Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
      }

    } else if (cpuTarget==0){
      playerDirectAttackAnimation();
      hpPlayer -= currentOpponentMonsterSlot2Attack;
      document.getElementById("hpPlayer").innerHTML = hpPlayer;
      }
    }
if (hpPlayer <= 0){
  playerDisabled=1;
  youLose();
}
setTimeout(()=>document.getElementById("opponentMonsterSlot2").style.border = "1px solid rgb(255, 255, 255)",1000);
}

function cpu3Attack(){
  findWeakestCard();
  if (opponentCardSlot3Occupied == 1){
  document.getElementById("opponentMonsterSlot3").style.border = "4px solid rgb(255, 0, 0)";

      if (cpuTarget==1){
      document.getElementById("playerMonsterSlot1Attacked").style.opacity = "1";
      attackPlayerCardSlot1Animation();
      currentPlayerMonsterSlot1Defense -= currentOpponentMonsterSlot3Attack;
      if(currentPlayerMonsterSlot1Defense<=0){
        document.getElementById("playerMonsterSlot1").style.backgroundImage = "";
        document.getElementById("playerMonster1Attack").innerHTML = "";
        document.getElementById("playerMonster1Defense").innerHTML = "";
        playerCardSlot1Occupied = 0;
        resetTarget();
      } else {
        document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
      }

    } else if (cpuTarget==2){
      document.getElementById("playerMonsterSlot2Attacked").style.opacity = "1";
      attackPlayerCardSlot2Animation()
      currentPlayerMonsterSlot2Defense -= currentOpponentMonsterSlot3Attack;
      if(currentPlayerMonsterSlot2Defense<=0){
        document.getElementById("playerMonsterSlot2").style.backgroundImage = "";
        document.getElementById("playerMonster2Attack").innerHTML = "";
        document.getElementById("playerMonster2Defense").innerHTML = "";
        playerCardSlot2Occupied = 0;
        resetTarget();   
      } else {
      document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
      }

    } else if (cpuTarget==3){
      document.getElementById("playerMonsterSlot3Attacked").style.opacity = "1";
      attackPlayerCardSlot3Animation()
      currentPlayerMonsterSlot3Defense -= currentOpponentMonsterSlot3Attack;
      if(currentPlayerMonsterSlot3Defense<=0){
        document.getElementById("playerMonsterSlot3").style.backgroundImage = "";
        document.getElementById("playerMonster3Attack").innerHTML = "";
        document.getElementById("playerMonster3Defense").innerHTML = "";
        playerCardSlot3Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
      }


    } else if (cpuTarget==4){
      document.getElementById("playerMonsterSlot4Attacked").style.opacity = "1";
      attackPlayerCardSlot4Animation()
      currentPlayerMonsterSlot4Defense -= currentOpponentMonsterSlot3Attack;
      if(currentPlayerMonsterSlot4Defense<=0){
        document.getElementById("playerMonsterSlot4").style.backgroundImage = "";
        document.getElementById("playerMonster4Attack").innerHTML = "";
        document.getElementById("playerMonster4Defense").innerHTML = "";
        playerCardSlot4Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
      }


    } else if (cpuTarget==5){
      document.getElementById("playerMonsterSlot5Attacked").style.opacity = "1";
      attackPlayerCardSlot5Animation()
      currentPlayerMonsterSlot5Defense -= currentOpponentMonsterSlot3Attack;
      if(currentPlayerMonsterSlot5Defense<=0){
        document.getElementById("playerMonsterSlot5").style.backgroundImage = "";
        document.getElementById("playerMonster5Attack").innerHTML = "";
        document.getElementById("playerMonster5Defense").innerHTML = "";
        playerCardSlot5Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
      }

    } else if (cpuTarget==0){
      playerDirectAttackAnimation();
      hpPlayer -= currentOpponentMonsterSlot3Attack;
      document.getElementById("hpPlayer").innerHTML = hpPlayer;
      }
    }
if (hpPlayer <= 0){
  playerDisabled=1;
  youLose();
}
setTimeout(()=>document.getElementById("opponentMonsterSlot3").style.border = "1px solid rgb(255, 255, 255)",1000);
}

function cpu4Attack(){
  findWeakestCard();
  if (opponentCardSlot4Occupied == 1){
  document.getElementById("opponentMonsterSlot4").style.border = "4px solid rgb(255, 0, 0)";

      if (cpuTarget==1){
      document.getElementById("playerMonsterSlot1Attacked").style.opacity = "1";
      attackPlayerCardSlot1Animation();
      currentPlayerMonsterSlot1Defense -= currentOpponentMonsterSlot4Attack;
      if(currentPlayerMonsterSlot1Defense<=0){
        document.getElementById("playerMonsterSlot1").style.backgroundImage = "";
        document.getElementById("playerMonster1Attack").innerHTML = "";
        document.getElementById("playerMonster1Defense").innerHTML = "";
        playerCardSlot1Occupied = 0;
        resetTarget();
      } else {
        document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
      }

    } else if (cpuTarget==2){
      document.getElementById("playerMonsterSlot2Attacked").style.opacity = "1";
      attackPlayerCardSlot2Animation()
      currentPlayerMonsterSlot2Defense -= currentOpponentMonsterSlot4Attack;
      if(currentPlayerMonsterSlot2Defense<=0){
        document.getElementById("playerMonsterSlot2").style.backgroundImage = "";
        document.getElementById("playerMonster2Attack").innerHTML = "";
        document.getElementById("playerMonster2Defense").innerHTML = "";
        playerCardSlot2Occupied = 0;
        resetTarget();   
      } else {
      document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
      }

    } else if (cpuTarget==3){
      document.getElementById("playerMonsterSlot3Attacked").style.opacity = "1";
      attackPlayerCardSlot3Animation()
      currentPlayerMonsterSlot3Defense -= currentOpponentMonsterSlot4Attack;
      if(currentPlayerMonsterSlot3Defense<=0){
        document.getElementById("playerMonsterSlot3").style.backgroundImage = "";
        document.getElementById("playerMonster3Attack").innerHTML = "";
        document.getElementById("playerMonster3Defense").innerHTML = "";
        playerCardSlot3Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
      }


    } else if (cpuTarget==4){
      document.getElementById("playerMonsterSlot4Attacked").style.opacity = "1";
      attackPlayerCardSlot4Animation()
      currentPlayerMonsterSlot4Defense -= currentOpponentMonsterSlot4Attack;
      if(currentPlayerMonsterSlot4Defense<=0){
        document.getElementById("playerMonsterSlot4").style.backgroundImage = "";
        document.getElementById("playerMonster4Attack").innerHTML = "";
        document.getElementById("playerMonster4Defense").innerHTML = "";
        playerCardSlot4Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
      }


    } else if (cpuTarget==5){
      document.getElementById("playerMonsterSlot5Attacked").style.opacity = "1";
      attackPlayerCardSlot5Animation()
      currentPlayerMonsterSlot5Defense -= currentOpponentMonsterSlot4Attack;
      if(currentPlayerMonsterSlot5Defense<=0){
        document.getElementById("playerMonsterSlot5").style.backgroundImage = "";
        document.getElementById("playerMonster5Attack").innerHTML = "";
        document.getElementById("playerMonster5Defense").innerHTML = "";
        playerCardSlot5Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
      }

    } else if (cpuTarget==0){
      playerDirectAttackAnimation();
      hpPlayer -= currentOpponentMonsterSlot4Attack;
      document.getElementById("hpPlayer").innerHTML = hpPlayer;
      }
    }
if (hpPlayer <= 0){
  playerDisabled=1;
  youLose();
}
setTimeout(()=>document.getElementById("opponentMonsterSlot4").style.border = "1px solid rgb(255, 255, 255)",1000);
}

function cpu5Attack(){
  findWeakestCard();
  if (opponentCardSlot5Occupied == 1){
  document.getElementById("opponentMonsterSlot5").style.border = "4px solid rgb(255, 0, 0)";

      if (cpuTarget==1){
      document.getElementById("playerMonsterSlot1Attacked").style.opacity = "1";
      attackPlayerCardSlot1Animation();
      currentPlayerMonsterSlot1Defense -= currentOpponentMonsterSlot5Attack;
      if(currentPlayerMonsterSlot1Defense<=0){
        document.getElementById("playerMonsterSlot1").style.backgroundImage = "";
        document.getElementById("playerMonster1Attack").innerHTML = "";
        document.getElementById("playerMonster1Defense").innerHTML = "";
        playerCardSlot1Occupied = 0;
        resetTarget();
      } else {
        document.getElementById("playerMonster1Defense").innerHTML = currentPlayerMonsterSlot1Defense;
      }

    } else if (cpuTarget==2){
      document.getElementById("playerMonsterSlot2Attacked").style.opacity = "1";
      attackPlayerCardSlot2Animation()
      currentPlayerMonsterSlot2Defense -= currentOpponentMonsterSlot5Attack;
      if(currentPlayerMonsterSlot2Defense<=0){
        document.getElementById("playerMonsterSlot2").style.backgroundImage = "";
        document.getElementById("playerMonster2Attack").innerHTML = "";
        document.getElementById("playerMonster2Defense").innerHTML = "";
        playerCardSlot2Occupied = 0;
        resetTarget();   
      } else {
      document.getElementById("playerMonster2Defense").innerHTML = currentPlayerMonsterSlot2Defense;
      }

    } else if (cpuTarget==3){
      document.getElementById("playerMonsterSlot3Attacked").style.opacity = "1";
      attackPlayerCardSlot3Animation()
      currentPlayerMonsterSlot3Defense -= currentOpponentMonsterSlot5Attack;
      if(currentPlayerMonsterSlot3Defense<=0){
        document.getElementById("playerMonsterSlot3").style.backgroundImage = "";
        document.getElementById("playerMonster3Attack").innerHTML = "";
        document.getElementById("playerMonster3Defense").innerHTML = "";
        playerCardSlot3Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster3Defense").innerHTML = currentPlayerMonsterSlot3Defense;
      }


    } else if (cpuTarget==4){
      document.getElementById("playerMonsterSlot4Attacked").style.opacity = "1";
      attackPlayerCardSlot4Animation()
      currentPlayerMonsterSlot4Defense -= currentOpponentMonsterSlot5Attack;
      if(currentPlayerMonsterSlot4Defense<=0){
        document.getElementById("playerMonsterSlot4").style.backgroundImage = "";
        document.getElementById("playerMonster4Attack").innerHTML = "";
        document.getElementById("playerMonster4Defense").innerHTML = "";
        playerCardSlot4Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster4Defense").innerHTML = currentPlayerMonsterSlot4Defense;
      }


    } else if (cpuTarget==5){
      document.getElementById("playerMonsterSlot5Attacked").style.opacity = "1";
      attackPlayerCardSlot5Animation()
      currentPlayerMonsterSlot5Defense -= currentOpponentMonsterSlot5Attack;
      if(currentPlayerMonsterSlot5Defense<=0){
        document.getElementById("playerMonsterSlot5").style.backgroundImage = "";
        document.getElementById("playerMonster5Attack").innerHTML = "";
        document.getElementById("playerMonster5Defense").innerHTML = "";
        playerCardSlot5Occupied = 0;
        resetTarget();
      } else {
      document.getElementById("playerMonster5Defense").innerHTML = currentPlayerMonsterSlot5Defense;
      }

    } else if (cpuTarget==0){
      playerDirectAttackAnimation();
      hpPlayer -= currentOpponentMonsterSlot5Attack;
      document.getElementById("hpPlayer").innerHTML = hpPlayer;
      }
    }
if (hpPlayer <= 0){
  playerDisabled=1;
  youLose();
}
setTimeout(()=>document.getElementById("opponentMonsterSlot5").style.border = "1px solid rgb(255, 255, 255)",1000);
}

function cardsAttacking(){
  if (opponentCardSlot1Occupied == 1){
    number1 = 1;
  } else {number1=0}
  if (opponentCardSlot2Occupied == 1){
    number2 = 1;
  } else {number2=0}
  if (opponentCardSlot3Occupied == 1){
    number3 = 1;
  } else {number3=0}
  if (opponentCardSlot4Occupied == 1){
    number4 = 1;
  } else {number4=0}
  if (opponentCardSlot5Occupied == 1){
    number5 = 1;
  } else {number5=0}
  cpuCardsAttacking = number1+number2+number3+number4+number5;
}


function cpuTurn1(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand5").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();
  stringCardId = eval("card1.art");
  getBgImage = 'url("'+ stringCardId + '")';
  manaOpponent -= 1;
  currentOpponentMonsterSlot1Attack = 2;
  currentOpponentMonsterSlot1Defense = 1;

  setTimeout(()=>document.getElementById("opponentMonsterSlot1").style.backgroundImage = getBgImage, 2000);
  setTimeout(()=>document.getElementById("opponentMonster1Attack").innerHTML = currentOpponentMonsterSlot1Attack, 2000);
  setTimeout(()=>document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense, 2000);
  setTimeout(()=>document.getElementById("opponentHand5").style.opacity = 0, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  setTimeout(()=>cpu1Attack(), 4000);
  opponentCardSlot1Occupied=1;
  currentCpuRound = 2;  
}

function cpuTurn2(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand5").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();
  manaOpponent -= 2;

  stringCardId = eval("card4.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 4;
  nextSummonDefense = 3;
  summonOpponent();

  setTimeout(()=>document.getElementById("opponentHand5").style.opacity = 0, 2000);
  currentCpuRound = 3;
  setTimeout(()=>cpuAttack(), 4000);
 
}

function cpuTurn3(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand5").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();

  setTimeout(()=>manaOpponent -= 4, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  stringCardId = eval("card7.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 8;
  nextSummonDefense = 6;
  setTimeout(()=>document.getElementById("opponentHand5").style.opacity = 0, 2000);
  summonOpponent();

  setTimeout(()=>manaOpponent -= 5, 4001);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 4001);
  setTimeout(()=>stringCardId = eval("card10.art"), 2001);  
  setTimeout(()=>getBgImage = 'url("'+ stringCardId + '")', 2001);
  setTimeout(()=>nextSummonAttack = 15, 2001);
  setTimeout(()=>nextSummonDefense = 15, 2001);
  setTimeout(()=>summonOpponent(), 2001);
  setTimeout(()=>document.getElementById("opponentHand4").style.opacity = 0, 4001);

  setTimeout(()=>cpuAttack(), 6000);

  currentCpuRound = 4;
}

function cpuTurn4(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand4").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();

  setTimeout(()=>manaOpponent -= 6, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  stringCardId = eval("card14.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 20;
  nextSummonDefense = 20;
  setTimeout(()=>document.getElementById("opponentHand4").style.opacity = 0, 2000);
  summonOpponent();

  setTimeout(()=>cpuAttack(), 4000);

  currentCpuRound = 5;
}

function cpuTurn5(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand4").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();

  setTimeout(()=>manaOpponent -= 6, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  stringCardId = eval("card11.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 20;
  nextSummonDefense = 20;
  setTimeout(()=>document.getElementById("opponentHand4").style.opacity = 0, 2000);
  summonOpponent();

  setTimeout(()=>manaOpponent -= 1, 2001);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 4001);
  setTimeout(()=>stringCardId = eval("card2.art"), 2001);  
  setTimeout(()=>getBgImage = 'url("'+ stringCardId + '")', 2001);
  setTimeout(()=>nextSummonAttack = 2, 2001);
  setTimeout(()=>nextSummonDefense = 1, 2001);
  setTimeout(()=>summonOpponent(), 2001);
  setTimeout(()=>document.getElementById("opponentHand3").style.opacity = 0, 4001);

  setTimeout(()=>cpuAttack(), 6000);

  currentCpuRound = 6;
}

function cpuTurn6(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand3").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();

  setTimeout(()=>manaOpponent -= 4, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  stringCardId = eval("card8.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 8;
  nextSummonDefense = 6;
  setTimeout(()=>document.getElementById("opponentHand3").style.opacity = 0, 2000);
  summonOpponent();

  setTimeout(()=>cpuAttack(), 4000);

  currentCpuRound = 7;
}

function cpuTurn7(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand3").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();

  setTimeout(()=>manaOpponent -= 8, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  stringCardId = eval("card13.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 25;
  nextSummonDefense = 25;
  setTimeout(()=>document.getElementById("opponentHand3").style.opacity = 0, 2000);
  summonOpponent();

  setTimeout(()=>manaOpponent -= 4, 2001);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 4001);
  setTimeout(()=>stringCardId = eval("card5.art"), 2001);  
  setTimeout(()=>getBgImage = 'url("'+ stringCardId + '")', 2001);
  setTimeout(()=>nextSummonAttack = 4, 2001);
  setTimeout(()=>nextSummonDefense = 3, 2001);
  setTimeout(()=>summonOpponent(), 2001);
  setTimeout(()=>document.getElementById("opponentHand2").style.opacity = 0, 4001);

  setTimeout(()=>cpuAttack(), 6000);

  currentCpuRound = 8;
}

function cpuTurn8(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand2").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();

  setTimeout(()=>manaOpponent -= 8, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2000);
  stringCardId = eval("card12.art");
  getBgImage = 'url("'+ stringCardId + '")';
  nextSummonAttack = 15;
  nextSummonDefense = 30;
  setTimeout(()=>document.getElementById("opponentHand2").style.opacity = 0, 2000);
  summonOpponent();

  setTimeout(()=>manaOpponent -= 4, 2001);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 4001);
  setTimeout(()=>stringCardId = eval("card6.art"), 2001);  
  setTimeout(()=>getBgImage = 'url("'+ stringCardId + '")', 2001);
  setTimeout(()=>nextSummonAttack = 4, 2001);
  setTimeout(()=>nextSummonDefense = 3, 2001);
  setTimeout(()=>summonOpponent(), 2001);
  setTimeout(()=>document.getElementById("opponentHand1").style.opacity = 0, 4001);

  setTimeout(()=>cpuAttack(), 6000);

  currentCpuRound = 9;
}

function cpuTurn9(){
  cardsAttacking();
  resetTarget();
  document.getElementById("opponentHand1").style.opacity = 1;
  cardsRemainingOpponent--;
  updateCardsRemaining();
  setTimeout(()=>  document.getElementById("opponentHand1").style.opacity = 0, 2000);
  setTimeout(()=>manaOpponent -= 50, 2000);
  setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 2001);
  setTimeout(()=>stringCardId = eval("card21.art"), 2001);  
  setTimeout(()=>getBgImage = 'url("'+ stringCardId + '")', 2001);
  setTimeout(()=>document.getElementById("opponentSpellSlot").style.backgroundImage = getBgImage, 2002);
  setTimeout(()=>document.getElementById("screen").style.backgroundImage = getBgImage, 2002);
  document.getElementById("playerMonsterSlot1").addEventListener("click", function() {
  });

  
  currentOpponentMonsterSlot1Defense = 25;
  currentOpponentMonsterSlot1Attack = 25;
  currentOpponentMonsterSlot2Defense = 25;
  currentOpponentMonsterSlot2Attack = 25;
  currentOpponentMonsterSlot3Defense = 25;
  currentOpponentMonsterSlot3Attack = 25;
  currentOpponentMonsterSlot4Defense = 25;
  currentOpponentMonsterSlot4Attack = 25;
  currentOpponentMonsterSlot5Defense = 25;
  currentOpponentMonsterSlot5Attack = 25;
  opponentCardSlot1Occupied = 0;
  opponentCardSlot2Occupied = 0;
  opponentCardSlot3Occupied = 1;
  opponentCardSlot4Occupied = 0;
  opponentCardSlot5Occupied = 0;


  setTimeout(()=>stringCardId = eval("card13.art"), 3000);  
  setTimeout(()=>getBgImage = 'url("'+ stringCardId + '")', 3000);

  setTimeout(()=>document.getElementById("opponentMonsterSlot1").style.backgroundImage = getBgImage, 3000);
  setTimeout(()=>document.getElementById("opponentMonster1Attack").innerHTML = currentOpponentMonsterSlot1Attack, 3000);
  setTimeout(()=>document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense, 3000);


  setTimeout(()=>document.getElementById("opponentMonsterSlot2").style.backgroundImage = getBgImage, 3500);
  setTimeout(()=>document.getElementById("opponentMonster2Attack").innerHTML = currentOpponentMonsterSlot1Attack, 3500);
  setTimeout(()=>document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense, 3500);


  setTimeout(()=>document.getElementById("opponentMonsterSlot3").style.backgroundImage = getBgImage, 4000);
  setTimeout(()=>document.getElementById("opponentMonster3Attack").innerHTML = currentOpponentMonsterSlot3Attack, 4000);
  setTimeout(()=>document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense, 4000);


  setTimeout(()=>document.getElementById("opponentMonsterSlot4").style.backgroundImage = getBgImage, 4500);
  setTimeout(()=>document.getElementById("opponentMonster4Attack").innerHTML = currentOpponentMonsterSlot4Attack, 4500);
  setTimeout(()=>document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense, 4500);

  setTimeout(()=>document.getElementById("opponentMonsterSlot5").style.backgroundImage = getBgImage, 5000);
  setTimeout(()=>document.getElementById("opponentMonster5Attack").innerHTML = currentOpponentMonsterSlot5Attack, 5000);
  setTimeout(()=>document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense, 5000);

  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);
  setTimeout(()=>cpuAttack(), 7000);

}


//#endregion

//#region Attack card animations

     //#region oppAtcks
   function opponentDirectAttackAnimation(){
    setTimeout(()=>document.getElementById("directAttackAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("directAttackAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("directAttackAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("directAttackAnimation").style.opacity = 0,600);
    setTimeout(()=>document.getElementById("directAttackAnimation").style.opacity = 1,800);
    setTimeout(()=>document.getElementById("directAttackAnimation").style.opacity = 0,1000);
  }

   function attackOpponentCardSlot1Animation(){
    setTimeout(()=>document.getElementById("opponent1AttackAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("opponent1AttackAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("opponent1AttackAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("opponent1AttackAnimation").style.opacity = 0,600);
    setTimeout(()=>document.getElementById("opponent1AttackAnimation").style.opacity = 1,800);
    setTimeout(()=>document.getElementById("opponent1AttackAnimation").style.opacity = 0,1000);
  }
  
  function attackOpponentCardSlot2Animation(){
    setTimeout(()=>document.getElementById("opponent2AttackAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("opponent2AttackAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("opponent2AttackAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("opponent2AttackAnimation").style.opacity = 0,600);
    setTimeout(()=>document.getElementById("opponent2AttackAnimation").style.opacity = 1,800);
    setTimeout(()=>document.getElementById("opponent2AttackAnimation").style.opacity = 0,1000);
  }
  
  function attackOpponentCardSlot3Animation(){
    setTimeout(()=>document.getElementById("opponent3AttackAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("opponent3AttackAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("opponent3AttackAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("opponent3AttackAnimation").style.opacity = 0,600);
    setTimeout(()=>document.getElementById("opponent3AttackAnimation").style.opacity = 1,800);
    setTimeout(()=>document.getElementById("opponent3AttackAnimation").style.opacity = 0,1000);
  }
  
  function attackOpponentCardSlot4Animation(){
    setTimeout(()=>document.getElementById("opponent4AttackAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("opponent4AttackAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("opponent4AttackAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("opponent4AttackAnimation").style.opacity = 0,600);
    setTimeout(()=>document.getElementById("opponent4AttackAnimation").style.opacity = 1,800);
    setTimeout(()=>document.getElementById("opponent4AttackAnimation").style.opacity = 0,1000);
  }
  
  function attackOpponentCardSlot5Animation(){
    setTimeout(()=>document.getElementById("opponent5AttackAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("opponent5AttackAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("opponent5AttackAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("opponent5AttackAnimation").style.opacity = 0,600);
    setTimeout(()=>document.getElementById("opponent5AttackAnimation").style.opacity = 1,800);
    setTimeout(()=>document.getElementById("opponent5AttackAnimation").style.opacity = 0,1000);
  }
      //#endregion
  
      //#region playerAtks

function playerDirectAttackAnimation(){
    setTimeout(()=>document.getElementById("directAttackPlayerAnimation").style.opacity = 1,0);
    setTimeout(()=>document.getElementById("directAttackPlayerAnimation").style.opacity = 0,200);
    setTimeout(()=>document.getElementById("directAttackPlayerAnimation").style.opacity = 1,400);
    setTimeout(()=>document.getElementById("directAttackPlayerAnimation").style.opacity = 0,600);
  }     

  function attackPlayerCardSlot1Animation(){
      setTimeout(()=>document.getElementById("player1AttackAnimation").style.opacity = 1,0);
      setTimeout(()=>document.getElementById("player1AttackAnimation").style.opacity = 0,200);
      setTimeout(()=>document.getElementById("player1AttackAnimation").style.opacity = 1,400);
      setTimeout(()=>document.getElementById("player1AttackAnimation").style.opacity = 0,600);
      setTimeout(()=>document.getElementById("player1AttackAnimation").style.opacity = 1,800);
      setTimeout(()=>document.getElementById("player1AttackAnimation").style.opacity = 0,1000);
    }
  
  function attackPlayerCardSlot2Animation(){
      setTimeout(()=>document.getElementById("player2AttackAnimation").style.opacity = 1,0);
      setTimeout(()=>document.getElementById("player2AttackAnimation").style.opacity = 0,200);
      setTimeout(()=>document.getElementById("player2AttackAnimation").style.opacity = 1,400);
      setTimeout(()=>document.getElementById("player2AttackAnimation").style.opacity = 0,600);
      setTimeout(()=>document.getElementById("player2AttackAnimation").style.opacity = 1,800);
      setTimeout(()=>document.getElementById("player2AttackAnimation").style.opacity = 0,1000);
    }
  
  function attackPlayerCardSlot3Animation(){
      setTimeout(()=>document.getElementById("player3AttackAnimation").style.opacity = 1,0);
      setTimeout(()=>document.getElementById("player3AttackAnimation").style.opacity = 0,200);
      setTimeout(()=>document.getElementById("player3AttackAnimation").style.opacity = 1,400);
      setTimeout(()=>document.getElementById("player3AttackAnimation").style.opacity = 0,600);
      setTimeout(()=>document.getElementById("player3AttackAnimation").style.opacity = 1,800);
      setTimeout(()=>document.getElementById("player3AttackAnimation").style.opacity = 0,1000);
    }
  
  function attackPlayerCardSlot4Animation(){
      setTimeout(()=>document.getElementById("player4AttackAnimation").style.opacity = 1,0);
      setTimeout(()=>document.getElementById("player4AttackAnimation").style.opacity = 0,200);
      setTimeout(()=>document.getElementById("player4AttackAnimation").style.opacity = 1,400);
      setTimeout(()=>document.getElementById("player4AttackAnimation").style.opacity = 0,600);
      setTimeout(()=>document.getElementById("player4AttackAnimation").style.opacity = 1,800);
      setTimeout(()=>document.getElementById("player4AttackAnimation").style.opacity = 0,1000);
    }
  
  function attackPlayerCardSlot5Animation(){
      setTimeout(()=>document.getElementById("player5AttackAnimation").style.opacity = 1,0);
      setTimeout(()=>document.getElementById("player5AttackAnimation").style.opacity = 0,200);
      setTimeout(()=>document.getElementById("player5AttackAnimation").style.opacity = 1,400);
      setTimeout(()=>document.getElementById("player5AttackAnimation").style.opacity = 0,600);
      setTimeout(()=>document.getElementById("player5AttackAnimation").style.opacity = 1,800);
      setTimeout(()=>document.getElementById("player5AttackAnimation").style.opacity = 0,1000);
    }
      //#endregion
  
  //#endregion

//#region target Attacks Red Sword Div

function resetTarget(){
  document.getElementById("playerMonsterSlot1Attacked").style.opacity = "0";
  document.getElementById("playerMonsterSlot2Attacked").style.opacity = "0";
  document.getElementById("playerMonsterSlot3Attacked").style.opacity = "0";
  document.getElementById("playerMonsterSlot4Attacked").style.opacity = "0";
  document.getElementById("playerMonsterSlot5Attacked").style.opacity = "0";
  document.getElementById("opponentMonsterSlot1Attacked").style.opacity = "0";
  document.getElementById("opponentMonsterSlot2Attacked").style.opacity = "0";
  document.getElementById("opponentMonsterSlot3Attacked").style.opacity = "0";
  document.getElementById("opponentMonsterSlot4Attacked").style.opacity = "0";
  document.getElementById("opponentMonsterSlot5Attacked").style.opacity = "0";
  document.getElementById("directAttackTarget").style.border = "4px solid rgb(255, 255, 255)";
  document.getElementById("directAttackTarget").style.color = "rgb(255, 255, 255)";
  attackTarget = undefined;
}

document.getElementById("opponentMonsterSlot1").addEventListener("click", function() {
  if(opponentCardSlot1Occupied==0){
      return}
  resetTarget();
  document.getElementById("opponentMonsterSlot1Attacked").style.opacity = "1";
  attackTarget = 1;
});

document.getElementById("opponentMonsterSlot2").addEventListener("click", function() {
  if(opponentCardSlot2Occupied==0){
      return}
  resetTarget();
  document.getElementById("opponentMonsterSlot2Attacked").style.opacity = "1";
  attackTarget = 2;
});

document.getElementById("opponentMonsterSlot3").addEventListener("click", function() {
  if(opponentCardSlot3Occupied==0){
      return}
  resetTarget();
  document.getElementById("opponentMonsterSlot3Attacked").style.opacity = "1";
  attackTarget = 3;
});

document.getElementById("opponentMonsterSlot4").addEventListener("click", function() {
  if(opponentCardSlot4Occupied==0){
      return}
  resetTarget();
  document.getElementById("opponentMonsterSlot4Attacked").style.opacity = "1";
  attackTarget = 4;
});

document.getElementById("opponentMonsterSlot5").addEventListener("click", function() {
  if(opponentCardSlot5Occupied==0){
      return}
  resetTarget();
  document.getElementById("opponentMonsterSlot5Attacked").style.opacity = "1";
  attackTarget = 5;
});

document.getElementById("directAttackTarget").addEventListener("click", function() {
  if(opponentCardSlot1Occupied==1 || opponentCardSlot2Occupied==1 || opponentCardSlot3Occupied==1 || opponentCardSlot4Occupied==1 || opponentCardSlot5Occupied==1){
    alert("You can't attack directly while your opponent control monsters!")
      return}
  resetTarget();
  document.getElementById("directAttackTarget").style.border = "4px solid rgb(255, 0, 0)";
  document.getElementById("directAttackTarget").style.color = "rgb(255, 0, 0)";
  attackTarget = 0;
});

//#endregion

//#region Attack function
function attack(){

if (playerDisabled==0){
    if (lastFieldSlotClicked == 1){
      if(attackTarget==undefined || playerMonster1AlreadyAttacked==1){
        return;
      }
      switch (attackTarget) {
        case 0:
          opponentDirectAttackAnimation();
          hpOpponent -= currentPlayerMonsterSlot1Attack;
          document.getElementById("hpOpponent").innerHTML = hpOpponent;
          break;

        case 1:
          currentOpponentMonsterSlot1Defense -= currentPlayerMonsterSlot1Attack;
          attackOpponentCardSlot1Animation();
            if(currentOpponentMonsterSlot1Defense<=0){
              document.getElementById("opponentMonsterSlot1").style.backgroundImage = "";
              document.getElementById("opponentMonster1Attack").innerHTML = "";
              document.getElementById("opponentMonster1Defense").innerHTML = "";
              opponentCardSlot1Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense;
            }
          break;
          
       case 2:
          currentOpponentMonsterSlot2Defense -= currentPlayerMonsterSlot1Attack;
          attackOpponentCardSlot2Animation();
            if(currentOpponentMonsterSlot2Defense<=0){
              document.getElementById("opponentMonsterSlot2").style.backgroundImage = "";
              document.getElementById("opponentMonster2Attack").innerHTML = "";
              document.getElementById("opponentMonster2Defense").innerHTML = "";
              opponentCardSlot2Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense;
            }
          break;

         case 3:
          currentOpponentMonsterSlot3Defense -= currentPlayerMonsterSlot1Attack;
          attackOpponentCardSlot3Animation();
            if(currentOpponentMonsterSlot3Defense<=0){
              document.getElementById("opponentMonsterSlot3").style.backgroundImage = "";
              document.getElementById("opponentMonster3Attack").innerHTML = "";
              document.getElementById("opponentMonster3Defense").innerHTML = "";
              opponentCardSlot3Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense;
            }
          break;

         case 4:
          currentOpponentMonsterSlot4Defense -= currentPlayerMonsterSlot1Attack;
          attackOpponentCardSlot4Animation();
            if(currentOpponentMonsterSlot4Defense<=0){
              document.getElementById("opponentMonsterSlot4").style.backgroundImage = "";
              document.getElementById("opponentMonster4Attack").innerHTML = "";
              document.getElementById("opponentMonster4Defense").innerHTML = "";
              opponentCardSlot4Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense;
            }
          break;  

          case 5:
            currentOpponentMonsterSlot5Defense -= currentPlayerMonsterSlot1Attack;
            attackOpponentCardSlot5Animation();
              if(currentOpponentMonsterSlot5Defense<=0){
                document.getElementById("opponentMonsterSlot5").style.backgroundImage = "";
                document.getElementById("opponentMonster5Attack").innerHTML = "";
                document.getElementById("opponentMonster5Defense").innerHTML = "";
                opponentCardSlot5Occupied = 0;
                resetTarget();
              } else {
                document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense;
              }
            break;
          } 
          playerMonster1AlreadyAttacked = 1;
  }else if (lastFieldSlotClicked == 2){
    if(attackTarget==undefined || playerMonster2AlreadyAttacked==1){
      return;
    }
    switch (attackTarget) {
      case 0:
        opponentDirectAttackAnimation();
        hpOpponent -= currentPlayerMonsterSlot2Attack;
        document.getElementById("hpOpponent").innerHTML = hpOpponent;
        break;

      case 1:
        currentOpponentMonsterSlot1Defense -= currentPlayerMonsterSlot2Attack;
        attackOpponentCardSlot1Animation();
          if(currentOpponentMonsterSlot1Defense<=0){
            document.getElementById("opponentMonsterSlot1").style.backgroundImage = "";
            document.getElementById("opponentMonster1Attack").innerHTML = "";
            document.getElementById("opponentMonster1Defense").innerHTML = "";
            opponentCardSlot1Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense;
          }
        break;
        
     case 2:
        currentOpponentMonsterSlot2Defense -= currentPlayerMonsterSlot2Attack;
        attackOpponentCardSlot2Animation();
          if(currentOpponentMonsterSlot2Defense<=0){
            document.getElementById("opponentMonsterSlot2").style.backgroundImage = "";
            document.getElementById("opponentMonster2Attack").innerHTML = "";
            document.getElementById("opponentMonster2Defense").innerHTML = "";
            opponentCardSlot2Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense;
          }
        break;

       case 3:
        currentOpponentMonsterSlot3Defense -= currentPlayerMonsterSlot2Attack;
        attackOpponentCardSlot3Animation();
          if(currentOpponentMonsterSlot3Defense<=0){
            document.getElementById("opponentMonsterSlot3").style.backgroundImage = "";
            document.getElementById("opponentMonster3Attack").innerHTML = "";
            document.getElementById("opponentMonster3Defense").innerHTML = "";
            opponentCardSlot3Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense;
          }
        break;

       case 4:
        currentOpponentMonsterSlot4Defense -= currentPlayerMonsterSlot2Attack;
        attackOpponentCardSlot4Animation();
          if(currentOpponentMonsterSlot4Defense<=0){
            document.getElementById("opponentMonsterSlot4").style.backgroundImage = "";
            document.getElementById("opponentMonster4Attack").innerHTML = "";
            document.getElementById("opponentMonster4Defense").innerHTML = "";
            opponentCardSlot4Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense;
          }
        break;  

        case 5:
          currentOpponentMonsterSlot5Defense -= currentPlayerMonsterSlot2Attack;
          attackOpponentCardSlot5Animation();
            if(currentOpponentMonsterSlot5Defense<=0){
              document.getElementById("opponentMonsterSlot5").style.backgroundImage = "";
              document.getElementById("opponentMonster5Attack").innerHTML = "";
              document.getElementById("opponentMonster5Defense").innerHTML = "";
              opponentCardSlot5Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense;
            }
          break;
        } 
        playerMonster2AlreadyAttacked = 1;
  } else if (lastFieldSlotClicked == 3){
    if(attackTarget==undefined || playerMonster3AlreadyAttacked==1){
      return;
    }
    switch (attackTarget) {
      case 0:
        opponentDirectAttackAnimation();
        hpOpponent -= currentPlayerMonsterSlot3Attack;
        document.getElementById("hpOpponent").innerHTML = hpOpponent;
        break;

      case 1:
        currentOpponentMonsterSlot1Defense -= currentPlayerMonsterSlot3Attack;
        attackOpponentCardSlot1Animation();
          if(currentOpponentMonsterSlot1Defense<=0){
            document.getElementById("opponentMonsterSlot1").style.backgroundImage = "";
            document.getElementById("opponentMonster1Attack").innerHTML = "";
            document.getElementById("opponentMonster1Defense").innerHTML = "";
            opponentCardSlot1Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense;
          }
        break;
        
     case 2:
        currentOpponentMonsterSlot2Defense -= currentPlayerMonsterSlot3Attack;
        attackOpponentCardSlot2Animation();
          if(currentOpponentMonsterSlot2Defense<=0){
            document.getElementById("opponentMonsterSlot2").style.backgroundImage = "";
            document.getElementById("opponentMonster2Attack").innerHTML = "";
            document.getElementById("opponentMonster2Defense").innerHTML = "";
            opponentCardSlot2Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense;
          }
        break;

       case 3:
        currentOpponentMonsterSlot3Defense -= currentPlayerMonsterSlot3Attack;
        attackOpponentCardSlot3Animation();
          if(currentOpponentMonsterSlot3Defense<=0){
            document.getElementById("opponentMonsterSlot3").style.backgroundImage = "";
            document.getElementById("opponentMonster3Attack").innerHTML = "";
            document.getElementById("opponentMonster3Defense").innerHTML = "";
            opponentCardSlot3Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense;
          }
        break;

       case 4:
        currentOpponentMonsterSlot4Defense -= currentPlayerMonsterSlot3Attack;
        attackOpponentCardSlot4Animation();
          if(currentOpponentMonsterSlot4Defense<=0){
            document.getElementById("opponentMonsterSlot4").style.backgroundImage = "";
            document.getElementById("opponentMonster4Attack").innerHTML = "";
            document.getElementById("opponentMonster4Defense").innerHTML = "";
            opponentCardSlot4Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense;
          }
        break;  

        case 5:
          currentOpponentMonsterSlot5Defense -= currentPlayerMonsterSlot3Attack;
          attackOpponentCardSlot5Animation();
            if(currentOpponentMonsterSlot5Defense<=0){
              document.getElementById("opponentMonsterSlot5").style.backgroundImage = "";
              document.getElementById("opponentMonster5Attack").innerHTML = "";
              document.getElementById("opponentMonster5Defense").innerHTML = "";
              opponentCardSlot5Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense;
            }
          break;
          } 
          playerMonster3AlreadyAttacked = 1;
  } else if (lastFieldSlotClicked == 4){
    if(attackTarget==undefined || playerMonster4AlreadyAttacked==1){
      return;
    }
    switch (attackTarget) {
      case 0:
        opponentDirectAttackAnimation();
        hpOpponent -= currentPlayerMonsterSlot4Attack;
        document.getElementById("hpOpponent").innerHTML = hpOpponent;
        break;

      case 1:
        currentOpponentMonsterSlot1Defense -= currentPlayerMonsterSlot4Attack;
        attackOpponentCardSlot1Animation();
          if(currentOpponentMonsterSlot1Defense<=0){
            document.getElementById("opponentMonsterSlot1").style.backgroundImage = "";
            document.getElementById("opponentMonster1Attack").innerHTML = "";
            document.getElementById("opponentMonster1Defense").innerHTML = "";
            opponentCardSlot1Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense;
          }
        break;
        
     case 2:
        currentOpponentMonsterSlot2Defense -= currentPlayerMonsterSlot4Attack;
        attackOpponentCardSlot2Animation();
          if(currentOpponentMonsterSlot2Defense<=0){
            document.getElementById("opponentMonsterSlot2").style.backgroundImage = "";
            document.getElementById("opponentMonster2Attack").innerHTML = "";
            document.getElementById("opponentMonster2Defense").innerHTML = "";
            opponentCardSlot2Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense;
          }
        break;

       case 3:
        currentOpponentMonsterSlot3Defense -= currentPlayerMonsterSlot4Attack;
        attackOpponentCardSlot3Animation();
          if(currentOpponentMonsterSlot3Defense<=0){
            document.getElementById("opponentMonsterSlot3").style.backgroundImage = "";
            document.getElementById("opponentMonster3Attack").innerHTML = "";
            document.getElementById("opponentMonster3Defense").innerHTML = "";
            opponentCardSlot3Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense;
          }
        break;

       case 4:
        currentOpponentMonsterSlot4Defense -= currentPlayerMonsterSlot4Attack;
        attackOpponentCardSlot4Animation();
          if(currentOpponentMonsterSlot4Defense<=0){
            document.getElementById("opponentMonsterSlot4").style.backgroundImage = "";
            document.getElementById("opponentMonster4Attack").innerHTML = "";
            document.getElementById("opponentMonster4Defense").innerHTML = "";
            opponentCardSlot4Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense;
          }
        break;  

        case 5:
          currentOpponentMonsterSlot5Defense -= currentPlayerMonsterSlot4Attack;
          attackOpponentCardSlot5Animation();
            if(currentOpponentMonsterSlot5Defense<=0){
              document.getElementById("opponentMonsterSlot5").style.backgroundImage = "";
              document.getElementById("opponentMonster5Attack").innerHTML = "";
              document.getElementById("opponentMonster5Defense").innerHTML = "";
              opponentCardSlot5Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense;
            }
          break;
        } 
        playerMonster4AlreadyAttacked = 1;
  } else if (lastFieldSlotClicked == 5){
    if(attackTarget==undefined || playerMonster5AlreadyAttacked==1){
      return;
    }
    switch (attackTarget) {
      case 0:
        opponentDirectAttackAnimation();
        hpOpponent -= currentPlayerMonsterSlot5Attack;
        document.getElementById("hpOpponent").innerHTML = hpOpponent;
        break;

      case 1:
        currentOpponentMonsterSlot1Defense -= currentPlayerMonsterSlot5Attack;
        attackOpponentCardSlot1Animation();
          if(currentOpponentMonsterSlot1Defense<=0){
            document.getElementById("opponentMonsterSlot1").style.backgroundImage = "";
            document.getElementById("opponentMonster1Attack").innerHTML = "";
            document.getElementById("opponentMonster1Defense").innerHTML = "";
            opponentCardSlot1Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster1Defense").innerHTML = currentOpponentMonsterSlot1Defense;
          }
        break;
        
     case 2:
        currentOpponentMonsterSlot2Defense -= currentPlayerMonsterSlot5Attack;
        attackOpponentCardSlot2Animation();
          if(currentOpponentMonsterSlot2Defense<=0){
            document.getElementById("opponentMonsterSlot2").style.backgroundImage = "";
            document.getElementById("opponentMonster2Attack").innerHTML = "";
            document.getElementById("opponentMonster2Defense").innerHTML = "";
            opponentCardSlot2Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster2Defense").innerHTML = currentOpponentMonsterSlot2Defense;
          }
        break;

       case 3:
        currentOpponentMonsterSlot3Defense -= currentPlayerMonsterSlot5Attack;
        attackOpponentCardSlot3Animation();
          if(currentOpponentMonsterSlot3Defense<=0){
            document.getElementById("opponentMonsterSlot3").style.backgroundImage = "";
            document.getElementById("opponentMonster3Attack").innerHTML = "";
            document.getElementById("opponentMonster3Defense").innerHTML = "";
            opponentCardSlot3Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster3Defense").innerHTML = currentOpponentMonsterSlot3Defense;
          }
        break;

       case 4:
        currentOpponentMonsterSlot4Defense -= currentPlayerMonsterSlot5Attack;
        attackOpponentCardSlot4Animation();
          if(currentOpponentMonsterSlot4Defense<=0){
            document.getElementById("opponentMonsterSlot4").style.backgroundImage = "";
            document.getElementById("opponentMonster4Attack").innerHTML = "";
            document.getElementById("opponentMonster4Defense").innerHTML = "";
            opponentCardSlot4Occupied = 0;
            resetTarget();
          } else {
            document.getElementById("opponentMonster4Defense").innerHTML = currentOpponentMonsterSlot4Defense;
          }
        break;  

        case 5:
          currentOpponentMonsterSlot5Defense -= currentPlayerMonsterSlot5Attack;
          attackOpponentCardSlot5Animation();
            if(currentOpponentMonsterSlot5Defense<=0){
              document.getElementById("opponentMonsterSlot5").style.backgroundImage = "";
              document.getElementById("opponentMonster5Attack").innerHTML = "";
              document.getElementById("opponentMonster5Defense").innerHTML = "";
              opponentCardSlot5Occupied = 0;
              resetTarget();
            } else {
              document.getElementById("opponentMonster5Defense").innerHTML = currentOpponentMonsterSlot5Defense;
            }
          break;
        } 
        playerMonster5AlreadyAttacked = 1;
  }
}
if (hpOpponent<=0){
  playerDisabled=1;
  youWin();
}
}
//#endregion

//#region misc

function setDeckCovers(){
  const getBgImage = 'url("'+ card0.art + '")'
  document.getElementById("playerDeck").style.backgroundImage = getBgImage;
  document.getElementById("opponentDeck").style.backgroundImage = getBgImage;
  updateCardsRemaining();
}

function updateCardsRemaining(){
  document.getElementById("playerDeck").innerHTML=cardsRemainingPlayer;
  document.getElementById("opponentDeck").innerHTML=cardsRemainingOpponent;
}


//#endregion

//#region draw funcionts
function refreshHand(){
  document.getElementById("playerHand1").style.backgroundImage = "";
  document.getElementById("playerHand2").style.backgroundImage = "";
  document.getElementById("playerHand3").style.backgroundImage = "";
  document.getElementById("playerHand4").style.backgroundImage = "";
  document.getElementById("playerHand5").style.backgroundImage = "";
  document.getElementById("playerHand6").style.backgroundImage = "";
  document.getElementById("playerHand7").style.backgroundImage = "";
  document.getElementById("playerHand8").style.backgroundImage = "";
  document.getElementById("playerHand9").style.backgroundImage = "";
  document.getElementById("playerHand10").style.backgroundImage = "";
  document.getElementById("playerHand11").style.backgroundImage = "";
  document.getElementById("playerHand1").style.backgroundImage = playerHand[0];
  document.getElementById("playerHand2").style.backgroundImage = playerHand[1];
  document.getElementById("playerHand3").style.backgroundImage = playerHand[2];
  document.getElementById("playerHand4").style.backgroundImage = playerHand[3];
  document.getElementById("playerHand5").style.backgroundImage = playerHand[4];
  document.getElementById("playerHand6").style.backgroundImage = playerHand[5];
  document.getElementById("playerHand7").style.backgroundImage = playerHand[6];
  document.getElementById("playerHand8").style.backgroundImage = playerHand[7];
  document.getElementById("playerHand9").style.backgroundImage = playerHand[8];
  document.getElementById("playerHand10").style.backgroundImage = playerHand[9];
  document.getElementById("playerHand11").style.backgroundImage = playerHand[10];
}

function drawCardPlayer(){
  let randomNumber = Math.floor(Math.random() * 20) + 1;
 
     if (randomNumber == alreadyDraw[0] || randomNumber == alreadyDraw[1] || randomNumber == alreadyDraw[2] ||
       randomNumber == alreadyDraw[3] || randomNumber == alreadyDraw[4] || randomNumber == alreadyDraw[5] ||
       randomNumber == alreadyDraw[6] || randomNumber == alreadyDraw[7] || randomNumber == alreadyDraw[8] ||
       randomNumber == alreadyDraw[9] || randomNumber == alreadyDraw[10] || randomNumber == alreadyDraw[11] ||
       randomNumber == alreadyDraw[12] || randomNumber == alreadyDraw[13] || randomNumber == alreadyDraw[14] ||
       randomNumber == alreadyDraw[15] || randomNumber == alreadyDraw[16] || randomNumber == alreadyDraw[17] ||
       randomNumber == alreadyDraw[18] || randomNumber == alreadyDraw[19]) {
       drawCardPlayer();
     } else {
       console.log(randomNumber);
       alreadyDraw.push(randomNumber); 
       let stringCardId = eval("card"+randomNumber+".art");
       let getBgImage = 'url("'+ stringCardId + '")';
       playerHand.push(getBgImage);
       refreshHand();
       cardsRemainingPlayer--;
       updateCardsRemaining();
       
       let getCardName = eval("card"+randomNumber+".name");
       cardInHandRightNow.push(getCardName);
      }
    
       
 }

function drawCardOpponent(){
  alreadyDrawOpponent++;

  switch (alreadyDrawOpponent) {
    case 1:
      document.getElementById("opponentHand1").style.opacity = 1;
      break;
    case 2:
      document.getElementById("opponentHand2").style.opacity = 1;
      break;
    case 3:
      document.getElementById("opponentHand3").style.opacity = 1;
      break;
    case 4:
      document.getElementById("opponentHand4").style.opacity = 1;
      break;
    case 5:
      document.getElementById("opponentHand5").style.opacity = 1;
      break;
    case 6:
      document.getElementById("opponentHand6").style.opacity = 1;
      break;
    case 7:
      document.getElementById("opponentHand7").style.opacity = 1;
      break;
    case 8:
      document.getElementById("opponentHand8").style.opacity = 1;
      break;
    case 9:
      document.getElementById("opponentHand9").style.opacity = 1;
      break;
    case 10:
      document.getElementById("opponentHand10").style.opacity = 1;
      break;
    case 11:
      document.getElementById("opponentHand11").style.opacity = 1;
      break;
  }

  cardsRemainingOpponent--;
  updateCardsRemaining();

  }
//#endregion

//#region rules help
function helpButton(){
document.getElementById("rulesHelp").style.opacity = 1;
document.getElementById("rulesHelpX").style.opacity = 1;
document.getElementById("rulesHelpX").style.pointerEvents = "auto";
}

function closeHelp(){
    document.getElementById("rulesHelp").style.opacity = 0;
    document.getElementById("rulesHelpX").style.opacity = 0;
    document.getElementById("rulesHelpX").style.pointerEvents = "none";
    }

//#endregion

//#region  start
  function start(){

    ost.play();
    document.getElementById("startScreen").style.opacity = 0;
    document.getElementById("logo").style.opacity = 0;
    document.getElementById("startButton").style.opacity = 0;
    document.getElementById("startButton").style.pointerEvents = "none";
    
    if(started==1){
      return}

    let randomNumber = Math.floor(Math.random() * 2) + 1;
    switch (randomNumber) {
      case 1:
        coinTossA();
        console.log("A");
        cpuWonCoinToss = 0;
        break;
      case 2:
        coinTossB();
        console.log("B");
        cpuWonCoinToss = 1;
        break;
    }
      setDeckCovers();
  
    setTimeout(()=>document.getElementById("hpPlayer").style.opacity = 1,1500);
    setTimeout(()=>document.getElementById("manaPlayer").style.opacity = 1, 2500);

    setTimeout(()=>document.getElementById("hpOpponent").style.opacity = 1,1500);
    setTimeout(()=>document.getElementById("manaOpponent").style.opacity = 1, 2500);
    
    setTimeout(()=>document.getElementById("hpPlayer").innerHTML=hpPlayer, 3500);
    setTimeout(()=>document.getElementById("manaPlayer").innerHTML=manaPlayer, 3500);
    setTimeout(()=>document.getElementById("hpOpponent").innerHTML=hpOpponent, 3500);
    setTimeout(()=>document.getElementById("manaOpponent").innerHTML=manaOpponent, 3500);
  
    setTimeout(()=>document.getElementById("currentRound").style.opacity = 1,4000);

    setTimeout(()=>document.getElementById("passRoundButton").style.opacity = 1, 5000);
    setTimeout(()=>document.getElementById("passRoundButton").style.pointerEvents = "auto", 5000);

    setTimeout(()=>document.getElementById("directAttackTarget").style.opacity = "1", 4500);
    setTimeout(()=>document.getElementById("directAttackTarget").style.transition = "all 0s ease", 7500);


    setTimeout(()=>document.getElementById("clickedCard").style.opacity = 1,5000);

    setTimeout(()=>document.getElementById("playCard").style.opacity = 1, 5000);
    setTimeout(()=>document.getElementById("playCard").style.pointerEvents = "auto", 5000);

    setTimeout(()=>document.getElementById("attackButton").style.opacity = 1, 4000);
    setTimeout(()=>document.getElementById("attackButton").style.pointerEvents = "auto", 4000);
    setTimeout(()=>document.getElementById("clickedCardField").style.opacity = 1, 4000);
  
  
  
    setTimeout(()=>cardsRemainingOpponent--,0900);
    setTimeout(()=>drawCardPlayer(), 8000);
    setTimeout(()=>cardsRemainingOpponent--,1100);
    setTimeout(()=>drawCardPlayer(), 8200);
    setTimeout(()=>cardsRemainingOpponent--,1300);
    setTimeout(()=>drawCardPlayer(), 8400);
    setTimeout(()=>cardsRemainingOpponent--,1500);
    setTimeout(()=>drawCardPlayer(), 8600);
  
    setTimeout(()=>document.getElementById("opponentHand1").style.opacity = 1,8000);
    setTimeout(()=>document.getElementById("opponentHand2").style.opacity = 1, 8200);
    setTimeout(()=>document.getElementById("opponentHand3").style.opacity = 1, 8400);
    setTimeout(()=>document.getElementById("opponentHand4").style.opacity = 1, 8600);
  
    setTimeout(()=>startPassRound(), 10000);
  
    if (cpuWonCoinToss == 1){
    setTimeout(()=>playerDisabled=0, 15000);
    setTimeout(()=>passRoundFirstRound(),10000);
    }
  
    if (cpuWonCoinToss == 0){
      setTimeout(()=>playerDisabled=0, 10000);
      setTimeout(()=>drawCardPlayer(), 10000);
      }
  
    alreadyDrawOpponent = 4;
    started=1;
  }


//#endregion

//#region Win Lose animations
function youWin(){
    setTimeout(()=>document.getElementById("youWin").style.opacity = "1", 0);
};

function youLose(){
  setTimeout(()=>document.getElementById("youLose").style.opacity = "1", 0);
};

//#endregion

//#region onload logo
function tittleScreen(){
  document.getElementById("logo").style.opacity = 1;
  setTimeout(()=>document.getElementById("logo").style.transition = "all 2s ease",1000);
  setTimeout(()=>document.getElementById("startButton").style.opacity = 1,3000);
  setTimeout(()=>document.getElementById("startButton").style.pointerEvents = "auto",3000);

}
//#endregion

//#region ost

var ost = new Audio ("file:///C:/Users/joao/Desktop/cg/art/sound/shingeki_no_kyojin_attack_on_titan_fight_theme_5935666973512431596.mp3");

let muteButtonImageHolder = eval("card23.art");
let muteButtonImage = 'url("'+ muteButtonImageHolder + '")';

let unMuteButtonImageHolder = eval("card22.art");
let unMuteButtonImage = 'url("'+ unMuteButtonImageHolder + '")';

function muteUnmute(){
if(muted==0){
  ost.pause();
  muted=1;
  document.getElementById("mute").style.backgroundImage = muteButtonImage;
} else {
  ost.play();
  muted=0;
  document.getElementById("mute").style.backgroundImage = unMuteButtonImage;
}

}


//#endregion