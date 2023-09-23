$(document).ready(function () {
    teste = Cookies.get('teste');
    if (Cookies.get('teste') != null){
        $("#teste").append("Deu bom "+teste);
    }else{
        $("#teste").append("Deu ruim");
    }
});