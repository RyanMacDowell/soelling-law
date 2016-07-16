$(document).ready(function() {
  var href = window.location.href;
  var page = href.substring(href.lastIndexOf("/")+1);
  if (!page) {
  	page = "index.htm";
  }
  $(".main-nav [href='"+page+"']").addClass("current");
});

function mobileNavClickHandle() {
	event.preventDefault();
	$(".main-nav").toggleClass("closed");
}

$(document).ready(function() {
$(".icon-menu").click(mobileNavClickHandle);
$(".main-nav a.current").click(mobileNavClickHandle);
});
