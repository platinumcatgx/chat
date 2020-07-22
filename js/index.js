user = null;

CLIENT = function(){
    this.user=null//当前登录用户
    this.URL="http://www.platinumcat.51vip.biz"
}



//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function () {
    var element = layui.element;
});

// 加载表单模块
layui.use('form', function () {
    var form = layui.form;
    //表单数据监控

    //注册
    form.on('submit(zhuce)', function (data) {
        if(data.field.password!=data.field.password1){
            layer.msg("密码不一致")
            return false
        }
        $.ajax({
            type: "post",
            url: CLIENT.URL+"/register",
            data: {
                name:data.field.username,
                password:data.field.password,
                gender:data.field.sex
            },
            dataType: "json",
            success: function (response) {
                layer.msg("请求完成")
                console,log(response);
                return false
            },
            error:function(data){
                layer.msg("发生了不可抗的事故")
                return false
            }
        });
        return false;
    });

    //登录
    form.on('submit(denglu)',function(data){
        $.ajax({
            type: "post",
            url: CLIENT.URL,
            data: {

            },
            dataType: "json",
            success: function (response) {
                layer.msg("成功")
                console,log(response)
                return false
            },
            error:function(data){
                layer.msg("出错了")
                return false
            }
            
        })
        return false
    })
});