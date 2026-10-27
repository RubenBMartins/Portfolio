$(document).ready(function(){ 
  $(".box").mouseover(function(){
    var duhbox = $(".box").addClass("black");
    duhbox.animate({borderRadius: "50px"});
  });
  $(".box").mouseout(function(){
    var goBack = $(".box").removeClass("black");
    goBack.animate({borderRadius: "0px"});
  });
});