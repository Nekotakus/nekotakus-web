<template>
  <div>
    <va-button v-for="item in seriesData.seasons" :to="'/season/'+item.asid">{{ item.title1 }}</va-button>
  </div>
</template>

<script setup>
import api from '@/api'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

let seriesData = reactive({})

let avid = useRoute().params.avid
api.getSeries(avid).then(res=>{
  Object.assign(seriesData, res.data)
  console.log(seriesData);
})
</script>

<style lang="scss" scoped>

</style>