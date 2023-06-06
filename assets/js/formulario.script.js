var titulo;
var categoria;
var descricao;
var data;
var autor;
var ordem = []
var mensagem = []



function adicionar() {
    titulo = document.getElementById("titulo").value;
    categoria = document.getElementById("categoria").value;
    descricao = document.getElementById("descricao").value;
    data = document.getElementById("data").value;
    autor = document.getElementById("autor").value;


    ordem.unshift(autor)
    ordem.unshift(data)
    ordem.unshift(descricao)
    ordem.unshift(titulo)

    mensagem.push(ordem)

    console.log(ordem)
    console.log(mensagem)

    document.getElementById("titulo").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("data").value = "";
    document.getElementById("autor").value = "";
    atualizar();
}

function atualizar() {
    for (let j = 0; j < mensagem.length; j++) {
        mensagem[j]
        document.getElementById("mensagem").innerHTML = `<div id="flex">
    <div id="post">
        <h3 id="h3_post">${ordem[0]}</h3>
        <span id="data_post">Data de Publicação:${ordem[1]}</span>
        <span id="descricao_post">Descrição:${ordem[2]}</span>
        <span id="autor_post">Autor:${ordem[3]}</span>
    </div>
    <div id="botoes">
        <span onclick="editar()" class="botao">Editar</span>
    </div>
    <div id="botoes2">
        <span onclick="remover()" class="botao">Remover</span>
    </div>
</div>`

    }
}

