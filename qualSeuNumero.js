
let    numeroEscolhido = Math.floor((Math.random() * 9)),
        acertou = false,
        palpite = ' ';

    do {
        palpite = prompt ('Qual o seu o seu número? ', 0);
        if (parseInt(palpite) === numeroEscolhido){
            acertou = true;
        }

}while(palpite !==  ' ' && parseInt(palpite) !== numeroEscolhido) 