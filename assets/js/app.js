(function ($) {
  $(window).load(function(){
    $(".loader_icon").delay(600).fadeOut("slow");
    $(".loader").delay(600).fadeOut("slow");
  });
  $(document).ready(function () {
    // Adding piling.js
    (function () {
      if($('#pagepiling_1').length){
        $('#pagepiling_1').pagepiling({
          scrollingSpeed: 1000,
          anchors: ['page1-1', 'page1-2' , 'page1-3', 'page1-4', 'page1-5', 'page1-6', 'page1-7', 'page1-8'],
          onLeave: direction 
        });
        $.fn.pagepiling.setAllowScrolling(false);
        $.fn.pagepiling.setMouseWheelScrolling(false);
        $.fn.pagepiling.setKeyboardScrolling(false);
      }

      if($('#pagepiling_2').length){
        $('#pagepiling_2').pagepiling({
          scrollingSpeed: 1000,
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
          onLeave: direction 
        });
        $.fn.pagepiling.setAllowScrolling(false);
        $.fn.pagepiling.setMouseWheelScrolling(false);
        $.fn.pagepiling.setKeyboardScrolling(false);
      }


      function direction(index, nextIndex, direction) {
          if (direction === 'down') {
            $('.active').nextAll('.pp-section').css("transform", "translate3d(0px, 100%, 0px)");
            $('.active').css("transform", "translate3d(0px, 0px, 0px)");
            $('.active').removeClass('hidden');
          }
          if (direction === 'up') {
            $('.active').next('.section').addClass('hidden');
            $('.active').removeClass('hidden');
          }
          if( $('.pp-section.active').hasClass('question_blue') ){
            $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
          }
          else if($('.pp-section.active').hasClass('question_pink-blue') ){
            $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg ')
          }
          else if($('.pp-section.active').hasClass('question_pink') ){
            $('#pp-nav').addClass('pink_bg').removeClass('blue_bg orange_bg')
            console.log('here')
          }
          else if($('.pp-section.active').hasClass('question_green') ){
            $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
          }
          else if($('.pp-section.active').hasClass('question_orange') ){
            $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg')
          }
        }
      if( $('.pp-section.active').hasClass('question_blue') ){
        $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
      }
      else if($('.pp-section.active').hasClass('question_pink-blue') ){
        $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg ')
      }
      else if($('.pp-section.active').hasClass('question_pink') ){
        $('#pp-nav').addClass('pink_bg').removeClass('blue_bg orange_bg')
        console.log('here')
      }
      else if($('.pp-section.active').hasClass('question_green') ){
        $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
      }
      else if($('.pp-section.active').hasClass('question_orange') ){
        $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg')
      }


      $('.active').nextAll('.section').addClass('hidden pp-easing');
      $('.active').nextAll('.pp-section').css("transform", "translate3d(0px, 100%, 0px)");

      $('.slider__submit button').on('click', function(e){
        e.preventDefault
        $.fn.pagepiling.moveSectionDown();
      })
      $('.header__back-link').on('click', function(e){
        e.preventDefault
        $.fn.pagepiling.moveSectionUp();
      })
    })();

    // Select
    (function(){
      const selectOptions = [
        {
          label: "אדריכל",
          value: "1",
        },
        {
          label: "אדריכל",
          value: "2",
        },
        {
          label: "אדריכל",
          value: "3",
        },
        {
          label: "אדריכל",
          value: "4",
        },
        {
          label: "אדריכל",
          value: "5",
        },
        {
          label: "אדריכל",
          value: "6",
        }
      ];
      
      var instance = new SelectPure(".select__container", {
        options: selectOptions,
        multiple: true,
        autocomplete: true,
        icon: "icon-remove",
        value: ['2','3']
      });
      
    })();

    // Pop-ups
    (function(){
      //Pop-up Question 2/2
      $('.question_2-2 .slider__modal button').on('click', function(e){
        e.preventDefault
        $('.modal_2-2').addClass('modal_2-2_visible');
        $('.wrapper').addClass('wrapper_blur')
      })
      $('.modal_2-2 .modal__close').on('click', function(){
        $('.modal_2-2').removeClass('modal_2-2_visible');
        $('.wrapper').removeClass('wrapper_blur')
      })

      //Pop-up Question 2/3
      $('.question_2-3 .slider__modal button').on('click', function(e){
        e.preventDefault
        $('.modal_2-3').addClass('modal_2-3_visible');
        $('.wrapper').addClass('wrapper_blur')
      })
      $('.modal_2-3 .modal__btn').on('click', function(e){
        e.preventDefault
        $('.modal_2-3').removeClass('modal_2-3_visible');
        $('.wrapper').removeClass('wrapper_blur')
        $.fn.pagepiling.moveSectionDown();
      })

    })();

    // Slider
    (function(){
      const rangeInputs = document.querySelectorAll('#range')
      const numberInput = document.querySelector('#rangenumber')

      function handleInputChange(e) {
        let target = e.target
        if (e.target.type !== 'range') {
          target = document.getElementById('range')
        } 
        const min = target.min
        const max = target.max
        const val = target.value
        
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
      }

      rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
      })

      if($('#rangenumber').length){
        numberInput.addEventListener('input', handleInputChange)
      }
    })();


    (function(){
      if($('#chart').length){
        var data = [
          {
            primaryColor: "#34C779", 
            secondaryColor: "#F2F2F2", 
            progress: "34", 
          },
          {
            primaryColor: "#FF9556", 
            secondaryColor: "#F2F2F2", 
            progress: "80", 
          },
          {
            primaryColor: "#000000", 
            secondaryColor: "#F2F2F2", 
            progress: "80", 
          },
          {
            primaryColor: "#50C1DC", 
            secondaryColor: "#F2F2F2", 
            progress: "80", 
          },
          {
            primaryColor: "#FFBEC0", 
            secondaryColor: "#F2F2F2", 
            progress: "60", 
          },
          {
            primaryColor: "#FFF0F0", 
            secondaryColor: "#F2F2F2", 
            progress: "40", 
          }
        ];
      $(" #chart").radialBar({
          data: data,
          width: '600',
          height: '600',
          strokeWidth: 6
        });
      }
    })();

  });
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcclxuICAgICQoXCIubG9hZGVyX2ljb25cIikuZGVsYXkoNjAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIubG9hZGVyXCIpLmRlbGF5KDYwMCkuZmFkZU91dChcInNsb3dcIik7XHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQWRkaW5nIHBpbGluZy5qc1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYoJCgnI3BhZ2VwaWxpbmdfMScpLmxlbmd0aCl7XHJcbiAgICAgICAgJCgnI3BhZ2VwaWxpbmdfMScpLnBhZ2VwaWxpbmcoe1xyXG4gICAgICAgICAgc2Nyb2xsaW5nU3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgICBhbmNob3JzOiBbJ3BhZ2UxLTEnLCAncGFnZTEtMicgLCAncGFnZTEtMycsICdwYWdlMS00JywgJ3BhZ2UxLTUnLCAncGFnZTEtNicsICdwYWdlMS03JywgJ3BhZ2UxLTgnXSxcclxuICAgICAgICAgIG9uTGVhdmU6IGRpcmVjdGlvbiBcclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICQuZm4ucGFnZXBpbGluZy5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0S2V5Ym9hcmRTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZigkKCcjcGFnZXBpbGluZ18yJykubGVuZ3RoKXtcclxuICAgICAgICAkKCcjcGFnZXBpbGluZ18yJykucGFnZXBpbGluZyh7XHJcbiAgICAgICAgICBzY3JvbGxpbmdTcGVlZDogMTAwMCxcclxuICAgICAgICAgIGFuY2hvcnM6IFsncGFnZTEnLCAncGFnZTInLCAncGFnZTMnLCAncGFnZTQnLCAncGFnZTUnXSxcclxuICAgICAgICAgIG9uTGVhdmU6IGRpcmVjdGlvbiBcclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICQuZm4ucGFnZXBpbGluZy5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0S2V5Ym9hcmRTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gZGlyZWN0aW9uKGluZGV4LCBuZXh0SW5kZXgsIGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgICAgICQoJy5hY3RpdmUnKS5uZXh0QWxsKCcucHAtc2VjdGlvbicpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZTNkKDBweCwgMTAwJSwgMHB4KVwiKTtcclxuICAgICAgICAgICAgJCgnLmFjdGl2ZScpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIpO1xyXG4gICAgICAgICAgICAkKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgICAgICAkKCcuYWN0aXZlJykubmV4dCgnLnNlY3Rpb24nKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiggJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX2JsdWUnKSApe1xyXG4gICAgICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ2JsdWVfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBvcmFuZ2VfYmcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZigkKCcucHAtc2VjdGlvbi5hY3RpdmUnKS5oYXNDbGFzcygncXVlc3Rpb25fcGluay1ibHVlJykgKXtcclxuICAgICAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdvcmFuZ2VfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBibHVlX2JnICcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKCQoJy5wcC1zZWN0aW9uLmFjdGl2ZScpLmhhc0NsYXNzKCdxdWVzdGlvbl9waW5rJykgKXtcclxuICAgICAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdwaW5rX2JnJykucmVtb3ZlQ2xhc3MoJ2JsdWVfYmcgb3JhbmdlX2JnJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZigkKCcucHAtc2VjdGlvbi5hY3RpdmUnKS5oYXNDbGFzcygncXVlc3Rpb25fZ3JlZW4nKSApe1xyXG4gICAgICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ2JsdWVfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBvcmFuZ2VfYmcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZigkKCcucHAtc2VjdGlvbi5hY3RpdmUnKS5oYXNDbGFzcygncXVlc3Rpb25fb3JhbmdlJykgKXtcclxuICAgICAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdvcmFuZ2VfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBibHVlX2JnJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGlmKCAkKCcucHAtc2VjdGlvbi5hY3RpdmUnKS5oYXNDbGFzcygncXVlc3Rpb25fYmx1ZScpICl7XHJcbiAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdibHVlX2JnJykucmVtb3ZlQ2xhc3MoJ3BpbmtfYmcgb3JhbmdlX2JnJylcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKCQoJy5wcC1zZWN0aW9uLmFjdGl2ZScpLmhhc0NsYXNzKCdxdWVzdGlvbl9waW5rLWJsdWUnKSApe1xyXG4gICAgICAgICQoJyNwcC1uYXYnKS5hZGRDbGFzcygnb3JhbmdlX2JnJykucmVtb3ZlQ2xhc3MoJ3BpbmtfYmcgYmx1ZV9iZyAnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX3BpbmsnKSApe1xyXG4gICAgICAgICQoJyNwcC1uYXYnKS5hZGRDbGFzcygncGlua19iZycpLnJlbW92ZUNsYXNzKCdibHVlX2JnIG9yYW5nZV9iZycpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX2dyZWVuJykgKXtcclxuICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ2JsdWVfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBvcmFuZ2VfYmcnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX29yYW5nZScpICl7XHJcbiAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdvcmFuZ2VfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBibHVlX2JnJylcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgICQoJy5hY3RpdmUnKS5uZXh0QWxsKCcuc2VjdGlvbicpLmFkZENsYXNzKCdoaWRkZW4gcHAtZWFzaW5nJyk7XHJcbiAgICAgICQoJy5hY3RpdmUnKS5uZXh0QWxsKCcucHAtc2VjdGlvbicpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZTNkKDBweCwgMTAwJSwgMHB4KVwiKTtcclxuXHJcbiAgICAgICQoJy5zbGlkZXJfX3N1Ym1pdCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0XHJcbiAgICAgICAgJC5mbi5wYWdlcGlsaW5nLm1vdmVTZWN0aW9uRG93bigpO1xyXG4gICAgICB9KVxyXG4gICAgICAkKCcuaGVhZGVyX19iYWNrLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0XHJcbiAgICAgICAgJC5mbi5wYWdlcGlsaW5nLm1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgfSlcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gU2VsZWN0XHJcbiAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLXkNeT16jXmdeb15xcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIteQ15PXqNeZ15vXnFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi15DXk9eo15nXm9ecXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLXkNeT16jXmdeb15xcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIteQ15PXqNeZ15vXnFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiNVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi15DXk9eo15nXm9ecXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI2XCIsXHJcbiAgICAgICAgfVxyXG4gICAgICBdO1xyXG4gICAgICBcclxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFNlbGVjdFB1cmUoXCIuc2VsZWN0X19jb250YWluZXJcIiwge1xyXG4gICAgICAgIG9wdGlvbnM6IHNlbGVjdE9wdGlvbnMsXHJcbiAgICAgICAgbXVsdGlwbGU6IHRydWUsXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlOiB0cnVlLFxyXG4gICAgICAgIGljb246IFwiaWNvbi1yZW1vdmVcIixcclxuICAgICAgICB2YWx1ZTogWycyJywnMyddXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gUG9wLXVwc1xyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vUG9wLXVwIFF1ZXN0aW9uIDIvMlxyXG4gICAgICAkKCcucXVlc3Rpb25fMi0yIC5zbGlkZXJfX21vZGFsIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHRcclxuICAgICAgICAkKCcubW9kYWxfMi0yJykuYWRkQ2xhc3MoJ21vZGFsXzItMl92aXNpYmxlJyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlcl9ibHVyJylcclxuICAgICAgfSlcclxuICAgICAgJCgnLm1vZGFsXzItMiAubW9kYWxfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcubW9kYWxfMi0yJykucmVtb3ZlQ2xhc3MoJ21vZGFsXzItMl92aXNpYmxlJyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlcl9ibHVyJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vUG9wLXVwIFF1ZXN0aW9uIDIvM1xyXG4gICAgICAkKCcucXVlc3Rpb25fMi0zIC5zbGlkZXJfX21vZGFsIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHRcclxuICAgICAgICAkKCcubW9kYWxfMi0zJykuYWRkQ2xhc3MoJ21vZGFsXzItM192aXNpYmxlJyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlcl9ibHVyJylcclxuICAgICAgfSlcclxuICAgICAgJCgnLm1vZGFsXzItMyAubW9kYWxfX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHRcclxuICAgICAgICAkKCcubW9kYWxfMi0zJykucmVtb3ZlQ2xhc3MoJ21vZGFsXzItM192aXNpYmxlJyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlcl9ibHVyJylcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcubW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBTbGlkZXJcclxuICAgIChmdW5jdGlvbigpe1xyXG4gICAgICBjb25zdCByYW5nZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNyYW5nZScpXHJcbiAgICAgIGNvbnN0IG51bWJlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmdlbnVtYmVyJylcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgICBpZiAoZS50YXJnZXQudHlwZSAhPT0gJ3JhbmdlJykge1xyXG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlJylcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNvbnN0IG1pbiA9IHRhcmdldC5taW5cclxuICAgICAgICBjb25zdCBtYXggPSB0YXJnZXQubWF4XHJcbiAgICAgICAgY29uc3QgdmFsID0gdGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRTaXplID0gKHZhbCAtIG1pbikgKiAxMDAgLyAobWF4IC0gbWluKSArICclIDEwMCUnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJhbmdlSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaGFuZGxlSW5wdXRDaGFuZ2UpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZigkKCcjcmFuZ2VudW1iZXInKS5sZW5ndGgpe1xyXG4gICAgICAgIG51bWJlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaGFuZGxlSW5wdXRDaGFuZ2UpXHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG5cclxuICAgIChmdW5jdGlvbigpe1xyXG4gICAgICBpZigkKCcjY2hhcnQnKS5sZW5ndGgpe1xyXG4gICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IFwiIzM0Qzc3OVwiLCBcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI0YyRjJGMlwiLCBcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiMzRcIiwgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IFwiI0ZGOTU1NlwiLCBcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI0YyRjJGMlwiLCBcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiODBcIiwgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IFwiIzAwMDAwMFwiLCBcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI0YyRjJGMlwiLCBcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiODBcIiwgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IFwiIzUwQzFEQ1wiLCBcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI0YyRjJGMlwiLCBcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiODBcIiwgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IFwiI0ZGQkVDMFwiLCBcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI0YyRjJGMlwiLCBcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiNjBcIiwgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcmltYXJ5Q29sb3I6IFwiI0ZGRjBGMFwiLCBcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI0YyRjJGMlwiLCBcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiNDBcIiwgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgJChcIiAjY2hhcnRcIikucmFkaWFsQmFyKHtcclxuICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICB3aWR0aDogJzYwMCcsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc2MDAnLFxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IDZcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
