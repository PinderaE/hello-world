$(function() {

    $(window).resize(function() {
        if ($(window).width() <= '960') {
            $("#logo").attr("src", "img/logo-sm.png");
        } else {
            $("#logo").attr("src", "img/logo.png");
        }

    });



    $('.accordion__head').on('click', function() {
        var el = $(this);
        el.next('.accordion__body').slideToggle();
        el.toggleClass('open');
        return false;
    });


    $('.styler').styler({
        selectPlaceholder: 'Size',
    });


    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1000,
        values: [175, 500],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0]);
            $("#amount1").val("$" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0));
    $("#amount1").val("$" + $("#slider-range").slider("values", 1));
});