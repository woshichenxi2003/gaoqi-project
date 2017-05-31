<template>
    <span>
        <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
        <h1 class="mui-title">创建战队</h1>
    </header>
    <footer class="mui-bar mui-bar-footer" id="join_btn">
        <button type="button" class="mui-btn mui-btn-hong-creat">
            <div class="btn_title blink">确 认 创 建</div>
        </button>
    </footer>
    <div class="mui-content">
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
                <label>战队宣言：</label>
                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入战队宣言">
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
            <div class="mui-input-row" id="showCityPicker3">
                <label>所在地：</label>
                <div class="text_show" id="cityResult3">
                    请选择常驻地
                </div>
            </div>
            <div class="mui-input-row text_area">
                <textarea id="textarea" rows="3" placeholder="请输入战队简介："></textarea>
            </div>

        </form>
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
    </span>
</template>

<script>
require("expose-loader?mui!assets/js/mui.min.js");
require("assets/js/mui.view.js");
require("expose-loader?feedback!assets/js/feedback.js");
require("expose-loader?$!assets/js/jquery.min.js");
require("expose-loader?jQuery!assets/js/jquery.min.js");
import { cropper } from 'assets/js/cropper.js';
require("expose-loader?Picker!assets/js/mui.picker.js");
require("expose-loader?PopPicker!assets/js/mui.poppicker.js");
import { cityData3 } from 'assets/js/city.data-3.js';
mui.init({

});
mui.plusReady(function () {
    /*选择省市县代码*/


    function defaultImg() {
        if (mui.os.plus) {
            plus.io.resolveLocalFileSystemURL("_doc/head.jpg", function (entry) {
                var s = entry.fullPath + "?version=" + new Date().getTime();;
                // document.getElementById("head-img").src = s;
                // document.getElementById("head-img1").src = s;
            }, function (e) {
                // document.getElementById("head-img").src = '../../assets/img/kulou.png';
            })
        } else {
            // document.getElementById("head-img").src = '../../assets/img/kulou.png';
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
        defaultImg();
        setTimeout(function () {
            initImgPreview();
        }, 300);
    }, 500);

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
    var checkList = Array.from(document.querySelectorAll('.mui-checkbox'));
    checkList.forEach(function (ele, index) {
        ele.addEventListener('tap', function() {
            checkList.forEach((el) => {
                el.querySelector('input').checked = false;
            })
            //this.querySelector('input').checked = checked;
        })
    });



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
})
// 变成单选按钮


export default {}
</script>

<style>

</style>
