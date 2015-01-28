$(".nav.nav-pills li").on("click",function(){
	console.log(123);
  $(".nav.nav-pills li").removeClass("active");
  $(this).addClass("active");
});