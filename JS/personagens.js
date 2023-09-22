$(document).ready(function () {
    numPage = 1;
    
    if (numPage <= 1) {
        $("#btnPrevious").attr("disabled","disabled");
    };
    
    $("#btnPrevious").click(function () {
        numPage--;
        if (numPage <= 1) {
            $("#btnPrevious").attr("disabled","disabled");
        };
        ListarTodos(numPage);
    });
    
    $("#btnNext").click(function () {
        numPage++;
        if (numPage > 1) {
            $("#btnPrevious").removeAttr("disabled","disabled");
        };
        ListarTodos(numPage);
    });

    ListarTodos();
});

function ListarTodos() {
    $("#personagens > ul").empty();
    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?page=' + numPage,
        success: function (dados) {
            dados.results.forEach(function (item) {
                AdicionarLinha(item);})},
        error: function (erro) {
            alert({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}

function AdicionarLinha(item) {
    var novaLinha = $("<li>");
    var col = '';
    col += '<a href="#">' + item.name + '</a>';
    novaLinha.append(col);
    $("#personagens > ul").append(novaLinha);
}