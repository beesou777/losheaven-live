<template>
  <div class="py-[27px]">
    <div class="flex justify-between items-center relative">
      <p class="text-[24px]">Dashboard</p>
    </div>

    <!-- feature card  -->
    <DashboardFeatureCard
      title="Total Profit"
      title2="Total Sales"
      title3="Total Product"
      price="NRS 15050"
      price2="150"
      price3="100"
      :loading="false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'nuxt/app';

// usem
// data
useHead({
  title: 'LosHeaven Dashboard',
});
</script>
