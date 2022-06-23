function geraFibonnaci (){
    let numero_digitos = document.getElementById("numero-fibo").value;
    var numero_atual = 0;
    var numero_anterior = 1;
    var numero_penultimo = 1;
    var serie_fibonacci = [];


    for (let i= 0; i < numero_digitos; i++){
        console.log(numero_atual);
        numero_atual = numero_atual + numero_penultimo;
        console.log(numero_atual);
        numero_penultimo = numero_anterior;
        numero_anterior = numero_atual;
    }

}