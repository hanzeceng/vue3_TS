<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="searchFormConfig"></hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search-config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
}
</style>
