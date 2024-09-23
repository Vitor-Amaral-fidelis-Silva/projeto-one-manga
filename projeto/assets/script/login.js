function carregarUsuarios() {
    const usuariosSalvos = localStorage.getItem('usuarios');
    if (usuariosSalvos) {
        return JSON.parse(usuariosSalvos);
    } else {
        // Usuários padrão
        const usuariosIniciais = [
            {
                "nome": "adm",
                "senha": "democracia",
                "email": "adm@adm.com",
                "admin": true
            }
        ];
        localStorage.setItem('usuarios', JSON.stringify(usuariosIniciais));
        return usuariosIniciais;
    }
}



function verificarLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById('logEmail').value.trim();
    const senha = document.getElementById('logSenha').value;

    const usuarios = carregarUsuarios();

    console.log(usuarios);
    const usuarioEncontrado = usuarios.find(usuario => 
        usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
        alert('Bem vindo');
        const usuarioSessao = {
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            admin: usuarioEncontrado.admin
        };
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioSessao));
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 0);
    } else {
        alert('Email ou senha incorretos.');
    }

    
    document.getElementById('formLogin').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', verificarLogin);
});
