function capAtual() {
    const Atual = localStorage.getItem('capAtual');
    return JSON.parse(Atual);
}

function setCapitulo(capitulo) {
    localStorage.setItem('capAtual', JSON.stringify(capitulo));
}

function mangaAtual() {
    const Atual = localStorage.getItem('mangaAtual');
    return JSON.parse(Atual);
}

var obra = mangaAtual();
var capitulo = capAtual();
//console.log(atual);


var titulo = document.getElementById('titulo');
var cap = document.getElementById('cap');

titulo.textContent = obra.nome;
document.title = obra.nome;
cap.textContent = capitulo.numero;

for(var i = 0; i < capitulo.imagens.length; i++){
    var img = document.createElement('img');
    img.src = capitulo.imagens[i];
    img.alt = "Imagem";
    document.getElementById('capitulo').append(img);
}

if(capitulo.numero == 1){
    document.getElementById('btnreturn').style.display = 'none';
}

if(capitulo.numero == capitulo.imagens.length){
    document.getElementById('btnprox').style.display = 'none';
}

function proximoCap(){
    var proximo = obra.capitulos[capitulo.numero];
    setCapitulo(proximo);
    location.reload();
}

function voltarCap(){
    var anterior = obra.capitulos[capitulo.numero - 2];
    setCapitulo(anterior);
    location.reload();
}

document.getElementById('btnprox').addEventListener('click', proximoCap);
document.getElementById('btnreturn').addEventListener('click', voltarCap);



