<template>
	<span>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
			<h1 class="mui-title">比赛报名</h1>
		</header>
		<footer class="mui-bar mui-bar-footer" id="join_btn">
			<button type="button" class="mui-btn mui-btn-hong-creat">
				<div class="btn_title">结果成绩提交</div>
				<div class="ts">
					<img src="../../assets/img/tousu_22.png" />
				</div>
			</button>
			<div class="inform">
				请认真阅读比赛结果呈报说明
			</div>
		</footer>
	
		<div class="mui-content">
			<div class="match_info">
				<div class="show_title1">
					请填报比赛结果：
				</div>
				<div class="match_information">
					<div class="match_game">
						<div class="game_name">比赛项目：
							<span>DOTA2</span>
						</div>
					</div>
				</div>
				<div class="match_time">
					16.02.12 18：00-21:00
					<br> 赛制：BO3
				</div>
				<div class="tostartgame_box">
					<div class="tostartgame_con">
						<div class="team_logo">
							<div class="zhuke">
								主队
							</div>
							<div class="team_logo_box">
								<img src="../../assets/img/team_logo_03.jpg">
							</div>
							<div class="team_name">
								TE-NAME
							</div>
						</div>
						<div class="team_vs">
							<div class="vs">vs</div>
							<div class="game_time">2.12 12：00</div>
						</div>
						<div class="team_logo">
							<div class="zhuke">
								客队
							</div>
							<div class="team_logo_box">
								<img src="../../assets/img/team_logo_03.jpg">
							</div>
							<div class="team_name">
								TE-NAME
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="match_con">
				<form action="#">
					<div class="match_num">
						第
						<span>一</span>局比赛:
					</div>
					<div class="match_infomain">
						<div class="match_info_zy">
							<select class="mui-btn mui-btn-block">
								<option value="item-1">天灾</option>
								<option value="item-2">夜魇</option>
	
							</select>
							<span>阵营</span>
							<select class="mui-btn mui-btn-block">
								<option value="item-1">天灾</option>
								<option value="item-2">夜魇</option>
							</select>
						</div>
						<div class="match_info_zy">
							<select class="mui-btn mui-btn-block">
								<option value="item-1">胜</option>
								<option value="item-2">负</option>
	
							</select>
							<span>结果</span>
							<select class="mui-btn mui-btn-block">
								<option value="item-1">负</option>
								<option value="item-2">胜</option>
	
							</select>
						</div>
						<div class="match_info_zy">
							<div class="match_info_inputstyle">
								<span>比赛时长</span>
								<input type="text" id="match_info_time" value="请输入比赛时长">
							</div>
	
						</div>
						<div class="match_info_zy">
							<div class="match_info_inputstyle">
								<span>游戏端ID</span>
								<input type="text" id="match_info_id" value="请输入游戏端比赛ID">
							</div>
						</div>
	
						<div class="face_con">
							<div id="face_box">
								&nbsp;
							</div>
						</div>
					</div>
				</form>
	
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
				&nbsp;
			</div>
		</div>
	</span>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");
require("expose-loader?$!assets/js/jquery.min.js");
require("expose-loader?jQuery!assets/js/jquery.min.js");
import { cropper } from 'assets/js/cropper.js'
 (function (mm, doc) {
		mm.init();
        mm.plusReady(function () {
            // 点击跳转
            mui('.tostartgame_box').on('tap', '.tostartgame_con', function () {
                mui.openWindow({
                    url: "match_one.html",
                    id: "match_one",
                    preload: true,
                })
            })
            //结束
            var settings = app.getSettings();


            document.querySelector('form').addEventListener('submit', function (e) {
                e.preventDefault(); // 阻止默认事件
            });

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
                }, {filter: "image", multiple: true});
            }

            function cutImg() {
                $("#showEdit").show();
                var $image = $('#report > img');
                $image.cropper({
                    aspectRatio: 1 / 1,
                    autoCropArea: 0.8
                });
            }

            mm(".mui-bar").on("tap", "#check_btn", function (e) {
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


        });
    }(mui, document));



export default {}
</script>

<style>

</style>
