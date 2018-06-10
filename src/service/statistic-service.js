import LUtil from 'util/ltns.js'

const ltns = new LUtil();

class Statistic {
    getHomeCount(){
        return ltns.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}

export default Statistic;