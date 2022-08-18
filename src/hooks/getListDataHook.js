import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

export function getListData(type) {
  store.dispatch(`home/getItemData`, type) //获取store数据
  const itemData = computed(() => store.state.home[type + 'Data'])
  return itemData
}
