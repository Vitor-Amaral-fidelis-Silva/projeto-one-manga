function mangaAtual() {
    const Atual = localStorage.getItem('mangaAtual');
    return JSON.parse(Atual);
}

function atualUsuario() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    return JSON.parse(usuarioLogado);
}

function carregarMangas() {
    const mangas = localStorage.getItem('mangas');
    return JSON.parse(mangas) || [];
}

function salvarMangas(mangas) {
    localStorage.setItem('mangas', JSON.stringify(mangas));
}


var obra = mangaAtual();
var usuario = atualUsuario();

document.addEventListener('DOMContentLoaded', () => {
    const formAva = document.getElementById('formAva');
    formAva.addEventListener('submit', Avaliar);
});

function Avaliar(event) {
    event.preventDefault(); 
    
    const notaInput = document.getElementById('nota').value; 
    const novaNota = parseInt(notaInput, 10); 
    
    let avaliacaoExistente = false;

    
    for (let i = 0; i < obra.avaliacoes.length; i++) {
        if (obra.avaliacoes[i].email === usuario.email) {
            obra.notatotal = obra.notatotal - obra.avaliacoes[i].nota + novaNota; 
            obra.avaliacoes[i].nota = novaNota;
            avaliacaoExistente = true;
            break;
        }
    }

    
    if (!avaliacaoExistente) {
        obra.avaliacoes.push({ email: usuario.email, nota: novaNota });
        obra.notatotal += novaNota;
        obra.qtdAvaliacoes++; 
    }

    
    obra.notamedia = obra.notatotal / obra.qtdAvaliacoes;

    var mangas = carregarMangas();
    for (let i = 0; i < mangas.length; i++) {
        if (mangas[i].nome === obra.nome) {
            mangas[i] = obra;
            break;
        }
    }

    salvarMangas(mangas);
    
    localStorage.setItem('mangaAtual', JSON.stringify(obra));

    if(avaliacaoExistente){
        alert('Nota atualizada com sucesso!');
    }
    else{
        alert('Nota enviada com sucesso!');
    }
    
}
