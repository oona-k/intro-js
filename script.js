jQuery(document).ready(function() {
  var btn = $("#button");
  /*  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  }); */
  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  function pulse() {
    $("#logo")
      .fadeTo(2000, 0.1)
      .fadeTo(2000, 1, pulse);
  }
  pulse();
});
