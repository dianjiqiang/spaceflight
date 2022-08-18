<template>
  <div ref="titleRef" class="keyie-title">
    <h1>{{ title }} <span class="iconfont icons">&#xe650;</span></h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '但时间不会让你永远的停泊'
  },
  animateTimeOut: {
    type: Number,
    default: 2000
  },
  titleExit: {
    type: Boolean,
    default: false
  },
  thisIndex: {
    type: Number,
    default: 0
  }
})
const titleRef = ref(null)
setTimeout(() => {
  titleRef.value.style.marginTop = '10px'
}, props.animateTimeOut)
//退出逻辑
watch(
  () => props.thisIndex,
  () => {
    setTimeout(() => {
      titleRef.value.style.marginTop = '-10vh'
    }, 700)
  }
)
</script>

<style lang="less" scoped>
.keyie-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 700;

  margin-top: -10vh;

  width: 30vw;
  height: 10vh;
  text-align: center;
  // background: url('../../../assets/img/bg-title.png') center center no-repeat;
  // background-size: 20vw 10vh;
  // #f2bf37

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(45deg, #f2bf37, #e87239);

  transition: all 500ms;

  h1 {
    font-size: 20px;
    line-height: 10vh;
    .icons {
      position: absolute;
      left: 50%;
      transform: translateX(60px) translateY(-10px);

      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(45deg, #26c5fd, #3da2fe);
    }
  }
}
</style>
