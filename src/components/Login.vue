<template>
    <div class="wrap">
        <div class="box">
            <div class="icon">
                <img src="../assets/logo.png" alt="" srcset="">
            </div>
            <el-form class="form" :model="form_data" :rules="rules" ref="ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="form_data.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form_data.password" placeholder="密码" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <div class="btn">
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button @click="onReset">重置</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form_data:{
                username:"admin",
                password:"123456",
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请选择密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
      onSubmit() {
        //   console.log('submit!');
          this.$refs.ruleForm.validate(async boolean=>{
            console.log(boolean);
            if(boolean) {
                // var str = this.$http.post('login',{'username':"admin",'password':"123456"});
                var {data : res} = await this.$http.post('login',this.form_data);
                console.log(res);
                if(res.meta.status!="200") return this.$message('登录失败');
                this.$message({message:'登录成功',type: 'success'});
                window.sessionStorage.setItem("token",res.data.token);
                this.$router.push("/home");
            }
          });
      },
      onReset() {
          this.$refs.ruleForm.resetFields();
      }
    }
};
</script>

<style lang="less" scoped>
.wrap{
    height: 100%;
    background: #2b4b6b;
    position: relative;
}
.box{
    width:400px;
    height:300px;
    background:#fff;
    border-radius: 10px;
    position: absolute;
    margin:auto;
    top:0;
    right:0;
    bottom:0;
    left:0;
    text-align: center;
    padding:0 20px;
    .icon{
        margin:-40px 0 40px;
    }
    .form {
        .btn{
            display: flex;
            justify-content: flex-end;
        }
        .el-input{
            margin-bottom:20px;
        }
    }
}
.icon{
    width:80px;
    height:80px;
    display: inline-block;
    border:1px solid #cecece;
    padding:10px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #fff;
}
.icon img{
    width: 100%;
    border-radius: 50%;
    background: #cecece;
}
.box .form .el-input[data-v-ef68022e] {
    margin-bottom: 0px;
}
</style>
