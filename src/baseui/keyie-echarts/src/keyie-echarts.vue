<template>
  <div ref="echartsRef" class="keyie-echarts animate__animated"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  contentData: {
    type: Object,
    default() {
      return {}
    }
  },
  thisIndex: Number
})

const echartsRef = ref(null)

//显示echarts图
onMounted(() => {
  const myChart = echarts.init(echartsRef.value)
  const option = {
    title: {
      text: props.contentData.title,
      textStyle: {
        color: '#d0ebf6'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.contentData.legendData
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.contentData.xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: props.contentData.seriesData
  }
  myChart.setOption(option)
})

//离开动画
watch(
  () => props.thisIndex,
  () => {
    echartsRef.value.classList.add('animate__fadeOut')
  }
)
</script>

<style lang="less" scoped>
.keyie-echarts {
  width: 80vw;
  height: 80vh;
  // background-color: rgba(255, 255, 255, 0.1);
}
</style>
