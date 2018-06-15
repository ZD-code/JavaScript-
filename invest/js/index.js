function setRem(){
    var _width = document.documentElement.clientWidth || document.body.clientWidth;
    var _html = document.querySelectorAll('html')[0];
    _html.style.fontSize = _width / 100 +'px';
}

setRem();

window.onload = function(){
    renderImg();
    window.addEventListener('touchmove',renderImg);
};
function renderImg(){
    var imgs = document.querySelectorAll('img');
    var len = imgs.length;
    var index = 0;
    var seeHeight = document.documentElement.clientHeight;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    for(var i=index; i< len; i++){
        if(imgs[i].offsetTop < seeHeight + scrollTop){
            if(imgs[i].getAttribute('src') === 'images/none.jpg'){
                imgs[i].src = imgs[i].getAttribute('data-src');
            }
            index=i+1;
        }
    }

}