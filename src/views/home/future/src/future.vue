<template>
  <div class="future">
    <div class="content">
      <future-img :data="contentData.data" :thisIndex="thisIndex"></future-img>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import FutureImg from '../../../../components/future-img'

const props = defineProps({
  thisIndex: Number
})

const store = useStore()
const contentData = computed(() => store.state.home.futureData)
</script>

<style lang="less" scoped></style>
