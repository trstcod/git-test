$("#Reserve-button").click(function() {
  $("#form-modal").modal("show");
});

$(document).ready(function() {
  $("#mycarousel").carousel({ interval: 20 });
  $("#carouselButton").click(function() {
    if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-pause");
      $("#carouselButton")
        .children("span")
        .addClass("fa-play");
    } else if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-play")
    ) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-play");
      $("#carouselButton")
        .children("span")
        .addClass("fa-pause");
    }
  });
});

$("#Login-Button").click(function() {
  $("#modal-log").modal("show");
});
