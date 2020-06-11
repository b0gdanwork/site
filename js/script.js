//аккордион


for (
  var i = 0;
  i < document.getElementsByClassName("accordion_click").length;
  i++
) {
  document.getElementsByClassName("accordion_click")
    [i].addEventListener("click", function() {
    if (this.parentNode.classList.contains("accordion_close"))
    	this.parentNode.classList.remove("accordion_close")
    else
      this.parentNode.classList.add("accordion_close")
    });
}


//якорные ссылки

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

//slick-slider

$(document).ready(function(){
  $('.slider').slick()
});

// menu

$(function(){
  $(".burger").click(function(){
  		var conteiner = document.getElementsByClassName('menu')
  		 if (conteiner[0].style.top == '80px') {
  		 	conteiner[0].style.top = '-300px'
  		 }
     	 else {

     	 	conteiner[0].style.top = '80px'
     	 }
    });
  });