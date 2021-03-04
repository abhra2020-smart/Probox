function calculator() {
    document.location.href = 'calc.html'
}

$(document).ready(function() {
    $("#calculator").attr("onclick", "calculator()");
});
