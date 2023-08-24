<template>
  <div>
    {{ episodeData.episode_name }}
    <!-- {{ episodeData.url }} -->
    <!-- <videoPlay v-bind="Option"></videoPlay> -->
    <video :src="episodeData.url"></video>
  </div>
</template>

<script setup>
import api from '@/api'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

// import 'vue3-video-play/dist/style.css'
// import { videoPlay } from 'vue3-video-play'

let aeid = useRoute().params.aeid

let episodeData = reactive({})
api.getEpisode(aeid).then(res => {
  Object.assign(episodeData, res.data)
})

// let Option = {
//   src: episodeData.url
// }
</script>

<style lang="less" scoped></style>