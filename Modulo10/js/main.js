$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function () {
        $('#opcoes').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira seu telefone.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    });

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeDoCaro = $(this).parent().find('h3').text

        $('#veiculo-interesse').val(nomeDoCaro)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })

});