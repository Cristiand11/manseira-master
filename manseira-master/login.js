document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obter os valores dos campos de entrada
        const email = loginForm.email.value;
        const senha = loginForm.senha.value;

        // Validar se os campos foram preenchidos
        if (!email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Obter os dados do usuário armazenados localmente
        const userDataString = localStorage.getItem('userData');
        if (!userDataString) {
            alert('Usuário não encontrado. Por favor, registre-se primeiro.');
            return;
        }

        // Converter os dados do usuário de volta para um objeto JavaScript
        const userData = JSON.parse(userDataString);

        // Verificar se o email e a senha correspondem aos dados armazenados
        if (email === userData.email && senha === userData.senha) {
            // Redirecionar com base no tipo de perfil
            if (userData.perfil === 'gerente') {
                window.location.href = 'index-gerente.html';
            } else {
                window.location.href = 'index-funcionario.html';
            }
        } else {
            alert('Credenciais inválidas. Por favor, verifique seu email e senha.');
        }
    });
});
