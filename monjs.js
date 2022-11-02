$(document).ready(function () {
    $(document).keydown((event) => {
        const key = event.which;
        const leftPosition = $('#cube').offset().left;
        const topPosition = $('#cube').offset().top;
        const deplacement = 100;
        switch (key) {
            case 39:
                const moveToRight = leftPosition + deplacement;
                $('#cube').css('left', moveToRight + "px");
                break;
            case 37:
                const moveToLeft = leftPosition - deplacement;
                $('#cube').css('left', moveToLeft + "px");
                break;
            case 38:
                const moveToTop = topPosition - deplacement;
                $('#cube').css('top', moveToTop + "px");
                break;
            case 40:
                const moveToBottom = topPosition + deplacement;
                $('#cube').css('top', moveToBottom + "px");
                break;
            default: break;
        }
    })
})