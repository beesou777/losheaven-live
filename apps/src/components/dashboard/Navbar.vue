<template>
  <div class="fixed h-[100vh] top-0 left-0 w-[215px] min-w-[215px] navbar bg-white">
    <div class="text-center py-3">
      <UiLogo class="ps-[20px] pt-[23px] pb-[36px]" />
    </div>
    <ul class="main-links">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.link"
        class="flex py-4 px-3"
        :class="currentRoute === item.link ? 'active bg-yellow-500' : ''"
      >
        {{ item.name }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed, ref, onMounted } from 'vue';
const router = useRouter();

const navItems = ref([
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Orders',
    link: '/dashboard/order',
  },
  {
    name: 'Product',
    link: '/dashboard/product',
  },
  //   {
  //     name: 'Customers',
  //     link: '/dashboard/customer'
  //   }
]);
// computed properties
const currentRoute = computed(() => {
  return router.currentRoute.value.fullPath;
});

onMounted(() => {
  const cookies = useCookie('access').value;
  if (!cookies) {
    router.push({ path: '/dashboard/login' });
  }
});
</script>
