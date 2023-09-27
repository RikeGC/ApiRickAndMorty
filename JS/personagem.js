$(document).ready(function () {
    $("#especificacoes").hide();
    $(".carregar").fadeOut(600);
    urlBase = 'https://rickandmortyapi.com/api/character/';
    id = Cookies.get('selecionado');
    PersonagemSelecionado(id);
  
});

function PersonagemSelecionado(id) {
    $("#especificacoes").fadeIn(1500);
    $.ajax({
        url: urlBase+id,
        success: function (dados) {
                $(".reciveName").html(dados.name);
                $(".reciveImage").attr("src",dados.image);
                $(".reciveLocal").html(dados.location.name);
                $(".reciveOrigem").html(dados.origin.name);
                dados.episode.forEach(function (item) {
                    $.ajax({
                        url: item,
                        success: function (dadosEpi) { 
                            AdicionarLinha(dadosEpi);
                        },
                        error: function (erroEpi) {
                            alert({ html: 'Ocorreu algum Erro.\nTente novamente mais tarde.\n'+erroEpi });
                        }
                    })                  
                });
            },
        error: function (erro) {
            alert({ html: 'Ocorreu algum Erro.\nTente novamente mais tarde.\n'+erro });
        }
    })
}

function AdicionarLinha(item) {
    var novaLinha = $("<h3>");
    var col = '';
    col += '['+item.episode+'] - '+ item.name;
    novaLinha.append(col);
    $(".episodios").append(novaLinha);
}

$( window ).on( "unload", function() {
    Cookies.clean();
});