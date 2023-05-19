<template>
  <h4>Local</h4>
  <button @click="local.clickMeP">+</button>
  <button @click="local.clickMeM">-</button>
  <span>{{ local.count }}</span>
  <hr/>
  <br/>
  <h4>Global</h4>
  <button @click="global.clickMeP">+</button>
  <button @click="global.clickMeM">-</button>
  <span>{{ global.count }}</span>
  <hr/>
  <br/>
</template>
<script setup lang="ts">
import st from './XStore'
const local= st.localStore()
const global= st.globalStore()
</script>