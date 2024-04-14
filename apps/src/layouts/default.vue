<template>
  <div class="w-full">
    <ui-navbar />
    <main class="min-h-[100dvh] bg-[#FFF]">
      <slot></slot>
    </main>
    <ui-footer />
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
