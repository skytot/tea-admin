<template>
<el-container>
    <el-header>
        <el-row :gutter="20">
            <el-col :span="4" class="el-row-home">
                <div class="logo"></div>
            </el-col>
            <el-col :span="16" class="el-row-home">
                <div class="grid-content">header</div>
            </el-col>
            <el-col :span="4" class="el-row-home">
                <div class="user-center">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                            <i class="el-icon-lx-people" style="font-size:24px;color:#ddd"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">消息中心</el-dropdown-item>
                            <el-dropdown-item command="b">个人中心</el-dropdown-item>
                            <el-dropdown-item command="c">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>　
                </div>
            </el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-aside :class="[isCollapse ? 'te-menu-collapse' : '','te-menu']" style="width:200px">
            <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
            <div v-model="isCollapse" @click="collapse" :class="[isCollapse ? 'sidebar-collapser-close' : '','sidebar-collapser']">
                <i :class="[isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left']"></i>
            </div>
        </el-aside>
        <el-container>
            <el-main>
                <transition name=" fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </el-container>
</el-container>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false,
        };
    },
    computed: {},
    methods: {
        onSubmit() {},
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        collapse() {
            this.isCollapse = !this.isCollapse
        },
        handleselect() {},
        handleCommand(command) {
            if (command == 'c') {
                this.logout()
            }
        },
        // 退出登录
        logout() {
            this.$confirm('确认退出吗?', '提示', {
                    // type: 'warning'
                })
                .then(() => {
                    this.$router.push("/login")
                })
                .catch(() => {});
        },
        toggleSider() {
            this.collapsed = !this.collapsed;
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss">
@import "~scss_vars";
@import "../styles/home.scss";
.el-container {
    width: 100%;
    min-height: 100%;
    position: relative;
}
.el-footer,
.el-header {
    background-color: #E9Eef3;
    color: #333;
    text-align: center;
    line-height: 50px;
}
.el-header {
    background-color: #001529;
}
.el-footer {
    border-top: 1px solid #ccc;
}
.el-aside {
    background-color: #fff;
    color: #333;
    line-height: 50px;
}
.logo {
    width: 155px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 24px 16px 0;
}
.user-center {
    text-align: right;
    padding-right: 30px;
}
.te-menu {
    transition: width 0.2s;
    overflow-x: hidden;
}
.te-menu-collapse {
    width: 64px !important;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.sidebar-collapser {
    text-align: center;
    border-top: 1px solid #ededed;
    padding: 0 27px;
    overflow: hidden;
    color: #409eff;
    font-size: 20px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    font-size: 14px;
    white-space: nowrap;
    background: #fff;
    position: fixed;
    text-align: center;
    bottom: 0;
    cursor: pointer;
    height: 48px;
    width: 200px;
    line-height: 48px;
    z-index: 1;
    transition: width 0.2s;
    img {
        vertical-align: middle;
    }
}
.sidebar-collapser-close {
    width: 60px;
}
.te-menu-collapse .collapse-icon {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.el-row-home {
    color: #dedede;
    height: 60px;
    line-height: 60px;
}
/*滚动条垂直方向的宽度*/
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
}
/* 垂直滚动条的滑动块 */
::-webkit-scrollbar-thumb:vertical {
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
