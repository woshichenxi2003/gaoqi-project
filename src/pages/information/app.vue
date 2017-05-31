<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">个人信息</h1>
        </header>
        <div class="mui-content">
            <form class="mui-input-group">
                <div class="face_con">
                    <div id="face_box">
                        &nbsp;
                    </div>
                </div>
                <div class="mui-input-row">
                    <label class="iconuser">&nbsp;</label>
                    <input id='nickname' type="text" class="mui-input-clear mui-input" placeholder="请输入昵称">
                </div>
                <div class="mui-input-row" id='showUserPicker'>
                    <label class="iconuser">&nbsp;</label>
                    <div id="gender" class="text_show">
                        请选择性别
                    </div>
                    <input id="genderID" type="text" hidden="hidden">
                </div>
                <div class="mui-input-row" id="showCityPicker3">
                    <label class="iconuser">&nbsp;</label>
                    <div class="text_show" id="cityResult3">
                        请选择常驻地
                    </div>
                    <input id="cityResult3ID" type="text" hidden="hidden">
                </div>
                <div class="mui-input-row text_area">
                    <textarea id="textarea" rows="5" placeholder="签名："></textarea>
                </div>
            </form>
            <div class="xyb">
                <button id='reg' type="button" class="mui-btn mui-btn-block mui-btn-cheng">下 一 步</button>
            </div>
        </div>
        <div id="showEdit">
            <header class="mui-bar mui-bar-nav mui-nav-bg">
                <a class="mui-icon  mui-icon-close_btn mui-pull-left" id="close_btn">
                    <img src="../../assets/img/close.png" />
                </a>
                <a class="mui-icon mui-icon-check_btn mui-pull-right" id="check_btn">
                    <img src="../../assets/img/open.png" />
                </a>
            </header>
            <div id="report">
                <img src="../../assets/img/kulou.png" />
            </div>
        </div>
    </div>
</template>

