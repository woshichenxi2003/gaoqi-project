<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">注册</h1>
        </header>
        <div class="mui-content">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label class="iconuser">&nbsp;</label>
                    <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号">
                </div>
                <div class="mui-input-row">
                    <label class="iconpassword">&nbsp;</label>
                    <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
                </div>
                <div class="mui-input-row">
                    <label class="iconpassword">&nbsp;</label>
                    <input id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码">
                </div>
                <div class="mui-input-row yz">
                    <label class="iconpassword">&nbsp;</label>
                    <input id='verificationCode' type="text" class="mui-input-clear mui-input" placeholder="请输入验证码">
                    <span class="dang">&nbsp;</span>
                    <button type="button" class="mui-btn mui-btn-danger yzm" id="code">获取验证码</button>
                </div>
            </form>
            <div class="xyb">
                <button id='reg' class="mui-btn mui-btn-block mui-btn-cheng">下一步</button>
            </div>
            <div class="mui-content-padded">
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>阅读并同意 </label>
                    <a class="yh">用户协议</a>
                    <input name="checkbox" value="Item 1" type="checkbox" checked>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.min.js");
require("expose-loader?enterfocus!assets/js/mui.enterfocus.js");
import { app } from 'assets/js/appp.js'
mui.init();
        mui.plusReady(function() {
            var settings = app.getSettings();
            var regButton = document.getElementById('reg');
            var accountBox = document.getElementById('account');
            var passwordBox = document.getElementById('password');
            var passwordConfirmBox = document.getElementById('password_confirm');
            var codeBox = document.getElementById('verificationCode');
            regButton.addEventListener('tap', function(event) {
                var regInfo = {
                    mobile: accountBox.value,
                    password: passwordBox.value,
                    code: codeBox.value
                };
                /**
                 * 验证两次密码是否一致
                 */
                var passwordConfirm = passwordConfirmBox.value;
                if (passwordConfirm != regInfo.password) {
                    plus.nativeUI.toast('密码两次输入不一致');
                    return;
                }
                /* 验证表单提交数据*/
                app.reg(regInfo, function(err) {
                    /*如果有错误提示用户错误信息 如果是用户已经注册过 设置用户登录信息为空后 跳转到登录页面*/
                    if (err) {
                        /*如果用户返回的信息是20204 设置注册信息为空*/
                        if (err == '20204' || err == 20204) {
                            app.setState(null);
                            mui.openWindow({
                                url: 'login.html',
                                id: 'login.html',
                                preload: true,
                                show: {
                                    aniShow: 'pop-in'
                                },
                                styles: {
                                    popGesture: 'hide'
                                },
                                waiting: {
                                    autoShow: false
                                },
                                // extras: {
                                //     main_loaded: 'true'
                                // }
                            });
                            plus.nativeUI.toast('用户已经注册请登录');
                            return;
                        }
                        plus.nativeUI.toast(err);
                        return;
                    }
                    /*如果注册成功 设置本地注册信息后跳转到信息填写页面*/
                    plus.nativeUI.toast('注册成功');
                    mui.openWindow({
                        url: 'information.html',
                        id: 'information',
                        preload: true,
                        show: {
                            aniShow: 'pop-in'
                        },
                        styles: {
                            popGesture: 'hide'
                        },
                        waiting: {
                            autoShow: false
                        }
                    });
                });

            });
            /*发送验证码*/
            mui('.yz').on('tap', '.mui-btn', function(e) {
                if (accountBox.value) {
                    var isOpen = true;
                    if (isOpen) {
                        isOpen = false;
                        var startTime = 120;
                        var _this = this;
                        //放到验证码发送成功里面
                        var timeObj = setInterval(function() {
                            if (startTime == 0 && startTime <= 0) {
                                setTimeout(function() {
                                    clearInterval(timeObj);
                                    mui(_this).button('reset');
                                    isOpen = true;
                                    startTime = 120;
                                }.bind(_this), 10);
                            } else {
                                var timeString = startTime + '秒';
                                mui(_this).button('loading');
                                mui('.textmsg')[0].innerHTML = timeString;
                                startTime--;
                            }
                        }, 1000);

                        console.log('有电话号码执行发送验证码')
                        app.getverificationCode(accountBox.value, function(err) {
                            if (err) {
                                console.log('发送成功但是有错误产生 系统弹出警告');
                                clearInterval(timeObj);
                                mui(_this).button('reset');
                                isOpen = true;
                                startTime = 120;
                                plus.nativeUI.toast(err);
                                return;
                            }
                            plus.nativeUI.toast('验证码已发送，请注意查收！');
                        })

                    } else {
                        plus.nativeUI.toast('验证码已经发送，请不要重复点击');
                    }
                } else {
                    plus.nativeUI.toast('请先输入手机号码再发送验证码！');
                }


            });

            mui('.mui-checkbox').on('change', 'input', function() {
                var value = this.checked ? "true" : "false";
                /*是否同意协议*/
            });
            mui('.mui-checkbox').on('tap', 'a', function() {
                mui.openWindow({
                    url: 'agreement.html',
                    id: 'agreement',
                    preload: true,
                    show: {
                        aniShow: 'pop-in'
                    },
                    styles: {
                        popGesture: 'hide'
                    },
                    waiting: {
                        autoShow: false
                    }
                });
            });

        });
export default {}
</script>

<style>
.mui-input-group:first-child {
        margin-top: 200px;
    }
</style>
