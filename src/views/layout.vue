<template>
  <n-layout-header style="height: 64px; padding: 24px" bordered>
  Nekotakus
  </n-layout-header>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <div><router-view class="view"></router-view></div>
      </n-layout>
    </n-layout>
  </n-space>
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