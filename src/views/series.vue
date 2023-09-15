<template>
  <div class="w-10/12 mx-auto mt-4">
    <div class="flx justify-between gap-4 items-start">
      <VideoPlayer class="w-9/12" :episode="episodeData"></VideoPlayer>
      <EpisodeCard :series="seriesData" :season="seasonData" class="grow w-3/12"></EpisodeCard>
    </div>

    <!-- <h4>IDs</h4>
    <p>{{ IDs }}</p>
    <h4>seriesData</h4>
    <p>{{ seriesData }}</p>
    <h4>seasonData</h4>
    <p>{{ seasonData }}</p>
    <h4>episodeData</h4>
    <p>{{ episodeData }}</p> -->
  </div>
</template>

<script setup>
import api from '@/api'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

// 声明组件
import VideoPlayer from '@/components/VideoPlayer.vue'
import EpisodeCard from '@/components/EpisodeCard.vue'

// 声明数据变量
let IDs = reactive({})
let seriesData = reactive({})
let seasonData = reactive({})
let episodeData = reactive({})

// 设定avid
let params = useRoute().params
let query = useRoute().query
IDs.avid = params.avid

// 获取数据
api.getSeries(IDs.avid).then(res => {
  Object.assign(seriesData, res.data)
  console.log(seriesData);
  IDs.asid = seriesData.seasons['s' in query ? query.s : 0].asid
  api.getSeason(IDs.asid).then(res => {
    Object.assign(seasonData, res.data)
    console.log(seasonData);
    IDs.aeid = seasonData.episodes['e' in query ? query.e : 0].aeid
    api.getEpisode(IDs.aeid).then(res=>{
      Object.assign(episodeData, res.data)
      console.log(episodeData)
    })
  })
})
</script>

<style lang="scss" scoped></style>