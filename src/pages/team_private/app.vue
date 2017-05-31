<template>
    <span>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
            <h1 class="mui-title">战队详情</h1>
        </header>
        <footer class="mui-bar mui-bar-footer" id="join_btn">
            <button type="button" class="mui-btn mui-btn-hong-creat">
                <div class="btn_title blink">申 请 加 入</div>
            </button>
        </footer>
        <div class="mui-content" id="pullrefresh">
            <div class="user_info">
                <div class="user_info_face">
                    <div id="face">
                        <!--<img src="../../assets/img/regbg_01.jpg"/>-->
                    </div>
                </div>
                <div class="team_name1 mui-ellipsis">
                    IG战队
                </div>
                <div class="manifesto mui-ellipsis">
                    小伙伴，搞起来！搞起来小伙伴，搞起来！搞起来小伙伴，搞起来！搞起来
                </div>
                <div class="user_info_msg">
                    <div class="user_gamenum mui-pull-left">
                        <p>参赛场数</p>
                        <p class="fontweight">120</p>
                    </div>
                    <div class="user_odds mui-pull-left">
                        <p>胜率</p>
                        <p class="fontweight">78%</p>
                    </div>
                    <div class="user_name mui-pull-left">
                        <button type="button" class="mui-btn mui-btn-cheng-ty1">修改信息</button>
                    </div>
                </div>
                <div class="like_game">
                    <span class="dota"></span>
                </div>
                <div class="teamer_num">
                    <span>5</span>
                    <span>/</span>
                    <span>5</span>
                </div>
                <div class="combat_values">
                    2312
                </div>
            </div>
            <div class="con">
                <div class="show_module">
                    <div class="module_title">战队概况</div>
                    <div class="module_con">
                        <div class="team_gk">
                            <div class="team_box">
                                <div class="team_logo_box">
                                    <div class="team_logo">
                                        <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
                                    </div>
                                    <div class="team_cm">
                                        <span class="c"></span>
                                    </div>
                                </div>
                                <div class="team_ifno">
                                    <h5 class="mui-ellipsis">战队ID:
                                        <span>192389123</span>
                                    </h5>
                                    <h5 class="mui-ellipsis">成立时间：2016.4.23
                                        <i>北京</i>
                                    </h5>
                                </div>
                            </div>
                            <div class="team_member">
                                <div class="team_logo_box">
                                    <div class="team_logo">
                                        <img src="../../assets/img/kulou.png" />
                                    </div>
                                    <div class="team_cm">
                                        <span class="m"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
                                        <img src="../../assets/img/kulou.png" />
                                    </div>
                                    <div class="team_cm">
                                        <span class="m"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
                                        <img src="../../assets/img/kulou.png" />
                                    </div>
                                    <div class="team_cm">
                                        <span class="m"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
                                        <img src="../../assets/img/kulou.png" />
                                    </div>
                                    <div class="team_cm">
                                        <span class="m"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="show_module">
                    <div class="module_title">战队简介</div>
                    <div class="module_con">
                        <p class="team_introduce">
                            Invictus Gaming（以下简称iG）是一家以电子竞技及周边业务为核心、旗下有多名国内顶级电子竞技选手的平台，iG的目标之一是打造全球顶级电竞俱乐部。iG已整合前CCM电竞俱乐部Dota2（刀塔）、星际争霸2（SC2）、英雄联盟（LOL）、《炉石传说》项目所有队员。
                        </p>
                    </div>
                </div>
                <div class="show_module">
                    <div class="module_title">即将开始的比赛</div>
                    <div class="module_con">
                        <div class="tostartgame_box">
                            <div class="tostartgame_con">
                                <div class="team_logo">
                                    <div class="team_logo_box">
                                        <img src="../../assets/img/team_logo_03.jpg" />
                                    </div>
                                    <div class="team_name">
                                        TE-NAME
                                    </div>
                                </div>
                                <!--<div class="game_score">2</div>-->
                                <div class="team_vs">
                                    <div class="vs">vs</div>
                                    <!--<div class="game_type">正赛</div>-->
                                    <div class="game_time">2.12 12：00</div>
                                </div>
                                <!--<div class="game_score">1</div>-->
                                <div class="team_logo">
                                    <div class="team_logo_box">
                                        <img src="../../assets/img/team_logo_03.jpg" />
                                    </div>
                                    <div class="team_name">
                                        TE-NAME
                                    </div>
                                </div>
                            </div>
                            <!--<div class="btn_box">
        										<button type="button" class="mui-btn mui-btn-cheng-jieshou">接 受</button>
        										<button type="button" class="mui-btn mui-btn-bai-jujue">拒 绝</button>
        									</div>-->
                        </div>
                    </div>
                </div>
                <div class="show_module">
                    <div class="module_title">正在参加的赛事</div>
                    <div class="module_con padding25">
                        <div class="match_box">
                            <div class="match_logo_box">
                                <div class="match_logo">
                                    <img src="../../assets/img/kulou.png">
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
                        </div>
                    </div>
                </div>
                <div id="slider" class="mui-slider">
                    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted slider-header">
                        <div class="mui-scroll">
                            <a class="mui-control-item mui-active" href="#item1mobile">
                                战队发出的邀请
                            </a>
                            <a class="mui-control-item" href="#item2mobile">
                                队员推荐
                            </a>
                            <a class="mui-control-item" href="#item3mobile">
                                申请加入战队
                            </a>
                        </div>
                    </div>
                    <div class="mui-slider-group slider-body" id="slider-body">
                        <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
                            <div id="scroll">
                                <div>
                                    <ul class="mui-table-view">
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                                <!-- <button type="button" class="mui-btn mui-btn-green-jujue">同意加入</button> -->
                                                <button type="button" class="mui-btn mui-btn-cheng-ty">撤销邀请</button>
                                            </div>
                                        </li>
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
                                                </div>
                                                <div class="team_games">
                                                    <span class="dota"></span>
                                                    <span class="lol"></span>
                                                    <span class="csgo"></span>
                                                    <span class="csgo"></span>
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
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
                                                </div>
                                                <div class="team_games">
                                                    <span class="dota"></span>
                                                    <span class="csgo"></span>
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
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
                                                </div>
                                                <div class="team_games">
                                                    <span class="dota"></span>
                                                    <span class="csgo"></span>
                                                    <span class="csgo"></span>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="item2mobile" class="mui-slider-item mui-control-content">
                            <div class="mui-scroll-wrapper" id="scroll1">
                                <div class="mui-scroll">
                                    <ul class="mui-table-view">
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                                <button type="button" class="mui-btn mui-btn-cheng-ty">拒绝邀请</button>
                                                <button type="button" class="mui-btn mui-btn-green-jujue">邀请加入</button>
                                            </div>
                                        </li>
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="item3mobile" class="mui-slider-item mui-control-content">
                            <div class="mui-scroll-wrapper" id="scroll1">
                                <div class="mui-scroll">
                                    <ul class="mui-table-view">
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                                <button type="button" class="mui-btn mui-btn-cheng-ty">拒绝申请</button>
                                                <button type="button" class="mui-btn mui-btn-green-jujue">邀请加入</button>
                                            </div>
                                        </li>
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                        <li class="team_box">
                                            <div class="team_logo_box">
                                                <div class="team_logo">
                                                    <!--<img src="../../assets/img/dunpai_01.jpg"/>-->
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");
mui.init({
    /*pullRefresh: {
                container: '#pullrefresh',
                down: {
                    callback: pulldownRefresh
                }
            }下拉刷新代码*/
});
mui.plusReady(function () {
    var cteate_btn = document.getElementById('cteate_btn');
    mui('.mui-segmented-control1').on('tap', '.mui-control-item1', function () {
        var index = this.getAttribute('index') - 0;
        mui('.mui-control-item1').each(function () {
            this.classList.remove('mui-active');
        })
        this.classList.add('mui-active')
        mui('.mui-control-content1').each(function () {
            this.classList.remove('active');
        })
        mui('.mui-control-content1')[index].classList.add('active');
        cteate_btn.classList.remove('show')
        if (index) {
            cteate_btn.classList.add('show');
        }

    });
    mui('.mui-bar-footer').on('tap', '.mui-btn-hong-creat', function () {
        mui.openWindow({
            url: "create_lianxi_match.html",
            id: "create_lianxi_match.html",
            preload: true,

        })
    });
})

export default {
    
}
</script>

<style>

</style>
