function calcularMedia() {
    // referências aos elementos  comentario
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var inNota3 = document.getElementById("inNota3");
    var inNota4 = document.getElementById("inNota4");


    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");


    // obtém os valores
    var nome = inNome.value;


    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var nota3 = Number(inNota3.value);
    var nota4 = Number(inNota4.value);


    // validação
    if (
        nome == "" ||
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3) ||
        isNaN(nota4)
    ) {
        alert("Preencha corretamente nome e notas.");
        return;
    }


    // cálculo da média
    var media = (nota1 + nota2 + nota3 + nota4) / 4;


    // exibe média
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);


    // situação do aluno
    if (media >= 7) {
        outSituacao.textContent =
            "Parabéns " + nome + "! Você foi aprovado(a)";
        outSituacao.style.color = "blue";


    } else if (media >= 4) {
        outSituacao.textContent =
            "Atenção " + nome + ". Você está em exame";
        outSituacao.style.color = "orange";


    } else {
        outSituacao.textContent =
            "Ops " + nome + "... Você foi reprovado(a)";
        outSituacao.style.color = "red";
    }
}


// botão
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);