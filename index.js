$('.popup a').fancybox({
    caption: function (instance, item) { }
});



var a = 0;
$(window).scroll(function () {
    var oTop = $(".counter-number").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 1000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});



$(document).ready(function () {
    $('ul.tabs li').first().addClass('active');
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

    let drpdown = function () {
        if($(window).width() < 768){
          // jquery for dropdown
          $(function() {
            var list = $('.tabs');
            var link = $('.mobile-view');
            link.click(function(e) {
              e.preventDefault();
              list.slideToggle(200);
            });
            list.find('li').click(function() {
              var text = $(this).html();
              var icon = '<i class="fa-solid fa-caret-down"></i>';
              link.html(text);
              link.append(icon)
              list.slideToggle(200);
            });
          });
        }
      }
      $(window).resize(function() {
        if($(window).width() < 768){
          drpdown();
          location.reload()
        }
      });
      drpdown();
}
)