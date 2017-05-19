
function get_random_alphabet() {
  return String.fromCharCode(parseInt(Math.random() * 26 + 65)).toLowerCase();
}
function initilize_text(){
  var init_text = "";
  for(var i = 0; i<19; i++){
    init_text += get_random_alphabet();
  }
  $("#chara_row").text(init_text);
}
function key_check(){
  document.onkeydown = function (e){
    var target_text  = $("#chara_row").text();
    var target_chara = target_text.charAt(0);
    var input_chara  = String.fromCharCode(e.keyCode).toLowerCase();
    if (input_chara == target_chara){
      $("#chara_row").text(target_text.substr(1) + get_random_alphabet());
      point++;
      $("#point_display").text(point);
    } else {
      point--;
      $("#point_display").text(point);
    }
  }
}
function timer_start(){
  var rest_time = 5.0;
  var timer = setInterval(function(){
    rest_time -= 0.1;
    $("#rest_timer").text(rest_time.toFixed(1));
    if (rest_time.toFixed(1) == 0.0){
      // game over
      clearInterval(timer);
      game_over();
    }
  }, 100);
}
function game_over(){
  document.onkeydown = function(){};
  $("#playing_screen").hide();
  if(0 < point){
    best_scores.push(point);
    best_scores.sort(function(a,b){
      if( a > b ) return -1;
      if( a < b ) return 1;
      return 0;
    });
    best_scores = best_scores.slice(0, 3);
    console.log(best_scores);
  }
  result_screen();
}











