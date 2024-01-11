<script lang="ts" setup>
import { ref } from 'vue'
import { NInput } from 'naive-ui'

defineOptions({
  name: 'Login',
})
const name = ref('12')
const password = ref('12')
</script>

<template>
  <NInput v-model:value="name" type="text" placeholder="基本的 Input" /><br>
  <NInput v-model:value="password" type="password" placeholder="基本的 Input" />
</template>
