let playerCardSlot1Occupied = false;
let playerCardSlot2Occupied = false;
let playerCardSlot3Occupied = true;
let playerCardSlot4Occupied = false;
let playerCardSlot5Occupied = false;
let playerSpellZoneOccupied = false;

let opponentCardSlot1Occupied = false;
let opponentCardSlot2Occupied = false;
let opponentCardSlot3Occupied = true;
let opponentCardSlot4Occupied = false;
let opponentCardSlot5Occupied = false;
let opponentSpellZoneOccupied = false;
// ------------------------

function updateInfoField(playerCardSlotOccupied, playerCardSlot){
 if (playerCardSlotOccupied == false) {
      return;
  }
  const temporaryImage = window.getComputedStyle(playerCardSlot).getPropertyValue("background-image");
  document.getElementById("screen").style.backgroundImage = temporaryImage;
}

function updateInfoHand(handSlot){
  const temporaryImage = window.getComputedStyle(handSlot).getPropertyValue("background-image");
  document.getElementById("screen").style.backgroundImage = temporaryImage;
}

// ------------------------

document.getElementById("playerMainZone1").addEventListener("mouseover", function () {
updateInfoField(playerCardSlot3Occupied,playerMainZone1)
});
document.getElementById("playerMainZone2").addEventListener("mouseover", function () {
updateInfoField(playerCardSlot3Occupied,playerMainZone2)
});
document.getElementById("playerMainZone3").addEventListener("mouseover", function () {
updateInfoField(playerCardSlot3Occupied,playerMainZone3)
});
document.getElementById("playerMainZone4").addEventListener("mouseover", function () {
updateInfoField(playerCardSlot3Occupied,playerMainZone4)
});
document.getElementById("playerMainZone5").addEventListener("mouseover", function () {
updateInfoField(playerCardSlot3Occupied,playerMainZone5)
});
document.getElementById("playerSpellZone").addEventListener("mouseover", function () {
updateInfoField(playerSpellZoneOccupied,playerSpellZone)
});

document.getElementById("opponentMainZone1").addEventListener("mouseover", function () {
updateInfoField(opponentCardSlot3Occupied,opponentMainZone1)
});
document.getElementById("opponentMainZone2").addEventListener("mouseover", function () {
updateInfoField(opponentCardSlot3Occupied,opponentMainZone2)
});
document.getElementById("opponentMainZone3").addEventListener("mouseover", function () {
updateInfoField(opponentCardSlot3Occupied,opponentMainZone3)
});
document.getElementById("opponentMainZone4").addEventListener("mouseover", function () {
updateInfoField(opponentCardSlot3Occupied,opponentMainZone4)
});
document.getElementById("opponentMainZone5").addEventListener("mouseover", function () {
updateInfoField(opponentCardSlot3Occupied,opponentMainZone5)
});
document.getElementById("opponentSpellZone").addEventListener("mouseover", function () {
updateInfoField(opponentSpellZoneOccupied,opponentSpellZone)
});


// ------------------------

document.getElementById("playerHand1").addEventListener("mouseover", function () {
updateInfoHand(playerHand1)
});
document.getElementById("playerHand2").addEventListener("mouseover", function () {
updateInfoHand(playerHand2)
});
document.getElementById("playerHand3").addEventListener("mouseover", function () {
updateInfoHand(playerHand3)
});
document.getElementById("playerHand4").addEventListener("mouseover", function () {
updateInfoHand(playerHand4)
});
document.getElementById("playerHand5").addEventListener("mouseover", function () {
updateInfoHand(playerHand5)
});
document.getElementById("playerHand6").addEventListener("mouseover", function () {
updateInfoHand(playerHand6)
});

