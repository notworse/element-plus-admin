<template>
  <AppMain />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMain from './components/AppMain.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppMain
  }
});
</script>

<style>
body, html, #app {
  margin: 0;
  height: 100%;
}
</style>
