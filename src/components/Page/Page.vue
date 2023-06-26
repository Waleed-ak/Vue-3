<script lang="ts" setup>
</script>
<template>
  <div class="conBody conRows">
    <header class="conElement">
      <slot name="header" />
    </header>
    <div class="conBody conCols">
      <nav class="conElement">
        <button class="btn">'+'</button>
        <slot name="nav" />
      </nav>
      <main class="conBody conElement">
        <slot name="content" />
      </main>
    </div>
    <footer class="conElement">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss">
@use "../../Style/style"
</style>