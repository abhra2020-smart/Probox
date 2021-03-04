function toolsOnclick() {
    document.location.href = 'tools.html';
}

$(document).ready(function() {
    console.log('Ready to roll!');
    $("#tools").attr("onclick", "toolsOnclick()");
});
