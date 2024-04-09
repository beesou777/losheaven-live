<template>
  <div class="overflow-x-hidden w-full" v-if="!isDashboard">
    <ui-navbar />
    <main class="min-h-[100dvh]">
      <slot></slot>
    </main>
    <ui-footer />
  </div>
  <div v-else-if="!isLogin">
    <dashboard-navbar />
    <main class="bg-gray-50 min-h-[100dvh] ps-[250px] pe-[100px]">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed } from 'vue';

const router = useRouter();

const isDashboard = computed(() => {
  return router.currentRoute.value.path.startsWith('/dashboard');
});

const isLogin = computed(() => {
  return router.currentRoute.value.path.startsWith('/dashboard/login');
});
</script>
