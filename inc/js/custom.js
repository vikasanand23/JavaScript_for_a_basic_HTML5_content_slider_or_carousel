
$(document).ready(function(){

var currentIndex = 0,
  items = $('.carousel-cells article'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.carousel-cells article').eq(currentIndex);
  items.hide();
  item.css('display','flex');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.carousel-next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.carousel-prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

});