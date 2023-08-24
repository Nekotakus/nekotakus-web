<template>
  <div>
    <n-menu mode="horizontal" :options="menuOptions"></n-menu>
    <router-view class="view"></router-view>
  </div>
</template>

<script setup>
import { NMenu } from 'naive-ui';
import { RouterLink } from 'vue-router'
import { h } from 'vue'

const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: '/'
      },
      {
        default: ()=>'首页'
      }
    ),
    key: 'home'
  },
  {
    label: () => h(
      RouterLink,
      {
        to: '/anime'
      },
      {
        default: ()=>'全部动画'
      }
    ),
    key: 'anime'
  }
]
</script>

<style lang="less" scoped>
.n-menu {
  width: 100%;
}

.view {
  height: 3000px;
  width: 100%;
  // background: #6666;
}
</style>