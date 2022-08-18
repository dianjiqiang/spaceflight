<template>
  <div class="title-img">
    <img
      ref="titleRef"
      class="animate__animated title"
      src="../../../assets/img/title-img.png"
      alt=""
    />
    <img
      ref="startRef"
      class="start animate__animated"
      src="../../../assets/img/start.png"
      alt=""
      @click="start"
    />
    <div ref="textRef" class="start-text animate__animated"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

import emitter from '../../../utils/eventbus'

const props = defineProps({
  thisIndex: {
    type: Number,
    default: 0
  }
})

const titleRef = ref(null)
const startRef = ref(null)
const textRef = ref(null)
const text = '点击启航，开启此次旅行吧！'
let thisText = ''
onMounted(() => {
  setTimeout(() => {
    titleRef.value.style.display = 'block'
    titleRef.value.classList.add('animate__fadeInDown')
  }, 500)
  setTimeout(() => {
    startRef.value.style.display = 'block'
    startRef.value.classList.add('animate__zoomIn')
    startRef.value.addEventListener('animationend', () => {
      textRef.value.style.display = 'block'
      const addText = () => {
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            thisText += text[i]
            textRef.value.innerText = thisText
          }, 100 * i)
        }
      }
      addText()
    })
  }, 2000)
})

//路由退出
const start = () => {
  emitter.emit('start')
}

// 退出动画
watch(
  () => props.thisIndex,
  () => {
    titleRef.value.classList.remove('animate__fadeInDown')
    titleRef.value.classList.add('animate__fadeOutUp')
    setTimeout(() => {
      startRef.value.classList.remove('animate__zoomIn')
      startRef.value.classList.add('animate__flipOutX')
    }, 200)
    setTimeout(() => {
      textRef.value.classList.add('animate__fadeOut')
    }, 400)
  }
)
</script>

<style lang="less" scoped>
.Pcenter {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.title-img {
  width: auto;
  height: 500px;
  .title {
    .Pcenter();
    top: -6%;
    display: none;
    width: 900px;
    height: 500px;
  }
  .start {
    .Pcenter();

    display: none;

    bottom: 20%;
    width: 200px;
    height: 200px;
  }
  .start-text {
    .Pcenter();
    display: none;
    font-size: 23px;
    bottom: 17%;
    text-align: center;

    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #d5a932, #c26232);
    font-weight: 700;
  }
}
</style>
