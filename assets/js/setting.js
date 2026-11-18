$(document).ready(function () {
  $(".header-toggle").on("click", function () {
    const $this = $(this);
    const isActive = !$this.hasClass("active");
    $this.toggleClass("active", isActive);

    $(".header-right").stop(true, true).slideToggle(300);
  });
});
