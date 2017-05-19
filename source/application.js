
var point;
var best_scores = [];

$(function(){
  kongregateAPI.loadAPI(function(){
    window.kongregate = kongregateAPI.getAPI();
    // if(kongregate.services.isGuest()){
    //   alert("ok");
    // }
  });
  initialize();
});

function initialize(){
  top_screen();
  $("#playing_screen").hide();
  $("#result_screen").hide();
  $("#play_btn").on("click", function(){
    $("#top_screen").hide();
    game_screen();
  });
  $("#play_again_btn").on("click", function(){
    $("#result_screen").hide();
    game_screen();
  });
  $("#return_top_btn").on("click", function(){
    $("#result_screen").hide();
    top_screen();
  });
}
function top_screen(){
  best_scores.forEach(function(score, i){
    $(".score_label").eq(i).text((i+1)+". "+score);
  });
  $("#top_screen").show();
}
function game_screen(){
  $("#playing_screen").show();
  point = 0;
  $("#point_display").text(point);
  initilize_text();
  key_check();
  timer_start();
}
function result_screen(){
  $("#point_result").text(point);
  $("#result_screen").show();
}