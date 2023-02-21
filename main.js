//Checa envio do formulário
$('form').submit(function (e) {
    e.preventDefault();

    adicionaTarefa();
});

function adicionaTarefa() {
    const nomeTarefa = $('#nome-tarefa').val();
    const novoItem = $(`<li style="display: none">${nomeTarefa}</li>`);

    //console.log(novoItem);
    $(novoItem).appendTo('ol');
    $(novoItem).slideDown(500);
    $('#nome-tarefa').val('');
}

//Verifica evento de clique na lista
$('#lista-tarefas').on('click', 'li', function (e) {
    //console.log(e.target);
    const item = $(e.target);

    //Verifica se a tarefa já foi marcada como feita
    if (item.hasClass('tarefa-feita')) {
        item.removeClass('tarefa-feita');
    } else {
        item.addClass('tarefa-feita');
    }
});

