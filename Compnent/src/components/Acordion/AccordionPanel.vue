<script lang="ts" setup>
import { onUnmounted, inject } from "vue";
import useAcordion from "./useAcordion";

const key = inject("key") as number;
const use = useAcordion(key);
const panel = use.register();
function toggle() {
	use.toggle(panel.id);
}
onUnmounted(() => {
	use.unregister(panel.id);
});
</script>
<template>
	<div class="ap" v-bind="$attrs">
		<div class="ap-title" :class="{ selected: panel.visable }" @click="toggle">
			<slot name="titel" />
		</div>
		<Transition>
			<div class="ap-body" v-show="panel.visable">
				<slot />
			</div>
		</Transition>
	</div>
</template>
<style lang="scss">
// .v-enter-active,
// .v-leave-active {
// //   transition: all 1s ease;
// }
.ap {
	box-shadow: 1px 1px 2px #aaa;
	background: white;
	color: black;

	&+.ap {
		margin-top: 0.5em;
	}

	&>.ap-title {
		padding: 0.5em;
		cursor: pointer;

		&.selected {
			color: red;
		}
	}

	&>.ap-body {
		border-top: 1px solid #ccc;
		// transition:.56s ease-in-out;
	}
}
</style>
