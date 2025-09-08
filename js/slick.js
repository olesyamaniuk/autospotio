$(function () {
  const $slider = $(".i-r-reviews-list");

  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    let progress = (i / slick.slideCount) * 100;
    $(".progress-fill").css("width", progress + "%");
  });

  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    cssEase: "linear",
    prevArrow: ".i-r-reviews-list-left",
    nextArrow: ".i-r-reviews-list-right",
  });
});
