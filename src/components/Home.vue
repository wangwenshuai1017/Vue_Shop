<template>
    <div>
        首页
        <el-button type="info" v-on:click="loginout">退出</el-button>
    </div>    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loginout(){
            window.sessionStorage.clear();
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="less" scoped>

</style>

