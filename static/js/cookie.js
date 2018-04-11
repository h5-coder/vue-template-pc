
export default {
    get(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    set(cname, cvalue, ms) {
        let d = new Date();
        d.setTime(d.getTime() + ms);
        let expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";
    },
    del(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var cval = this.get(name);
        document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString()+"; path=/";
    }
}