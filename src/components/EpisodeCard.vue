<template>
  <va-card class="pb-4">
    <va-divider orientation="left" class="mt-4">
      <span class="px-2">季度列表</span>
    </va-divider>
    {{ window }}
    <va-card-title>
      <span>{{ props.series.name }}</span>
    </va-card-title>
    <div class="flx gap-2 mx-3">
      <va-button v-for="item, index in props.series.seasons" >{{ item.title1 }}</va-button>
    </div>
    <va-divider orientation="left" class="mt-4">
      <span class="px-2">集数列表</span>
    </va-divider>
    <va-card-title>{{ props.season.title1 }}</va-card-title>
    <div class="flx gap-2 mx-3 flex-wrap">
      <va-button v-for="item in props.season.episodes">{{ item.episode_name
      }}</va-button>
    </div>
  </va-card>
</template>

<script setup>
const props = defineProps(['season', 'series'])

</script>

<style lang="scss" scoped></style>