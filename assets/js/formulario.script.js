var postVL = 0;
var arrD;

function criarPost() {
  var titulo = document.getElementById("titulo").value;

  var data = document.getElementById("data").value;
  arrD = data.split("-");
  var arrDN = arrD.reverse().join("/");

  var categoria = document.getElementById("categoria").value
  var mensagem = document.getElementById("mensagem").value;
  var autor = document.getElementById("autor").value;

  if (titulo == "" & data == "" & mensagem == "" & autor == "") {
    alert("Insira algo nos campos");

    document.getElementById("titulo").value = '';
    document.getElementById("data").value = '';
    document.getElementById("categoria").value = '';
    document.getElementById("mensagem").value = '';
    document.getElementById("autor").value = '';
  }

  var postEntrada = document.getElementById("postEntrada");
  var postDiv = '<div class="post" id="post2' + postVL + '">' +
                  '<h1>' + titulo + '</h1>' +
                  '<p>Data: ' + arrDN + '</p>' +
                  '<p>Categoria: ' + categoria + '</p>' +
                  '<p>Assunto: ' + mensagem + '</p>' +
                  '<p>Nome: ' + autor + '</p>' +
                  '<button onclick="removerPost('+postVL+')">Apagar</button>' +
                '</div>';

  postEntrada.innerHTML += postDiv;

  document.getElementById("titulo").value = '';
  document.getElementById("data").value = '';
  document.getElementById("mensagem").value = '';
  document.getElementById("autor").value = '';

  postVL++;
}

function removerPost(id) {
  var postDiv = document.getElementById('post2' + id);
  postDiv.style.display = 'none';
}