<template>
    <div class="flx grow">
      <va-sidebar>
        <va-sidebar-item to="/" :active="pathMatched('/')">
          <va-sidebar-item-content>
            <va-icon name="home" />
            <va-sidebar-item-title>首页</va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item to="/anime" :active="pathMatched('/anime')">
          <va-sidebar-item-content>
            <va-icon name="play_arrow" />
            <va-sidebar-item-title>全部动画</va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>
      <router-view class="overflow-scroll flex-1"></router-view>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

let pathMatched = path => useRoute().path == path

</script>

<style lang="scss" scoped>

</style>