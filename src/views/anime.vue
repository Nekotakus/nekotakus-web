<template>
  <div class="card-list flx flex-wrap">
    <!-- <va-card v-for="item in SeriesListData" class="overflow-hidden" :to="'/series/' + item.avid" outlined>
      <va-image :src="item.seasons.slice(-1)[0].img_url"></va-image>
      <div class="card-content">
        <va-chip size="small">
          系列
        </va-chip>
        {{ item.name }}
      </div>
    </va-card> -->
    <q-card v-for="item in SeriesListData">
      <img :src="item.seasons.slice(-1)[0].img_url" alt="cover">
      <q-card-section>
        <p class="title text-weight-bolder text-base h-12 m-0">{{ item.name }}</p>
        <p class="text-body2 text-grey">系列</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import api from '@/api'
import { reactive } from 'vue'
import { NCard, NButton, NSpace } from 'naive-ui'


// 获取数据: 全部动画列表
let SeriesListData = reactive([])
api.getSeriesList().then(res => {
  SeriesListData.push(...res.data)
  console.log(SeriesListData);
})
</script>

<style lang="less" scoped>
.q-card {
  width: 210px;
  height: 392px;

  img {
    height: 300px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
}

.va-card {
  width: 210px;
  height: 380px;

  .va-image {
    height: 300px;
  }

  .card-content {
    height: 70px;
    vertical-align: middle;
    padding: 6px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.card-list {
  padding: 20px 0;
  justify-content: space-around;
  row-gap: 20px;
}</style>