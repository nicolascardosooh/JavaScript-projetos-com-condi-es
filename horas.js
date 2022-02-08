var agora = new Date()
var horas = agora.getHours() // PEGA A HORA DIRETA DO SEU COMPUTADOR
// VOCÊ PODE TESTAR UM HORÁRIO TAMBÉM MUDANDO O VALOR DA VARIÁVEL ADICIONANDO O SEGUINTE CÓDIGO:
// var horas = horário que você quer,  exemplo: 12
console.log(`Agora são exatamente ${horas} horas.`) // MOSTRA QUE HORAS SÃO
if (horas >= 6 && horas < 12) { // SE O HORÁRIO FOR MAIOR OU IGUAL A 6H E MENOR QUE 12H
    console.log("bom dia")      //APARECE UMA MENSAGEM DE BOM DIA
} else if (horas >= 13 && horas <= 18) { // SE O HORÁRIO FOR MENOR OU IGUAL A 13H E MAIOR QUE 18H
    console.log("boa tarde")            // APARECE UMA MENSAGEM DE BOA TARDE
} else if (horas > 19 && horas < 23) { // SE O HORÁRIO FOR MAIOR QUE 19H E MENOR QUE 23H
    console.log("boa noite")           // APARECE UMA MENSAGEM DE BOA NOITE
} else {
    (horas >= 0 && horas <= 5)          // SE O HORÁRIO FOR MAIOR QUE 0H E MENOR OU IGUAL A 5H
    console.log("boa madrugada")       // APARECE UMA MENSAGEM DE BOA MADRUGADA
}