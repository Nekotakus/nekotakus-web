<template>
  <div class="overflow-hidden flx flex-col h-100vh h-80">
    <va-navbar class="flex-none">
      <template #left>
        <va-navbar-item>
          <router-link to="/">
            Nekotakus
          </router-link>
        </va-navbar-item>
      </template>
      <template #right>
        <va-input class="mr-8" label="Search">
          <template #appendInner>
            <va-icon name="search" />
          </template>
        </va-input>
        <va-button class="mr-8" @click="handleLoginBoxDisplay">登录</va-button>
        <va-button @click="handleRegisterBoxDisplay">注册</va-button>
      </template>
    </va-navbar>
    <router-view class="h-1"></router-view>
    <va-modal v-model="loginBoxDisplay" ok-text="登录">
      <va-form class="flx flex-col">
        <va-input label="username" placeholder="用户名"></va-input>
        <va-input label="password" placeholder="密码"></va-input>
      </va-form>
    </va-modal>
    <va-modal v-model="registerBoxDisplay" ok-text="注册">
      <va-form class="flx flex-col">
        <va-input label="username" placeholder="用户名"></va-input>
        <va-input label="email" placeholder="邮箱"></va-input>
        <va-input label="password" placeholder="密码"></va-input>
        <va-input label="password" placeholder="重复密码"></va-input>
      </va-form>
    </va-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let loginBoxDisplay = ref(false)
let registerBoxDisplay = ref(false)

let handleLoginBoxDisplay = () => {
  loginBoxDisplay.value = !loginBoxDisplay.value
}
let handleRegisterBoxDisplay = () => {
  registerBoxDisplay.value = !registerBoxDisplay.value
}
</script>

<style lang="less" scoped>
.view {
  width: 100%;
}
</style>