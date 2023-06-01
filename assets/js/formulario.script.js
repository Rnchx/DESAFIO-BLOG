var postDiv;
var postContainer;

function adicionar() {
    let titulo = document.getElementById("titulo").value;
    let categoria = document.getElementById("categoria").value;
    let assunto = document.getElementById("descricao").value;
    let nome = document.getElementById("autor").value;
    let data = document.getElementById("data").value;

     postContainer = document.getElementById("posts");
     postDiv = '<div class="post">' +
                    '<h2 id="h3_post">' + titulo + '</h2>' +
                    '<p id="categoria_post">Categoria: ' + categoria + '</p>' +
                    '<p id="descricao_post">Assunto: ' + assunto + '</p>' +
                    '<p id="autor_post">Nome: ' + nome + '</p>' +
                    '<p id="data_post">Data agendada:' + data +'</p>' +
                    '<button class="botao" onclick="removerPost()">remover</button>' +
                    '</div>';

postContainer.innerHTML += postDiv;

document.getElementById("titulo").value = "";
document.getElementById("data").value = "";
document.getElementById("assunto").value = "";
document.getElementById("nome").value = "";
}

