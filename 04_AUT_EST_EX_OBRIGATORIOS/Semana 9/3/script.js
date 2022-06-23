function ordenaNomes(){

    primeiro_nome = document.getElementById("nome-1").value;
    segundo_nome = document.getElementById("nome-2").value;
    terceiro_nome = document.getElementById("nome-3").value;
    
    nomes_lista = [primeiro_nome, segundo_nome, terceiro_nome];
    nomes_ordem_alfabetica = nomes_lista.sort()

    document.getElementById("resultado").innerHTML = "Ordem alfabética: " + nomes_lista;

};
