<template>
    <span>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
            <h1 class="mui-title">比赛报名</h1>
        </header>
        <footer class="mui-bar mui-bar-footer" id="join_btn">
            <button type="button" class="mui-btn mui-btn-hong-creat">
                <div class="btn_title">报 名 参 赛</div>
                <div class="ts">
                    <img src="../../assets/img/tousu_22.png" />
                </div>
            </button>
            <div class="inform">
                请认真阅读DOTA2裁判规则
            </div>
        </footer>
    
        <div class="mui-content">
            <div class="match_info">
                <div class="show_title1">
                    您报名的赛事是：
                </div>
                <div class="match_info_face" style="margin-top: 20px;">
                    <div id="face">
                        <!--<img src="../images/regbg_01.jpg"/>-->
                    </div>
                    <div id="like_game1" style="top:140px">
                        <span class="dota"></span>
                    </div>
                </div>
                <div class="match_msg mui-ellipsis">
                    ECL秋季线上预选赛
                </div>
    
            </div>
            <div class="con">
                <div class="show_title">
                    请按照要求填写申请信息：
                </div>
                <form class="mui-input-group">
                    <div class="mui-input-row" id="showCityPicker3">
                        <label class="iconuser">&nbsp;</label>
                        <div class="text_show" id="cityResult3">
                            请选择战队
                        </div>
                    </div>
    
                    <div class="mui-input-row text_area">
                        <textarea id="textarea" rows="5" placeholder="签名："></textarea>
                    </div>
    
                </form>
            </div>
        </div>
    </span>
</template>

<script>
        require("expose-loader?mui!assets/js/mui.js");
             mui.init({
			});
			mui.plusReady(function(){
				
			
				
				mui('.tostartgame_box').on('tap','.tostartgame_con',function(){
						mui.openWindow({
		      				url:"match_one.html",
		      				id:"match_one",
		      				preload: true,
		      				
	      				})
					})
					
			})	
			
			
			//轮播相关代码
			

       



export default {}
</script>

<style>

</style>
