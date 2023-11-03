<template>
  <div class="overflow-hidden flx flex-col h-100vh h-80">
    <q-layout view="hHh Lpr fFf"  class="overflow-scroll">
      <!-- Header -->
      <q-header>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="mr-2" @click="handleDrawer(drawer)" />
          <q-avatar>
            <img src="/img/logo/nekotakus_icon_512.png" />
          </q-avatar>
          <q-toolbar-title class="gt-md">
            <span class="mr-2">Nekotakus</span>
            <q-badge color="white" text-color="primary">Alpha 2.0 Canary</q-badge>
          </q-toolbar-title>
          <q-input dark dense standout input-class="text-right" class="mr-4 ml-4">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <!-- 未登录显示 -->
          <template v-if="isLogin">
            <q-btn flat round dense icon="login" class="mr-4" @click="handleLoginBoxDisplay" />
            <q-btn flat round dense icon="person_add" class="" @click="handleRegisterBoxDisplay" />
          </template>
          <!-- 登录显示 -->
          <q-btn v-else flat round dense icon="logout" class="" @click="handelLogout" />
        </q-toolbar>
      </q-header>
      <!-- 侧边栏 -->
      <q-drawer v-model="drawer" :width="150" :breakpoint="600" show-if-above bordered>
        <q-list>
          <q-item to="/">
            <q-item-section avatar>
              <q-icon name="home"></q-icon>
            </q-item-section>
            <q-item-section>首页</q-item-section>
          </q-item>
          <q-item to="/anime">
            <q-item-section avatar>
              <q-icon name="play_arrow"></q-icon>
            </q-item-section>
            <q-item-section>动画</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
      <q-page-container>
            <router-view></router-view>
      </q-page-container>
    </q-layout>
    <!-- 顶部导航栏 -->
    <!-- <va-navbar class="flex-none">
      <template #right>
        <va-input class="mr-8">
          <template #appendInner>
            <va-icon color="primary" name="search" />
          </template>
        </va-input>
        <template v-if="isLogin">
          <va-button class="mr-8" @click="handleLoginBoxDisplay">登录</va-button>
          <va-button @click="handleRegisterBoxDisplay">注册</va-button>
        </template>
        <va-button v-else @click="handelLogout">退出登录</va-button>
      </template>
    </va-navbar> -->
    <!-- 路由内容显示 -->
    <!-- <router-view class="h-1"></router-view> -->
    <!-- 登录模态框 -->
    <va-modal v-model="loginBoxDisplay" close-button hide-default-actions blur>
      <va-form class="flx flex-col mt-8 gap-2" ref="loginRef">
        <va-input placeholder="用户名" v-model="loginForm.username" :rules="[v => Boolean(v) || '请输入用户名']">
          <template #prependInner>
            <va-icon name="person"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="密码" v-model="loginForm.password" :rules="[v => Boolean(v) || '请输入密码']">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-button @click="handleLogin" :loading="submitLoading">登录</va-button>
      </va-form>
    </va-modal>
    <!-- 注册模态框 -->
    <va-modal v-model="registerBoxDisplay" close-button hide-default-actions blur>
      <va-form class="flx flex-col mt-8 gap-2 w-300" ref="registerRef">
        <va-input auto-size placeholder="用户名" v-model="registerForm.username"
          :rules="[v => /[A-Za-z][\w\u4e00-\u9fa5]{3,19}/.test(v) || '用户名是以字母开头, 由字母数字下划线汉字组成的4-20位字符']">
          <template #prependInner>
            <va-icon name="person"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="邮箱" v-model="registerForm.email"
          :rules="[v => /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(v) || '邮箱格式错误']">
          <template #prependInner>
            <va-icon name="mail"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="密码" v-model="registerForm.password" :rules="[v => Boolean(v) || '密码不能为空']">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="重复密码" v-model="registerForm.confirmPassword"
          :rules="[v => registerForm.password == v || '密码不一致, 请检查输入']">
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
import { ref, reactive, computed } from 'vue'
import { useForm, useToast } from 'vuestic-ui';
import api from '@/api'
import { isLogin } from '@/scripts/globalFunctions.js'
import { QScrollArea } from 'quasar';

// 侧边栏状态
const handleDrawer = (value)=>{
  drawer.value = !value
}
let drawer = ref(false)


// 登录/注册模态框
let loginBoxDisplay = ref(false)
let registerBoxDisplay = ref(false)
let handleLoginBoxDisplay = () => loginBoxDisplay.value = !loginBoxDisplay.value
let handleRegisterBoxDisplay = () => registerBoxDisplay.value = !registerBoxDisplay.value
// 登录/注册按钮加载
let submitLoading = ref(false)

// 注册表单
let registerForm = reactive({
  username: 'cyhcyhcyh',
  email: 'cyhcyhcyh@foxmail.com',
  password: '123456',
  confirmPassword: '123456'
})

// 登录表单
let loginForm = reactive({
  username: '',
  password: ''
})

// 注册方法
const registerValid = useForm('registerRef').validate
let handleRegister = () => {
  if (registerValid()) {
    submitLoading.value = true
    api.register(registerForm.username, registerForm.password, registerForm.email).then(res => {
      if (res.status == 200) {
        useToast().init('注册成功!转到登录界面!')
        handleLoginBoxDisplay()
        handleRegisterBoxDisplay()
      }
    }).catch(res => {
      if (res.response.status == 400) {
        useToast().init('注册失败! 数据不合法!')
      } else if (res.response.status == 422) {
        useToast().init('注册失败! 账号已存在!')
      } else if (res.response.status == 500) {
        useToast().init('注册失败! 服务器异常!')
      } else {
        useToast().init('注册失败! ')
      }
    }).finally(() => {
      submitLoading.value = false
    })
  }
}

// 登录方法
const loginValid = useForm('loginRef').validate
let handleLogin = () => {
  if (loginValid()) {
    submitLoading.value = true
    api.login(loginForm.username, loginForm.password).then(res => {
      if (res.status == 200) {
        localStorage.setItem('token', res.data.token)
        useToast().init('登录成功! 即将刷新页面!')
        handleLoginBoxDisplay()
        location.reload()
      }
    }).catch(res => {
      console.log(res);
      if (res.response.status == 400) {
        useToast().init('登录失败! 数据不合法!')
      } else if (res.response.status == 401) {
        useToast().init('登录失败! 用户名或者密码错误! ')
      } else if (res.response.status == 403) {
        useToast().init('登录失败! 验证未通过! ')
      } else if (res.response.status == 500) {
        useToast().init('登录失败! 服务器异常! ')
      } else {
        useToast().init('登录失败! ')
      }
    }).finally(() => {
      submitLoading.value = false
    })
  }
}

//登出方法
const handelLogout = () => {
  localStorage.removeItem('token')
  useToast().init('退出登录! 即将刷新页面!')
  location.reload()
}
</script>

<style lang="less" scoped>
.view {
  width: 100%;
}

.va-form {
  width: 300px;
}
</style>