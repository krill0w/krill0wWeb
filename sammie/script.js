$(document).ready(function () {
    var envelope = $("#envelope");

    envelope.click(function () {
        open();
        setTimeout(toLetter, 7000);
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function toLetter() {
        window.location.href = "" // this will forward to an unlisted video on my yt channel
    }


});
