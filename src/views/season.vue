<template>
  <div>
    {{ seasonData.title1 }}
    <br>
    {{ seasonData.title2 }}
    <br>
    {{ seasonData.title3 }}
    <n-space>
      <router-link v-for="item in seasonData.episodes" :to="'/episode/' + item.aeid">
        <n-button strong secondary round type="primary">
          {{ item.episode_name }}
        </n-button>
      </router-link>
    </n-space>
  </div>
</template>

<script setup>
import api from '@/api'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import { NSpace, NButton } from 'naive-ui'

// 获取当前的id
let asid = useRoute().params.asid

let seasonData = reactive({})

api.getSeason(asid).then(res => {
  Object.assign(seasonData, res.data)
  console.log(seasonData);
})


</script>

<style lang="less" scoped></style>