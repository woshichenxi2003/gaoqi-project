<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
            <div class="mui-title">
                <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="输入您要搜索的内容">
                </div>
            </div>
        </header>
        <div class="mui-content">
            <ul class="mui-table-view">
                <li class="msg_box">
                    <div class="msg_logo_box">
                        <div class="msg_logo">
                            <img src="../../assets/img/kulou.png" />
                        </div>
                        <div id="msg_like_game">
                            <span class="dota"></span>
                            <span class="dota"></span>
                            <span class="dota"></span>
                            <span class="dota"></span>
                        </div>
                    </div>
                    <div class="msg_ifno">
                        <h4 class="mui-ellipsis">Mesut Ozil1</h4>
                        <p class="mui-ellipsis">小伙伴们！搞起来啊！快来啊搞起来啊！快来啊</p>
                    </div>
                    <div class="msg_effectiveness">
                        一小时前
                    </div>
                </li>
                <li class="team_box">
                    <div class="team_logo_box">
                        <div class="team_logo">
                            <!--<img src="../images/dunpai_01.jpg"/>-->
                        </div>
                        <div class="team_games">
                            <span class="dota"></span>
                        </div>
                    </div>
                    <div class="team_ifno">
                        <h4 class="mui-ellipsis">Mesut Ozil</h4>
                        <p class="mui-ellipsis">小伙伴们！搞起来啊！快来啊搞起来啊！快来啊</p>
                    </div>
                    <div class="team_effectiveness">
                        2341
                    </div>
                    <div class="team_btnbox">
                        <button type="button" class="mui-btn mui-btn-green-jujue">同意加入</button>
                        <!--<button type="button" class="mui-btn mui-btn-cheng">拒绝邀请</button>-->
                    </div>
                </li>
                <li class="match_box">
                    <div class="match_state nostart"></div>
                    <div class="match_logo_box">
                        <div class="match_logo">
                            <img src="../../assets/img/kulou.png" />
                        </div>
                        <div id="match_like_game">
                            <span class="dota"></span>
                        </div>
                    </div>
                    <div class="match_ifno">
                        <h4 class="mui-ellipsis">ECL秋季赛线上预选赛季赛线上</h4>
                        <p>
                            <span>比赛形式：
                                <i>线上赛</i>
                            </span>
                            <span>类型：
                                <i>职业赛</i>
                            </span>
                        </p>
                    </div>
                    <div class="match_effectiveness">
                        2315
                    </div>
                    <div class="num">
                        1/16
                    </div>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../../assets/img/team_logo_03.jpg">
                        <div class="mui-media-body">
                            幸福
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                            <span class="mui-icon mui-icon-compose">26</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");


mui.init({

});

mui.plusReady(function () {


});

export default {}
</script>

<style>
.mui-search .mui-placeholder {
    padding-top: 4px;
    color: #ffffff;
    font-size: 14px;
}

.mui-search .mui-placeholder .mui-icon {
    color: #fff;
}

.mui-search.mui-active input[type=search] {
    text-align: left;
    font-weight: normal;
}

.mui-bar .mui-input-row .mui-input-clear~.mui-icon-clear,
.mui-bar .mui-input-row .mui-input-speech~.mui-icon-speech {
    top: 11px;
    right: -6px;
}
</style>
