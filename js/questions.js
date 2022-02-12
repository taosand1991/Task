(function() {
    SyntaxHighlighter.defaults['auto-links'] = false;
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();
})();

$("button").click(function(){
    $(".dropdownEl").toggle();
});