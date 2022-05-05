var listaDeAlunos = [];

var Aluno = {
    nomeAluno: "",
    periodoAluno: 0
};

//sdsdsd

function adicionarAluno(){
    var nome = document.getElementById("nomealuno").value;
    var periodo = document.getElementById("periodoaluno").value;
    var a1 = Object.create(Aluno);
    a1.nomeAluno = nome;
    a1.periodoAluno = periodo;
    listaDeAlunos.push(a1);
    console.log("Inserindo aluno:" + listaDeAlunos);

}
function mostrarAlunos(){
    var listaalunosHTML ="";
    for(var i=0; i < listaDeAlunos.length ; i++){
        listaalunosHTML += listaDeAlunos[i].nomeAluno +"-" +
                         (listaDeAlunos[i].periodoAluno) + "</br>"; 
        console.log("adicionando elemento" + i);  
    }
    document.getElementById("saidaalunos").innerHTML = listaalunosHTML;
}