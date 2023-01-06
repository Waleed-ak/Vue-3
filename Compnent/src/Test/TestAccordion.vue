<script lang="ts" setup>
import { Accordion, AccordionPanel } from "../components/Acordion";
</script>
<template>
	<Accordion>
		<AccordionPanel>
			<template #titel>
				<span>Title 1</span>
			</template>
			<p>this is 1</p>
			<p>this is 1</p>
			<p>this is 1</p>
			<p>this is 1</p>
			<p>this is 1</p>
		</AccordionPanel>
		<AccordionPanel>
			<template #titel>
				<span>Title 2</span>
			</template>
			<p>this is 2</p>
			<p>this is 2</p>
			<p>this is 2</p>
			<p>this is 2</p>
			<p>this is 2</p>
		</AccordionPanel>
		<AccordionPanel>
			<template #titel>
				<span>Title 3</span>
			</template>
			<p>this is 3</p>
			<p>this is 3</p>
			<p>this is 3</p>
			<p>this is 3</p>
			<p>this is 3</p>
		</AccordionPanel>
	</Accordion>
</template>

<style lang="scss">

</style>
