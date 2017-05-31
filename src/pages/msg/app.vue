<template>
    <div class="mui-content">
        <div id="slider" class="mui-slider mui-fullscreen">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile">
                        新闻资讯
                    </a>
                    <a class="mui-control-item" href="#item2mobile">
                        往来消息
                    </a>
                </div>
            </div>
            <div class="mui-slider-group">
                <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
                    <div id="scroll" class="mui-scroll-wrapper">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell mui-media" v-for="item in feed">
                                    <a href="javascript:;">
                                        <img class="mui-media-object mui-pull-left" :src="item.pic">
                                        <div class="mui-media-body">
                                            {{item.title}}
                                            <p class='mui-ellipsis'>{{item.intro}}</p>
                                            <span class="mui-icon mui-icon-compose">{{item.commentCountInfo.show}}</span>
                                        </div>
                                    </a>
                                </li>
    
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="item2mobile" class="mui-slider-item mui-control-content">
                    <div class="mui-scroll-wrapper" id="scroll1">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="msg_box" v-for="fri in friend">
                                    <div class="msg_logo_box">
                                        <div class="msg_logo">
                                            <img :src="fri.pic" />
                                        </div>
                                        <div id="msg_like_game">
                                            <span class="dota" v-if="fri.game_info.dota2"></span>
                                            <span class="lol" v-if="fri.game_info.lol"></span>
                                            <span class="fengbao" v-if="fri.game_info.hots"></span>
                                            <span class="csgo" v-if="fri.game_info.csgo"></span>
                                        </div>
                                    </div>
                                    <div class="msg_ifno">
                                        <h4 class="mui-ellipsis">{{fri.friendName}}</h4>
                                        <p class="mui-ellipsis">{{fri.intro}}</p>
                                    </div>
                                    <div class="msg_effectiveness">
                                        {{fri.time}}
                                    </div>
                                </li>
    
                            </ul>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");
require("assets/js/mui.pullToRefresh.js");
require("assets/js/mui.pullToRefresh.material.js");
import { NewsData }from "assets/js/newData.js"
let allData = {
    'feed': [],
    'friend': []
};
mui.ready(function () {
    var onewsData = new NewsData('./common/news_mock.json', {}, 'get', function (da) {
        allData.feed = da.data.feed;
    });
    var ofriendData = new NewsData('./common/friend_mock.json', {}, 'get', function (da) {
        allData.friend = da.data.friend;
    });
    mui('#scroll').scroll({
        indicators: true //是否显示滚动条
    });
    mui('#scroll1').scroll({
        indicators: true //是否显示滚动条
    });
    var deceleration = mui.os.ios ? 0.003 : 0.0009;
    mui('.mui-scroll-wrapper').scroll({
        bounce: false,
        indicators: true, //是否显示滚动条
        deceleration: deceleration
    });
    //循环初始化所有下拉刷新，上拉加载。
    mui.each(document.querySelectorAll('#scroll .mui-scroll'), function (index, pullRefreshEl) {
        mui(pullRefreshEl).pullToRefresh({
            down: {
                callback: function () {
                    var self = this;
                    setTimeout(function () {
                        // var ul = self.element.querySelector('.mui-table-view');
                        // ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
                        onewsData.init({}, function (da) {
                            da.data.feed.forEach(function (element) {
                                allData.feed.unshift(element);
                            }, this);
                        })
                        self.endPullDownToRefresh();

                    }, 1000);
                }
            },
            up: {
                callback: function () {
                    var self = this;
                    setTimeout(function () {
                        onewsData.init({}, function (da) {
                            da.data.feed.forEach(function (element) {
                                allData.feed.push(element);
                            }, this);
                        });
                        self.endPullUpToRefresh();
                    }, 1000);
                }
            }
        });
    });

    mui('.mui-table-view-cell').on('tap', 'a', function (e) {
        mui.openWindow({
            url: "sub.html",
            id: "sub.html",
            preload: true,
        })
    });
    mui('.mui-table-view-cell').on('tap', '.msg_box', function (e) {
        mui.openWindow({
            url: "user_info.html",
            id: "user_info.html",
            preload: true,
        })
    });


});

export default {
    data() {
        return allData
    }
}
</script>

<style>
.mui-control-content {
    width: 100%;
    /*height: 100%;*/
    position: absolute;
    top: 0px;
    bottom: 0;
    overflow: hidden;
}


