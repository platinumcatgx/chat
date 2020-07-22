//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function () {
    var element = layui.element;
    //一些事件监听
    element.on('tab(demo)', function (data) {
        console.log(data);
    });


});

// 加载表单模块
layui.use('form', function () {
    var form = layui.form;

    //监听单机事件
    form.on('submit(formDemo)', function (data) {
        //打印得到的数据
        console.log(data)
        //判断两次密码是否相同
        if (data.field.password != data.field.password2) {
            //密码不相同
            layer.msg("两次密码不一致")
            return false;
        }
        layer.msg(JSON.stringify(data.field));
        vue.data.formData=
        {
            "city": data.field.city,
            "desc":data.field.desc,
            "like": data.field.like.like,
            "password": data.field.password,
            "sex": data.field.sex,
            "switch": data.field.switch,
            "title": data.field.title
        }
        return false;
    });
});

var vue = new Vue({
    el: "#app",
    data: {
        sheng: sheng,
        formData: null,
        form:{
            username: '',
            password:'',
            password2:'',
            city:'',
            like:[],
            switch:true,
            sex:'',
            desc:'',
        }
    },
    methods:{
        tijiao : function (params) {
            this.form.password
        }
    }
})

// function submit(){
//     if()
// }