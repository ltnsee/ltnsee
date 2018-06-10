class LUtil{
    //发送ajax请求
    request(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if(0===res.status){
                        //数据请求成功
                        typeof resolve === 'function' && resolve(res.data, res.msg)
                    }else if(10===res.status){
                        //未登录，去登录
                        this.toLogin();
                    }else{
                        //报错了
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText.msg);
                }
            });
        });
    }
    // 跳转登录
    toLogin(){
        // redirect 是登录前的页面url信息
        // window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    // 获取登录前url信息
    getUrlParam(name){
        let queryString = window.location.search.split('?')[1] || '',//
            reg = RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
    // 获取错误提示信息
    errorTips(err){
        alert(err || '好像哪里不对了~')
    }
    // 登录成功是将用户信息存储到LocalStorage,以便其他地方是使用
    setStorage(name, data){
        let dataType = typeof data;
        if(dataType === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data));
        }else if(!!~['number', 'string', 'boolean'].indexOf(dataType)){
            window.localStorage.setItem(name, data);
        }else{
            alert('该类型不能用于本地存储！')
        }
    }
    // 获取本地LocalStorage中的数据
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    // 删除本地LocalStorage中的数据
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
}

export default LUtil;