<script lang="ts" setup>
import { onMounted, onUnmounted, provide, ref } from 'vue';
import { Panel } from './types';
import useTabs, { deletePanel } from './useTabs'
const key = Math.random();
provide("key", key)
const use = useTabs(key);
let panels = use.pannels;




onMounted(() => {
    if (panels.value.length > 0) {
        use.open(panels.value[0].id)
    }
})

onUnmounted(() => {
    deletePanel(key)
})
</script>
<template >
    <div class="tabs" v-bind="$attrs">
        <ul>
            <li v-for="({ name, id, visable }) in panels" v-html="name" :key="id" :class="{ selected: visable }"
                @click="use.open(id)" />
        </ul>
        <slot />
    </div>
</template>

<style lang="scss">
//https://www.htmldog.com/techniques/tabs/
.tabs>ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    &>li {
        display: inline-block;
        border: solid;
        border-radius: 0 7px 0 0;
        border-width: 1px;
        padding: 0 5px;
        cursor: pointer;

        &.selected {
            border-width: 1px 1px 0 1px;
        }

        &.selected::before {
            content: "+ ";
            // content:"• ";
        }
    }
}
</style>