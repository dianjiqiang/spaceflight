<template>
  <div class="title">
    <keyie-title :title="contentData.titleCN" :thisIndex="thisIndex"></keyie-title>
    <div class="content">
      <template v-for="item of contentData.data" :key="item.title">
        <keyie-content :contentData="item" :thisIndex="thisIndex" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import KeyieTitle from '../../../../baseui/keyie-title'
import KeyieContent from '../../../../baseui/keyie-content'

const props = defineProps({
  thisIndex: Number
})

const store = useStore()
const contentData = computed(() => store.state.home.difficultyData)
</script>

<style lang="less" scoped></style>
