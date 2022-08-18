<template>
  <div class="future-img">
    <img class="small-rocket" ref="rocketRef" src="../../../assets/img/rocket-small.png" alt="" />
    <div class="title animate__animated" ref="titleRef">
      <div class="one-title" ref="onceRef">{{ data.title1 }}</div>
      <div class="two-title" ref="twiceRef">{{ data.title2 }}</div>
      <div class="three-title" ref="thriceRef">{{ data.title3 }}</div>
    </div>
    <img
      src="../../../assets/img/meteor.png"
      alt="流星"
      class="meteor once-meteor animate__animated"
      ref="onceMeteorRef"
    />
    <img
      src="../../../assets/img/meteor.png"
      alt="流星"
      class="meteor twice-meteor animate__animated"
      ref="twiceMeteorRef"
    />
    <img
      src="../../../assets/img/meteor.png"
      alt="流星"
      class="meteor thrice-meteor animate__animated"
      ref="thriceMeteorRef"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  thisIndex: {
    type: Number,
    default: 0
  }
})

const rocketRef = ref(null)
const titleRef = ref(null)
const onceRef = ref(null)
const twiceRef = ref(null)
const thriceRef = ref(null)
let timer

const onceMeteorRef = ref(null)
const twiceMeteorRef = ref(null)
const thriceMeteorRef = ref(null)

onMounted(() => {
  setTimeout(() => {
    rocketRef.value.style.left = '120vw'
    rocketRef.value.style.bottom = '160vh'
  }, 0)
  setTimeout(() => {
    let i = 0
    let length = onceRef.value.innerText.length
    timer = setInterval(() => {
      onceRef.value.style.width = i * 30 + 'px'
      i++
    }, 20)
    setTimeout(() => {
      clearInterval(timer)
      onceRef.value.style.width = 'auto'
      length = twiceRef.value.innerText.length
      i = 0
      setTimeout(() => {
        timer = setInterval(() => {
          twiceRef.value.style.width = i * 30 + 'px'
          i++
        }, 20)
        setTimeout(() => {
          clearInterval(timer)
          twiceRef.value.style.width = 'auto'
          length = thriceRef.value.innerText.length
          i = 0
          setTimeout(() => {
            timer = setInterval(() => {
              thriceRef.value.style.width = i * 20 + 'px'
              i++
            }, 20)
            setTimeout(() => {
              clearInterval(timer)
              setTimeout(() => {
                onceMeteorRef.value.style.left = '69vw'
                onceMeteorRef.value.style.top = '69vh'
                onceMeteorRef.value.style.opacity = '0'
                setTimeout(() => {
                  twiceMeteorRef.value.style.left = '39vw'
                  twiceMeteorRef.value.style.top = '89vh'
                  twiceMeteorRef.value.style.opacity = '0'
                  setTimeout(() => {
                    thriceMeteorRef.value.style.left = '40vw'
                    thriceMeteorRef.value.style.top = '40vh'
                    thriceMeteorRef.value.style.opacity = '0'
                  }, 500)
                }, 300)
              }, 300)
            }, length * 86 + 300)
          }, 300)
        }, length * 56)
      }, 300)
    }, length * 56)
  }, 2000)
})

watch(
  () => props.thisIndex,
  () => {
    titleRef.value.classList.add('animate__fadeOut')
  }
)
</script>

<style lang="less" scoped>
.po {
  position: absolute;
  overflow: hidden;
  width: 0;
  white-space: nowrap;

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(45deg, #f2bf37, #e87239);
}
.future-img {
  // position: relative;
  // width: 100%;
  // height: 100%;

  .small-rocket {
    position: absolute;
    width: 16vw;
    left: 10vw;
    bottom: -50vh;

    transition: all 2s ease-in;
  }
  .title {
    position: relative;
    width: 100vw;
    height: 89vh;

    font-family: 'xianmo';

    .one-title {
      .po();
      left: 340px;
      top: 230px;
      font-size: 56px;
    }
    .two-title {
      .po();
      left: 460px;
      top: 360px;
      font-size: 56px;
    }
    .three-title {
      .po();
      left: 580px;
      top: 500px;
      font-size: 86px;
      font-weight: 700;
    }
  }
  .meteor {
    position: absolute;
    width: 400px;
    height: 200px;
    opacity: 0.5;
    transition: all 1500ms ease-in;
  }
  .once-meteor {
    left: -200px;
    top: -400px;
  }
  .twice-meteor {
    left: -600px;
    top: 100px;
  }
  .thrice-meteor {
    left: -300px;
    top: -300px;
  }
}
</style>
