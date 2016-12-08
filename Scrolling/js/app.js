(function($) {
  $(document).ready(function() {
    var controller = new ScrollMagic.Controller(),
        count = $('.animate').length,
        i = 0,
        blockTween,
        scene;

    $('.animate').css('width', $(window).width() / count);

    for (; i < count; i++) {
      blockTween = new TweenMax.to('#animate' + i, 1.5, {
        css: {
          backgroundColor: '#9B59B6',
          transform: 'scale(' + (2 + (i / count)) + ') ' +
                     'translateY(' + ((i / (count / 2)) * -100) + 'px) ' +
                     'rotate(' + ((1 + (i / count)) * 360) + 'deg)'
        }
      });

      scene = new ScrollMagic.Scene({
            duration: 250,
            offset: 100
          }).setTween(blockTween).setPin('#animate' + i).addTo(controller);
    }

     blockTween = new TweenMax.to('#title', 1.5, {
        css: {
          transform: 'translateY(' + 100 + 'px)'
        }
      });

    scene = new ScrollMagic.Scene({
            duration: 250,
            offset: 0
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#fly-right', 1.5, {
        css: {
          transform: 'translate(0)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#fly-right').offset().top - 100,
            duration: 400
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#fly-left', 1.5, {
        css: {
          transform: 'translate(0)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#fly-left').offset().top - 100,
            duration: 400
          }).setTween(blockTween).addTo(controller);

    scene
          = new ScrollMagic.Scene({
            offset: $('#tilt').offset().top - 320,
            duration: 320
          }).setPin('#tilt').addTo(controller);

    blockTween = new TweenMax.to('#tilt1', 1.5, {
        css: {
          transform: 'rotateY(45deg) translateZ(-100px) perspective(600px)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#tilt').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#tilt2', 1.5, {
        css: {
          transform: 'rotateY(45deg) perspective(600px)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#tilt').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#tilt3', 1.5, {
        css: {
          transform: 'rotateY(45deg) translateZ(100px) perspective(600px)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#tilt').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#grow', 1.5, {
        css: {
          width: '100vw'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#stripe-container').offset().top - ($(window).height() * 0.05),
            duration: $(window).height()
          }).setTween(blockTween).setPin('#stripe-container').addTo(controller);

    scene
          = new ScrollMagic.Scene({
            offset: $('#spread').offset().top - 320,
            duration: 320
          }).setPin('#spread').addTo(controller);

    blockTween = new TweenMax.to('#spread1', 1.5, {
        css: {
          transform: 'translateX(-200px) scale(0.9)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#spread').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#spread2', 1.5, {
        css: {
          transform: 'translateX(200px) scale(0.9)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#spread').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#spread3', 1.5, {
        css: {
          transform: 'translateX(-100px)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#spread').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#spread4', 1.5, {
        css: {
          transform: 'translateX(100px)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#spread').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#spread5', 1.5, {
        css: {
          transform: 'scale(1.1)',
          boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#spread').offset().top - 320,
            duration: 320
          }).setTween(blockTween).addTo(controller);

    blockTween = new TweenMax.to('#fade-in', 1.5, {
        css: {
          opacity: '1'
        }
      });

    scene
          = new ScrollMagic.Scene({
            offset: $('#fade-in').offset().top - 210,
            duration: 320
          }).setTween(blockTween).setPin('#fade-in').addTo(controller);

    blockTween = null;
    scene = null;
  });
})(jQuery);
//# sourceURL=pen.js
