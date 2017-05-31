<template>
    <span>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
            <h1 class="mui-title">赛事详情</h1>
        </header>
        <footer class="mui-bar mui-bar-footer" id="join_btn">
            <button type="button" class="mui-btn mui-btn-hong-creat">
                <div class="btn_title blink">报 名 参 赛</div>
                <p>已报名1/32</p>
                <div class="ts">
                    <img src="../../assets/img/tousu_22.png" />
                </div>
            </button>
        </footer>
    
        <div class="mui-content" id="pullrefresh">
            <div class="match_info">
                <div class="match_info_face">
                    <div id="face">
                        <!--<img src="../../../assets/img/regbg_01.jpg"/>-->
                    </div>
                    <div id="like_game1">
                        <span class="dota"></span>
                    </div>
                </div>
                <div class="match_msg mui-ellipsis">
                    ECL秋季线上预选赛
                </div>
                <div class="match_msg_id mui-ellipsis">
                    赛事ID：1230689
                </div>
                <div class="match_info_msg">
                    <p class="mui-ellipsis">赛事类型：
                        <span>高校赛</span>
                    </p>
                    <p class="mui-ellipsis">所在地区：
                        <span>北京市朝阳区</span>
                    </p>
                </div>
    
                <div class="match_stat onmatch"></div>
            </div>
            <div class="con">
                <div class="mui-card">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-collapse">
                            <a class="mui-navigate-right" href="#">赛事简介</a>
                            <div class="mui-collapse-content">
                                竞游ECL（Esports Champion League简称ECL）,是中国电子竞技运动发展中心打造的一个全新的赛事，相比较传统的电子竞技比赛来讲,无论是从赛制还是比赛规模上都不可同日而语。国家体育总局、北京市人民政府的强力支持以及石景山区打造CRD京西虚拟经济圈的大背景下，将以打造全球第一大电子竞技赛事为目标，打造竞游ECL电子竞技冠军联赛。另外，ECL也有发射极耦合逻辑电路的意思，在化学领域，是一种化学发光试剂。
                            </div>
                        </li>
                        <li class="mui-table-view-cell mui-collapse">
                            <a class="mui-navigate-right" href="#">赛事详情</a>
                            <div class="mui-collapse-content">
                                竞游ECL（Esports Champion League简称ECL）,是中国电子竞技运动发展中心打造的一个全新的赛事，相比较传统的电子竞技比赛来讲,无论是从赛制还是比赛规模上都不可同日而语。国家体育总局、北京市人民政府的强力支持以及石景山区打造CRD京西虚拟经济圈的大背景下，将以打造全球第一大电子竞技赛事为目标，打造竞游ECL电子竞技冠军联赛。另外，ECL也有发射极耦合逻辑电路的意思，在化学领域，是一种化学发光试剂。
                            </div>
                        </li>
                        <li class="mui-table-view-cell mui-collapse">
                            <a class="mui-navigate-right" href="#">比赛赛程</a>
                            <div class="mui-collapse-content">
                                竞游ECL（Esports Champion League简称ECL）,是中国电子竞技运动发展中心打造的一个全新的赛事，相比较传统的电子竞技比赛来讲,无论是从赛制还是比赛规模上都不可同日而语。国家体育总局、北京市人民政府的强力支持以及石景山区打造CRD京西虚拟经济圈的大背景下，将以打造全球第一大电子竞技赛事为目标，打造竞游ECL电子竞技冠军联赛。另外，ECL也有发射极耦合逻辑电路的意思，在化学领域，是一种化学发光试剂。
                            </div>
                        </li>
                        <li class="mui-table-view-cell mui-collapse  mui-active">
                            <a class="mui-navigate-right" href="#">赛事奖金</a>
                            <div class="mui-collapse-content">
                                <div class="prize">
                                    <div class="prize_con">
                                        <img src="../../assets/img/jiangjin_03.jpg" />
                                    </div>
                                    <div class="prize_con">
                                        <img src="../../assets/img/jiangjin_08.jpg" />
                                    </div>
                                    <div class="prize_con">
                                        <img src="../../assets/img/jiangjin_05.jpg" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="ob_con">
                    <div class="ob_title">OB奖励</div>
                    <div class="ob_msg">
                        <p class="mui-ellipsis">积分奖励：
                            <span>1200</span>
                        </p>
                        <p class="mui-ellipsis">其他奖励：鼠标</p>
                    </div>
                    <div class="ob_btn">
                        申请OB
                    </div>
                </div>
                <div class="sponsor">
                    <div class="con_title">
                        赛事赞助商
                    </div>
                    <ul>
                        <li>
                            <img src="../../assets/img/logo_18.jpg" Url="sdflskdf" />
                        </li>
                        <li>
                            <img src="../../assets/img/logo_18.jpg" Url="sdflskdf" />
                        </li>
                        <li>
                            <img src="../../assets/img/logo_18.jpg" Url="sdflskdf" />
                        </li>
                        <li>
                            <img src="../../assets/img/logo_18.jpg" Url="sdflskdf" />
                        </li>
                        <li>
                            <img src="../../assets/img/logo_18.jpg" Url="sdflskdf" />
                        </li>
                        <li>
                            <img src="../../assets/img/logo_18.jpg" Url="sdflskdf" />
                        </li>
                    </ul>
                </div>
                <div class="over_match">
                    <div class="con_title">
                        即将开始的比赛
                    </div>
                    <div class="tostartgame_box">
                        <div class="tostartgame_con">
                            <div class="team_logo">
                                <div class="team_logo_box">
                                    <img src="../../assets/img/team_logo_03.jpg">
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
                                    <img src="../../assets/img/team_logo_03.jpg">
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
                    <div class="goto_matchList">
                        <button type="button" class="mui-btn mui-btn-hong-creat goto">查看所有赛程</button>
                    </div>
                </div>
                <div class="slider_box">
                    <div id="slider1" class="mui-slider">
                        <div class="mui-slider-group mui-slider-loop">
                            <div class="mui-slider-item mui-slider-item-duplicate">
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="mui-slider-item">
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="mui-slider-item">
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="mui-slider-item mui-slider-item-duplicate">
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                                <div class="team_logo_box">
                                    <div class="team_logo">
    
                                    </div>
                                    <div class="team_games">
                                        <span class="dota"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mui-slider-indicator">
                            <div class="mui-indicator mui-active"></div>
                            <div class="mui-indicator"></div>
                            <!--<div class="mui-indicator"></div>
    							<div class="mui-indicator"></div>-->
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
			});
			mui.plusReady(function(){
				
			
				
				mui('.tostartgame_box').on('tap','.tostartgame_con',function(){
						mui.openWindow({
		      				url:"match_one.html",
		      				id:"match_one",
		      				preload: true,
		      				
	      				})
					})
                    var slider1 = mui("#slider1");
					
			})	
			
			
			//轮播相关代码
			

       



export default {}
</script>

<style>
</style>
