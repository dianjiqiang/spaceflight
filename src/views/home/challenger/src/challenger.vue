<template>
  <div class="title">
    <keyie-title :title="contentData.titleCN" :thisIndex="thisIndex"></keyie-title>
    <div class="content">
      <keyie-echarts :contentData="contentData.data" :thisIndex="thisIndex" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import KeyieEcharts from '../../../../baseui/keyie-echarts'
import KeyieTitle from '../../../../baseui/keyie-title'
import KeyieContent from '../../../../baseui/keyie-content'

const props = defineProps({
  thisIndex: Number
})

const store = useStore()
const contentData = computed(() => store.state.home.challengerData)

//折线图案例
// 基于准备好的dom，初始化echarts实例
</script>

<style lang="less" scoped>
.content {
  position: relative;
  left: 230px;
  top: 10vh;
  box-sizing: border-box;
}
</style>
