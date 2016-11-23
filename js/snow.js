/**
 * Created by dayin on 2016/11/16.
 */


var bd=$('body');

//生成随机left值的雪花，并完成下落动画，下落到底部时，停止，
function snow(){
    //获取窗口宽和高
    var width=window.innerWidth;
    var height=window.innerHeight;
    console.log(width,height);
    //随机生成雪花的大小size，宽高相同
    var size=parseInt(Math.random()*30+5);
    //随机生成雪花的left值
    var left=parseInt(Math.random()*(width-5));
    //随机生成雪花下落的left值的正负
    //var sign=(Math.random()>0.4?-1:1);
    //随机生成雪花下落后最后的left值
    //var endLeft=parseInt(Math.random()*(width-5)+left)*sign;
    //随机生成雪花的下落interval
    var interval=parseInt(Math.random()*(7000)+4000);

    var img=$("<img src='images/snow.png'/>").css('position','absolute').css('width',size+'px').
        css('left',left+'px').animate({"top":height-size},interval,function(){
        this.remove();
    });
    bd.append(img);

}

//设置定时器不断生成雪花
var timer=setInterval(snow,500);

