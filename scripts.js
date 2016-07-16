$(document).ready(function() {
  var href = window.location.href;
  var page = href.substring(href.lastIndexOf("/")+1);
  if (!page) {
  	page = "index.htm";
  }
  $(".main-nav [href='"+page+"']").addClass("current");
});

$(".main-nav").click(function() {
			$(".main-nav").toggleClass("closed");
			});
