/*vue的actions模块*/
import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav,
  reqkingKongModule,

} from '../api'
import {
  Data,
  Banner,
  Home,
  Detail,
  Nav,
  LoginWay,
  REQ_KINGKONGMODULE,
} from './mutation-types'
export default {
  //获取首页data信息
  async getData({commit},cb){
    const result = await reqData()
    commit(Data,{data:result.data})
    typeof cb ==='function' && cb()
  },
  //获取首页banner信息
  async getBanner({commit},cb){
    const result = await reqBanner()
    commit(Banner,{banner:result.focusList})
    typeof cb ==='function' && cb()
  },
  //获取home信息
  async getHome({commit},cb){
    const result = await reqHome()
    commit(Home,{result})
    typeof cb ==='function' && cb()
  },
  //获取detail页面
  async getDetail({commit},cb){
    const result = await reqDetail()
    commit(Detail,{result})
    typeof cb ==='function' && cb()
  },
  //获取nav
  async getNav({commit},cb){
    const result = await reqNav()
    commit(Nav,{result})
    typeof cb ==='function' && cb()
  },
  async reqkingKongModule ({commit},cb) {
    const kingKongModule = await reqkingKongModule();
    if (kingKongModule.code === 0) {
      commit(REQ_KINGKONGMODULE, {kingKongModule: kingKongModule.kingKongModule})
      typeof cb === 'function' && cb()
    }
  },
  //设置loginWay
  setLoginWay({commit},loginWay){
    commit(LoginWay,loginWay)
  }
}
