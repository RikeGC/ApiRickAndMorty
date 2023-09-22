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
    $("#tabela > tbody").empty();
    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?page=' + numPage,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            dados.results.forEach(function (item) {
                AdicionarLinha(item);
            })
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}

function ListarTodos(numPage) {
    $("#tabela > tbody").empty();
    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?page=' + numPage,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            dados.results.forEach(function (item) {
                AdicionarLinha(item);
            })
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}
function AdicionarLinha(item) {
    var novaLinha = $("<tr>");
    var col = '';
    col += '<td onclick="NewPage('+item.id+')"><img src="' + item.image + '" alt="" srcset=""></td>';
    col += '<td onclick="NewPage('+item.id+')">' + item.name + '</td>';
    // col += '<td>' + item.Placa + '</td>';
    novaLinha.append(col);
    $("#tabela").append(novaLinha);
}

function NewPage(id){
    alert("Funcionou "+id);
    charX = id;
    // location.replace("../select.html");
    example = document.cookie = "username="+charX;
    alert(example);
    window.sessionStorage.setItem(stor, charX);
}