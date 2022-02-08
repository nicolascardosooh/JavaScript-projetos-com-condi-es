var agora = new Date()
var diasem = agora.getDay() // PEGA O DIA DA SEMANA

// diasem = dia que você quer testar, exemplo: diasem = 1

switch (diasem) { // AQUI SE A RESPOSTA FOR ENTRE 0 E 6, DEPENDENDO DE QUAL, O CONSOLE DIZ QUAL É O DIA DA SEMANA
                  // DE ACORDO COM A NUMERAÇÃO, A SEMANA COMEÇA NO 0 E TERMINA NO 6
                  // SE O NUMERO DIGITADO FOR ENTRE 0 E 6, ELE EXECUTA O BLOCO E PARA NO BREAK
    case 0:
        console.log("domingo") 
        break
    case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terça")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log("quinta")
        break
    case 5:
        console.log("sexta")
        break
    case 6:
        console.log("sabado")
        break
default:
console.log("[ERRO] dia invalido") // PORÉM,  SE O NÚMERO DIGITADO FOR DIFERENTE DE 0 A 6, ELE EXIBE A MENSAGEM DE ERRO.
break
    }


