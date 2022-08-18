<template>
  <div class="home" ref="homeRef">
    <left-bar :thisIndex="thisIndex" :listItem="listItem" @changeItem="changeItem" />
    <div class="content">
      <background :thisIndex="thisIndex" />
      <router-view :thisIndex="beforeIndex"></router-view>
    </div>
    <!-- <div class="scroll" @scroll="scrollEvent">滚动监听条</div> -->
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import Background from '../../../components/background'
import LeftBar from '../../../components/left-bar'

import emitter from '../../../utils/eventbus'

const store = useStore()
const router = useRouter()

//leftBar逻辑
store.dispatch('home/getListItem') //获取store数据
const listItem = computed(() => store.state.home.listItem)
const thisIndex = ref(4) //记录当前点击的item的index
const beforeIndex = ref(4) //记录即将要改变的index
//用户改变item
const changeItem = (index) => {
  const type = listItem.value[index].type
  beforeIndex.value = index
  //改变路由
  setTimeout(() => {
    router.replace(`/home/${type}`)
  }, 1000)
  thisIndex.value = index
}
//父组件接收 启航
emitter.on('start', () => {
  changeItem(3)
})
//用户滚动逻辑
//主页加载动画逻辑
</script>

<style lang="less" scoped>
.home {
  .content {
    position: relative;
    width: 100%;
    height: 100vh;
    // padding-left: 200px;
    box-sizing: border-box;
  }

  .scroll {
    width: 100vw;
    height: 99vh;
    overflow: auto;
    font-size: 999px;
    color: rgba(0, 0, 0, 0);
  }
}
</style>
