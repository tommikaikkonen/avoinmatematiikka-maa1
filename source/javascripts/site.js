$(document).ready(function() {
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        processEscapes: true
      }
    });
    
    MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
      MathJax.Hub.Insert(MathJax.InputJax.TeX.Definitions.macros,{
        cancel: ["Extension","cancel"],
        bcancel: ["Extension","cancel"],
        xcancel: ["Extension","cancel"],
        cancelto: ["Extension","cancel"]
      });
    });
    
    $(".answer").hide();
    
    $("div.button.showanswer").click(function() {
        $(this).hide().next().fadeIn(200);
    })
})