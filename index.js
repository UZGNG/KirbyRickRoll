

var character1, character2, place, winner, winnerReason;
var characterList1 = ['Kirby','Elfilin', 'Ribbon'];
var characterList2 = ['Meta Knight','King DeDeDe', '0', 'Dark Matter', 'Marx', 'Void Termina', 'Fecto Elfilis'];
var places = ['on Planet Popstar', 'on Dream Land', 'on Halberd', 'at Kirby\'s House', 'in Mason\'s Livingroom'];

var characterList1Idx = Math.floor(Math.random() * characterList1.length);
var characterList2Idx = Math.floor(Math.random() * characterList2.length);
var placeIdx = Math.floor(Math.random() * places.length);


character1 = characterList1[characterList1Idx];
character2 = characterList2[characterList2Idx];
place = places[placeIdx];

var winners = [character1, character2];
var winnerIdx = Math.floor(Math.random() * winners.length);
winner = winners[winnerIdx]
var winnerReasons = [`they were cool`, `${winner}'s opponent needs to get gud`, `${winner} is better at Nintendo games`, `${winner} had a weapon of mass destruction`]
var winnerReasonIdx = Math.floor(Math.random() * winnerReasons.length);
winnerReason = winnerReasons[winnerReasonIdx]

var message = `${character1} had a long fought battle against ${character2} ${place} and ${winner} won because ${winnerReason}`;
document.getElementById('randoBtn').addEventListener('click', function randomize() {
    document.getElementById("main-text").innerHTML = message

})


document.getElementById("reset").addEventListener("click", function reset() {
    location.reload()
})