<template>
  <div class="pb-4">
    <va-card class="mb-3">
      <va-card-title>{{ props.episode.episode_name }}</va-card-title>
    </va-card>
    <va-card class="p-2">
      <video :src="props.episode.url" class="w-full" controls autoplay></video>
      <!-- <video :src="'//upload.wikimedia.org/wikipedia/en/transcoded/a/ad/American_Beauty_gymnasium.ogv/American_Beauty_gymnasium.ogv.240p.webm'" class="w-full" controls></video> -->
    </va-card>
  </div>
</template>

<script setup>
const props = defineProps(['episode'])

// console.log(props);
</script>

<style lang="scss" scoped>

</style>