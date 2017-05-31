<template>
    <span>
        <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <a class="mui-icon-extra mui-icon-extra-share mui-pull-right" style="margin-top: 10px; margin-right: 10px;"></a>
        <h1 class="mui-title">ECL秋季赛</h1>
    </header>
    <footer class="mui-bar mui-bar-footer" id="join_btn">
        <button type="button" class="mui-btn mui-btn-hong-creat">
            <div class="btn_title blink">查 看 比 赛 日</div>
        </button>
    </footer>
    <div class="mui-content" id="mui-content">
        <div id="box-con">
            <div id="slider" class="mui-slider mui-fullscreen">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted slider-header">
                    <div class="mui-scroll" id="mui-nav">
                        <a class="mui-control-item mui-active" href="#item1mobile" index='0'>
                            线上预选赛
                        </a>
                        <a class="mui-control-item" href="#item2mobile" index='1'>
                            线下总决赛
                        </a>
                        <a class="mui-control-item" href="#item3mobile" index='2'>
                            世界总决赛
                        </a>
                    </div>
                </div>
                <div class="mui-slider-group slider-body" id="slider-body">
                    <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
                        <div id="scroll" class="mui-scroll-wrapper">
                            <div class="mui-scroll">
                                <div class="basic_info">
                                    <div class="match_table">
                                        <div class="match_table_tr">
                                            <div class="match_table_td">比赛形式：
                                                <span>线上赛</span>
                                            </div>
                                            <div class="match_table_td">胜出奖励：
                                                <span>出线权</span>
                                            </div>
                                        </div>
                                        <div class="match_table_tr">
                                            <div class="match_table_td">参赛队伍数量：
                                                <span>16</span>
                                            </div>
                                            <div class="match_table_td">比赛局数：
                                                <span>BO3</span>
                                            </div>
                                        </div>
                                        <div class="match_table_tr">
                                            <div class="match_table_td">比赛赛制：
                                                <span>小组循环</span>
                                            </div>
                                            <div class="match_table_td">分组数量：
                                                <span>4</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub_table">
                                        <div class="sub_table_tr">
                                            <div class="sub_table_td">比赛形式：
                                                <span>2016年3月12日-2016年4月12日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub_table">
                                        <div class="sub_table_tr">
                                            <div class="sub_table_td ellipsis">比赛地点：
                                                <span>线上</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="agenda_list">
                                    <div class="sub_table">
                                        <div class="sub_table_tr">
                                            <div class="sub_table_td1">赛程/分组/积分：</div>
                                        </div>
                                    </div>
                                    <div class="agenda_con">
                                        <div class="group">
                                            <div class="group_title">
                                                <div class="group_title_td">
                                                    A组
                                                </div>
                                                <div class="group_title_td">
                                                    胜-负
                                                </div>
                                                <div class="group_title_td">
                                                    积分
                                                </div>
                                                <div class="group_title_td">
                                                    晋级
                                                </div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/gamelogo_03.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                        </div>
                                        <div class="group">
                                            <div class="group_title">
                                                <div class="group_title_td">
                                                    A组
                                                </div>
                                                <div class="group_title_td">
                                                    胜-负
                                                </div>
                                                <div class="group_title_td">
                                                    积分
                                                </div>
                                                <div class="group_title_td">
                                                    晋级
                                                </div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/gamelogo_03.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                        </div>
                                        <div class="group">
                                            <div class="group_title">
                                                <div class="group_title_td">
                                                    A组
                                                </div>
                                                <div class="group_title_td">
                                                    胜-负
                                                </div>
                                                <div class="group_title_td">
                                                    积分
                                                </div>
                                                <div class="group_title_td">
                                                    晋级
                                                </div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/gamelogo_03.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                        </div>
                                        <div class="group">
                                            <div class="group_title">
                                                <div class="group_title_td">
                                                    A组
                                                </div>
                                                <div class="group_title_td">
                                                    胜-负
                                                </div>
                                                <div class="group_title_td">
                                                    积分
                                                </div>
                                                <div class="group_title_td">
                                                    晋级
                                                </div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/kulou.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                            <div class="group_tr">
                                                <div class="group_tr_td align_left">
                                                    <div class="team_avator">
                                                        <img src="../../assets/img/gamelogo_03.png">
                                                    </div>
                                                    <div class="team_nanme">长天一笑</div>
                                                </div>
                                                <div class="group_tr_td color_red">
                                                    2-0
                                                </div>
                                                <div class="group_tr_td">3</div>
                                                <div class="group_tr_td">已晋级</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2mobile" class="mui-slider-item mui-control-content">
                        <div class="mui-scroll-wrapper" id="scroll1">
                            <div class="mui-scroll">
                                222
                            </div>
                        </div>
                    </div>
                    <div id="item3mobile" class="mui-slider-item mui-control-content">
                        <div class="mui-scroll-wrapper" id="scroll2">
                            <div class="mui-scroll">
                                333
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
            swipeBack: true
        });
        mui.plusReady(function() {
            mui('.mui-scroll-wrapper').scroll({
                indicators: true //是否显示滚动条
            });
            var GoList = {
            btnobj: document.querySelector('.mui-btn-hong-creat'),
            navObjList: document.querySelectorAll('#mui-nav a'),
            init: function() {
                this._hander();
            },
            _hander: function() {
                this.btnobj.addEventListener('touchend', function() {
                    this._goto.call(this);
                }.bind(this), false)
            },
            _goto: function() {
                Array.prototype.forEach.call(this.navObjList, function(ev) {
                    if (ev.classList.contains('mui-active')) {
                        console.log(ev.attributes['index'].nodeValue)
                    }
                });
            }
        }
        GoList.init();
        });
       
        

export default {}
</script>

<style>

</style>
