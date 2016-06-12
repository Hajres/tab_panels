$(document).ready(function() {
$(".tab-panels .tabs li").click(function(){
  var $panels = $(this).closest(".tab-panels");
  $panels.find(".tabs li.active").removeClass('active');
  $(this).addClass("active");
  
  
   var panelSlide = $(this).attr("rel"); 
  
$panels.find(".panel.active").slideUp(300, function(){
  $(this).removeClass('active');
  
  $("#"+ panelSlide).slideDown(300, function(){
    $(this).addClass('active');
    
  });
});
  
});
});