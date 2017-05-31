<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">创建练习赛</h1>
        </header>
        <footer class="mui-bar mui-bar-footer" id="join_btn">
            <button type="button" class="mui-btn mui-btn-hong-creat">
                <div class="btn_title">确 定 创 建</div>
            </button>
        </footer>
        <div class="mui-content">
            <form class="mui-input-group" id="create_lianxi">
                <div class="title">
                    <img src="../../assets/img/cjbg.jpg" />
                </div>
                <div class="mui-input-row" id="showCityPicker3">
                    <label>选择项目：</label>
                    <div class="mui-checkbox">
                        <span class="dota"></span>
                        <input name="checkbox" value="Item 1" type="checkbox">
                    </div>
                    <div class="mui-checkbox">
                        <span class="lol"></span>
                        <input name="checkbox" value="Item 1" type="checkbox">
                    </div>
                    <div class="mui-checkbox">
                        <span class="fengbao"></span>
                        <input name="checkbox" value="Item 1" type="checkbox">
                    </div>
                    <div class="mui-checkbox">
                        <span class="csgo"></span>
                        <input name="checkbox" value="Item 1" type="checkbox">
                    </div>
                </div>
                <div class="mui-input-row">
                    <label>昵称：</label>
                    <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入昵称">
                </div>
                <div class="mui-input-row">
                    <label>积分奖励：</label>
                    <select class="mui-btn mui-btn-block create_match_select" id="point">
                        <option value="100">1</option>
                        <option value="300">3</option>
                        <option value="500">5</option>
                    </select>
                    <div class="repoints">
                        奖励OB积分:
                        <span>100</span>
                    </div>
                </div>
                <div class="mui-input-row">
                    <label>战斗力限制：</label>
                    <select class="mui-btn mui-btn-block create_match_select" style="width: 50%;">
                        <option value="100">100-500</option>
                        <option value="300">500-1000</option>
                        <option value="500">1000以上</option>
                    </select>
                </div>
                <div class="mui-input-row">
                    <label style="font-size: 13px;">服务器/地图：</label>
                    <select class="mui-btn mui-btn-block create_match_select" style="width: 50%; ">
                        <option value="拉玛西亚">拉玛西亚</option>
                        <option value="拉玛西亚">拉玛西亚-1000</option>
                        <option value="拉玛西亚">拉玛西亚</option>
                    </select>
                </div>
                <div class="mui-input-row mui-checkbox1 mui-left">
                    <label>开启直播：</label>
                    <div class="mui-switch">
                        <div class="mui-switch-handle"></div>
                    </div>
                    <!--<input name="checkbox" value="Item 1" type="checkbox">-->
    
                </div>
                <div class="swicth_box">
                    <div class="mui-input-row">
                        <label>直播平台：</label>
                        <select class="mui-btn mui-btn-block create_match_select" style="width: 30%;">
                            <option value="huomao">火猫</option>
                            <option value="xiongmao">熊猫</option>
                        </select>
                    </div>
                    <div class="mui-input-row">
                        <label>直播地址：</label>
                        <input id='dizhi' type="text" class="mui-input-clear mui-input" placeholder="请输入直播地址">
                    </div>
                </div>
    
                <div class="mui-input-row text_area">
                    <textarea id="textarea" rows="3" placeholder="备注："></textarea>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
require("expose-loader?mui!assets/js/mui.min.js");
mui.init({
    swipeBack: true
});
mui.plusReady(function () {
    var checkList = document.querySelectorAll('.mui-checkbox');
    checkList.forEach(function (ele, index) {
        ele.addEventListener('tap', function () {
            checkList.forEach(function (el) {
                el.querySelector('input').checked = false;
            })
        })
    });

    var point = document.querySelector('#point');
    alert(point)
    var rePoint = document.querySelector('.repoints');
    point.addEventListener('change', function () {
        rePoint.querySelector('span').innerHTML = point.value;
    })

    //			滑动开关效果
    var box = document.querySelector('.swicth_box')
    mui('.mui-content .mui-switch').each(function () { //循环所有toggle
        this.addEventListener('toggle', function (event) {
            console.log(event.detail.isActive)
            if (event.detail.isActive) {
                box.classList.add('showit')
            } else {
                box.classList.remove('showit')
            }
        });
    });
})
// 变成单选按钮


export default {}
</script>

<style>
@import '../../assets/css/create_lianxi.css'
</style>
