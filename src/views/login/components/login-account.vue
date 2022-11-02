<template>
  <div class="login-account">
    <el-form label-width="70px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<FormInstance>()
    const loginAction = () => {
      console.log('account开始登陆操作～', formRef)
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('执行登陆逻辑')
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
