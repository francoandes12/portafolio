document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
        duration:300,
        interval:4000
    });
    var elems2 = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems2, {
        edge:'right'
    });
});