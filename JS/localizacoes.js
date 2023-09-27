$(document).ready(function () {
    $("#localizacoes").hide();
    $(".carregar").fadeOut(600);
    urlBase = 'https://rickandmortyapi.com/api/location/?page=';
    ListarTodos();
    $("#btnNext").click(function () {
        urlBase = page.next;
        ListarTodos();
        window.scrollTo(0, 0);
    });

    $("#btnPrev").click(function () {
        urlBase = page.prev;
        ListarTodos();
        window.scrollTo(0, 0);
    });
});

function ListarTodos() {
    $("#localizacoes").fadeIn(1500);
    $("#localizacoes > ul").empty();
    $.ajax({
        url: urlBase,
        success: function (dados) {
            dados.results.forEach(function (item) {
                AdicionarLinha(item);
                page = new Object(dados.info);
                if (page.prev == null) {
                    $("#btnPrev").attr("disabled", "disabled");
                } else {
                    $("#btnPrev").removeAttr("disabled", "disabled");
                };
                if (page.next == null) {
                    $("#btnNext").attr("disabled", "disabled");
                } else {
                    $("#btnNext").removeAttr("disabled", "disabled");
                };
            })
        },
        error: function (erro) {
            alert({ html: 'Ocorreu algum Erro.\nTente novamente mais tarde.\n' + erro });
        }
    })
}

function AdicionarLinha(item) {
    var novaLinha = $("<li>");
    var col = '';
    col += '<a href="#">' + item.name + '</a>';
    novaLinha.append(col);
    $("#localizacoes > ul").append(novaLinha);
}

function NewPage(id) {
    teste = Cookies.set('teste', id, { expires: 0.01 });
    alert('Funcionou ' + teste);
}