
$(function(){
    $('input').data('holder',$('input').attr('placeholder'));
    $('input').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
})

$('input:text').bind('focus blur', function() {
    $("body").toggleClass('background');
    $(".one").toggleClass('background1');

});




function enterScript(e) {
    if (e.keyCode == 13) {
      var s = document.getElementById("search").value;
      //return false;
      var wikiurl = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + s + "&srprop=titlesnippet|snippet&generator=links";
      $.getJSON(
        wikiurl,
        function(data){
          var results_div;
          $("#lucky").hide();
          console.log(data);
          for (var i=0; i<10; i++){
            var link = '"http://en.wikipedia.org/wiki/' + data["query"]["search"][i]["title"] + '"';
            results_div = '<a href=' + link + 'target="_blank">' + '<div class="results" id="result'+ i + '">' + '<strong>' + data["query"]["search"][i]["title"] + '</strong>' +'<br>'+ data["query"]["search"][i]["snippet"] +'...</div></a>';
            $("#results").append(results_div).hide();
          }
           $(".pageCent").animate({top:"15%"}, 300);
          
          for (var j=0; j<10; j++){
            var temp = "#result" + j;
            var timing = (j + 1.5) * 300;
            $(temp).hide();
            $("#results").show();
            $(temp).slideDown(timing);
          }

        })
    }
  $("#reset").click(function(){
    $("#results").empty();
    $('input:text').val('');
    $(".pageCent").animate({top:"50%"}, 300);
});

  

}