<template>
    <div>
      <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">登录</h1>
      </header>
      <div class="mui-content">
          <form id='login-form' class="mui-input-group">
              <div class="mui-input-row">
                  <label class="iconuser">&nbsp;</label>
                  <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号">
              </div>
              <div class="mui-input-row">
                  <label class="iconpassword">&nbsp;</label>
                  <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
              </div>
          </form>
          <div>
              <button id='login' class="mui-btn mui-btn-block mui-btn-cheng">登 录</button>
              <div class="link-area"><a id='forgetPassword'>忘记密码</a></div>
          </div>
          <div class="bottom_area">
              <button id='reg' class="mui-btn-block mui-btn-zc">新用户注册</button>
              <div class="oauth-area">
              </div>
          </div>
      </div>
    </div>
    
</template>

<script type="text/ecmascript-6">
      require("expose-loader?mui!assets/js/mui.js");
      require("expose-loader?enterfocus!assets/js/mui.enterfocus.js");
      import {app} from 'assets/js/appp.js'
        mui.init({
            statusBarBackground: '#f7f7f7',
        });
        mui.plusReady(function() {
            //仅支持竖屏显示
            plus.screen.lockOrientation("portrait-primary");
            //获得setting系统配置
            var settings = app.getSettings();
            //获得用户的状态 状态中包括token和用户名
            var state = app.getState();
            /************************************************************************/
            /*检查用户是否是第一次登录 如果是第一次登录 则跳转到用户欢迎页面               */
            /************************************************************************/
            //读取本地存储，检查是否为首次启动
            var showGuide = plus.storage.getItem("lauchFlag");
            if (!showGuide) {
                mui.openWindow({
                    id: 'guide.html',
                    url: 'guide.html',
                    styles: {
                        popGesture: "none"
                    },
                    show: {
                        aniShow: 'none'
                    },
                    waiting: {
                        autoShow: false
                    }
                });
            };
            /************************************************************************/
            /*判断主页是否已经加载完毕了 并定义跳转函数tomain                            */
            /************************************************************************/
            
            var mainPage = mui.preload({
                "id": 'index.html',
                "url": 'index.html'
            });
            var main_loaded_flag = false;
            //如果其他页面传来值，证明页面已经加载过了 不需要再判断页面是否已经加载完毕了；
            var self = plus.webview.currentWebview();
            if(self.main_loaded){
                main_loaded_flag = true;
            }
            mainPage.addEventListener("loaded", function() {
                main_loaded_flag = true;
            });
            var toMain = function() {
                //使用定时器的原因：
                //可能执行太快，main页面loaded事件尚未触发就执行自定义事件，此时必然会失败
                
                var id = setInterval(function() {
                    if (main_loaded_flag) {
                        console.log('首页预加载完成，进入首页');
                        clearInterval(id);
                        mui.fire(mainPage, 'showall', null); //将登陆事件传递给首页 让首页更新各个页面
                        mainPage.show("pop-in");
                    } else {
                        console.log("首页预加载未完成，所以不能跳转到首页");
                    }
                }, 20);
            };

            /************************************************************************/
            /* 检查是否满足直接跳转首页                                          */
            /************************************************************************/
            var time = parseInt(app.getState().expire_timestamp); //获取token过期时间戳
            var date = parseInt(Date.parse(new Date())) / 1000;
            var isExpired = (time > date) ? true : false; //查看是否过期 未过期为true 过期为false
            if (time && isExpired) {
                //有自动登录和自动登录设置了 系统直接跳转到主页 后台说需要在后台验证一下 token是否过期 那就需要添加验证功能与后台交互
                //登录成功后 后台直接返回一个过期时间的时间戳记录在本地 下面需验证用户的时间戳是否过期 如果过期了用户留在登录页面如果未过期 直接跳转到首页
                //加入验证用户是否完善了信息再进入主页
                console.log('已经有用户信息，下面验证进入验证是否完善信息');
                isPerfectAndtoMain();
                // console.log(JSON.stringify(app.getState()));
            } else {
                app.setState(null);
                
            }
            
            /************************************************************************/
            /*下面注册的是登录的基本按钮及登录功能                                       */
            /************************************************************************/
            var loginButton = document.getElementById('login');
            var accountBox = document.getElementById('account');
            var passwordBox = document.getElementById('password');
            var regButton = document.getElementById('reg');
            var forgetButton = document.getElementById('forgetPassword');
            loginButton.addEventListener('tap', function(event) {
                var loginInfo = {
                    mobile: accountBox.value,
                    password: passwordBox.value
                };
                app.login(loginInfo, function(err) {
                    if (err) {
                        plus.nativeUI.toast(err);
                        return;
                    }
                    isPerfectAndtoMain();
                });
            });
            mui.enterfocus('#login-form input', function() {
                mui.trigger(loginButton, 'tap');
            });

            var regObj = mui.preload({
                "id": 'reg.html',
                "url": 'reg.html'
            });
            var missObj = mui.preload({
                "id": 'forget_password.html',
                "url": 'forget_password.html'
            });

            regButton.addEventListener('tap', function(event) {
                plus.webview.show(regObj, 'pop-in', 250);
            }, false);
            forgetButton.addEventListener('tap', function(event) {

                plus.webview.show(missObj, 'pop-in', 250);
            }, false);
            //
            // window.addEventListener('resize', function() {
            //     oauthArea.style.display = document.body.clientHeight > 400 ? 'block' : 'none';
            // }, false);
            //
            var backButtonPress = 0;
            mui.back = function(event) {
                backButtonPress++;
                if (backButtonPress > 1) {
                    plus.runtime.quit();
                } else {
                    plus.nativeUI.toast('再按一次退出应用');
                }
                setTimeout(function() {
                    backButtonPress = 0;
                }, 1000);
                return false;
            };

            function isPerfectAndtoMain() {
                var userdata = app.getState();
                if (!userdata.user.is_perfect || userdata.user.is_perfect != 1) {
                    console.log("用户未完善信息，跳转到填写信息页面");
                    plus.nativeUI.toast('请您完善个人信息');
                    // app.setReginfo('ticket', userdata.ticket);
                    //跳转到填写信息的页面
                    mui.openWindow({
                        url: 'information.html',
                        id: 'information.html',
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
                } else {
                    console.log('用户已经完善信息 进入首页11');
                    toMain();
                }
            }
        })
export default {
            
          }
</script>
<style>
  
</style>
