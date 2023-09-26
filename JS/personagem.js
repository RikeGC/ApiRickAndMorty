$(document).ready(function () {
    urlBase = 'https://rickandmortyapi.com/api/character/';
    id = Cookies.get('selecionado');
    PersonagemSelecionado(id);
  
});

function PersonagemSelecionado(id) {
    //$("#personagem").empty();
    $.ajax({
        url: urlBase+id,
        success: function (dados) {
                $(".reciveName").html(dados.name);
                $(".reciveImage").attr("src",dados.image);
                $(".reciveLocal").html(dados.location.name);
                $(".reciveOrigem").html(dados.origin.name);
            },
        error: function (erro) {
            alert({ html: 'Ocorreu algum Erro.\nTente novamente mais tarde.\n'+erro });
        }
    })
}

$( window ).on( "unload", function() {
    Cookies.clean();
});