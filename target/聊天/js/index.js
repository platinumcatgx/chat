user = null;
URL = "http://platinumcat.51vip.biz"
CLIENT = function () {
    this.user = null//当前登录用户
    this.URL = "http://www.platinumcat.51vip.biz"
}

//设置点击导航栏转跳页面
$(document).ready(function(){
    $("dd>a").click(function (e) {
        e.preventDefault();//设置点击不转跳
        $("#iframeMain").attr("src",$(this).attr("href"));//修改熟悉
    })
})

layui.use('element', function () {
    var element = layui.element
})
