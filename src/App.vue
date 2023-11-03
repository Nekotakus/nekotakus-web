<template>
  <div class="full-box">
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>

<script setup>
import { NConfigProvider } from 'naive-ui'

import { setCssVar } from 'quasar'

setCssVar('primary', '#F99')

const themeOverrides = {
  common: {
      primaryColor: '#FF9999',
      primaryColorHover: '#FFCCCC'
    },
}
</script>

<style lang="less" scoped>
.full-box{
  max-height: 100vh;
}
</style>