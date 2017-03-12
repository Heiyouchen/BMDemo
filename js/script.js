
$(function () {
    
    //表单验证
    $('input[name="loginbtn"]').click(function(event) {
        var $name = $('input[name="username"]');
        var $password = $('input[name="password"]');
        var $verify = $('input[name="verify"]');
        var $text = $('#text');
        var _name = $.trim($name.val());
        var _password = $.trim($password.val());
        var _verify = $.trim($verify.val());

        if('' == _name){
            $text.text('请输入用户名！');
            $name.focus();//光标停到用户名框
            return;
        }
        if('' == _password){
            $text.text('请输入密码！');
            $password.focus();//光标停到密码框
            return;
        }
        if('' == _verify){
            $text.text('请输入请输入验证码！');
            $verify.focus();//光标停到验证码框
            return;
        }
        $text.text('登录成功，请稍候！');//用户名密码验证后期加入
    });
});


