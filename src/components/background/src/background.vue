<template>
  <div class="background" ref="backgroundRef"></div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  thisIndex: {
    type: Number,
    default: 4
  }
})

const backgroundRef = ref(null)

watch(
  () => props.thisIndex,
  () => {
    switch (props.thisIndex) {
      case 4:
        backgroundRef.value.style.backgroundPosition = 'center bottom'
        break
      case 3:
        backgroundRef.value.style.backgroundPosition = 'center 75%'
        break
      case 2:
        backgroundRef.value.style.backgroundPosition = 'center 50%'
        break
      case 1:
        backgroundRef.value.style.backgroundPosition = 'center 25%'
        break
      case 0:
        backgroundRef.value.style.backgroundPosition = 'center 0%'
        break
    }
  }
)
</script>

<style lang="less" scoped>
.background {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background: url(../../../assets/img/rocket.png) no-repeat;
  opacity: 0.4;
  background-position: center bottom;
  background-size: 100vw 700vh;

  transition: background-position 1s;
}
</style>
