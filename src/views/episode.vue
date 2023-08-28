<template>
  <div>
    {{ episodeData.episode_name }}
    <!-- {{ episodeData.url }} -->
    <!-- <videoPlay v-bind="Option"></videoPlay> -->
    <video :src="episodeData.url" controls></video>
  </div>
</template>

<script setup>
// 引入对象
import api from '@/api'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

// 引入视频播放器小帅
import 'vue3-video-play/dist/style.css'
import { videoPlay } from 'vue3-video-play'

// 通过url获取并设置变量aeid
let aeid = useRoute().params.aeid

// 设置响应式变量episodeData
let episodeData = reactive({})
// api获取到视频信息, 赋值给episodeData
api.getEpisode(aeid).then(res => {
  Object.assign(episodeData, res.data)
  // 如果要写原生代码, 不能用响应式变量, 今晚在这里获取到链接后写东西
})

// 视频播放器小帅的配置
let Option = {
  src: episodeData.url
}
</script>

<style lang="less" scoped>
video{
  width: 50%;
}
</style>