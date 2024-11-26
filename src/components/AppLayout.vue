<!-- AppLayout.vue -->
<template>
  <!-- 侧边栏和主内容区 -->
  <el-container class="main-container">
    <!-- 侧边栏 -->
    <BaseSide />

    <!-- 主内容区 -->
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseHeader from './layouts/BaseHeader.vue';
import BaseSide from './layouts/BaseSide.vue';

export default defineComponent({
  name: 'AppLayout',
  components: {
    BaseSide
  },
  setup() {
    const route = useRoute();
    const activeMenu = computed(() => route.path);

    return {
      activeMenu
    };
  }
});
</script>

<style>
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}

</style>