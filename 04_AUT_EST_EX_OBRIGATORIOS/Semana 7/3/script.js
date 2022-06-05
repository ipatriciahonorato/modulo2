function verificar(){
    var numeros = document.getElementById("PhoneNumber").value
    var listaNumeros = numeros.split("");

    if (listaNumeros [0] == "(" && listaNumeros[3] == ")" && listaNumeros[9] == "-"){
        window.alert("Número inserido corretamente.")
    }
    else{
        window.alert("Incorreto!Insira os números no formato: (XX)XXXXX-XXXX")
    }
}