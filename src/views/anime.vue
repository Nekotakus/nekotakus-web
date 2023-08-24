<template>
  <div>
    <n-card v-for="item in SeriesListData" hoverable :title="item.name">
      <n-space>
        <router-link v-for="item2 in item.seasons" :to="'season/' + item2.asid">
          <n-button strong secondary round type="primary">
            {{ item2.title1 }}
          </n-button>
        </router-link>
      </n-space>
    </n-card>
  </div>
</template>

<script setup>
import api from '@/api'
import { reactive } from 'vue'
import { NCard, NButton, NSpace } from 'naive-ui'
// import { useRouter } from 'vue-router'
// let {push} = useRouter()


// 获取数据: 全部动画列表
let SeriesListData = reactive([])
api.getSeriesList().then(res => {
  SeriesListData.push(...res.data)
  console.log(SeriesListData);
})
</script>

<style lang="less" scoped></style>