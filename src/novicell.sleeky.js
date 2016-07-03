/**
  * @desc Simplified popup in the right bottom corner of the screen
  * js example: novicell.sleeky.init(DATA);
  * @author Lars Hesselberg, @hesselberg
  * @url: https://github.com/Novicell/novicell-sleeky
  * @requires: Requires js-cookie.
*/

var novicell = novicell || {};

novicell.sleeky = novicell.sleeky || function () {
    this.init = function (data) {
        // Toggle button clicker
        $('body').on("click", '#sleeky-toggle', function () {
            var sleeky = data.selector;

            if (!sleeky.hasClass('collapsed')) {
                sleeky.addClass('collapsed');
            }
            else {
                sleeky.removeClass('collapsed');
            }

            // Set a cookie to '1' as they have now seen it, at least they tried to see it
            Cookies.set('sleekySeen', 1);
        });

        // Show the promo if the client hasn't seen it before
        if (Cookies.get('sleekySeen') === undefined) {
            // Remove class 'collapsed' after the timer is done
            setTimeout(function () {
                data.selector.removeClass('collapsed');
            }, 5000);
        }

        // Toggle button clicker
        $('body').on("click", '.sleeky-collapsed', function () {
            var sleeky = data.selector;
            sleeky.removeClass('collapsed');

            // Set a cookie to '1' as they have now seen it, at least they tried to see it
            Cookies.set('sleekySeen', 1);
        });
    };
    return {
        init:init
    };
}();
