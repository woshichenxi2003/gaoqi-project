<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">忘记密码</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label class="iconuser">&nbsp;</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
	
				<div class="mui-input-row yz">
					<label class="iconpassword">&nbsp;</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入验证码">
					<span class="dang">&nbsp;</span>
					<button type="button" class="mui-btn mui-btn-danger yzm">获取验证码</button>
				</div>
				<div class="mui-input-row">
					<label class="iconpassword">&nbsp;</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
				<div class="mui-input-row">
					<label class="iconpassword">&nbsp;</label>
					<input id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码">
				</div>
			</form>
			<div>
				<button id='reg' class="mui-btn mui-btn-block mui-btn-cheng">确认</button>
			</div>
			<div class="mui-content-padded">
	
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
      require("expose-loader?mui!assets/js/mui.min.js");
      import {app} from 'assets/js/appp.js'
       mui.init();
	   mui.plusReady(function() {
					
					mui('.yz').on('tap', '.mui-btn', function(e) {
						var startTime = 100;
						// var _this = this; 
						
						plus.nativeUI.toast('验证码已经发送，请注意查收！');
						console.log(this);
			           	var timeObj1 = setInterval(function(){
							console.log(this);
			           		if(startTime == 0 && startTime <= 0){
			           			setTimeout(function() {		
									console.log(this)	
			           				clearInterval(timeObj1);
					                mui(this).button('reset');
					            }.bind(this), 10);
			           		}else{
			           			var timeString = startTime+'秒';
			           			mui(this).button('loading');       			
			           			mui('.textmsg')[0].innerHTML = timeString;
			           			startTime--;
			           		}
			           	}.bind(this),1000)
			            
			        });
				});
export default {}
</script>
<style>
.mui-input-group:first-child {
	margin-top: 250px;
}
</style>
