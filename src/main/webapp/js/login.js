// 加载表单模块
layui.use('form', function () {
    var form = layui.form;
    //注册
    form.on('submit(zhuce)', function (data) {
        if (data.field.password != data.field.password1) {
            layer.msg("密码不一致")
            return false
        }
        console.log(data.field)
        $.ajax({
            type: "post",
            url: "http://platinumcat.51vip.biz" + "/register",
            data: {
                name: data.field.username,
                password: data.field.password,
                gender: data.field.sex == "男" ? "1" : "2"
            },
            dataType: "json",
            success: function (response) {
                layer.msg("请求完成")
                console.log(response)
                /*
                [{
                gender: "女"
                id: 19
                name: "Java"
                password: "1"
                qq: 54736738
                }]

                length: 1
                __proto__: Object
                */
                return false
            },
            error: function (data) {
                console.log(""+data);
                layer.msg("发生了不可抗的事故")
                return false
            }
        });
        return false;
    });

    //登录
    form.on('submit(denglu)', function (data) {
        console.log(data.field)
        $.ajax({
            type: "get",
            url: URL+"/login.do",
            data: {
                qq:data.field.qq,
                password:data.field.password
            },
            dataType: "json",
            success: function (response) {
                layer.msg("成功")
                console.log(response)
                return false
            },
            error: function (data) {
                layer.msg("出错了")
                return false
            }

        })
        return false
    })
})