<script>
    require("expose-loader?mui!assets/js/mui.js");
    import { app } from 'assets/js/appp.js'
    require("expose-loader?$!assets/js/jquery.min.js");
    require("expose-loader?jQuery!assets/js/jquery.min.js");
    import { cropper } from 'assets/js/cropper.js'
    require("expose-loader?Picker!assets/js/mui.picker.js");
    require("expose-loader?PopPicker!assets/js/mui.poppicker.js");
    import { cityData } from 'assets/js/city.data.js'
    import { cityData3 } from 'assets/js/city.data-3.js'
    mui.init();
    mui.plusReady(function() {

        /************************************************************************/
        /*选择性别                                                               */
        /************************************************************************/

        var userPicker = new mui.PopPicker();
        userPicker.setData([{
            value: 'man',
            text: '男'
        }, {
            value: 'wemen',
            text: '女'
        }]);
        var showUserPickerButton = document.getElementById('showUserPicker');
        var userResult = document.getElementById('gender');
        var genderID = document.getElementById('genderID');
        showUserPickerButton.addEventListener('tap', function(event) {
            userPicker.show(function(items) {
                userResult.innerText = items[0].text;
                userResult.style.color = "#ffffff";
                if(items[0].text == '男') {
                    genderID.value = 'm';
                } else {
                    genderID.value = 'f';
                }

                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);

        /************************************************************************/
        /*选择省市县 三级代码联动                                                  */
        /************************************************************************/

        var cityPicker3 = new mui.PopPicker({
            layer: 3
        });
        cityPicker3.setData(cityData3);
        var showCityPickerButton = document.getElementById('showCityPicker3');
        var cityResult3 = document.getElementById('cityResult3');
        var cityResult3ID = document.getElementById('cityResult3ID');
        showCityPickerButton.addEventListener('tap', function(event) {
            cityPicker3.show(function(items) {
                cityResult3.innerText = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                cityResult3.style.color = "#ffffff";
                cityResult3ID.value = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);
        /************************************************************************/
        /*头像相关函数                              */
        /************************************************************************/
        mui(".face_con").on("tap", "#face_box", function(e) {
            if(mui.os.plus) {
                var a = [{
                    title: "拍照"
                }, {
                    title: "从手机相册选择"
                }];
                plus.nativeUI.actionSheet({
                    title: "添加头像",
                    cancel: "取消",
                    buttons: a
                }, function(b) {
                    switch(b.index) {
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
        /*拍照*/
        function getImage() {
            var cmr = plus.camera.getCamera();
            cmr.captureImage(function(p) {
                plus.io.resolveLocalFileSystemURL(p, function(entry) {
                    var localurl = entry.toLocalURL();
                    $("#report").html('<img src="' + localurl + '">');
                    cutImg();
                });
            });
        }
        /*相册选取*/
        function galleryImgs() {
            plus.gallery.pick(function(e) {
                $("#report").html('<img src="' + e.files[0] + '">');
                cutImg();
    //							mui('#face_box').popover('toggle');
            }, function(e) {
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

        mui(".mui-bar").on("tap", "#check_btn", function(e) {
            confirme();
        });


        mui(".mui-bar").on("tap", "#close_btn", function(e) {
            $("#showEdit").fadeOut();
        });

        function confirme() {
            $("#showEdit").fadeOut();
            var $image = $('#report > img');
            var dataURL = $image.cropper('getCroppedCanvas');
            var basecode = dataURL.toDataURL('image/jpeg'); //转成base64
            var ticketone = app.getReginfo().ticket;
            console.log(basecode);
            /*发送请求*/
            mui.ajax('https://api.gaoqi.cespc.com:9378/user/info/avatar', {
                data:{
                    "ticket":ticketone,
                    "file":basecode
                },
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 600000, //超时时间设置为10秒；
                success: function(data) {
                    if(data.ret == 1) {
                        //生成预览
                        $("#face_box").html('<img src="' + data.data.avatar_big + '">');
                    } else {
                        plus.nativeUI.toast(data.err);
                    }
                },
                error: function(xhr, type, errorThrown) {
                    //异常处理；
                    if(type == 'timeout') {
                        plus.nativeUI.toast('请求超时，请你检查您的网络');
                    } else if(type == 'abort') {
                        plus.nativeUI.toast('请检查您的网络是否链接');
                    } else if(type == 'timeout') {
                        plus.nativeUI.toast('服务器错误');
                    }
                    console.log(type);
                }
            })
            // $("#face_box").html(dataURL); //显示预览 展示的canvas
            // app.setReginfo('avatar_big',blob);
            //localStorage.face = dataURL; //存储用localStorage数据量太大时候用puls.storage
            /*是储存64还是直接存储canvas还需要再考虑 plus.storage.setItem('face', dataURL+"");*/
            //http://blog.csdn.net/cuixiping/article/details/45932793 参考网站
            //https://github.com/blueimp/JavaScript-Canvas-to-Blob 一个转blod的插件 如果app不支持在用
        }


        /************************************************************************/
        /*收集验证用户信息并跳转到选择游戏页面                                      */
        /************************************************************************/

        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止默认事件
        });
        var face_box = document.getElementById('face_box');
        var regButton = document.getElementById('reg');
        var nicknameBox = document.getElementById('nickname');
        var genderBox = document.getElementById('genderID');
        var cityResult3Box = document.getElementById('cityResult3ID');
        var textareaBox = document.getElementById('textarea');
        regButton.addEventListener('tap', function(event) {
            var cityObj = resolve_city(cityResult3Box.value);
            var reginfo = {
                'ticket': app.getReginfo()['ticket'] || '',
                'nickname': nicknameBox.value,
                'gender': genderBox.value,
                'signature': textareaBox.value,
                'province': cityObj['provinceid'],
                'city': cityObj['cityid'],
                'area': cityObj['areaid']
            }
            app.info(reginfo, function(err) {
                if(err) {
                    plus.nativeUI.toast(err);
                    return;
                }
                mui.openWindow({
                    url: 'selectgame.html',
                    id: 'selectgame',
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

        function resolve_city(str) {
            str.replace(/(^\s*)|(\s*$)/g, "");
            var strArr = str.split(' ');
            return {
                'provinceid': strArr[0],
                'cityid': strArr[1],
                'areaid': strArr[2]
            }
        }

    });



    export default {}
</script>

<style>
.mui-input-group:first-child {
    margin-top: 10px;
}
</style>
