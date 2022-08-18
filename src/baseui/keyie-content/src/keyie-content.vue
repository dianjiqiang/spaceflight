<template>
  <div
    ref="contentRef"
    class="keyie-content"
    :class="{
      onceLocation: contentData.number === 1,
      secondLocation: contentData.number === 2,
      thirdLocation: contentData.number === 3,
      fourthLocation: contentData.number === 4
    }"
  >
    <h3 class="item-title">{{ contentData.title }}</h3>
    <div class="content">{{ contentData.data }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  contentData: {
    type: Object,
    default() {
      return {}
    }
  },
  thisIndex: {
    type: Number,
    default: 0
  }
})
//加载动画
const contentRef = ref(null)
setTimeout(() => {
  switch (props.contentData.number) {
    case 1:
      contentRef.value.style.left = '230px'
      break
    case 2:
      contentRef.value.style.left = '230px'
      break
    case 3:
      contentRef.value.style.right = '230px'
      break
    case 4:
      contentRef.value.style.right = '230px'
      break
  }
}, props.contentData.timeOut)

watch(
  () => props.thisIndex,
  () => {
    setTimeout(() => {
      switch (props.contentData.number) {
        case 1:
          contentRef.value.style.left = '-30vw'
          break
        case 2:
          contentRef.value.style.left = '-30vw'
          break
        case 3:
          contentRef.value.style.right = '-30vw'
          break
        case 4:
          contentRef.value.style.right = '-30vw'
          break
      }
    }, props.contentData.exitTimeOut)
  }
)
</script>

<style lang="less" scoped>
.keyie-content {
  position: absolute;
  display: inline-block;
  padding: 32px 50px;
  width: 30vw;
  min-height: 15vw;
  border-radius: 10px;
  box-sizing: border-box;
  background: url(../../../assets/img/text-border.png) no-repeat top center;
  background-size: 30vw 15vw;
  transition: all 500ms;
  .item-title {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 42px;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #26c5fd, #3da2fe);
  }
  .content {
    text-indent: 2em;
    font-size: 0.3vw;
    line-height: 26px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp: 6; //显示的行
  }
}
.onceLocation {
  left: -30vw;
  top: 14vh;
}
.secondLocation {
  left: -30vw;
  bottom: 10vh;
}
.thirdLocation {
  right: -30vw;
  top: 14vh;
}
.fourthLocation {
  right: -30vw;
  bottom: 10vh;
}
</style>
