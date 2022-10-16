var numeros = [];
function numero_aleatorio() {
    while (numeros.length < 1) {
        var aleatorio = Math.floor(Math.random() * 100);

        if (numeros.indexOf(aleatorio) == -1)
            numeros.push(aleatorio);
    }
}
numero_aleatorio();