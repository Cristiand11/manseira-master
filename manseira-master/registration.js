document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obter os valores dos campos de entrada
        const nome = registrationForm.nome.value;
        const email = registrationForm.email.value;
        const senha = registrationForm.senha.value;
        const perfil = registrationForm.perfil.value; 

        // Validar se os campos foram preenchidos
        if (!nome || !email || !senha || !perfil) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Salvar os dados de registro no armazenamento local
        const userData = {
            nome,
            email,
            senha,
            perfil 
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirecionar para a página de login ou fazer qualquer outra ação necessária
        window.location.href = 'login.html';
    });
});
