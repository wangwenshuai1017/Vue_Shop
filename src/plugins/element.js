import Vue from 'vue'
import { Input,Button,Form,FormItem,Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
// 全局vue原型对象挂载
Vue.prototype.$message = Message