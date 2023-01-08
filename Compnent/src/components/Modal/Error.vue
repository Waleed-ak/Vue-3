<template>
   <ModalVue v-model="ShowError">
   <template #header>Error</template>
   <template #body>
    <div  v-html="Error"/>
   </template>
   </ModalVue>
</template>

<script lang="ts" setup>
import ModalVue from './Modal.vue';
import {useErrorVar} from './useError'

const {Error,ShowError} =useErrorVar();

</script>

<style lang="scss">


</style>