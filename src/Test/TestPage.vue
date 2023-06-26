<script lang="ts" setup>
import '../Style/style.scss'
import { Page } from '../components/Page';
</script>
<template>
	<Page>
		<template #header>..Header</template>
		<template #footer>..footer</template>
		<template #content>
			<AccordionTest />
		</template>
	</Page>
</template>


<style lang="scss">
</style>