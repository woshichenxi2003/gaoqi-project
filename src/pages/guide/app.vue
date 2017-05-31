<template>
    <div id="slider" class="mui-slider mui-fullscreen ubg">
        <div class="mui-slider-group">
            <!-- 第一张 -->
            <div class="mui-slider-item">
                <div class="item-logo">
                    <!-- <a href="#">
            						&nbsp;
            						</a> -->
                    <div class="animate guide-show">
                        <h2 class="animated bounceInDown">&nbsp;</h2>
                        <li class="animated bounceInLeft"><img src="../../assets/img/huadong/part1_03.png" alt=""></li>
                        <li class="animated bounceInRight"><img src="../../assets/img/huadong/part1_06.png" alt=""></li>
                    </div>
                </div>
            </div>
            <!-- 第二张 -->
            <div class="mui-slider-item">
                <div class="item-logo">
                    <!-- <a href="#">
            						&nbsp;
            						</a> -->
                    <div id="tips-2" class="animate mui-hidden">
                        <h2 class="animated bounceInDown">&nbsp;</h2>
                        <li class="animated bounceInLeft" style="width:90%"><img src="../../assets/img/huadong/part2_03.png" alt=""></li>
                        <li class="animated bounceInRight"><img src="../../assets/img/huadong/bbs_06.png" alt=""></li>
                    </div>
                </div>
            </div>
            <!-- 第三张 -->
            <div class="mui-slider-item">
                <div class="item-logo" style="/*background:url(../../assets/img/huadong/04.jpg) center center no-repeat; background-size: auto 100%;*/">
                    <!-- <a href="#">
            						&nbsp;
            						</a> -->
                    <div id="tips-3" class="animate mui-hidden">
                        <h2 class="animated bounceInDown">&nbsp;</h2>
                        <li class="animated bounceInLeft" style="width: 55%"><img src="../../assets/img/huadong/chengji_03.png" alt=""></li>
                        <li class="animated bounceInRight"><img src="../../assets/img/huadong/wuhei_03.png" alt=""></li>
                    </div>
                </div>
            </div>
            <!-- 第四张 -->
            <div class="mui-slider-item">
                <div class="item-logo">
                    <a href="#" class="bf"></a>
                    <div class="animate">
                        <button id='close' class="mui-btn mui-btn-warning mui-btn-outlined">立即体验</button>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="mui-slider-indicator">
            				<div class="mui-indicator mui-active"></div>
            				<div class="mui-indicator"></div>
            				<div class="mui-indicator"></div>
            				<div class="mui-indicator"></div>
            			</div>-->
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");
mui.back = function () { };
mui.plusReady(function () {
    if (mui.os.ios) {
        plus.navigator.setFullscreen(true);
    }
    plus.navigator.closeSplashscreen();
    document.getElementById("close").addEventListener('tap', function (event) {
        plus.storage.setItem("lauchFlag", "true");
        plus.navigator.setFullscreen(false);
        plus.webview.currentWebview().close();
    }, false);
    //图片切换时，触发动画
    document.querySelector('.mui-slider').addEventListener('slide', function (event) {
        //注意slideNumber是从0开始的；
        var index = event.detail.slideNumber + 1;
        if (index == 2 || index == 3) {
            var item = document.getElementById("tips-" + index);
            if (item.classList.contains("mui-hidden")) {
                item.classList.remove("mui-hidden");
                item.classList.add("guide-show");
            }
        }
    });
});
//立即体验按钮点击事件



export default {}
</script>

<style>
#close {
    position: absolute;
    width: 160px;
    left: 50%;
    margin-left: -80px;
    bottom: 15%;
    padding: 10px;
    color: #0149a1;
    border-color: #0149a1;
}

.item-logo {
    width: 100%;
    height: 100%;
    position: relative;
}

.item-logo a {
    width: 180px;
    height: 180px;
    display: block;
    border: 1px solid #FFFFFF;
    /*background: url('../../assets/img/logo_gui.png') center center no-repeat;*/
    background-size: 50% auto;
    /* border-color: #0149a1; */
    box-shadow: 0px 0px 8px #0149a1;
    text-align: center;
    line-height: 180px;
    border-radius: 50%;
    font-size: 40px;
    color: #fff;
    position: absolute;
    top: 15%;
    left: 50%;
    margin-left: -90px;
}

.animate {
    position: absolute;
    left: 0;
    bottom: 23%;
    width: 100%;
    color: #fff;
    display: -moz-box;
}

.animate h2 {
    text-align: center;
    margin-bottom: 20px;
}

.animate li {
    width: 70%;
    /* height: 30px; */
    line-height: 30px;
    list-style: none;
    font-size: 16px;
    text-align: right;
    padding: 10px;
    margin: 0 auto;
}




/* .animate li:nth-child(3) {
				text-align: left;
				float: right;
			} */

.animated {
    -webkit-animation-duration: 1s;
    -webkit-animation-play-state: paused;
    -webkit-animation-fill-mode: both;
}

.guide-show .bounceInDown {
    -webkit-animation-name: bounceInDown;
    -webkit-animation-play-state: running;
    -webkit-animation-delay: 1s;
    display: block;
}

.guide-show .bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    display: block;
    -webkit-animation-play-state: running;
}

.guide-show .bounceInRight {
    -webkit-animation-name: bounceInRight;
    display: block;
    -webkit-animation-play-state: running;
    -webkit-animation-delay: 0.5s;
}

@-webkit-keyframes bounceInDown {
    0%,
    60%,
    75%,
    90%,
    100% {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, 3px, 0);
        transform: translate3d(0, 3px, 0);
    }
    100% {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    100% {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    100% {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes bounceInRight {
    0%,
    60%,
    75%,
    90%,
    100% {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
    }
    100% {
        -webkit-transform: none;
        transform: none;
    }
}
</style>
