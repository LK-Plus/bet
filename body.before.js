$(document).ready(function () {
    $('.prema-100>div:first-child>div:first-child').css('top', '15em')
    setTimeout(function () {
        $('.prema-100>div:first-child>div:first-child').css('height', '1500px', 'overflow', 'scroll ');
        $('.e-100>div:first-child>div:first-child').css('height', '250%');
        $('.virtual-100>div:first-child>div:first-child').css('height', '250%');
        $('#column2463').removeAttr("style");
    }, 3000);
    $('.promotion-filters').css('border-bottom', '1px solid #000!important');
    $('.header-rows .ModuleNavigation>.navigation-inner:not(.in-canvas)>.off-canvas-button').remove();
    $('#column2463').removeAttr("style");
    $('div.slider-container').html(`<iframe src="https://pokerbyte.com.br/bet/banner" width="100%" height="100%" scrolling="no" style="border:none;"></iframe>`);
});
document.querySelector(".footerbuttonup").onclick = function () {
    expand()
};
document.querySelector(".footerbuttondown").onclick = function () {
    shrink()
};
document.querySelector(".footer").style.height = "10px";

function expand() {
    if (document.querySelector(".footer").style.height = "10px") {
        document.querySelector(".footer").style.height = "235px";
        document.querySelector(".footerbuttondown").style.visibility = "visible";
        document.querySelector(".footerbuttonup").style.visibility = "hidden";
        document.querySelector(".footercont").style.opacity = "1";
        document.querySelector(".footercont").style.visibility = "visible";
    }
}

function shrink() {
    if (document.querySelector(".footer").style.height = "235px") {
        document.querySelector(".footer").style.height = "10px";
        document.querySelector(".footerbuttondown").style.visibility = "hidden";
        document.querySelector(".footerbuttonup").style.visibility = "visible";
        document.querySelector(".footercont").style.opacity = "0";
        document.querySelector(".footercont").style.visibility = "hidden";
    }
}

window._digisac = { 
    id: "ac2d57a6-f77d-45ee-b26b-408c08afaabc"
}
