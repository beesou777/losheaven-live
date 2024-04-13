<template>
  <Body class="antialiased duration-300 transition-colors text-gray-800 bg-white">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<script setup lang="ts">
const bodyClass = ref('');

onMounted(() => {
  bodyClass.value = 'hydrated';
});

usePageTitle();
</script>
