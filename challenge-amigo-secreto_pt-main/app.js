let amigos = []; // Array para armazenar os nomes

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação do campo de texto
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array e atualizar a lista
    amigos.push(nome);
    input.value = ""; // Limpar o campo de texto
    atualizarLista();
}

// Função para atualizar a lista de amigos exibida na página
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpar a lista antes de adicionar os elementos

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo secreto é: <strong>${amigoSorteado}</strong></p>`;
}

    amigos = []; // Limpar o array
    document.getElementById('listaAmigos').innerHTML = ""; // Limpar a lista
    document.getElementById('resultado').innerHTML = ""; // Limpar o resultado
    document.getElementById('amigo').value = ""; // Limpar o campo de texto
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
