import mui from 'assets/js/mui.js';
class NewsData {
    constructor(url, option, type, callback) {
        this.url = url;
        this.type = type;
        this.init(option, callback);
    }
    init(op, cb) {
        mui.ajax(this.url, {
            data: op,
            dataType: 'json', //服务器返回json格式数据
            type: this.type, //HTTP请求类型
            timeout: 1000, //超时时间设置为10秒；
            success: (data) => {
                if (data.ret == 1) {
                    cb(data);
                } else {

                }
            },
            error: function(xhr, type, errorThrown) {
                //异常处理；
                if (type == 'timeout') {
                    plus.nativeUI.toast('请求超时，请你检查您的网络');
                } else if (type == 'abort') {
                    plus.nativeUI.toast('请检查您的网络是否链接');
                } else if (type == 'timeout') {
                    plus.nativeUI.toast('服务器错误');
                }
                console.log(type);
            }
        });
    }
}
export { NewsData };