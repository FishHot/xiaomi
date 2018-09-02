
window.addEventListener('load',function(){
    var xm = new XM();
    xm.categoryLeftSwiper();
})


var XM = function(){

}
XM.prototype = {
    categoryLeftSwiper:function(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: true
          });
          
    },
   
}