<template>
    <div>
        <!--页面主结构开始-->
        <div id="oAp" class="mui-views">
            <div class="mui-view">
                <div class="mui-navbar">
                </div>
                <div class="mui-pages">
                </div>
            </div>
        </div>
        <!--页面主结构结束-->
        <!--单页面开始-->
        <div id="setting" class="mui-page">
            <!--页面标题栏开始-->
            <div class="mui-navbar-inner mui-bar mui-bar-nav">
                <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
                    <span class="mui-icon mui-icon-left-nav"></span>
                </button>
                <h1 class="mui-center mui-title">设置</h1>
            </div>
            <!--页面标题栏结束-->
            <!--页面主内容区开始-->
            <div class="mui-page-content">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell mui-media">
                                <a class="mui-navigate-right" href="#account">
                                    <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../assets/img/kulou.png">
                                    <div class="mui-media-body">
                                        Hello MUI
                                        <p class='mui-ellipsis'>手机号:1381178929</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell">
                                <a href="#changphone" class="mui-navigate-right">修改手机号</a>
                            </li>
                            <li class="mui-table-view-cell">
                                <a href="#changpassword" class="mui-navigate-right">修改密码</a>
                            </li>
                        </ul>
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell">
                                <a class="mui-navigate">关于搞起 <i class="mui-pull-right update">V3.3.0</i></a>
                            </li>
                        </ul>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell" id="logOut" style="text-align: center; background: #fc3e3e; color: #ffffff;">
                                <a btn='btn'>退出登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--页面主内容区结束-->
        </div>
        <!--单页面结束-->
        <div id="account" class="mui-page">
            <div class="mui-navbar-inner mui-bar mui-bar-nav">
                <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
                    <span class="mui-icon mui-icon-left-nav"></span>
                </button>
                <h1 class="mui-center mui-title">编辑个人信息</h1>
            </div>
            <div class="mui-page-content">
                <div class="mui-scroll-wrapper" style="background: #ffffff;">
                    <div class="mui-scroll" style="background: #ffffff;">
                        <div class="con">
                            <div class="mui-segmented-control1">
                                <a class="mui-control-item1 mui-active" index=0>
                                    修改个人信息
                                </a>
                                <a class="mui-control-item1" index=1>
                                    填写OB信息
                                </a>
                            </div>
                            <div class="display_box">
                                <div class="mui-control-content1 active">
                                    <form class="mui-input-group">
                                        <div class="face_con">
                                            <div id="face_box">
                                                <img src="../../assets/img/kulou.png" />
                                            </div>
                                        </div>
                                        <div class="mui-input-row">
                                            <label>昵称：</label>
                                            <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入昵称">
                                        </div>
                                        <div class="mui-input-row" id='showUserPicker'>
                                            <label>性别：</label>
                                            <div id="userResult" class="text_show">
                                                请选择性别
                                            </div>
                                        </div>
                                        <div class="mui-input-row" id="showCityPicker3">
                                            <label>常驻地：</label>
                                            <div class="text_show" id="cityResult3">
                                                请选择常驻地
                                            </div>
                                        </div>
                                        <div class="mui-input-row">
                                            <label>选择项目：</label>
                                            <div class="mui-checkbox">
                                                <span class="dota"></span>
                                                <input name="checkbox" value="Item 1" type="checkbox">
                                            </div>
                                            <div class="mui-checkbox">
                                                <span class="lol"></span>
                                                <input name="checkbox" value="Item 1" type="checkbox" checked="checked">
                                            </div>
                                            <div class="mui-checkbox">
                                                <span class="fengbao"></span>
                                                <input name="checkbox" value="Item 1" type="checkbox">
                                            </div>
                                            <div class="mui-checkbox">
                                                <span class="csgo"></span>
                                                <input name="checkbox" value="Item 1" type="checkbox">
                                            </div>
                                        </div>
                                        <div class="mui-input-row text_area">
                                            <textarea id="textarea" rows="3" placeholder="签名："></textarea>
                                        </div>
                                    </form>
                                    <ul class="mui-table-view">
                                        <li class="mui-table-view-cell" style="text-align: center; background: #fc3e3e; color: #ffffff;">
                                            <a btn='btn'>确 认</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mui-control-content1">
                                    <form class="mui-input-group" style="margin-top: 10px;">
                                        <div class="mui-input-row">
                                            <label>姓名：</label>
                                            <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入昵称">
                                        </div>
                                        <div class="mui-input-row">
                                            <label>身份证号：</label>
                                            <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入身份证号">
                                        </div>
                                        <div class="mui-input-row">
                                            <label>支付宝号：</label>
                                            <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入支付宝号">
                                        </div>
                                        <div class="mui-input-row" id='showUserPicker4'>
                                            <label>直播平台：</label>
                                            <div id="userResult4" class="text_show">
                                                请选择直播平台
                                            </div>
                                        </div>
                                        <div class="mui-input-row">
                                            <label>直播地址：</label>
                                            <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入直播地址">
                                        </div>
                                    </form>
                                    <ul class="mui-table-view">
                                        <li class="mui-table-view-cell" style="text-align: center; background: #fc3e3e; color: #ffffff;">
                                            <a btn='btn'>确 认</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="changphone" class="mui-page">
            <div class="mui-navbar-inner mui-bar mui-bar-nav">
                <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
                    <span class="mui-icon mui-icon-left-nav"></span>
                </button>
                <h1 class="mui-center mui-title">修改手机号</h1>
            </div>
            <div class="mui-page-content">
                <div class="mui-scroll-wrapper" style="background: #ffffff;">
                    <div class="mui-scroll" style="background: #ffffff;">
                        <form class="mui-input-group" style="margin-top: 10px;">
                            <div class="mui-input-row">
                                <label style="width: 27%;">手机号：</label>
                                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号" style="width: 73%;height: 38px;">
                            </div>
                            <div class="mui-input-row yz">
                                <label>验证码：</label>
                                <input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入验证码">
                                <span class="dang">&nbsp;</span>
                                <button type="button" class="mui-btn mui-btn-danger yzm">获取验证码</button>
                            </div>
                        </form>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell" style="text-align: center; background: #fc3e3e; color: #ffffff;">
                                <a btn='btn'>确 认</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="changpassword" class="mui-page">
            <div class="mui-navbar-inner mui-bar mui-bar-nav">
                <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
                    <span class="mui-icon mui-icon-left-nav"></span>
                </button>
                <h1 class="mui-center mui-title">修改密码</h1>
            </div>
            <div class="mui-page-content">
                <div class="mui-scroll-wrapper" style="background: #ffffff;">
                    <div class="mui-scroll" style="background: #ffffff;">
                        <form class="mui-input-group" style="margin-top: 10px;">
                            <div class="mui-input-row">
                                <label style="width: 27%;">原密码：</label>
                                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入原密码" style="width: 73%;height: 38px;">
                            </div>
                            <div class="mui-input-row">
                                <label style="width: 27%;">新密码：</label>
                                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入新密码" style="width: 73%;height: 38px;">
                            </div>
                            <div class="mui-input-row">
                                <label style="width: 27%;">新密码：</label>
                                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请再次输入密码" style="width: 73%;height: 38px;">
                            </div>
                        </form>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell" style="text-align: center; background: #fc3e3e; color: #ffffff;">
                                <a btn='btn'>确 认</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="showEdit">
            <header class="mui-bar mui-bar-nav mui-nav-bg">
                <a class="mui-icon  mui-icon-close_btn mui-pull-left" id="close_btn"><img src="../../assets/img/close.png" /></a>
                <a class="mui-icon mui-icon-check_btn mui-pull-right" id="check_btn"><img src="../../assets/img/open.png" /></a>
            </header>
            <div id="report">
                &nbsp;
            </div>
        </div>
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");
import { app } from 'assets/js/appp.js'
require("assets/js/mui.view.js");
require("expose-loader?feedback!assets/js/feedback.js");
require("expose-loader?$!assets/js/jquery.min.js");
require("expose-loader?jQuery!assets/js/jquery.min.js");
import { cropper } from 'assets/js/cropper.js'
require("expose-loader?Picker!assets/js/mui.picker.js");
require("expose-loader?PopPicker!assets/js/mui.poppicker.js");
import { cityData } from 'assets/js/city.data.js';
import { cityData3 } from 'assets/js/city.data-3.js';
mui.init();
mui.plusReady(function () {

    //初始化单页view
    var viewApi = mui('#oAp').view({
        defaultPage: '#setting'
    });
    //初始化单页的区域滚动
    mui('.mui-scroll-wrapper').scroll();
    //分享操作
    var shares = {};
    var view = viewApi.view;
    //处理view的后退与webview后退
    var oldBack = mui.back;
    mui.back = function () {
        if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
            viewApi.back();
        } else { //执行webview后退
            oldBack();
        }
    };
    //监听页面切换事件方案1,通过view元素监听所有页面切换事件，目前提供pageBeforeShow|pageShow|pageBeforeBack|pageBack四种事件(before事件为动画开始前触发)
    //第一个参数为事件名称，第二个参数为事件回调，其中e.detail.page为当前页面的html对象
    view.addEventListener('pageBeforeShow', function (e) {
        //              console.log(e.detail.page.id + ' beforeShow');
    });
    view.addEventListener('pageShow', function (e) {
        //              console.log(e.detail.page.id + ' show');
    });
    view.addEventListener('pageBeforeBack', function (e) {
        //              console.log(e.detail.page.id + ' beforeBack');
    });
    view.addEventListener('pageBack', function (e) {
        //              console.log(e.detail.page.id + ' back');
    });



mui('.mui-segmented-control1').on('tap', '.mui-control-item1', function () {
    var index = this.getAttribute('index') - 0;
    mui('.mui-control-item1').each(function () {
        this.classList.remove('mui-active');
    });
    this.classList.add('mui-active');
    mui('.mui-control-content1').each(function () {
        this.classList.remove('active');
    });
    mui('.mui-control-content1')[index].classList.add('active');


});
    function defaultImg() {
        // if (mui.os.plus) {
        //     plus.io.resolveLocalFileSystemURL("_doc/head.jpg", function (entry) {
        //         var s = entry.fullPath + "?version=" + new Date().getTime();
        //         document.getElementById("head-img").src = s;
        //         //document.getElementById("head-img1").src = s;
        //     }, function (e) {
        //         document.getElementById("head-img").src = '../assets/img/kulou.png';
        //         /*document.getElementById("head-img1").src = '../../assets/img/kulou.png';*/
        //     })
        // } else {
        //     document.getElementById("head-img").src = '../assets/img/kulou.png';
        //     /*document.getElementById("head-img1").src = '../../assets/img/kulou.png';*/
        // }
        if (mui.os.plus) {
            document.getElementById("head-img").src = '../assets/img/kulou.png';
        } else {
            document.getElementById("head-img").src = '../assets/img/kulou.png';
            /*document.getElementById("head-img1").src = '../../assets/img/kulou.png';*/
        }

    }

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // 阻止默认事件
    });

    function initImgPreview() {
        var imgs = document.querySelectorAll("img.mui-action-preview");
        imgs = mui.slice.call(imgs);
        if (imgs && imgs.length > 0) {
            var slider = document.createElement("div");
            slider.setAttribute("id", "__mui-imageview__");
            slider.classList.add("mui-slider");
            slider.classList.add("mui-fullscreen");
            slider.style.display = "none";
            slider.addEventListener("tap", function () {
                slider.style.display = "none";
            });
            slider.addEventListener("touchmove", function (event) {
                event.preventDefault();
            })
            var slider_group = document.createElement("div");
            slider_group.setAttribute("id", "__mui-imageview__group");
            slider_group.classList.add("mui-slider-group");
            imgs.forEach(function (value, index, array) {
                //给图片添加点击事件，触发预览显示；
                value.addEventListener('tap', function () {
                    slider.style.display = "block";
                    _slider.refresh();
                    _slider.gotoItem(index, 0);
                })
                var item = document.createElement("div");
                item.classList.add("mui-slider-item");
                var a = document.createElement("a");
                var img = document.createElement("img");
                img.setAttribute("src", value.src);
                a.appendChild(img)
                item.appendChild(a);
                slider_group.appendChild(item);
            });
            slider.appendChild(slider_group);
            document.body.appendChild(slider);
            var _slider = mui(slider).slider();
        }
    }

    setTimeout(function () {
        // defaultImg();
        setTimeout(function () {
            initImgPreview();
        }, 300);
    }, 500);
    /*选择性别代码*/

    var userPicker = new mui.PopPicker();
    userPicker.setData([{
        value: 'man',
        text: '男'
    }, {
        value: 'wemen',
        text: '女'
    }]);
    var showUserPickerButton = document.getElementById('showUserPicker');
    var userResult = document.getElementById('userResult');
    showUserPickerButton.addEventListener('tap', function (event) {
        userPicker.show(function (items) {
            userResult.innerText = items[0].text;
            userResult.style.color = "#000000";
            //返回 false 可以阻止选择框的关闭
            //return false;
        });
    }, false);


    /*选择直播平台代码*/

    var userPicker4 = new mui.PopPicker();
    userPicker4.setData([{
        value: 'man',
        text: '火猫'
    }, {
        value: 'wemen',
        text: '斗鱼'
    }, {
        value: 'wemen',
        text: '熊猫'
    }, {
        value: 'wemen',
        text: '战旗'
    }, {
        value: 'wemen',
        text: '暴风'
    }]);
    var showUserPickerButton4 = document.getElementById('showUserPicker4');
    var userResult4 = document.getElementById('userResult4');
    showUserPickerButton4.addEventListener('tap', function (event) {
        userPicker4.show(function (items) {
            userResult4.innerText = items[0].text;
            userResult4.style.color = "#000000";
            //返回 false 可以阻止选择框的关闭
            //return false;
        });
    }, false);


    /*选择省市县代码*/
    var cityPicker3 = new mui.PopPicker({
        layer: 3
    });
    cityPicker3.setData(cityData3);
    var showCityPickerButton = document.getElementById('showCityPicker3');
    var cityResult3 = document.getElementById('cityResult3');
    showCityPickerButton.addEventListener('tap', function (event) {
        cityPicker3.show(function (items) {
            cityResult3.innerText = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
            cityResult3.style.color = "#000000";
            //返回 false 可以阻止选择框的关闭
            //return false;
        });
    }, false);

    /*照片相关函数*/
    mui(".face_con").on("tap", "#face_box", function (e) {
        if (mui.os.plus) {
            var a = [{
                title: "拍照"
            }, {
                title: "从手机相册选择"
            }];
            plus.nativeUI.actionSheet({
                title: "修改头像",
                cancel: "取消",
                buttons: a
            }, function (b) {
                switch (b.index) {
                    case 0:
                        break;
                    case 1:
                        getImage();
                        break;
                    case 2:
                        galleryImgs();
                        break;
                    default:
                        break
                }
            })
        }

    });


    //拍照
    function getImage() {
        var cmr = plus.camera.getCamera();
        cmr.captureImage(function (p) {
            plus.io.resolveLocalFileSystemURL(p, function (entry) {
                var localurl = entry.toLocalURL();
                $("#report").html('<img src="' + localurl + '">');
                cutImg();
            });
        });
    }

    //相册选取
    function galleryImgs() {
        plus.gallery.pick(function (e) {
            $("#report").html('<img src="' + e.files[0] + '">');
            cutImg();
            /*mui('#face_box').popover('toggle');*/
        }, function (e) {
            //outSet( "取消选择图片" );
        }, {
                filter: "image",
                multiple: true
            });
    }

    function cutImg() {
        $("#showEdit").show();
        var $image = $('#report > img');
        $image.cropper({
            aspectRatio: 1 / 1,
            autoCropArea: 0.8
        });
    }

    mui(".mui-bar").on("tap", "#check_btn", function (e) {
        confirme();
    });

    mui(".mui-bar").on("tap", "#close_btn", function (e) {
        $("#showEdit").fadeOut();
    });

    function confirme() {
        $("#showEdit").fadeOut();
        var $image = $('#report > img');
        var dataURL = $image.cropper('getCroppedCanvas');
        var basecode = dataURL.toDataURL();
        $("#face_box").html(dataURL);
        /*plus.storage.face = dataURL;*/
        plus.storage.setItem('face', dataURL + "");

        /*localStorage.face = dataURL;*/
        /*是储存64还是直接存储canvas还需要再考虑*/

    }

    /*发送验证码*/
    mui('.yz').on('tap', '.mui-btn', function (e) {
        var startTime = 100;
        var _this = this;
        plus.nativeUI.toast('验证码已经发送，请注意查收！');
        var timeObj = setInterval(function () {
            if (startTime === 0 && startTime <= 0) {
                setTimeout(function () {
                    clearInterval(timeObj);
                    mui(_this).button('reset');
                }.bind(_this), 10);
            } else {
                var timeString = startTime + '秒';
                mui(_this).button('loading');
                mui('.textmsg')[0].innerHTML = timeString;
                startTime--;
            }
        }, 1000)

    });
    /*退出登录*/
    mui('.mui-table-view').on('tap', '#logOut', function (e) {
        /*点击退出账号 清空用户登录信息 跳转到登录页面*/
        app.gotoLogView();
    });

});



export default {}
</script>

<style>

</style>
