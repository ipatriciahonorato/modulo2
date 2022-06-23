function calculaPrimos(){

    let inicio_intervalo = document.getElementById("inicio-intervalo").value;
    let fim_intervalo = document.getElementById("fim-intervalo").value;
    var lista_primos = [];

    for (let i = inicio_intervalo; i <= fim_intervalo; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            lista_primos += i + ", ";
        }
    }


    document.getElementById("resultado").innerHTML = "A sequência é: " + inicio_intervalo + " a " + fim_intervalo + " é: " + lista_primos; 

};