var x = 2;
function test() {　　　　
    alert(this.x);　　
}　　
var o = {};　　
o.x = 1;　　
o.m = test;　　
o.m();



$(".aaron1").on('click', function () {
    $(".left").append($(this.left).clone().css('color', 'red'))
})