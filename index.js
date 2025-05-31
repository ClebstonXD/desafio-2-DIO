// Função que calcula o saldo de vitórias
function saldoVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias;

}
// Função que define o nível do jogador
function nivelRanking(nivel){
   
    let saldo = nivel;


    if (saldo <=10){
        return "Ferro";

    }else if (saldo >= 11 && saldo <= 20){
        return "Bronze";

    }else if (saldo >= 21 && saldo <= 50){
        return "Prata";

    }else if (saldo >= 51 && saldo <= 80){
        return "Ouro";

    }else if (saldo >= 81 && saldo <= 90){
        return "Diamante";

    }else if(saldo >= 91 && saldo <= 100){
        return "Lendário";

    }else {
        return "Imortal";
    }
}

// Simulando partidas com um loop
let vitorias = 100;
let derrotas = 8;

const partidas = [true, false, true, false, true, false];
// True = vitória, False = derrota

for (let i = 0; i < partidas.length; i++){
    if (partidas[i]) {
        vitorias++;
    }else {
        derrotas++;
    }
}

// Cálculo
let saldo = saldoVitorias(vitorias, derrotas)
let nivel = nivelRanking(saldo);

console.log(`O Jogador tem saldo de ${saldo} vitórias e está no nível ${nivel}!`);


