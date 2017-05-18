$(function(){
  kongregateAPI.loadAPI(function(){
    window.kongregate = kongregateAPI.getAPI();
    // if(kongregate.services.isGuest()){
    //   alert("ok");
    // }
  });
  var point = 0;
  initilize_text();
  document.onkeydown = function (e){
    var target_text  = $(".chara_row").text();
    var target_chara = target_text.charAt(0);
    var input_chara  = String.fromCharCode(e.keyCode).toLowerCase();
    if (input_chara == target_chara){
      $(".chara_row").text(target_text.substr(1) + get_random_alphabet());
      point++;
      $(".point_display").text(point);
    }
  };
});

function get_random_alphabet() {
  return String.fromCharCode(parseInt(Math.random() * 26 + 65)).toLowerCase();
}
function initilize_text(){
  var init_text = "";
  for(var i = 0; i<19; i++){
    init_text += get_random_alphabet();
  }
  $(".chara_row").text(init_text);
}