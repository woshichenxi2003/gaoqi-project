<template>
    <div>
        <footer class="mui-bar mui-bar-footer" id="cteate_btn">
            <button type="button" class="mui-btn mui-btn-hong-creat">创建练习赛</button>
        </footer>
        <div class="mui-content" id="pullrefresh">
            <div class="user_info">
                <div class="user_info_face">
                    <div id="face">
                        <img :src="avatar_big" alt="">
                    </div>
                </div>
                <div class="manifesto mui-ellipsis">
                    <!--小伙伴，搞起来！搞起来小伙伴，搞起来！搞起来小伙伴，搞起来！搞起来-->
                    {{signature}}
                </div>
                <div class="user_info_msg">
                    <div class="user_name mui-pull-left">
                        <p id="userId">ID:{{'00000'+ uid}}</p>
                        <p class="fontweight mui-ellipsis" id="userName">{{nickname}}</p>
                    </div>
                    <div class="user_gamenum mui-pull-left">
                        <p>参赛场数</p>
                        <p class="fontweight" id="matchNum">{{statistics.statistics.events}}</p>
                    </div>
                    <div class="user_odds mui-pull-left">
                        <p>胜率</p>
                        <p class="fontweight" id="winRate">{{statistics.statistics.rate}}</p>
                    </div>
                </div>
                <div id="like_game">
                    <span class="dota" v-if="statistics.games.dota2"></span>
                    <span class="lol" v-if="statistics.games.lol"></span>
                    <span class="fengbao" v-if="statistics.games.hots"></span>
                    <span class="csgo" v-if="statistics.games.csgo"></span>
                </div>
                <div class="combat_values">
                    {{statistics.statistics.point}}
                </div>
            </div>
            <div class="con">
                <div class="mui-segmented-control1">
                    <a class="mui-control-item1 mui-active" index=0>
                        我是选手
                    </a>
                    <a class="mui-control-item1" index=1>
                        我是OB
                    </a>
                </div>
                <div class="display_box">
                    <div class="mui-control-content1 active">
                        <div class="show_module">
                            <div class="module_title">我的战队</div>
                            <div class="module_con">
                                <div class="emptyToPlay">
                                    <span class="empty_logo">&nbsp;</span>
                                    <div class="ss">无战队,请
                                        <button type="button" class="mui-btn mui-btn-cheng-ty">创建战队</button> 或
                                        <button type="button" class="mui-btn mui-btn-green-jujue">加入其它战队</button>
                                    </div>
                                    <p>(每个用户一个游戏项目只能创建或者加入一个战队)</p>
                                </div>
                                <!--<div class="team_box">
                                    <div class="team_logo_box">
                                        <div class="team_logo">
                                            <img src="../../assets/img/team_logo_03.jpg" />
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
                                        <button type="button" class="mui-btn mui-btn-cheng-ty">同意加入</button>
    
                                    </div>
                                </div>
                                <div class="team_box">
                                    <div class="team_logo_box">
                                        <div class="team_logo">
                                            <img src="../../assets/img/team_logo_03.jpg" />
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
                                        <button type="button" class="mui-btn mui-btn-cheng-ty">同意加入</button>
    
                                    </div>
                                </div>-->
    
                            </div>
    
                        </div>
                        <div class="show_module">
                            <div class="module_title">所在战队</div>
                            <div class="module_con">
                                <div class="team_box">
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
                                </div>
                                <div class="team_box">
                                    <div class="team_logo_box">
                                        <div class="team_logo">
                                            <img src="../../assets/img/team_logo_03.jpg" />
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
                                        <button type="button" class="mui-btn mui-btn-cheng-ty">拒绝邀请</button>
                                    </div>
                                </div>
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
                                        <!-- <div class="game_score">2</div> -->
                                        <div class="team_vs">
                                            <div class="vs">vs</div>
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <!-- <div class="game_score">1</div> -->
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
                                            <div class="team_name">
                                                TE-NAME
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="btn_box">
                                                            <button type="button" class="mui-btn mui-btn-cheng-jieshou">接 受</button>
                                                            <button type="button" class="mui-btn mui-btn-bai-jujue">拒 绝</button>
                                                        </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="show_module">
                            <div class="module_title">近期的比赛</div>
                            <div class="module_con">
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAMETE-NAMETE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div class="btn_box_width">
                                查看所有比赛历史
                            </div>
                        </div>
    
                    </div>
                    <div class="mui-control-content1">
                        <div class="show_module">
                            <div class="module_title">OB练习赛</div>
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
                                </div>
                            </div>
                        </div>
                        <div class="show_module">
                            <div class="module_title">OB练习赛</div>
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
                                    <div class="btn_box">
                                        <button type="button" class="mui-btn mui-btn-cheng-jieshou">接 受</button>
                                        <button type="button" class="mui-btn mui-btn-bai-jujue">拒 绝</button>
                                    </div>
                                </div>
                            </div>
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
                                <div class="btn_box">
                                    <button type="button" class="mui-btn mui-btn-cheng-jieshou">接 受</button>
                                    <button type="button" class="mui-btn mui-btn-bai-jujue">拒 绝</button>
                                </div>
                            </div>
                        </div>
                        <div class="show_module">
                            <div class="module_title">OB历史</div>
                            <div class="module_con">
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="minitostartgame_box">
                                    <div class="tostartgame_con">
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
                                        </div>
                                        <div class="game_score_left">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAMETE-NAMETE-NAME
                                            </div>
                                            2
                                        </div>
                                        <div class="team_vs">
                                            <div class="game_type">正赛</div>
                                            <div class="game_time">2.12 12：00</div>
                                        </div>
                                        <div class="game_score_right">
                                            <div class="team_name mui-ellipsis">
                                                TE-NAME
                                            </div>
                                            1
                                        </div>
                                        <div class="team_logo">
                                            <div class="team_logo_box">
                                                <img src="../../assets/img/team_logo_03.jpg" />
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div class="btn_box_width">
                                查看所有比赛历史
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.js");
import { app } from 'assets/js/appp.js';
let myData = {
    "uid": "4",
    "is_perfect": "1",
    "nickname": "13811111111",
    "signature": "杀啊！！！！！",
    "gender": "n",
    "province": "",
    "city": "",
    "area": "",
    "games": "dota2,csgo,hots",
    "allow_login": "yes",
    "allow_race_events": "yes",
    "allow_formal_events": "yes",
    "avatar_big": "http://uploads.gaoqi.com/avatar/2016/1109/4_20161109070448149_big.jpg",
    "avatar_middle": "http://uploads.gaoqi.com/avatar/2016/1109/4_20161109070448149_middle.jpg",
    "avatar_small": "http://uploads.gaoqi.com/avatar/2016/1109/4_20161109070448149_small.jpg",
    "avatar_origin": "http://uploads.gaoqi.com/default/avatar_big.png",
    "realname": "王月坡",
    "idno": "111225648956321",
    "id_front": "",
    "id_back": null,
    "certification": "no",
    "alipay_account": null,
    "wechat_account": null,
    "live_platform": "yy",
    "liveid": "121212",
    "update_at": "2016-11-10 02:21:51",
    "mobile": "13811111111",
    "game_info": {
        "dota2": {
            "game": "dota2",
            "game_name": "DOTA2",
            "logo_big": "http://uploads.gaoqi.cespc.com/default/dota2.png",
            "logo_middle": "http://uploads.gaoqi.cespc.com/default/dota2.png",
            "logo_small": "http://uploads.gaoqi.cespc.com/default/dota2.png",
            "abstract": "DOTA2",
            "team": "5",
            "create_at": "2016-11-09 03:04:02"
        },
        "csgo": {
            "game": "csgo",
            "game_name": "CS:GO",
            "logo_big": "http://uploads.gaoqi.cespc.com/default/csgo.png",
            "logo_middle": "http://uploads.gaoqi.cespc.com/default/csgo.png",
            "logo_small": "http://uploads.gaoqi.cespc.com/default/csgo.png",
            "abstract": "CS:GO",
            "team": "5",
            "create_at": "2016-11-09 03:05:26"
        },
        "hots": {
            "game": "hots",
            "game_name": "风暴英雄",
            "logo_big": "http://uploads.gaoqi.cespc.com/default/hots.png",
            "logo_middle": "http://uploads.gaoqi.cespc.com/default/hots.png",
            "logo_small": "http://uploads.gaoqi.cespc.com/default/hots.png",
            "abstract": "风暴英雄",
            "team": "5",
            "create_at": "2016-11-09 03:05:57"
        }
    },
    "live_info": {
        "platform": "yy",
        "platform_name": "YY直播",
        "logo_big": "1",
        "logo_middle": "1",
        "logo_small": "1",
        "host": "http://www.yy.com/",
        "live_url": "http://www.yy.com/121212",
        "abstract": "YY直播",
        "create_at": "2016-11-09 05:30:19"
    },
    "team": [],
    "statistics": {
        "statistics": {
            "uid": "4",
            "friends": "0",
            "events": "0",
            "win": "0",
            "lose": "0",
            "draw": "0",
            "waiver": "0",
            "point": "345",
            "ob_point": "0",
            "rate": "0%"
        },
        "games": {
            "dota2": {
                "id": "7",
                "game": "csgo",
                "events": "0",
                "win": "0",
                "lose": "0",
                "draw": "0",
                "waiver": "0",
                "point": "115",
                "ob_point": "0",
                "rate": "0%"
            },
            "csgo": {
                "id": "7",
                "game": "csgo",
                "events": "0",
                "win": "0",
                "lose": "0",
                "draw": "0",
                "waiver": "0",
                "point": "115",
                "ob_point": "0",
                "rate": "0%"
            },
            "hots": {
                "id": "7",
                "game": "csgo",
                "events": "0",
                "win": "0",
                "lose": "0",
                "draw": "0",
                "waiver": "0",
                "point": "115",
                "ob_point": "0",
                "rate": "0%"
            }
        }
    }
};

mui.init();
mui.plusReady(function () {
    function getData() {
        mui.extend(myData, app.getState().user);
    };
    getData()
    window.addEventListener('refresh', function (event) {
        console.log('个人首页的信息更新触发了');
        getData();//注册刷新用户信息的页面
    });
    var cteate_btn = document.getElementById('cteate_btn');
    mui('.mui-segmented-control1').on('tap', '.mui-control-item1', function () {
        var index = this.getAttribute('index') - 0;
        mui('.mui-control-item1').each(function () {
            this.classList.remove('mui-active');
        });
        this.classList.add('mui-active');
        mui('.mui-control-content1').each(function () {
            this.classList.remove('active');
        });
        mui('.mui-control-content1')[index].classList.add('active');
        cteate_btn.classList.remove('show');
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


});


export default {
    data() {
        return myData
    }
}
</script>

<style>

</style>
