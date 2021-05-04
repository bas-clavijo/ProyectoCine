$("#buscar").click(function() {

    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;

        $('#fecha').html('Día: ' + today);
        $('#uf').html('$' + dailyIndicators.uf.valor + ' ' + dailyIndicators.uf.nombre);
        $('#dolar').html('$' + dailyIndicators.dolar.valor + ' ' + dailyIndicators.dolar.nombre);
        $('#utm').html('$' + dailyIndicators.utm.valor + ' ' + dailyIndicators.utm.nombre);

    }).fail(function() {
        console.log('Error al consumir la API!');
    });
});

/*
function obtieneIndicadores() {
    console.log('Obtiene el valor de bitcoin...');
    var request = new XMLHttpRequest();
    request.open('GET', 'https://mindicador.cl/api', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            $('#bitcoin').html('BITCOIN $' + data.bitcoin.valor);
        } else {
            console.error('Ocurrió un error al obtener la información de los indicadores');
        }
    };
    request.send();
}
*/