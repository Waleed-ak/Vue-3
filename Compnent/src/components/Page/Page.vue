<script lang="ts" setup>
</script>
<template>
  <div class="page">
    <header class="header">
      <slot name="header" />
    </header>
    <div class="wrapper">
      <nav class="nav">
        <button class="btn">'+'</button>
        <slot name="nav" />
      </nav>
      <main class="content">
        <slot name="content" />
      </main>
    </div>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  margin: auto;
  background-color: aqua;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  &>.header {
    background-color: red;
    min-height: 10hv;
  }

  &>.wrapper {
    background-color: green;
    flex: 1;
    display: flex;

    &>.nav {
      position: relative;
      background-color: rgb(207, 50, 181);
      flex: 1;
      padding: 2px;
      &>.btn{
        position: fixed;
        top:0;
        right: 0;
      }
    }

    &>.content {
      padding: 2px;
      flex: 5;
    }
  }

  &>.footer {
    background-color: blue;
    min-height: 10hv;
  }
}
</style>