<template>
  <!-- <va-sidebar>
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
  </va-sidebar> -->
  <q-drawer v-model="drawer" width="150" bordered>
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
    <router-view class="overflow-scroll flex-1"></router-view>
  </q-page-container>
</template>

<script setup>
import { useRoute } from 'vue-router'

let pathMatched = path => useRoute().path == path

let drawer = false

</script>

<style lang="scss" scoped></style>