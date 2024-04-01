let campos = document.querySelectorAll('td');
let jogada = 1;
let posicao = 0;
let tabuleiro = [0,0,0,
                 0,0,0,
                 0,0,0];
let ativo = true;
let texto = document.createElement('h1');
document.body.appendChild(texto);
let restart = document.createElement("button")
restart.innerText = "Reiniciar Jogo"


campos.forEach( casa => {
    casa.setAttribute("posicao",posicao++);
    
    casa.addEventListener("click", event =>{
        if (ativo){
            let clicado = event.target;
            let posicao = clicado.getAttribute('posicao');
            let atual = 0;
            if (clicado.innerText == ''){
                if (jogada % 2 == 1){
                    atual = "O";
                }else{
                    atual = "X";
                }
                clicado.innerText = atual;
                tabuleiro[posicao] = atual;
                jogada++;
                let ganhador = verificaVitoria()
                if (ganhador){
                    texto.innerText = `O jogador ${ganhador} venceu!`;
                    ativo = false;
                    document.body.appendChild(restart)
                    restart.addEventListener("click", event=>{
                        restartGame();
                    })

                } else if(jogada == 10){
                    texto.innerText = "Deu velha!"
                    document.body.appendChild(restart)
                    restart.addEventListener("click", event=>{
                        restartGame();
                    })
                }
            }else{
                alert("Jogada invalida!");
            }
        }        

    });
});


function verificaVitoria(){
    let ganhador = null;
    if (((tabuleiro[0] == tabuleiro[1]) && //linha 1
         (tabuleiro[1] == tabuleiro[2]) &&
         (tabuleiro[0] != 0) &&
         (ganhador = tabuleiro[0])) || 
         
        ((tabuleiro[3] == tabuleiro[4]) && //linha 2
         (tabuleiro[4] == tabuleiro[5]) &&
         (tabuleiro[3] != 0) &&
         (ganhador = tabuleiro[3])) || 
          
        ((tabuleiro[6] == tabuleiro[7]) && //linha 3
         (tabuleiro[7] == tabuleiro[8]) &&
         (tabuleiro[6] != 0) &&
         (ganhador = tabuleiro[6])) || 
          
        ((tabuleiro[0] == tabuleiro[3]) && //coluna 1
        (tabuleiro[3] == tabuleiro[6]) &&
        (tabuleiro[0] != 0) &&
        (ganhador = tabuleiro[0])) || 
        
        ((tabuleiro[1] == tabuleiro[4]) && //coluna 2
        (tabuleiro[4] == tabuleiro[7]) &&
        (tabuleiro[1] != 0) &&
        (ganhador = tabuleiro[1])) || 
          
        ((tabuleiro[2] == tabuleiro[5]) && //coluna 3
        (tabuleiro[5] == tabuleiro[8]) &&
        (tabuleiro[2] != 0) &&
        (ganhador = tabuleiro[2])) || 
        
        ((tabuleiro[0] == tabuleiro[4]) && //diagonal 1
        (tabuleiro[4] == tabuleiro[8]) &&
        (tabuleiro[0] != 0) &&
        (ganhador = tabuleiro[0])) || 
        
        ((tabuleiro[2] == tabuleiro[4]) && //diagonal 2
        (tabuleiro[4] == tabuleiro[6]) &&
        (tabuleiro[2] != 0) &&
        (ganhador = tabuleiro[2])))
    {
        return ganhador;
    }

    return ganhador;
}

function restartGame() {
    texto.innerText = ""
    campos.forEach(house =>{
        house.innerText = ""
    })
    jogada = 1
    ativo = true
    tabuleiro = [0,0,0,
                0,0,0,
                0,0,0];
    document.body.removeChild(restart)
}