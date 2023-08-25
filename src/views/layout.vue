<template>
  <div>
    <n-menu mode="horizontal" :options="menuOptions"></n-menu>
    <router-view class="view"></router-view>
  </div>
</template>

<script setup>
import { NMenu,NIcon, useMessage } from 'naive-ui';
import { RouterLink } from 'vue-router'
import { h, ref, defineComponent } from 'vue'
import {
  PlayOutline as PlayIcon,
  HomeOutline as HomeIcon
} from "vicons/ionicons-v5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

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
    key: 'home',
    icon: renderIcon(HomeIcon)
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
    key: 'anime',
    icon: renderIcon(PlayIcon)
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