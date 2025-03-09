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
        window.location.href = "https://www.youtube.com/watch?v=aRZbUERq9Z0" // this will forward to an unlisted video on my yt channel
    }


});
