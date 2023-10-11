$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const adicionarNovaImagem = $('#inserirLink').val();
        const novaImagem = $('<li style="display: none"></li>');
        $(`<img src="${adicionarNovaImagem}" />`).appendTo(novaImagem);
        $(`
            <div class="visualizarImagem">
                <a href="${adicionarNovaImagem}" target="_blank title="Ver imagem em tamanho real">
                    Visualizar imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImagem);
        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn();
        $('#inserirLink').val('');
    })
})