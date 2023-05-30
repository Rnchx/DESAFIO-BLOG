var titulo;
var categoria;
var descricao;
var data;
var autor;
var mensagem = []



function adicionar() {
    titulo = document.getElementById("titulo").value;
    categoria = document.getElementById("categoria").value;
    descricao = document.getElementById("descricao").value;
    data = document.getElementById("data").value;
    autor = document.getElementById("autor").value;

    let add = document.getElementById("post").innerHTML = `<div id="feedback">
    <h1>Faça a sua publicação:</h1>
    <p>Preencha os campos para agendar suas publicações:</p>
    </div>
    <form>
    <label class="label">Título:</label>
    <input type="text" required placeholder="digite o título da publicação" id="titulo">
    <label class="label">Categorias:</label>
    <select name="Categorias" id="categoria">
        <option>
            Beleza
        </option>
        <option>
            Jogos
        </option>
        <option>
            Música
        </option>
        <option>
            Livros
        </option>
        <option>
            Filmes
        </option>
        <option>
            Vestibular
        </option>
    </select>
    <label class="label">Descrição:</label>
    <input type="text" required placeholder="digite a descrição do seu post" id="descricao">
    <label class="label">Autor:</label>
    <input type="text" required placeholder="digite o nome do autor" required minlength="10" id="autor">
    <label class="label">Data:</label>
    <input type="date" id="data">
    <span onclick="adicionar()" id="botao">Enviar</span>
    </form>
    </div>
    <div id="flex">
    <div id="post">
    <!-- innerhtml -->
    <h3 id="h3_post">${titulo}</h3>
    <span id="data_post">Data de Publicação:${data}</span>
    <span id="descricao_post">Descrição:${descricao}</span>
    <span id="autor_post">Autor:${autor}</span>
    </div>
    <div id="botoes">
    <span onclick="editar()" class="botao">Editar</span>
    </div>
    <div id="botoes2">
    <span onclick="remover()" class="botao">Remover</span>
    </div>`

    mensagem.push(add)

    document.getElementById("titulo").innerHTML = "";
    document.getElementById("categoria").innerHTML = "";
    document.getElementById("descricao").innerHTML = "";
    document.getElementById("data").innerHTML = "";
    document.getElementById("autor").innerHTML = "";
}