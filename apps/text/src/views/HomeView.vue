<script setup lang="ts">
import { Login } from '@ml-admin/components'
import { ref } from 'vue'

const name = ref('89')
</script>

<template>
  <n-input v-model:value="name" type="text" placeholder="基本的 Input" />
  我是首页
  <Login />
</template>
