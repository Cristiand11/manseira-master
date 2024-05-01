document.addEventListener('DOMContentLoaded', function () {
    const despesasList = document.getElementById('despesasList');
    const assinarBtn = document.getElementById('assinarBtn');

    // Função para exibir as despesas na tela
    function exibirDespesas() {
        // Obter as despesas armazenadas localmente
        const despesas = JSON.parse(localStorage.getItem('despesas')) || [];

        // Limpar a lista de despesas antes de adicionar os novos
        despesasList.innerHTML = '';

        // Iterar sobre as despesas e criar elementos de lista para cada uma
        despesas.forEach(function (despesa) {
            if (!despesa.assinada) {
                const li = document.createElement('li');
                li.textContent = `Descrição: ${despesa.descricao}, Data: ${despesa.data}, Valor: ${despesa.valor}`;
                despesasList.appendChild(li);
            }
        });
    }

    // Chamar a função para exibir as despesas na tela
    exibirDespesas();

    // Função para lidar com o processo de assinatura das despesas
    assinarBtn.addEventListener('click', function () {
        // Obter as despesas armazenadas localmente
        let despesas = JSON.parse(localStorage.getItem('despesas')) || [];

        // Iterar sobre as despesas e marcar cada uma como assinada
        despesas.forEach(function (despesa) {
            if (!despesa.assinada) {
                despesa.assinada = true;
            }
        });

        // Salvar as despesas atualizadas no armazenamento local
        localStorage.setItem('despesas', JSON.stringify(despesas));

        // Atualizar a lista de despesas na tela para refletir as mudanças
        exibirDespesas();

        alert('Despesas assinadas com sucesso!');
    });

    // Função para sair e retornar à tela inicial
    voltar.addEventListener('click', function voltar() {
        window.location.href = 'index-funcionario.html';
    });
});
