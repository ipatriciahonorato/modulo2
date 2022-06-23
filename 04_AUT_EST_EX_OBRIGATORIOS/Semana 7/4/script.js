function total(){
    var numero = (document.getElementById("valor").value)
    var turno = document.querySelector('input[name="Turno"]:checked').value
    var vooDiurno = 200
    var vooNoturno = 100
    var ValorFinal = document.getElementById("Valor")
    
    console.log(numero)
    console.log(turno)

    if(turno == "Diurno"){
        if(numero >= 50){
            var total1 = (vooDiurno*0.4)*numero
            console.log(total1)
            ValorFinal.innerHTML = total1
        }
        else{
            var total1 = vooDiurno*numero
            console.log(total1)
            ValorFinal.innerHTML = total1
        }
    }
    else {
        if (numero > 50){
            var total2 = (vooNoturno*0.2)*numero
            console.log(total2)
            ValorFinal.innerHTML= total2
        }
        else{
            var total2 = vooNoturno*numero
            ValorFinal.innerHTML = total2
        }
    }
}