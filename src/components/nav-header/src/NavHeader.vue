<template>
  <div class="nav-header">
    <el-icon>
      <Fold
        v-if="isFold"
        class="icon-size"
        style="width: 1.5em"
        @click="handleFoldClick"
      />
      <Expand v-else @click="handleFoldClick" />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './UserInfo.vue'

export default defineComponent({
  name: 'NavHeader',
  components: { UserInfo },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .el-icon {
    .icon-size {
      width: 50px;
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
