<script lang="ts" setup>
import { onUnmounted, inject, reactive, onMounted } from 'vue';
import useTabs from './useTabs';

let key = inject("key") as number
let use = useTabs(key);
let tab = reactive({} as HTMLElement);
let panel = use.createPanel();
onMounted(() => {
	use.register(tab.innerHTML ?? 'Tab', panel)
}),
	onUnmounted(() => {
		use.unregister(panel)
	})
</script>
<template>
	<div class="tab">
		<span class="tab-title" ref="tab">
			<slot name="titel" />
		</span>
		<div class="tab-body" v-bind="$attrs" v-show="panel.visable">
			<slot />
		</div>
	</div>
</template>
<style lang="scss">
.tab {
	&>.tab-title {
		display: none;
	}

	&>.tab-body {
		box-shadow: 1px 1px 2px #aaa;
		width: 100%;
		height: 300px;
		overflow: auto;
	}
}
</style>