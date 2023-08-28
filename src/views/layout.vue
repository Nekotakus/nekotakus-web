<template>
  <div class="overflow-hidden flx flex-col h-100vh h-80">
    <va-navbar class="flex-none">
      <template #left>
        <va-navbar-item class="flx items-center">
          <router-link to="/" class="flx items-center mr-6">
            <img width=50 src="/img/logo/nekotakus_icon_512.png"/>
            <span>Nekotakus</span>
          </router-link>
          <va-chip color="warning" size="small">Alpha 1.0 Canary</va-chip>
        </va-navbar-item>
      </template>
      <template #right>
        <va-input class="mr-8">
          <template #appendInner>
            <va-icon color="primary" name="search" />
          </template>
        </va-input>
        <va-button class="mr-8" @click="handleLoginBoxDisplay">登录</va-button>
        <va-button @click="handleRegisterBoxDisplay">注册</va-button>
      </template>
    </va-navbar>
    <router-view class="h-1"></router-view>
    <va-modal v-model="loginBoxDisplay" close-button hide-default-actions blur>
      <va-form class="flx flex-col mt-8 gap-2" ref="loginRef">
        <va-input placeholder="用户名" v-model="loginForm.username" :rules="[v=>Boolean(v) || '请输入用户名']">
          <template #prependInner>
            <va-icon name="person"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="密码" v-model="loginForm.password" :rules="[v=>Boolean(v) || '请输入密码']">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-button @click="handleLogin" :loading="submitLoading">登录</va-button>
      </va-form>
    </va-modal>
    <va-modal v-model="registerBoxDisplay" close-button hide-default-actions blur>
      <va-form class="flx flex-col mt-8 gap-2 w-300" ref="registerRef">
        <va-input auto-size placeholder="用户名" v-model="registerForm.username" :rules="[v=> /[A-Za-z][\w\u4e00-\u9fa5]{3,19}/.test(v) || '用户名是以字母开头, 由字母数字下划线汉字组成的4-20位字符']">
          <template #prependInner>
            <va-icon name="person"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="邮箱" v-model="registerForm.email" :rules="[v=>/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(v) || '邮箱格式错误']">
          <template #prependInner>
            <va-icon name="mail"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="密码" v-model="registerForm.password" :rules="[v=>Boolean(v) || '密码不能为空']">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="重复密码" v-model="registerForm.confirmPassword" :rules="[v=>registerForm.password==v || '密码不一致, 请检查输入']">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-button @click="handleRegister" :loading="submitLoading">注册</va-button>
      </va-form>
    </va-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useColors } from 'vuestic-ui/web-components';
import { useForm } from 'vuestic-ui';
import api from '@/api'

// 登录/注册模态框
let loginBoxDisplay = ref(false)
let registerBoxDisplay = ref(false)
let handleLoginBoxDisplay = () => loginBoxDisplay.value = !loginBoxDisplay.value
let handleRegisterBoxDisplay = () => registerBoxDisplay.value = !registerBoxDisplay.value
// 登录/注册按钮加载
let submitLoading = ref(false)

// 注册表单
let registerForm = reactive({
  username: 'a111',
  email: '1@1.1',
  password: '123',
  confirmPassword: '123'
})

// 登录表单
let loginForm = reactive({
  username: '',
  password: ''
})

// 注册方法
const registerValid = useForm('registerRef').validate
let handleRegister = ()=>{
  if(registerValid()){
    submitLoading.value = true
    api.register(registerForm.username, registerForm.password, registerForm.email).then(res=>{
      console.log(res.data);
    })
  }
}

// 登录方法
const loginValid = useForm('loginRef').validate
let handleLogin = ()=>{
  if(loginValid()){
    submitLoading.value = true
    api.login(loginForm.username, loginForm.password).then(res=>{
      console.log(res.data);
    })
  }
}

</script>

<style lang="less" scoped>
.view {
  width: 100%;
}

.va-form{
  width: 300px;
}
</style>