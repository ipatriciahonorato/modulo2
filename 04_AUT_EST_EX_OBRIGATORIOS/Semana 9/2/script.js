function Somar(){
    var entrada = document.getElementById("valor").value
    var entrada_separada= entrada.split("")
    var soma = 0;

    for (let i=0; i < entrada_separada.length; i++){
        soma += parseInt(entrada_separada[i]);
    }
    document.getElementById("Valor").innerHTML = soma
    Valor.innerHTML = `${soma}`
}