.mui-pull-top-tips {
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -25px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    z-index: 300;
}

.mui-bar~.mui-pull-top-tips {
    top: 24px;
}

.mui-pull-top-wrapper {
    width: 42px;
    height: 42px;
    display: block;
    text-align: center;
    background-color: #efeff4;
    border: 1px solid #ddd;
    border-radius: 25px;
    background-clip: padding-box;
    box-shadow: 0 4px 10px #bbb;
    overflow: hidden;
}

.mui-pull-top-tips.mui-transitioning {
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
}

.mui-pull-top-tips .mui-pull-loading {
    /*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
    margin: 0;
}

.mui-pull-top-wrapper .mui-icon,
.mui-pull-top-wrapper .mui-spinner {
    margin-top: 7px;
}

.mui-pull-top-wrapper .mui-icon.mui-reverse {
    /*-webkit-transform: rotate(180deg) translateZ(0);*/
}

.mui-pull-bottom-tips {
    text-align: center;
    background-color: #efeff4;
    font-size: 15px;
    line-height: 40px;
    color: #777;
}

.mui-pull-top-canvas {
    overflow: hidden;
    background-color: #fafafa;
    border-radius: 40px;
    box-shadow: 0 4px 10px #bbb;
    width: 40px;
    height: 40px;
    margin: 0 auto;
}

.mui-pull-top-canvas canvas {
    width: 40px;
}



* .mui-segmented-control.mui-scroll-wrapper .mui-control-item {
    line-height: 36px;
    display: table-cell;
    overflow: hidden;
    width: 1%;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #232323;
    border-color: #fc3e3e;
    border-bottom: 1px solid #fc3e3e;
    border-left: none;
}

.mui-slider .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
    border-bottom: 4px solid #fc3e3e;
}

.mui-segmented-control.mui-scroll-wrapper .mui-control-item.mui-active {
    color: #fc3e3e;
    background-color: #ffffff;
    border-bottom: 4px solid #fc3e3e;
}

.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
    border-top: none;
    border-bottom: none
}

* .mui-segmented-control .mui-control-item:first-child {
    border-left-width: 0
}

* .mui-segmented-control .mui-control-item.mui-active {
    color: #fff;
    background-color: #007aff
}

.mui-segmented-control.mui-scroll-wrapper {
    height: 40px;
}

.mui-segmented-control.mui-scroll-wrapper .mui-scroll {
    width: auto;
    height: 40px;
    white-space: nowrap
}

.mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
    -webkit-touch-callout: none
}

.mui-table-view-cell:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 1px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}


.mui-table-view .mui-media-object {
    line-height: 60px;
    max-width: 90px;
    height: 60px
}

.mui-table-view .mui-media-object.mui-pull-left {
    margin-right: 10px
}

.mui-table-view .mui-media-object.mui-pull-right {
    margin-left: 10px
}

.mui-table-view .mui-media-body {
    overflow: hidden;
    font-size: 17px;
}

.mui-table-view .mui-media-body p {
    font-size: 14px;
}

.mui-table-view .mui-media-body span {
    display: block;
    width: 100%;
    line-height: 21px;
    text-align: right;
    font-size: 14px;
    color: #eb6d20;
}

.mui-icon-compose:before {
    font-size: 20px;
    color: #878c92;
}


.mui-segmented-control {
    font-size: 15px;
    font-weight: 400;
    position: relative;
    display: table;
    overflow: hidden;
    width: 100%;
    table-layout: fixed;
    border: none;
    border-radius: 0px;
    background-color: transparent;
    -webkit-touch-callout: none;
}

.mui-segmented-control.mui-segmented-control-vertical {
    border-collapse: collapse;
    border-width: 0;
    border-radius: 0
}

.mui-segmented-control.mui-segmented-control-vertical .mui-control-item {
    display: block;
    border-bottom: 1px solid #c8c7cc;
    border-left-width: 0
}

.mui-segmented-control .mui-control-item {
    line-height: 36px;
    display: table-cell;
    overflow: hidden;
    width: 1%;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #232323;
    border-color: #fc3e3e;
    border-bottom: 1px solid #fc3e3e;
    border-left: none;
}

.mui-segmented-control .mui-control-item:first-child {
    border-left-width: 0
}

.mui-segmented-control .mui-control-item.mui-active {
    color: #fc3e3e;
    background-color: #ffffff;
    border-bottom: 4px solid #fc3e3e
}
</style>
