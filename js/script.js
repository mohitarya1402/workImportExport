$(document).ready(function() { 
$.getJSON('js/inventory.json', function(jd) {
   console.log(jd.newModels)

});

$('.newInventoryCard').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 1000,
    
  });
});