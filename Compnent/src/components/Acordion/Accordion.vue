<template>
	<div class="accordion" v-bind="$attrs">
		<slot></slot>
	</div>
</template>
<script lang="ts" setup>
import { onUnmounted, provide } from "vue";
import { deletePanel } from "./useAcordion";
const key = Math.random();
provide("key", key);
onUnmounted(() => {
	deletePanel(key);
});
</script>
<style lang="scss">

</style>
