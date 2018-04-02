/*
 * 作者：梁燕翔
 * 时间：2017/04/11
 * 功能：对cookie的操作
 */

export default {
  get(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  set(cname, cvalue, ms) {
    let d = new Date();
    d.setTime(d.getTime() + ms);
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
}