<template>
<div class="login-wrap">
    <div class="ms-login">
        <div class="ms-title">后台管理系统</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" placeholder="手机号">
                    <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                    <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                </el-input>
            </el-form-item>
            <div class="login-btn">
                <el-button type="primary" @click="submitForm('ruleForm')">登　录</el-button>
            </div>
            <div class="login-btn">
                <el-button type="success" @click="sign">注　册</el-button>
            </div>
            <p class="login-tips">Tips : 忘记账号或密码请联系管理员。</p>
        </el-form>
    </div>
    <el-dialog title="注 册" :visible.sync="signDialog" width="400px" center :close-on-click-modal="false">
        <el-form :label-position="labelPosition" label-width="100px" :model="signForm">
            <el-form-item label="手机号：">
                <el-input v-model="signForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="验证码：">
                <el-input v-model="signForm.reg" style="width:130px"></el-input>
                <img src="../assets/reg.jpg" alt="">
            </el-form-item>
            <el-form-item label="短信验证码：">
                <el-input v-model="signForm.vcode" style="width:130px"></el-input>
                <el-button @click="getCode" :disabled="rcode == '获取验证码' ? false:true">{{rcode}}</el-button>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="signDialog = false">取 消</el-button>
            <el-button type="primary" @click="sbumitSign">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
export default {
    data: function() {
        return {
            signDialog: false,
            labelPosition: 'right',
            rcode: '获取验证码',
            signForm: {
                tel: '',
                reg: '',
                vcode: '',
            },
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }
                    ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                    ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    localStorage.setItem('ms_username', this.ruleForm.username);
                    this.$router.push('/');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        sign() {
            this.signDialog = true
        },
        sbumitSign() {
            if (this.signForm.tel == '') {
                this.$message.error("请输入手机号")
            } else if (this.signForm.reg == '') {
                this.$message.error("请输入验证码")
            } else if (this.signForm.vcode == '') {
                this.$message.error("请输入短信验证码")
            } else {
                this.$message.error("链接接口")
            }
        },
        getCode() {
            const Regs = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[59]|15[0-9]|16[56]|17[0-9]|18[0-9]|19[89])\d{8}$/;
            if (Regs.test(this.tel)) {
                const str = '重发 ';
                let s = 10
                this.rcode = '重发 10s'
                const t = setInterval(() => {
                    if (s > 1) {
                        s--
                        this.rcode = str + s + 's'
                    } else {
                        clearInterval(t);
                        this.rcode = '获取验证码'
                    }
                }, 1000)
            } else {
                this.$message.error("请检查手机号是否正确")
            }
        }
    }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/login-bg.jpg);
    background-size: 100%;
}

.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.ms-content {
    padding: 30px 30px;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}

.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
