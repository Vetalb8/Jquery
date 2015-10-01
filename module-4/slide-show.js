//
(function ($) {
    var viewUl = $("div.view")
            .css("overflow", "hidden")
            .children("ul"),
        imgs = viewUl.find("img"),
        imgW = 400,
        imgLen = imgs.length,
        totalImgsW = imgLen * imgW,
        current = 1;

    $("div#show")
        .show()
        .find("button").on("click", function () {
            var direction = $(this).attr("id"),
                position = imgW;
            (direction == "next") ? ++current : --current;
            if (current == 0) {
                current = imgLen;
                direction == "next";
                position = totalImgsW - imgW;
            } else if (current - 1 == imgLen) {
                current = 1;
                position = 0;
            }
            //console.log(current);
            doIt(viewUl, position, direction);
        });
    function doIt(container, position, direction) {
        var sign; // "-=" or "+="
        if (direction && position != 0) {
            sign = (direction == "next") ? "-=" : "+=";
        }
        var shift = {"margin-left": sign ? (sign+position) : position};
        var duration = {};
        if(position ==0 || position == imgW *( imgLen - 1 )){
            duration = {duration:0}
        }
        container.animate(shift, duration);
    }
})(jQuery);