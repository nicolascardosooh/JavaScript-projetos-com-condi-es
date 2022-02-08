var idade = 25 // VOCÊ PODE MUDAR SUA IDADE AQUI PARA TESTAR
console.log (`você tem ${idade} anos.`) // AQUI MOSTRA QUANTOS ANOS VOCÊ TEM
if (idade < 18){ // AQUI MOSTRA QUE SE A SUA IDADE FOR MENOR QUE 18 VOCÊ NÃO VOTA
    console.log('não vota')
} else if (idade >= 16 && idade < 18 || idade > 67) { //AQUI MOSTRA QUE SE A SUA IDADE FOR ENTRE 16 E 18 ANOS, OU ACIMA DE 67 ANOS, SEU VOTO É OPCIONAL
        console.log("voto opcional")
    } else{ // E AQUI MOSTRA Q SE FOR ACIMA DE 18 SEU VOTO É OBRIGATÓRIO
        console.log("voto obrigatório")
    }