/*
sortear um numero aleatorio....





*/









const sortear = document.querySelector(".meu-button")

const sorteado = document.querySelector("p")

function numbergenerate() {
    const min = Math.ceil( document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)


if( min>= max){
    alert("o valor minimo tem que ser menor que o maximo")
}
else{
    const result = Math.floor(Math.random() * (max - min +1)) + min;
   
sorteado.innerHTML= result


}



 
    
}


sortear.addEventListener("click", numbergenerate)