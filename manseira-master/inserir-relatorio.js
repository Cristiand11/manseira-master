document.addEventListener('DOMContentLoaded', function () {
    const relatorioForm = document.getElementById('relatorioForm');
    const relatoriosList = document.getElementById('relatoriosList');
    const enviarBtn = document.getElementById('enviarBtn');

    // Array para armazenar as despesas inseridas
    let despesas = [];

    // Função para exibir as despesas na tela
    function exibirDespesas() {
        // Limpar a lista de despesas antes de adicionar os novos
        relatoriosList.innerHTML = '';

        // Iterar sobre as despesas e criar elementos de lista para cada uma
        despesas.forEach(function (despesa) {
            const li = document.createElement('li');
            li.textContent = `Descrição: ${despesa.descricao}, Data: ${despesa.data}, Valor: ${despesa.valor}`;
            relatoriosList.appendChild(li);
        });
    }

    // Função para lidar com o envio do formulário de relatório de despesas
    relatorioForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obter os valores dos campos de entrada
        const descricao = relatorioForm.descricao.value;
        const data = relatorioForm.data.value;
        const valor = parseFloat(relatorioForm.valor.value);

        // Criar um objeto de despesa
        const despesa = {
            descricao,
            data,
            valor
        };

        // Adicionar a nova despesa ao array de despesas
        despesas.push(despesa);

        // Chamar a função para exibir as despesas atualizadas na tela
        exibirDespesas();

        // Limpar os campos do formulário após o envio
        relatorioForm.reset();
    });

    // Função para lidar com o envio das despesas
    enviarBtn.addEventListener('click', function () {
        // Salvar as despesas no armazenamento local
        localStorage.setItem('despesas', JSON.stringify(despesas));
        
        // Redirecionar para a tela inicial
        window.location.href = 'index-funcionario.html';
    });
});
