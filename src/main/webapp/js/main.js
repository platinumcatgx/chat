layui.use('carousel', function(){
    var b = 1201/503
    //获取浏览器宽度
    var W = $(window).width();
    var H = $(window).height();
    var carousel = layui.carousel
    //建造实例
    carousel.render({
        elem: '#imgs'
        ,width: '100%' //设置容器宽度
        ,height: (W/b).toString()+"px"
        ,arrow: 'always' //始终显示箭头
        ,anim: 'fade' //切换动画方式
        ,autoplay:true
        ,interval:1500
        // ,full:true

    })
    var carousel = layui.carousel;

})
//窗口变化是重新加载
$(window).resize(function () {
    // setBanner();
    window.location.reload()
})
layui.use('flow',function () {
    var flow = layui.flow;
    elem:'#imgs'
})

