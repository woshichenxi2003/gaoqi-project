<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">选择喜欢的游戏项目</h1>
		</header>
		<footer class="mui-bar mui-bar-footer">
			<button type="button" class="mui-btn mui-btn-red mui-btn-block">搞 起</button>
		</footer>
		<div class="mui-content">
			<form class="mui-input-group">
				<ul class="game_box">
					<li>
						<div class="mui-checkbox">
							<label>
								<img src="../../assets/img/gamelogo_03.png" />
							</label>
							<input name="checkbox" value="lol" type="checkbox">
						</div>
					</li>
					<li>
						<div class="mui-checkbox">
							<label>
								<img src="../../assets/img/gamelogo_05.png" style="width: 80px;" />
							</label>
							<input name="checkbox" value="dota2" type="checkbox">
						</div>
					</li>
					<li>
						<div class="mui-checkbox">
							<label>
								<img src="../../assets/img/gamelogo_10.png" />
							</label>
							<input name="checkbox" value="csgo" type="checkbox">
						</div>
					</li>
					<li>
						<div class="mui-checkbox">
							<label>
								<img src="../../assets/img/gamelogo_13.png" />
							</label>
							<input name="checkbox" value="hots" type="checkbox">
						</div>
					</li>
				</ul>
			</form>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
      require("expose-loader?mui!assets/js/mui.min.js");
      import {app} from 'assets/js/appp.js'
       (function($, doc) {
        $.init();
        $.plusReady(function() {
            var gamestr = [];
            mui('.game_box').on('tap', '.mui-checkbox', function() {
                var obj = this.getElementsByTagName('input')[0];
                !obj.checked ? ((gamestr.indexOf(obj.value) === -1) && (gamestr.push(obj.value))) : ((gamestr.indexOf(obj.value) !== -1) && gamestr.splice(gamestr.indexOf(obj.value), 1));
                app.setReginfolin('games', gamestr.join(','));
            });
            mui('.mui-bar').on('tap', '.mui-btn', function() {
                var info = app.getReginfolin();
                console.log(JSON.stringify(info));
                app.selectgame(info, function(err) {
                    if (err) {
                        plus.nativeUI.toast(err);
                        return;
                    }
                    mui.openWindow({
                        url: 'index.html',
                        id: 'index',
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
                        extras: {
                            main_loaded: 'true'//停止登录页预加载首页定时器
                        }
                    });
                });
            });
        });


    }(mui, document));
export default {}
</script>
<style>
.mui-input-group:first-child {
	margin-top: 250px;
}
</style>
