// JavaScript Document

$(function() {
        if (!isPhone())
            return;

        $('span[data-action=call]').each(function() {
            var $ele = $(this);
            $ele.wrap('<a href="tel:' + $ele.data('tel') + '"></a>');
        });
    });

    function isPhone() {
        return (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0);
    }

    $(function(){
        var ua = navigator.userAgent;
        if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
            $('.tel-link').each(function(){
                if($(this).is('img')) {
                    var str = $(this).attr('alt');
                    $(this).wrap('<a href="tel:' + str.replace(/-/g, '') + '">');
                } else {
                    var str = $(this).text();
                    $(this).replaceWith('<a href="tel:' + str.replace(/-/g, '') + '">' + str + '');
                }
            });
        }
    });