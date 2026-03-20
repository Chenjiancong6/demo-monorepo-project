<script setup>
import { isFunction } from "@packages/utils";
import { Title } from "@packages/components";
import { count } from "@packages/store";
import { setChunk } from "@packages/utils";

defineProps({
  msg: {
    type: String,
    required: true
  }
});

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <el-button type="primary">我是 ElButton 按钮</el-button>
    <ChButton type="primary">我是 ChButton 按钮</ChButton>
    <div>是不是函数：{{ isFunction({}) }}</div>
    <div>ff当前计数：{{ count }}</div>
    <div>分块数组：{{ setChunk(arr, 3) }}</div>
    <Title />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
