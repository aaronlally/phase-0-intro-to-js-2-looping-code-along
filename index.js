
function writeCards(stringNames, event) {
    const cards = [];
    for (let i = 0; i < stringNames.length; i++) {
        cards.push(`Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`); 
        }
        return cards;
    }
function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--;
    } 
}