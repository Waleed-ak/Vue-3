<script lang="ts" setup>
import { Tabs, Tab } from "../components/Tabs";
</script>
<template>
	<Tabs>
		<Tab>
			<template #titel>Title 1</template>
			<p>this is 1</p>
			<p>this is 1</p>
			<p>this is 1</p>
			<p>this is 1</p>
			<p>this is 1</p>
		</Tab>
		<Tab>
			<template #titel> Title 2 </template>
			<p>this is 2</p>
			<p>this is 2</p>
			<p>this is 2</p>
			<p>this is 2</p>
			<p>this is 2</p>
		</Tab>
		<Tab>
			<template #titel> Title 3 </template>
			<p>this is 3</p>
			<p>this is 3</p>
			<p>this is 3</p>
			<p>this is 3</p>
			<p>this is 3</p>
		</Tab>
	</Tabs>
</template>

<style lang="scss">

</style>
