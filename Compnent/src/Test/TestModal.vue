<template>
  <div>
    <button @click="Show">Show Model</button>
  </div>
  <Modal v-model="showIf" @close="close">
    <template #header>Header </template>
    <template #body>Body </template>
    <template #footer>Footer </template>
  </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Modal } from '../components/Modal'
const showIf = ref(false);
function Show(): void {
  showIf.value = true
}
function close(): void {
  console.log(showIf.value);
}
</script>

<style lang="scss">

</style>