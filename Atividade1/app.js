//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo").value.trim();

    if (nomeInput !== "") {
        amigos.push(nomeInput);
        atualizarLista();
        document.getElementById("amigo").value = ""; // Limpa o campo de input
    } else {
        alert("Digite um nome antes de adicionar.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length ==0) {
        alert("Adicione pelo menos dois amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}
function exibirResultado(amigo){
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML="";

    let item = document.createElement("li");
    item.textContent=`Sorteado: ${amigo}` ;
    listaResultado.appendChild(item);
}