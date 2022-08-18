<template>
  <div class="title">
    <div class="content">
      <title-img :thisIndex="thisIndex"></title-img>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  thisIndex: Number
})

const store = useStore()
const contentData = computed(() => store.state.home.titleData)
</script>

<style lang="less" scoped></style>
