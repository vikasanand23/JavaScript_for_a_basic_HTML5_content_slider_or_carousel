"use strict";
(function() {
    $(document).ready(function() {
        var Carousel = {
            props: {
                currentIndex: 0,
                current_slide: $('.carousel-cells article'),
                total_slides: $('.carousel-cells article').length,
            },
            init: function() {
                //ADD INITIALIZER CODE HERE
                var currentIndex = 0;
                var current_slide = $('.carousel-cells article');
                var total_slides = current_slide.length;
                var item = $('.carousel-cells article').eq(currentIndex);
                //console.log(Carousel.props.currentIndex);
                Carousel.bindEvents();
            },
            bindEvents: function() {
                $(".carousel-next").on("click", function() {
                    Carousel.next();
                });
                $(".carousel-prev").on("click", function() {
                    Carousel.previous();
                });

                //////////////////////////Top Button//////////////////////////////
                $("#tabOne").click(function() {
                    alert("Tab One Clicked");
                });

                $("#tabTwo").click(function() {
                    alert("Tab Two Clicked");
                });

                $("#tabThree").click(function() {
                    alert("Tab Three Clicked");
                });

                $("#tabFour").click(function() {
                    alert("Tab Four Clicked");
                });

                $(document).keydown(function(e) {
                    if (e.keyCode == 37) {
                        //alert("Left");
                        Carousel.props.currentIndex -= 1;
                        if (Carousel.props.currentIndex < 0) {
                            Carousel.props.currentIndex = Carousel.props.total_slides - 1;
                        };
                        Carousel.update();
                        return false;
                    }
                });

                $(document).keydown(function(e) {
                    if (e.keyCode == 39) {
                        //alert("Right");
                        Carousel.props.currentIndex += 1;
                        //console.log(Carousel.props.currentIndex);
                        if (Carousel.props.currentIndex > Carousel.props.total_slides - 1) {
                            Carousel.props.currentIndex = 0;
                        };
                        Carousel.update();
                        return false;
                    }
                });

            },
            next: function() {
                //ADD NEXT CODE HERE			
                Carousel.props.currentIndex += 1;
                //console.log(Carousel.props.currentIndex);
                if (Carousel.props.currentIndex > Carousel.props.total_slides - 1) {
                    Carousel.props.currentIndex = 0;
                };
                Carousel.update();
            },


            previous: function() {
                //ADD PREVIOUS CODE HERE
                Carousel.props.currentIndex -= 1;
                if (Carousel.props.currentIndex < 0) {
                    Carousel.props.currentIndex = Carousel.props.total_slides - 1;
                };
                Carousel.update();
            },
            update: function() {
                //ADD UPDATE CODE HERE
                var item = $('.container div').eq(Carousel.props.currentIndex);
                Carousel.props.current_slide.hide();
                Carousel.props.current_slide.eq(Carousel.props.currentIndex).css('display', 'flex');
            }
        }
        $(function() {
            Carousel.init();
        })


    })
})(window);