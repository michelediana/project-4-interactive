
$(".search").keypress(function(){

  var current_query = $(".search").val();
  $(".popup-gallery li").hide();

  $(".popup-gallery li").each(function(){

    var current_keyword = $(this).attr("data-keywords");

    if   current_keyword.indexOf(current_query); >= 0{
      $(this).show();

    }
  });

});
