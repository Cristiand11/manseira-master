document.addEventListener('DOMContentLoaded', function () {
    const despesasList = document.getElementById('despesasList');
    const assinarBtn = document.getElementById('assinarBtn');
    const sairBtn = document.getElementById('logoutBtn');

    // Obter as despesas armazenadas localmente
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];

    // Função para exibir as despesas na tela
    function exibirDespesas() {
        // Limpar a lista de despesas antes de adicionar os novos
        despesasList.innerHTML = '';

        // Iterar sobre as despesas e criar elementos de lista para cada uma
        despesas.forEach(function (despesa) {
            const li = document.createElement('li');
            li.textContent = `Descrição: ${despesa.descricao}, Data: ${despesa.data}, Valor: ${despesa.valor}`;
            despesasList.appendChild(li);
        });
    }

    // Chamar a função para exibir as despesas na tela
    exibirDespesas();

    // Função para lidar com o processo de assinatura das despesas
    assinarBtn.addEventListener('click', function () {
        // Filtrar as despesas não assinadas
        despesas = despesas.filter(function (despesa) {
            return !despesa.assinada;
        });

        // Salvar as despesas não assinadas no armazenamento local
        localStorage.setItem('despesas', JSON.stringify(despesas));

        // Atualizar a lista de despesas na tela para refletir as mudanças
        exibirDespesas();

        alert('Despesas assinadas com sucesso!');
    });

    // Função para sair e retornar à tela inicial
    sairBtn.addEventListener('click', function () {
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    });
});
