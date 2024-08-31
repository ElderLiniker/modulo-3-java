/*
   operadores logicos

   (&& )-> se tiver um falso no meio, tudo se torna falso 
   exemplo:

   console.log(true && false && true)- resultado tudo falso

    ||-  (ou)-> pode ter 1000 valores falsos mais se tuver um verdadeiro, ta tranquilo, resultado verdadeiro...

    !-> operador de negação 

    inverte o valor




*/
/*
const digitarasenha = true
const digitarotoken= true
const nuemrodaconta = true
if( digitarasenha || digitarotoken || nuemrodaconta)

   { console.log("logado com sucesso")}

else{

    console.log("Autenticação FALHOU")
}*/
/*
const digitarasenha = true
const digitarotoken= false
const nuemrodaconta = true
if( digitarasenha && digitarotoken && nuemrodaconta)

   { console.log("logado com sucesso")}

else{

    console.log("Autenticação FALHOU")}*/


const digitarasenha = true
const digitarotoken= false
const nuemrodaconta = true
if( !(digitarasenha && digitarotoken && nuemrodaconta))

   { console.log("logado com sucesso")}

else{

    console.log("Autenticação FALHOU")}

