let table = document.querySelectorAll("td");
let play = 0;
let position = 0;
let zero, one, two, three, four, five, six,  seven, eight;
//let houseArray = [zero, one, two, three, four, five, six,  seven, eight]; 
let houseArray = Array.from(table);

table.forEach(house =>{
    house.setAttribute("id", position++);
})

position= 0;

table.forEach(house =>{
    
    house.addEventListener("click", event =>{
        
        if(event.target.innerText == ""){
            if(play % 2 == 0) {
                event.target.innerText = "O";
                houseArray[house] = "O"
                
                console.log(houseArray);
            } else {
                event.target.innerText = "X";
                houseArray[house] = "X"
                
                console.log(houseArray);
            }
            play++;
            verifyWinner(play)
        } else{
            alert("Invalid move");
        }
        
    })
    
})


function verifyWinner(play) {
    let someoneWined = false;

    if(table[0].innerText == "O" && table[1].innerText== "O" && table[2].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[3].innerText == "O" && table[4].innerText== "O" && table[5].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[6].innerText == "O" && table[7].innerText== "O" && table[8].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[0].innerText == "O" && table[3].innerText== "O" && table[6].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[1].innerText == "O" && table[4].innerText== "O" && table[7].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[2].innerText == "O" && table[5].innerText== "O" && table[8].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[2].innerText == "O" && table[4].innerText== "O" && table[6].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } else if (table[0].innerText == "O" && table[4].innerText== "O" && table[8].innerText == "O") {
        alert("Player one wins!");
        restartGame();
        someoneWined = true;
    } 

    if(table[0].innerText == "X" && table[1].innerText== "X" && table[2].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[3].innerText == "X" && table[4].innerText== "X" && table[5].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[6].innerText == "X" && table[7].innerText== "X" && table[8].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[0].innerText == "X" && table[3].innerText== "X" && table[6].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[1].innerText == "X" && table[4].innerText== "X" && table[7].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[2].innerText == "X" && table[5].innerText== "X" && table[8].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[2].innerText == "X" && table[4].innerText== "X" && table[6].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    } else if (table[0].innerText == "X" && table[4].innerText== "X" && table[8].innerText == "X") {
        alert("Player two wins!");
        restartGame();
        someoneWined = true;
    }

    if (play == 9 && !someoneWined){
        alert("Empate!");
        restartGame();
    }

}


function restartGame() {

    table.forEach(house =>{
        house.innerText = "";
        play = 0;
    })

}

















/*
for (let i = 0; i < houseArray.length; i++) {
    if (houseArray[i] == "") {
        houseArray[i] = "O";
        console.log(houseArray);
        break;
    }
} */