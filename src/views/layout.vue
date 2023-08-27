<template>
  <div class="overflow-hidden flx flex-col h-100vh h-80">
    <va-navbar class="flex-none">
      <template #left>
        <va-navbar-item>
          <router-link to="/">
            Nekotakus
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
      <va-form class="flx flex-col mt-8 gap-2">
        <va-input placeholder="用户名">
          <template #prependInner>
            <va-icon name="person"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="密码">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-button>登录</va-button>
      </va-form>
    </va-modal>
    <va-modal v-model="registerBoxDisplay" close-button hide-default-actions blur>
      <va-form class="flx flex-col mt-8 gap-2">
        <va-input auto-size placeholder="用户名" v-model="registerForm.username">
          <template #prependInner>
            <va-icon name="person"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="邮箱" v-model="registerForm.email">
          <template #prependInner>
            <va-icon name="mail"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="密码" v-model="registerForm.password">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-input placeholder="重复密码" v-model="registerForm.confirmPassword">
          <template #prependInner>
            <va-icon name="lock"></va-icon>
          </template>
        </va-input>
        <va-button @click="handleRegister">注册</va-button>
      </va-form>
    </va-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useColors } from 'vuestic-ui/web-components';

// 登录/注册模态框功能
let loginBoxDisplay = ref(false)
let registerBoxDisplay = ref(false)
let handleLoginBoxDisplay = () => loginBoxDisplay.value = !loginBoxDisplay.value
let handleRegisterBoxDisplay = () => registerBoxDisplay.value = !registerBoxDisplay.value

// 注册表单
let registerForm = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// 注册方法
let handleRegister = ()=>{
  console.log(registerForm);
}

</script>

<style lang="less" scoped>
.view {
  width: 100%;
}
</style>