let players = [
    { nickname: "Nikimorus", pontuacao: 2002 },
    { nickname: "Felipão da DIO", pontuacao: 850 },
    { nickname: "Vesg", pontuacao: 5500 },
    { nickname: "NoobMaster", pontuacao: 10500 },
    { nickname: "xXGamerProXx", pontuacao: 999 },
    { nickname: "Paysanduba", pontuacao: 7500 }
];

for (let player of players) {
    let nivel;
    let pontuacao = player.pontuacao; // Pega a pontuação do jogador atual


if (pontuacao <= 1000) {
    nivel = "Ferro"
}
else if (pontuacao <=1001, pontuacao <2000) {
    nivel = "Bronze"
}
else if (pontuacao <=2001, pontuacao <5000) {
    nivel = "Prata"
}
else if (pontuacao <=5001, pontuacao <7000) {
    nivel = "Ouro"
}
else if (pontuacao <=7001, pontuacao <8000) {
    nivel = "Platina"
}
else if (pontuacao <=8001, pontuacao <9000) {
    nivel = "Ascendente"
}
else if (pontuacao <=9001, pontuacao <10000) {
    nivel = "Imortal"
}
else if (pontuacao >=10001) {
    nivel = "Radiante"
}

console.log ("O jogador " + player.nickname + " tem a pontuação " +pontuacao + " e é do nível " + nivel)
}