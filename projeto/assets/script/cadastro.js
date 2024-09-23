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


function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


function cadastrarUsuario(event) {
    event.preventDefault(); 

    const nome = document.getElementById('cadNome').value.trim();
    const email = document.getElementById('cadEmail').value.trim();
    const senha = document.getElementById('cadSenha').value;
    const senha2 = document.getElementById('confirmarSenha').value;

    const usuarios = carregarUsuarios();

    // Verifica se o email já está cadastrado
    const emailExiste = usuarios.some(usuario => usuario.email === email);

    if (emailExiste) {
        alert('O email já está cadastrado.');
    } 
    else if(senha != senha2){
        alert('As senhas não coincidem.');
        return;
    }
    else {
        
        const novoUsuario = {
            nome,
            email,
            senha,
            admin: false
        };

        
        usuarios.push(novoUsuario);

        
        salvarUsuarios(usuarios);

        alert("Cadastro efetuado com sucesso!");

        document.getElementById('formCadastro').reset();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('formCadastro');
    
    formCadastro.addEventListener('submit', cadastrarUsuario);
  
});
