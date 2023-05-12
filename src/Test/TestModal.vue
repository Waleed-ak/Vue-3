<template>
  <div>
    <button @click="Show">Show Model</button>
    <button @click="ShowError">Show Error</button>
  </div>
  <Modal v-model="showIf" @close="close">
    <template #header>Header </template>
    <template #body>Body </template>
    <template #footer>Footer </template>
  </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Modal ,useError} from '../components/Modal'
const showIf = ref(false);
const counter = ref(0);
const {Display:errDisplay}=useError()

function Show(): void {
  showIf.value = true
}
function ShowError(): void {
  counter.value++;
  errDisplay(`<h2>This is my Error ${counter.value}</h2>`)
}

function close(): void {
  console.log(showIf.value);
}
</script>

<style lang="scss">

</style>