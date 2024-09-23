function carregarAtual() {
    const Atual = localStorage.getItem('mangaAtual');
    return JSON.parse(Atual);
}

function salvarAtual(mangaAtual) {
    localStorage.setItem('mangaAtual', JSON.stringify(mangaAtual));
}

var atual = carregarAtual();

var titulo = document.getElementById('manTitulo');
var banner = document.getElementById('manBanner');
var descricao = document.getElementById('manDescricao');
var genero = document.getElementById('manGenero');
var notamedia = document.getElementById('manNotaMedia');

titulo.textContent = atual.nome;
document.title = atual.nome;
banner.src = atual.banner;
descricao.textContent = atual.description;
genero.textContent = atual.genero;
notamedia.textContent += atual.notamedia;

for(var i = 0; i < atual.capitulos.length; i++){
    var cap = document.createElement('a');
    var info = document.createElement('h2');
    info.textContent = atual.capitulos[i].numero;
    cap.append(info);
    cap.href = './capitulos/inicio.html';
    cap.addEventListener('click', (function(i) {
        return function() {
            setCapitulo(atual.capitulos[i]);
        };
    })(i));
    
    document.getElementById('capitulos').append(cap);
}

function setCapitulo(capitulo) {
    localStorage.setItem('capAtual', JSON.stringify(capitulo));
}
