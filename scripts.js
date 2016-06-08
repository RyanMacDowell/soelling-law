$(document).ready(function() {
  var href = window.location.href;
  var page = href.substring(href.lastIndexOf("/")+1);
  $(".main-nav [href='"+page+"']").addClass("current");
});

$(".main-nav").click(function() {
			$(".main-nav").toggleClass("closed");
			});
