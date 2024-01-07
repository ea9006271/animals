window.onload = function () {
    setCanvas();
    //設定DIV大小
    $('#content').width(canvasWidth);
    $('#content').height(canvasHeight);
    $('#content2').width(canvasWidth);
    $('#content2').height(canvasHeight);
    //page_direction();
};
$(window).on("deviceorientation resize", function (event) {
    page_direction();
});
function page_direction() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        /*var new_div0 = document.createElement('div');
        new_div0.setAttribute('class', 'popup2');
        var new_div1 = document.createElement('div');
        new_div1.setAttribute('class', 'infobg');
        var new_span = document.createElement('span');
        new_span.setAttribute('class', 'okbtn2');
        var new_img = document.createElement('img');
        new_img.setAttribute('src', './img/info-ok.png');
        new_img.setAttribute('class', 'infookcs');
        new_span.appendChild(new_img);
        new_div1.appendChild(new_span);
        new_div0.appendChild(new_div1);
        document.body.appendChild(new_div0);*/
        //location.reload();
        var new_div = document.createElement('div');
        new_div.setAttribute('class', 'reversalimg');
        var new_img = document.createElement('img');
        new_img.setAttribute('src', './img/reversal1.png');
        new_img.setAttribute('z-index', 9999);
        new_img.setAttribute('height', '100%');
        new_img.setAttribute('width', '100%');
        new_div.appendChild(new_img);
        document.body.appendChild(new_div);
    }
    else if (window.matchMedia("(orientation: landscape)").matches) {
        $('.reversalimg').hide();
        //$('.popup2').hide();
    }
}