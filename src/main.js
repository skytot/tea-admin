import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import Vuex from "vuex";
import store from "./vuex/store";
import routes from "./routes";
import App from "./App";
import "../static/css/icon.css";
// import VueResource from 'vue-resource';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
// Vue.use(VueResource);

const router = new VueRouter({
    routes
});

// 获取cookie
function getCookie(name) {
    let arr;
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
// 获取用户信息
function getUser() {
    const tokens = getCookie("token") || process.env.API_TOKEN;
    if (tokens) {
        sessionStorage.setItem("token", tokens);
        const para = {
            token: tokens
        };
        router.push("/index");
        // login(para).then(res => {
        //     if (res.code !== 1) {
        //         router.push("/logout");
        //     } else {
        //         sessionStorage.setItem("user", JSON.stringify(res.data));
        //         sessionStorage.setItem("school_id", res.data.school_id);
        //         sessionStorage.setItem("pic_url", res.data.pic_url);
        //         sessionStorage.setItem("school_name", res.data.school_name);
        //         sessionStorage.setItem("user_id", res.data.user_id);
        //         sessionStorage.setItem("user_name", res.data.user_name);
        //         sessionStorage.setItem("phone_tel", res.data.phone_tel);
        //         sessionStorage.setItem("login_id", 1);
        //         sessionStorage.setItem("load", 1);
        //         getSchoolModules().then(res => {
        //             var obj = {
        //                 base: 1
        //             };
        //             res.data.map(i => {
        //                 obj[i.module_code] = i.show;
        //             });
        //             sessionStorage.setItem("router", JSON.stringify(obj));
        //             router.push("/index");
        //         });
        //     }
        // });
    } else {
        router.push("/login");
    }
}
// 全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.path == "/") {
        next("/index");
    } else {
        next();
    }
});
// 初始化声明
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
