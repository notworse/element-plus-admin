<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
  >
    <el-menu-item index="/">
      <template #title>
        <el-icon><location /></el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-sub-menu index="other">
      <template #title>
      <el-icon><icon-menu /></el-icon>
      <span>其他</span>
      </template>
      <el-menu-item index="/about">
        <template #title><span>关于</span></template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Location,
  Menu as IconMenu
} from "@element-plus/icons-vue";
import router from "@/router";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
