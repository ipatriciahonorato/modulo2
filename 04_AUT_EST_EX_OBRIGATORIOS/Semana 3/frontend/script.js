function calculo(){
    debugger
    var valor= document.getElementById("velocidade").value;
    const gravidade= 10;
    var tempo;
    var altura;
    tempo= valor/gravidade;
    altura= (valor*valor)/(gravidade*2)
    document.getElementById("resultado").innerHTML = "altura máxima: " + altura + "</br>" + "tempo: " + tempo;
}