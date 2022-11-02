<template>
  <div class="login-phone">
    <el-form label-width="70px" :model="account">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.number" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <div class="get-code">
          <el-input v-model="account.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      number: '',
      code: ''
    })
    return {
      account
    }
  }
})
</script>

<style scoped lang="less">
.login-phone {
  .get-code {
    display: flex;
    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
