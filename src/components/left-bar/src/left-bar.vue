<template>
  <div class="left-bar">
    <ul class="items animate__animated" ref="itemsRef">
      <li
        class="item"
        :class="{ active: index === thisIndex }"
        v-for="(item, index) of listItem"
        :key="item.title"
        @click="changeItem(index)"
      >
        <a href="javascript:;">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  listItem: {
    type: Array,
    default() {
      return []
    }
  },
  thisIndex: {
    type: Number,
    default: 4
  }
})
const emit = defineEmits(['changeItem'])

const itemsRef = ref(null)

setTimeout(() => {
  itemsRef.value.classList.add('animate__fadeIn')
  itemsRef.value.style.display = 'flex'
}, 1500)

const changeItem = (index) => {
  if (props.thisIndex === index) {
    return
  }
  emit('changeItem', index)
}
</script>

<style lang="less" scoped>
.left-bar {
  position: fixed;
  z-index: 9;
  height: 100vh;
  width: 200px;
  .items {
    position: relative;
    left: 60px;
    width: 140px;
    height: 65vh;
    top: 50%;
    transform: translateY(-50%);

    display: none;
    flex-direction: column;

    .item {
      flex: 1;
      a {
        color: #d8d8d8;
        padding-left: 10px;
        font-size: 17px;
        font-weight: 700;
        border-left: rgba(0, 0, 0, 0) 3px solid;
        transition: margin 200ms linear;
      }
    }
    .item:hover a {
      // border-left: 3px solid #22bbff;
      margin-left: 20px;
      color: #22bbff;
    }
    .item.active a {
      display: inline;
      padding-left: 10px;
      margin-left: 20px;
      border-left: 3px solid #22bbff;
      color: #22bbff;
    }
  }
}
li {
  color: red;
}
</style>
