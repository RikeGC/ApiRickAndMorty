$(document).ready(function () {
    urlBase = 'https://rickandmortyapi.com/api/character/?page=';
    ListarTodos();
    $("#btnNext").click(function () {
        urlBase = page.next;
        ListarTodos();
        window.scrollTo(0,0);
    });
    
    $("#btnPrev").click(function () {
        urlBase = page.prev;
        ListarTodos();
        window.scrollTo(0,0);
    });
});



function ListarTodos() {
    $("#personagens > ul").empty();
    $.ajax({
        url: urlBase,
        success: function (dados) {
            dados.results.forEach(function (item) {
                AdicionarLinha(item);
                page = new Object(dados.info);
                if (page.prev == null) {
                    $("#btnPrev").attr("disabled","disabled");
                }else{
                    $("#btnPrev").removeAttr("disabled","disabled");
                };
                if (page.next == null) {
                    $("#btnNext").attr("disabled","disabled");
                }else{
                    $("#btnNext").removeAttr("disabled","disabled");
                };
            })},
        error: function (erro) {
            alert({ html: 'Ocorreu algum Erro.\nTente novamente mais tarde.\n'+erro });
        }
    })
}

function AdicionarLinha(item) {
    var novaLinha = $("<li>");
    var col = '';
    col += '<a onclick="NewPage('+item.id+')"><img src='+item.image+'><div id="info"><h3>'+item.name+'</h3><p>'+item.species+'</p><p>'+item.status+'</p></div></a>';
    
    novaLinha.append(col);
    $("#personagens > ul").append(novaLinha);
}

function NewPage(id){
    teste = Cookies.set('selecionado', id, {expires: 0.01});
    window.location.replace("../personagem.html");
}