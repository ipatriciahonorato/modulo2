var Disciplina = {
    nomeDisciplina: "",
    pesoG:1,
    pesoS:1,
    pesoC:1,
    pesoL:1, 
    listaNotas:[10,5,3],
    geraNotas: function (nrNotas){
        for(var j=0 ; j < nrNotas ; j++){
            var notaAleatorio = Math.floor(Math.random()*(11));

            listaNotas.push(notaAleatorio);
        }
    },
    calcularMedias: function(){
        var total= 0;
        for(var i=0; i < this.listaNotas.lenght ; i++){
            /*lenght é quantidade de elementos*/
            /*i++ vai sempre acrescentar um valor para todos os valores da lista*/
            total += this.listaNotas[i];
            /*o i está sendo usado como um contador adicional*/
        };
        return (total/this.listaNotas.lenght);
    }

};
var CasaHogwart ={
    nomeCasa: "",
    nrCasa: 0,
    mediaDisciplinas: 0,
    listaDisciplinas:[],
    addDisciplina: function (x){
        this.listaDisciplinas.push(x);
    },
    calculaMedias: function(){
        for(var l=0; l < this.listaDisciplinas.lenght ; l++){
            var mediaDis = this.listaDisciplinas[1].calculaMediasDis();
            if(this.nrCasa == 1){
                mediaDis = mediaDis * this.listaDisciplinas[1].pesoG;
            };
            if(this.nrCasa == 2){
                mediaDis = mediaDis * this.listaDisciplinas[1].pesoS;
            };
            if(this.nrCasa == 3){
                mediaDis = mediaDis * this.listaDisciplinas[1].pesoC;
            };
            if(this.nrCasa == 4){
                mediaDis = mediaDis * this.listaDisciplinas[1].pesoL;
            };
        }
        this.mediaDisciplinas = mediaDis / this.listaDisciplinas.lenght;

    }
};

var grifinoria = Object.create(CasaHogwart);
var sonserina = Object.create(CasaHogwart);
var corvinal = Object.create(CasaHogwart);
var lufalufa = Object.create(CasaHogwart);

grifinoria.nomeCasa = "Grifinoria",
grifinoria.nrCasa: 1;
//acrescentar outras casas
grifinoria.mediaDisciplinas: 0,

function adicionarDisciplina(){
    var disciplina = Object.create(Disciplina);
    disciplina.nomeDisciplina = document.getElementById("nomeDis").value;
    disciplina.pesoG = Number(document.getElementById("pesoG").value);
    disciplina.pesoS = Number(document.getElementById("pesoS").value);
    disciplina.pesoC = Number(document.getElementById("pesoC").value);
    disciplina.pesoL = Number(document.getElementById("pesoL").value);
    console.log(disciplina);
    disciplina.geraNotas(50);
    grifinoria.addDisciplina(disciplina);
    sonserina.addDisciplina(disciplina);
    corvinal.addDisciplina(disciplina);
    lufalufa.addDisciplina(disciplina);
    listaDisciplinas.push(disciplina); 

}

function calcular(){
    grifinoria.calculaMedias(disciplina);
    sonserina.calculaMedias(disciplina);
    corvinal.calculaMedias(disciplina);
    lufalufa.calculaMedias(disciplina);
    //alert("Funcao Calcular"); para verificar se o botão está funcionano
};

function geraJSON(){
    //alert ("Funcao JSON" + String (9/4) );
    console.log(listaDisciplinas);
    document.getElementById("outJSON").textContent = JSON.stringify(grifinoria);
};
